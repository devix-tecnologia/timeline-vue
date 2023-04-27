<template>
  <h4 class="subtitulo">{{ subtitulo }}</h4>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    subtitulo: {
      required: true,
      type: String,
    },
  },

  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
/* descrição do evento */
.descricaoEvento .subtitulo {
  line-height: 1.4rem;
  margin: 0;
  color: var(--cor-texto);
}

.bg-selecionado .descricaoEvento .subtitulo {
  color: var(--cor-texto-selecao);
}
</style>
