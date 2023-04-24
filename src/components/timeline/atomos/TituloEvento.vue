<template>
  <h3 class="titulo">{{ titulo }}</h3>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    titulo: {
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
.descricaoEvento .titulo {
  line-height: 1.4rem;
  margin: 0;
  color: var(--cor-texto);
}

.atual .descricaoEvento .titulo {
  color: var(--cor-texto-selecao);
}
</style>
