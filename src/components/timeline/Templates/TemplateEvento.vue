<template>
  <div class="pagina">
    <topo :titulo="dadosEvento.categoria.nome" :escuro="false" />
    <Evento :perfilEvento="perfilEvento" :dadosEvento="dadosEvento" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import "material-symbols/outlined.css";

import { Perfil } from "../type";
import { EventoDetalhado } from "../typeDetalhado";
import Topo from "../moleculas/Topo.vue";
import Evento from "../organismos/EventoDetalhado.vue";

export default defineComponent({
  props: {
    perfilEvento: {
      required: true,
      type: Object as PropType<Perfil>,
    },
    dadosEvento: {
      required: true,
      type: Object as PropType<EventoDetalhado>,
    },
  },
  components: { Topo, Evento },
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
