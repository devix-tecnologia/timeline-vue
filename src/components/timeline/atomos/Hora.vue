<template>
  <div class="hora" :class="classes">{{ texto }}</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { horaCurta } from '../utils/datas';

export default defineComponent({
  name: 'Hora',
  components: {},
  props: {
    hora: {
      required: true,
      type: Date,
    },
    aparencia: {
      type: String,
      default: 'padrao',
      validator(aparencia: string) {
        return ['padrao', 'riscada'].includes(aparencia);
      },
    },
  },
  setup(props) {
    return {
      texto: computed(() => horaCurta(new Date(props.hora))),
      classes: computed(() => ({
        [`hora-${props.aparencia || ''}`]: true,
      })),
    };
  },
});
</script>

<style scoped>
.hora {
  color: var(--cor-texto);
}

.bg-selecionado .hora {
  color: var(--cor-texto-selecao);
}
.hora-padrao {
  font-weight: 500;
  font-size: 1.4rem;
}
.hora-riscada {
  text-decoration: line-through;
  font-size: 1rem;
}
</style>
