<template>
  <div class="hora" :class="classes">
    {{ horas.getHours() }}:{{ horas.getMinutes().toString().padStart(2, "0") }}
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";

export default defineComponent({
  name: "Hora",
  props: {
    hora: {
      required: true,
      type: Date,
    },
    aparencia: {
      type: String,
      default: "padrao",
      validator(aparencia: string) {
        return ["padrao", "riscada"].includes(aparencia);
      },
    },
  },
  components: {},
  setup(props) {
    const horas = ref(new Date(props.hora));

    return {
      horas,
      classes: computed(() => ({
        [`hora-${props.aparencia || ""}`]: true,
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
