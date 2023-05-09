<template>
  <div>
    <div>{{ eventosPorTipo }}</div>
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
        <div>{{ evento.valor }}</div>
        <SeparadorPeriodo :dataSeparador="evento.valor" />
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
            :ehAtual="evento.valor.atual"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, ref } from "vue";
import EventoTimeline from "../moleculas/EventoTimeline.vue";
import SeparadorPeriodo from "../moleculas/SeparadorPeriodo.vue";
import PerfilTimeline from "../moleculas/PerfilTimeline.vue";
import { Evento } from "../type";

type TipoEventoTimeline =
  | { tipo: "dia"; valor: Date; key: number }
  | { tipo: "evento"; valor: Evento; key: number }
  | { tipo: "eventos"; valor: Evento[]; key: number };

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
    let dadosEventosTimelineClone: Evento[] = reactive(dadosEventosTimeline);

    const eventosPorTipoTime = () => {
      setInterval(function () {
        dadosEventosTimelineClone = dadosEventosTimeline;

        const resultado: Evento[] = filtraEventoAtual(
          dadosEventosTimelineClone
        );
        dadosEventosTimelineClone.map((resp) => {
          if (resultado[0].id === resp.id) {
            resp.atual = true;
            resp.scroll = true;
            void scrollParaItemAtual();
          }
          return {
            evento: resp,
          };
        });
      }, 60000);
    };

    const verifica_mesmo_dia = (a: Date, b: Date) => {
      const mesmo_dia = a.getDay() === b.getDay();
      const mesmo_mes = a.getMonth() === b.getMonth();
      const mesmo_ano = a.getFullYear() === b.getFullYear();
      return mesmo_dia && mesmo_mes && mesmo_ano;
    };

    //verifica qual evento está mais próximo da hora atual e coloca ele numa nova lista na primeira posição
    const filtraEventoAtual = (eventos: Evento[]) => {
      if (eventos) {
        const agora = Date.now();
        let minDiff: number | null = null;
        let listaEventos = [];
        for (const e of eventos) {
          if (e.status === "planejado" || e.status === "atrasado") {
            const diff: number = Math.abs(agora - e.data.getTime());
            if (minDiff === null || diff < minDiff) {
              minDiff = diff;
              listaEventos.length = 0;
            } else if (diff > minDiff) {
              continue;
            }
            listaEventos.push(e);
          }
        }
        return listaEventos;
      } else {
        return [];
      }
    };
    const scrollParaItemAtual = () => {
      const itemAtual = document.querySelector(".atual");
      itemAtual?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    };

    // lista de eventos por tipos
    const eventosPorTipo = computed(() => {
      void eventosPorTipoTime();

      const eventosOrdenados = dadosEventosTimelineClone.sort(
        (a: Evento, b: Evento) => {
          return a.data.getTime() - b.data.getTime();
        }
      );
      if (eventosOrdenados) {
        let result: Array<TipoEventoTimeline> = [];
        let dataAtual: Date | null = null;
        let idx = 0;

        for (const evento of eventosOrdenados) {
          const dataEvento = evento.data;
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
    return {
      eventosPorTipo,
      dadosEventosTimelineClone,
    };
  },
  // methods: {
  //   scrollParaItemAtual() {
  //     const itemAtual = document.querySelector(".atual");
  //     itemAtual?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });
  //   },
  // },
  // mounted() {
  //   this.scrollParaItemAtual();
  //   setInterval(this.scrollParaItemAtual, 60000);
  // },
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