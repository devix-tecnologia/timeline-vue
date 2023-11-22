<template>
  <section class="area-salvamento">
    <slot></slot>
    <Botao
      :aparencia="`preenchido`"
      :titulo="`Salvar`"
      :tamanho="`grande`"
      :aoClicar="aoClicar"
      @click="aoSalvar()"
    />
    <Botao
      :aparencia="`vazio`"
      :titulo="`Cancelar`"
      :tamanho="`pequeno`"
      :aoClicar="aoClicar"
      @click="aoCancelar"
    />
  </section>
</template>

<script lang="ts">
import 'material-symbols/outlined.css';
import { defineComponent, PropType } from 'vue';
import { AoClicarEvento } from '../type';
import Botao from './Botao.vue';
export default defineComponent({
  name: 'AreaSalvamento',

  components: { Botao },

  props: {
    aoClicar: {
      required: false,
      type: Function as PropType<AoClicarEvento>,
    },
  },

  emits: {
    onAreaSalvamentoBtnSalvarClicked: () => true,
    onAreaSalvamentoBtnCancelarClicked: () => true,
  },

  setup(props, { emit }) {
    const aoSalvar = () => {
      emit('onAreaSalvamentoBtnSalvarClicked');
    };

    const aoCancelar = () => {
      emit('onAreaSalvamentoBtnCancelarClicked');
    };

    return {
      aoSalvar,
      aoCancelar,
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
