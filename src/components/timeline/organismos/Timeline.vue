<template>
  <div>
    <div>
      <PerfilTimeline
        v-if="perfilTimeline !== null"
        :nomePerfil="perfilTimeline.nome"
        :imagemPerfil="perfilTimeline.imagem"
        :iconePerfil="perfilTimeline.icone"
      />
    </div>

    <div
      v-for="evento in eventosPorTipo"
      :key="evento.key"
      class="areaTimeline"
    >
      <!-- SEPARADOR -->
      <div v-if="evento.tipo === 'dia'">
        <SeparadorPeriodo :dataSeparador="evento.valor.toDateString()" />
      </div>
      <div v-if="evento.tipo === 'evento'">
        <section class="timeline">
          <!--loop-->
          <EventoTimeline
            :status="evento.valor.status"
            :criticidade="evento.valor.criticidade"
            :previsto="evento.valor.previsto"
            :realizado="evento.valor.realizado"
            :categoria="evento.valor.categoria"
            :titulo="evento.valor.titulo"
            :subtitulo="evento.valor.subtitulo"
            :destaque="evento.valor.destaque"
            :ehAtual="evento.valor === eventoAtual"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  onMounted,
  ref,
  watchEffect,
} from "vue";
import EventoTimeline from "../moleculas/EventoTimeline.vue";
import SeparadorPeriodo from "../moleculas/SeparadorPeriodo.vue";
import PerfilTimeline from "../moleculas/PerfilTimeline.vue";
import { Evento } from "../type";

type TipoEventoTimeline =
  | { tipo: "dia"; valor: Date; key: number }
  | { tipo: "evento"; valor: Evento; key: number }
  | { tipo: "eventos"; valor: Evento[]; key: number };

// type Ordem = 'ascendente' | 'descendente';

export default defineComponent({
  props: {
    perfilTimeline: {
      required: true,
      type: Object,
    },
    eventosTimeline: {
      required: true,
      type: Object,
    },
    // ordem: {
    //   required: false,
    //   type: Ordem,
    // },
  },
  components: {
    PerfilTimeline,
    SeparadorPeriodo,
    EventoTimeline,
  },
  setup(props) {
    const dadosEventosTimeline: Evento[] = reactive(
      props.eventosTimeline as Array<Evento>
    );

    const eventosOrdenados = dadosEventosTimeline.sort(
      (a: Evento, b: Evento) => {
        return a.data.getTime() - b.data.getTime();
      }
    );

    const verifica_mesmo_dia = (a: Date, b: Date) => {
      const mesmo_dia = a.getDay() === b.getDay();
      const mesmo_mes = a.getMonth() === b.getMonth();
      const mesmo_ano = a.getFullYear() === b.getFullYear();
      return mesmo_dia && mesmo_mes && mesmo_ano;
    };

    //verifica qual evento está mais próximo da hora atual e coloca ele numa nova lista na primeira posição
    function filtraEventoAtual(eventos: Evento[], dataReferencia: Date) {
      if (eventos) {
        const referencia = dataReferencia.getTime();
        let minDiff = null;
        let listaEventos = [];
        for (const e of eventos) {
          const t = e.data.getTime();
          const diff = Math.abs(referencia - t);
          if (minDiff === null || (diff < minDiff && t <= referencia)) {
            minDiff = diff;
            listaEventos.length = 0;
          }
          //se o evento já estiver marcado como realizado, cancelado ou adiado, ele pula para o próximo da lista.
          if (e.status === "planejado" || e.status === "atrasado") {
            listaEventos.push(e);
          }
        }
        return listaEventos;
      } else {
        console.log("vazio.. ", []);
        return [];
      }
    }
    let _dataReferencia = new Date();

    setInterval(() => {
      _dataReferencia = new Date();

      console.log(_dataReferencia);
    }, 1000);

    const eventoAtual = computed(() => {
      const eventosFiltrados: Evento[] = filtraEventoAtual(
        eventosOrdenados,
        _dataReferencia
      );
      return eventosFiltrados[0] ? (eventosFiltrados[0] as Evento) : null;
    });

    //lista de eventos
    const eventosPorTipo = computed(() => {
      if (dadosEventosTimeline) {
        let result: Array<TipoEventoTimeline> = [];
        let dataAtual: Date | null = null;
        let idx = 0;
        let statusEvento;

        for (const evento of eventosOrdenados) {
          const agora = new Date();
          const dataEvento = evento.data;
          statusEvento = evento.status;
          const toleranciaEvento = evento.tolerancia * 60 * 1000;

          if (
            statusEvento === "planejado" &&
            dataEvento.getTime() + toleranciaEvento < agora.getTime()
          ) {
            evento.status = "atrasado";
          }

          if (!dataAtual || !verifica_mesmo_dia(dataAtual, dataEvento)) {
            dataAtual = dataEvento;
            result.push({
              tipo: "dia",
              valor: evento.data,
              key: ++idx,
            });
          }

          result.push({
            tipo: "evento",
            valor: evento,
            key: ++idx,
          });
        }
        return result;
      } else {
        return [];
      }
    });

    // rolagem automática a cada minuto para o evento atual
    function scrollParaItemAtual() {
      const itemAtual = document.querySelector(".atual");
      itemAtual?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    onMounted(scrollParaItemAtual);
    setInterval(scrollParaItemAtual, 5000);

    return {
      eventosPorTipo,
      eventoAtual,
    };
  },
});
</script>

<style scoped>
/* TIMELINE */

/* .areaTimeline {
  max-width: 850px;
  margin: 0 auto;
} */

.areaEvento {
  display: table-row;
  min-height: 8rem;
  position: relative !important;
  width: 100%;
}

.timeline {
  display: table;
  width: 100%;
  position: relative;
}
</style>
