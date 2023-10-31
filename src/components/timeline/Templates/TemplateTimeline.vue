<template>
  <div class="pagina">
  <EventoDetalhe :perfilEvento="perfilTimeline" :dadosEvento="dadosEvento" />
  <Timeline :perfilTimeline="perfilTimeline" :eventosTimeline="eventosTimeline" style="position: relative"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import "material-symbols/outlined.css";

import { Perfil, Evento } from "../type";
import { EventoDetalhado } from "../typeDetalhado";
// import Topo from "../moleculas/Topo.vue";
import Timeline from "../organismos/Timeline.vue";
import EventoDetalhe from "../organismos/EventoDetalhado.vue";

export default defineComponent({
    props: {
    perfilTimeline: {
      required: true,
      type: Object as PropType<Perfil>,
    },
    eventosTimeline: {
      required: true,
      type: Object as PropType<Evento[]>,
    },
    // dadosEvento: {
    //   required: true,
    //   type: Object as PropType<EventoDetalhado>,

    // }
  },

  components: { Timeline, EventoDetalhe },

  setup(props) {
    return {};
  },
});
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.pagina {
  width: 100%;
  height: 100%;
}
.evento {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.descricao {
  font-size: 1.4rem;
}
</style>