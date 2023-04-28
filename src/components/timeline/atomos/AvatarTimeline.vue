<template>
  <div class="avatar">
    <img v-if="imagem" :src="imagem" />
    <span v-else-if="icone" class="material-symbols-outlined">
      {{ icone }}
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
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
