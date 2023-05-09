<template>
  <div class="hora" :class="classes">{{ hora.getHours() }} : {{ hora.getMinutes().toString().padStart(2, '0') }}</div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, ref } from 'vue';

export default defineComponent({
  name: 'hora',
  props: {
    hora: {
      required: true,
      type: Date,
    },
    aparencia: {
      type: String,
    },
  },
  components: {},
  setup(props) {
    const propsAparecia = ref(props.aparencia);

    return {
      classes: computed(() => ({
        [`hora-${propsAparecia || ''}`]: true,
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
.hora-padrao,
.horaRealizada {
  font-weight: 500;
  font-size: 1.4rem;
}
.hora-riscada,
.horaPlanejada {
  text-decoration: line-through;
  font-size: 1rem;
}
</style>
