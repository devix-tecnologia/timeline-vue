<template>
  <section class="area-salvamento" data-testid="area-salvamento">
    <slot></slot>
    <Botao
      data-testid="botao-salvar"
      :aparencia="`preenchido`"
      :titulo="`Salvar`"
      :tamanho="`grande`"
      @click="emitirSalvarClick"
    />
    <Botao
      data-testid="botao-cancelar"
      :aparencia="`vazio`"
      :titulo="`Cancelar`"
      :tamanho="`pequeno`"
      @click="emitirCancelarClick"
    />
  </section>
</template>

<script lang="ts">
import 'material-symbols/outlined.css';
import { defineComponent } from 'vue';
import Botao from './Botao.vue';

export default defineComponent({
  name: 'AreaSalvamento',

  components: { Botao },
  emits: {
    salvarClick: (mouseEvent: MouseEvent) => true,
    cancelarClick: (mouseEvent: MouseEvent) => true,
  },

  setup(props, { emit }) {
    const emitirSalvarClick = (mouseEvent: MouseEvent) => {
      emit('salvarClick', mouseEvent);
    };

    const emitirCancelarClick = (mouseEvent: MouseEvent) => {
      emit('cancelarClick', mouseEvent);
    };

    return {
      emitirSalvarClick,
      emitirCancelarClick,
    };
  },
});
</script>

<style scoped>
/* CABEÇALHO */
.material-symbols-outlined {
  font-size: 2.6rem;
}

.area-salvamento {
  background: var(--cor-terciaria);
  padding: 5rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
}
.area-salvamento .preenchido {
  background: var(--cor-acao);
  border: 0;
  color: var(--cor-texto);
}
</style>
