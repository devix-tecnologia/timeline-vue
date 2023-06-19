<template>
  <div class="editar-evento">
    <div class="area-conteudo">
      <slot name="conteudo"> </slot>
    </div>
    <div class="salvar">
      <AreaSalvamento :aoClicar="aoClicar" :class="classes">
        <slot name="salvamento"></slot>
      </AreaSalvamento>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, reactive } from "vue";
import "material-symbols/outlined.css";

import { AoClicarEvento } from "../type";
import AreaSalvamento from "../moleculas/AreaSalvamento.vue";

import Botao from "../moleculas/Botao.vue";

export default defineComponent({
  props: {
    aoClicar: {
      required: false,
      type: Function as PropType<AoClicarEvento>,
    },
    salvarVisivel: {
      type: Boolean,
    },
    aoClicarConteudo: {
      required: false,
      type: Function as PropType<AoClicarEvento>,
    },
  },
  components: { AreaSalvamento, Botao },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        visivel: props.salvarVisivel,
        invisivel: !props.salvarVisivel,
      })),
    };
  },
});
</script>

<style>
.editar-evento {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  height: 100vh;
}

.salvar,
.area-conteudo,
.area-salvamento {
  height: 100%;
}

.salvar {
  overflow: hidden;
}

.visivel {
  position: relative;
  transition: all 10s ease-out;
  top: 0;
}

.invisivel {
  position: relative;
  transition: all 10s ease-out;
  top: 100%;
}
</style>
