<template >
  <div class="topo" :class="classes" data-testid="topo">
    <div class="conteudoTitulo">
      <button class="btn_voltar" @click="emitirVoltarClick" data-testid="botao-voltar">
        <span class="material-symbols-outlined"> arrow_back </span>
      </button>
      <h3 class="titulo">{{ titulo }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import 'material-symbols/outlined.css';

export default defineComponent({
  name: 'Topo',
  props: {
    titulo: {
      type: String,
    },
    escuro: {
      type: Boolean,
      default: true,
    },
    link: {},
  },

  emits: {
    voltarClick: (mouseEvent: MouseEvent) => true,
  },

  setup(props, { emit }) {
    const emitirVoltarClick = (mouseEvent: MouseEvent) => {
      emit('voltarClick', mouseEvent);
    };

    props = reactive(props);
    return {
      emitirVoltarClick,
      classes: computed(() => ({
        'bg-escuro': props.escuro,
        'bg-claro': !props.escuro,
      })),
    };
  },
});
</script>

<style scoped>
/* CABEÇALHO */
.material-symbols-outlined {
  font-size: 2.6rem;
}
.topo {
  background: var(--cor-fundo);
  padding: 1.4rem;
  color: var(--cor-secundaria);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.conteudoTitulo {
  padding-right: 1.4rem;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}

.topo.bg-escuro {
  background: var(--cor-secundaria);
  color: var(--cor-terciaria);
}

.topo.bg-escuro span {
  color: var(--cor-terciaria);
}

.btn_voltar {
  border: 0;
  cursor: pointer;
  padding-right: 1.4rem;
  background-color: transparent;
  line-height: 0;
  color: var(--cor-texto);
}
</style>
