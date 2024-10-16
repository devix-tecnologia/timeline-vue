<template>
  <h4 class="subtitulo">{{ subtitulo }}</h4>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Subtítulo Evento',
  props: {
    subtitulo: {
      required: true,
      type: String,
    },
  },
});
</script>

<style scoped>
/* descrição do evento */
.subtitulo {
  line-height: 1.4rem;
  margin: 0;
  color: var(--cor-texto);
}

.bg-selecionado .descricaoEvento .subtitulo {
  color: var(--cor-texto-selecao);
}
</style>
