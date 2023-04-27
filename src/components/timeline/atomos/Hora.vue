<template>
  <div class="hora" :class="classes">{{ horaString }}</div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

export default defineComponent({
  name: 'hora',
  props: {
    hora: {
      required: true,
      type: String,
    },
    aparencia: {
      type: String,
    },
  },
  components: {},
  setup(props) {
    props = reactive(props);

    // eslint-disable-next-line vue/no-setup-props-destructure
    const dataRecebida = props.hora;
    const data = new Date(dataRecebida);
    const horaSimples = data.getHours();
    const minutos = data.getMinutes();
    const horaString = `${horaSimples}:${minutos.toString().padStart(2, '0')}`;
    return {
      classes: computed(() => ({
        [`hora-${props.aparencia || ''}`]: true,
      })),
      horaString,
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
