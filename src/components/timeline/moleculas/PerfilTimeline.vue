<template>
  <section class="perfilTimeline" :style="style">
    <AvatarTimeline v-if="imagemPerfil" :imagem="imagemPerfil" />
    <AvatarTimeline v-else-if="iconePerfil" :icone="iconePerfil" />
    <h2 class="nome">{{ nomePerfil }}</h2>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onUnmounted,
  reactive,
  computed,
} from "vue";
import AvatarTimeline from "../atomos/AvatarTimeline.vue";

export default defineComponent({
  components: { AvatarTimeline },
  props: {
    imagemPerfil: {
      type: String,
    },
    nomePerfil: {
      type: String,
    },
    iconePerfil: {
      type: String,
    },
    backgroundColor: {
      type: String,
      default: "var(--cor-primaria)",
    },
  },
  setup(props) {
    props = reactive(props);
    // passando o background por props no style
    const style = computed(() => ({
      backgroundColor: props.backgroundColor,
    }));

    return {
      style,
    };
  },
});
</script>

<style>
.perfilTimeline {
  background: var(--cor-primaria);
  padding: 1.4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  z-index: 999;
  width: 100%;
  min-height: 8rem;
  transition: all 0.3s;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.nome {
  color: var(--cor-secundaria);
}
</style>
