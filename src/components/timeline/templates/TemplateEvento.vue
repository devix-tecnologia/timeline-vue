<template>
  <div class="pagina">
    <topo :titulo="dadosEvento.categoria.nome" :escuro="false" />
    <Evento :perfil="perfilEvento" :evento="dadosEvento" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { DefineComponent } from 'vue';
import 'material-symbols/outlined.css';

import { Perfil } from '../type';
import { EventoDetalhado } from '../typeDetalhado';
import Topo from '../moleculas/Topo.vue';
import Evento from '../organismos/EventoDetalhado.vue';

export default defineComponent({
  components: { Topo, Evento },
  props: {
    perfilEvento: {
      required: false,
      type: Object as PropType<Perfil>,
    },
    dadosEvento: {
      required: true,
      type: Object as PropType<EventoDetalhado>,
    },
  },
  setup() {
    return {};
  },
}) as DefineComponent<Record<string, unknown>, Record<string, unknown>, any>;
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
