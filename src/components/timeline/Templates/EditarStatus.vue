<template>
  <EditarEvento :aoClicar="aoClicar" :salvarVisivel="salvarVisivel">
    <template #conteudo>
      <h2>Alterar o Status para:</h2>
      <BotaoStatus
        :aparencia="aparencia"
        :aoClicar="aoClicar"
        :status="`realizado`"
      />
      <BotaoStatus
        :aparencia="aparencia"
        :aoClicar="aoClicar"
        :status="`cancelado`"
      />
      <BotaoStatus
        :aparencia="aparencia"
        :aoClicar="aoClicar"
        :status="`adiado`"
      />
    </template>
  </EditarEvento>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import "material-symbols/outlined.css";

import { AoClicarEvento } from "../type";
import { EventoDetalhado } from "../typeDetalhado";
import Topo from "../moleculas/Topo.vue";
import BotaoStatus from "../moleculas/BotaoStatus.vue";
import EditarEvento from "../organismos/EditarEvento.vue";

export default defineComponent({
  props: {
    aoClicar: {
      required: false,
      type: Function as PropType<AoClicarEvento>,
    },
    salvarVisivel: {
      type: Boolean,
    },
    aparencia: {
      type: String,
    },
  },
  components: { EditarEvento, BotaoStatus },
  setup(props) {
    return {};
  },
});
</script>

<style>
.area-conteudo {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  text-align: center;
}

.descricao {
  font-size: 1.4rem;
}
</style>
