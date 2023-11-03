<template>
  <div class="pagina">
    <!-- <topo :titulo="dadosEvento.categoria.nome" :escuro="false" /> -->
    <Evento v-if="showDetail" :perfilEvento="perfilEvento" :dadosEvento="dadosEvento" />
    <Timeline v-else-if="showTimeline" :perfilTimeline="perfilTimeline" :eventosTimeline="dadosTimeline" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRef, ref } from "vue";
import "material-symbols/outlined.css";

import { Perfil } from "../type";
import { EventoDetalhado } from "../typeDetalhado";
import { Evento as TipoEvento } from "../type";

// import PerfilTimeline from "../moleculas/PerfilTimeline.vue";
import Topo from "../moleculas/Topo.vue";
import Evento from "../organismos/EventoDetalhado.vue"
import Timeline from "../organismos/Timeline.vue";

export default defineComponent({

  props: {
    perfil: {
      required: true,
      type: Object,
    },
    eventos: {
      required: true,
      type: Object,
    },
  },

  components: { Topo, Evento, Timeline },

  setup(props) {
    props = reactive(props);

    debugger;

    const _perfil = toRef(props, 'perfil');
    const _eventos = toRef(props, 'eventos');

    // Mapear os campos da string JSON diretamente para o tipo Perfil
    const perfilEvento : Perfil = _perfil.value;
    const dadosEvento :  EventoDetalhado = _eventos.value;
    
    const perfilTimeline : Perfil = _perfil.value;
    const dadosTimeline : TipoEvento[] = _eventos.value;

    const showTimeline = dadosTimeline.length > 1 ? true : false;
    const showDetail =  !showTimeline; 

    return { 
      showDetail,
      showTimeline,
      perfilTimeline,
      perfilEvento,
      dadosEvento,
      dadosTimeline,
    };
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
