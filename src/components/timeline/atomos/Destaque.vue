<template>
  <div class="destaqueEvento texto-pequeno">{{ texto }}</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Destaque",
  props: {
    texto: {
      type: String,
    },
  }
});
</script>
<style scoped>
.realizado .destaqueEvento,
.cancelado .destaqueEvento,
.adiado .destaqueEvento {
  opacity: 0.4;
}
.destaqueEvento {
  display: table-cell;
  text-align: right;
  width: 15%;
  line-height: 1em;
  color: var(--cor-texto);
  padding: 2.4rem 1.4rem;
  vertical-align: middle;
}

.bg-selecionado .destaqueEvento {
  color: var(--cor-texto-selecao);
}
</style>
