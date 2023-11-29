<template>
  <EditarEvento
    :salvarVisivel="salvarVisivel"
    v-model:observacao="state.observacaoLocal"
    @salvarClick="salvar"
    @cancelarClick="cancelar"
  >
    <template #conteudo>
      <h2>Observação:</h2>
      <textarea v-model="state.observacaoLocal" placeholder=""></textarea>
    </template>
  </EditarEvento>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import 'material-symbols/outlined.css';
import EditarEvento from '../organismos/EditarEvento.vue';

export default defineComponent({
  props: {
    salvarVisivel: {
      type: Boolean,
    },
    observacao: {
      type: String,
    },
  },
  components: { EditarEvento },

  emits: {
    adicionarClick: (mensagem: string, mouseEvent: MouseEvent) => true,
    cancelarClick: (mouseEvent: MouseEvent) => true,
  },

  setup(props, { emit }) {
    const state = ref({
      observacaoLocal: props.observacao || '',
    });

    const salvar = (mouseEvent: MouseEvent) => {
      const mensagem = state.value.observacaoLocal;
      emit('adicionarClick', mensagem, mouseEvent);
    };

    const cancelar = (mouseEvent: MouseEvent) => {
      emit('cancelarClick', mouseEvent);
    };

    return { salvar, cancelar, state };
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
