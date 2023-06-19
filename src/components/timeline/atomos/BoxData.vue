<template>
  <h3 class="boxData padrao" :class="classes">{{ dataNumero }}</h3>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from "vue";

export default defineComponent({
  name: "Box Data",
  props: {
    dataNumero: {
      required: true,
      type: Number,
    },
    aparencia: {
      type: String,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        [`${props.aparencia || "padrao"}`]: true,
      })),
    };
  },
});
</script>

<style scoped>
.boxData {
  line-height: 3.5rem;
  border-radius: 0.5rem;
  background: var(--cor-primaria);
  color: var(--cor-texto-selecao);
  margin: 0;
  width: 3.5rem;
  height: 3.5rem;
  text-align: center;
}

.padrao {
  background: var(--cor-primaria);
  color: var(--cor-texto-selecao);
}

.escuro {
  background: var(--cor-secundaria);
  color: var(--cor-primaria);
}

.claro {
  background: var(--cor-terciaria);
  color: var(--cor-secundaria);
  box-shadow: 0px 0px 10px 0px #0000001c;
}
</style>
