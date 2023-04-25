<template>
  <div class="avatar">
    <!-- <img
      src="https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    /> -->

    <img v-if="imagem" :src="imagem" />
    <span v-else-if="icone" class="material-symbols-outlined">
      {{ icone }}
    </span>
    <span v-else class="material-symbols-outlined"> person </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    imagem: {
      type: String,
    },
    icone: {
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style scoped>
.avatar {
  background: var(--cor-secundaria);
  color: var(--cor-apoio);
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
}

.avatar img {
  aspect-ratio: 1 / 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}

.avatar span {
  font-size: 3rem;
}
</style>
