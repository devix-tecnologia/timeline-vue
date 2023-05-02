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
          <EventoTimeline :dadosEvento="evento" :scroll="evento.ativo" />
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from "vue";
import EventoTimeline from "../moleculas/EventoTimeline.vue";
import SeparadorPeriodo from "../moleculas/SeparadorPeriodo.vue";
import PerfilTimeline from "../moleculas/PerfilTimeline.vue";
import { Evento } from "../type";

type TipoEventoTimeline =
  | { tipo: "dia"; valor: Date; key: number }
  | { tipo: "evento"; valor: Evento; key: number; ativo: boolean }
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

    //verifica qual evento está mais próximo da hora atual
    function currentEvents(evento) {
      if (evento) {
        console.log(evento);
        const agora = Date.now();
        let minDiff = null;
        let currents = [];
        for (const e of evento) {
          const t = e.data.getTime();
          const diff = Math.abs(agora - e.data);

          console.log("agora", agora);

          if (minDiff === null || diff < minDiff) {
            minDiff = diff;
            currents.length = 0;
            console.log("minDiff", minDiff);
            console.log("currents", minDiff);
            e.ativo = true;
          } else if (diff > minDiff) {
            console.log("diff", diff, ">", "minDiff", minDiff);
            console.log("continue", e);
          }
          currents.push(e);
        }
        return currents;
      } else {
        console.log("vazio.. ", []);
        return [];
      }
    }
    const eventosAtivos: Evento[] = currentEvents(eventosOrdenados);

    const eventosPorTipo = computed(() => {
      if (dadosEventosTimeline) {
        let result: Array<TipoEventoTimeline> = [];
        let dataAtual: Date | null = null;
        let idx = 0;

        for (const evento of eventosAtivos) {
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
            ativo: false,
          });
        }
        return result;
      } else {
        return [];
      }
    });

    // function isScroll(key: number) {
    //   return eventosPorTipo.value.length > 0
    //     ? eventosPorTipo.value[1].key === key
    //     : false;
    // }

    //  let isActive(id: number) {
    //   return this.scrollToEvents.some(e => e.id === id);
    // }

    return {
      eventosPorTipo,
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
