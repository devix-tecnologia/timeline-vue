<template>
  <h3 class="titulo">{{ titulo }}</h3>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Título Evento",
  props: {
    titulo: {
      required: true,
      type: String,
    },
  },
});
</script>

<style scoped>
/* descrição do evento */
.titulo {
  line-height: 1.4rem;
  margin: 0;
  color: var(--cor-texto);
}

.bg-selecionado .descricaoEvento .titulo {
  color: var(--cor-texto-selecao);
}
</style>
