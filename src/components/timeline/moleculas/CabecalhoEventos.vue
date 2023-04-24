<template>
  <div
    class="cabecalhoEventos"
    ref="elementoFixo"
    :style="style"
    :class="{ fixed: isFixed }"
  >
    <!-- :class="{ fixed: isFixed }" -->
    <AvatarTimeline v-if="imagemCabecalho" :imagem="imagemCabecalho" />
    <AvatarTimeline v-else-if="icone" :icone="icone" />
    <h2 class="nome">{{ nomeCabecalho }}</h2>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onUnmounted,
  reactive,
  computed,
} from 'vue';
import AvatarTimeline from '../atomos/AvatarTimeline.vue';

export default defineComponent({
  components: { AvatarTimeline },
  props: {
    imagemCabecalho: {
      type: String,
    },
    nomeCabecalho: {
      type: String,
    },
    icone: {
      type: String,
    },
    backgroundColor: {
      type: String,
      default: 'var(--cor-primaria)',
    },
  },
  setup(props) {
    props = reactive(props);
    // passando o background por props no style
    const style = computed(() => ({
      backgroundColor: props.backgroundColor,
    }));
    // fixando o box no topo da página
    const elementoFixo = ref<HTMLElement | null>(null);
    const isFixed = ref(false);

    const handleScroll = () => {
      if (elementoFixo.value) {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const offset = elementoFixo.value.offsetTop;
        isFixed.value = scrollTop > offset;
      }
    };
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      style,
      elementoFixo,
      isFixed,
    };
  },
});
</script>

<style scoped>
.cabecalhoEventos {
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
}

.nome {
  color: var(--cor-secundaria);
}

.fixed {
  position: fixed;
  top: 0;
  transition: all 1s;
}
</style>
