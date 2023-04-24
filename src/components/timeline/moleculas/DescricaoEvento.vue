<template>
  <div v-if="subtitulo" class="descricaoEvento">
    <TituloEvento :titulo="titulo" />
    <SubtituloEvento :subtitulo="subtitulo" />
  </div>
  <div v-else class="descricaoEvento" style="padding-top: 2.3rem">
    <TituloEvento :titulo="titulo" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SubtituloEvento from '../atomos/SubtituloEvento.vue';
import TituloEvento from '../atomos/TituloEvento.vue';

export default defineComponent({
  props: {
    titulo: {
      required: true,
      type: String,
    },
    subtitulo: {
      required: true,
      type: String,
    },
  },
  components: { TituloEvento, SubtituloEvento },
  setup() {
    return {};
  },
});
</script>

<style scoped>
/* descrição do evento */

.descricaoEvento {
  display: table-cell;
  vertical-align: top;
  padding: 1.4rem;
  padding-left: 0;
}

.realizado .descricaoEvento,
.cancelado .descricaoEvento,
.adiado .descricaoEvento {
  opacity: 0.4;
}

.descricaoEvento .titulo {
  line-height: 1.8rem;
  margin: 0;
}

@media only screen and (max-width: 400px) {
  .descricaoEvento {
    max-width: 15rem;
  }
}
</style>
