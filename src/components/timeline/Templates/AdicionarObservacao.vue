<template>
  <EditarEvento
    :aoClicar="aoClicar"
    :salvarVisivel="salvarVisivel"
    v-model:observacao="state.observacaoLocal"
    @onEditarEventoSalvarClicked="aoSalvar"
    @onEditarEventoCancelarClicked="aoCancelar"
  >
    <template #conteudo>
      <h2>Observação:</h2>
      <textarea v-model="state.observacaoLocal" placeholder=""></textarea>
    </template>
  </EditarEvento>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import "material-symbols/outlined.css";

import { AoClicarEvento } from "../type";
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

  emits: {
    onAdicionarObservacaoSalvarClicked: (mensagem: string) => true,
    onAdicionarObservacaoCancelarClicked: () => true,
  },

  setup(props, { emit }) {
    const state = ref({
      observacaoLocal: props.observacao || "",
    });

    const aoSalvar = () => {
      const mensagem = state.value.observacaoLocal;
      emit("onAdicionarObservacaoSalvarClicked", mensagem);
    };

    const aoCancelar = () => {
      emit("onAdicionarObservacaoCancelarClicked");
    };

    return { aoSalvar, aoCancelar, state };
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
