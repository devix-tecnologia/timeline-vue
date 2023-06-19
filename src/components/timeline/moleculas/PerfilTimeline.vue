<template>
  <section class="perfilTimeline" :class="classes">
    <AvatarTimeline v-if="imagemPerfil" :imagem="imagemPerfil" />
    <AvatarTimeline v-else-if="iconePerfil" :icone="iconePerfil" />
    <h2 class="nome">{{ nomePerfil }}</h2>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import AvatarTimeline from "../atomos/AvatarTimeline.vue";
import "material-symbols/outlined.css";

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
    formatoReduzido: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        "formato-reduzido": props.formatoReduzido,
        "formato-normal": !props.formatoReduzido,
      })),
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
  color: var(--cor-texto-selecao);
}

.formato-reduzido {
  background: transparent;
  min-height: 0;
  padding: 0;
  justify-content: left;
  gap: 1rem;
}

.formato-reduzido .avatar {
  width: 2rem;
  height: 2rem;
}

.formato-reduzido .avatar span {
  color: var(--cor-apoio);
  font-size: 1.6rem;
}

.formato-reduzido .nome {
  font-size: small;
  font-weight: normal;
  color: var(--cor-texto);
}
</style>
