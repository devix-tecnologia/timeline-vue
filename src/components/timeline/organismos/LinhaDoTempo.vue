<template>
  <div>
    <div v-for="timeline in dadosTimeline" :key="timeline.data">
      <CabecalhoEventos
        v-if="cabecalho == true"
        :nomeCabecalho="timeline.nome"
        :imagemCabecalho="timeline.imagem"
      />
    </div>

    <div
      v-for="eventos in eventosTimeline"
      :key="eventos.data"
      class="areaTimeline"
    >
      <!-- SEPARADOR -->
      <SeparadorPeriodo :dataSeparador="eventos[0].data" />

      <section class="timeline">
        <!--loop-->
        <EventoTimeline
          v-for="evento in eventos"
          :key="evento.data"
          :evento="evento"
        />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EventoTimeline from '../moleculas/EventoTimeline.vue';
import SeparadorPeriodo from '../moleculas/SeparadorPeriodo.vue';
import CabecalhoEventos from '../moleculas/CabecalhoEventos.vue';

export default defineComponent({
  props: {
    dadosTimeline: {
      required: true,
      type: Object,
    },
    eventosTimeline: {
      required: true,
      type: Object,
    },
    cabecalho: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    CabecalhoEventos,
    SeparadorPeriodo,
    EventoTimeline,
  },
  setup() {
    return;
  },
});
</script>

<style scoped>
/* TIMELINE */

/* .areaTimeline {
  max-width: 850px;
  margin: 0 auto;
} */

.timeline {
  display: table;
  width: 100%;
  position: relative;
}
</style>
