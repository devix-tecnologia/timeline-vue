<template>
  <EditarEvento :aoClicar="aoClicar" :salvarVisivel="salvarVisivel">
    <template #conteudo>
      <h2>Observação:</h2>
      <textarea v-model="observacao" placeholder=""></textarea>
    </template>
  </EditarEvento>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import "material-symbols/outlined.css";

import { AoClicarEvento } from "../type";
import { EventoDetalhado } from "../typeDetalhado";
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
    observacao: {
      type: String,
    },
  },
  components: { EditarEvento },
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
.area-conteudo textarea {
  width: 100%;
  min-height: 20rem;
  border: 1px solid var(--cor-linha);
  border-radius: 10px;
  padding: 1.4rem;
}

.area-conteudo textarea:focus {
  border-color: var(--cor-acao);
}
</style>
