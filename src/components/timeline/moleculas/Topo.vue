<template>
  <div class="topo">
    <div class="Topo">
      <!-- iconeSeta -->
      <span class="material-symbols-outlined"> arrow_back </span>
      <!-- titulo -->
      <h2 class="titulo">Linha do tempo</h2>
      <!-- menu -->
      <span class="material-symbols-outlined"> more_vert </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
/* CABEÇALHO */
.material-symbols-outlined {
  font-size: 2.6rem;
}
.Topo {
  background: var(--cor-secundaria);
  padding: 1.4rem;
  color: var(--cor-terciaria);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
