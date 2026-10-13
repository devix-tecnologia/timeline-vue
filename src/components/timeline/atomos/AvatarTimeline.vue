<template>
  <div class="avatar">
    <img v-if="imagem" :src="imagem" :alt="altText" />
    <span v-else-if="icone" class="material-symbols-outlined">
      {{ icone }}
    </span>
    <span v-else-if="iniciais" class="avatar__iniciais">{{ iniciais }}</span>
    <span v-else="icone" class="material-symbols-outlined"> person </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'material-symbols/outlined.css';
export default defineComponent({
  name: 'Avatar Timeline',
  props: {
    imagem: {
      type: String,
    },
    icone: {
      type: String,
    },
    iniciais: {
      type: String,
    },
    altText: {
      type: String,
      default: 'Avatar do perfil',
    },
  },
});
</script>

<style scoped>
/* O ícone fica mais discreto que as iniciais, com 4,5:1 sobre o fundo nos dois temas. */
.avatar {
  background: var(--cor-secundaria);
  color: color-mix(in srgb, var(--cor-apoio) 35%, var(--cor-terciaria));
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

.avatar .avatar__iniciais {
  color: var(--cor-terciaria);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}
</style>
