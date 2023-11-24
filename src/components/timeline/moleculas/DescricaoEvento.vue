<template>
  <div class="descricaoEvento" :style="`${subtitulo ? '' : 'padding-top: 3.3rem'}`">
    <TituloEvento :titulo="titulo" />
    <SubtituloEvento v-if="subtitulo" :subtitulo="subtitulo" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SubtituloEvento from '../atomos/SubtituloEvento.vue';
import TituloEvento from '../atomos/TituloEvento.vue';

export default defineComponent({
  name: 'Descrição Evento',
  props: {
    titulo: {
      required: true,
      type: String,
    },
    subtitulo: {
      required: false,
      type: String,
    },
  },
  components: { TituloEvento, SubtituloEvento },
});
</script>

<style scoped>
/* descrição do evento */

.descricaoEvento {
  display: table-cell;
  vertical-align: top;
  padding: 2.4rem;
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
