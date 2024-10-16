<template>
  <div class="editar-evento" data-testid="editar-evento">
    <transition name="fadeTopo" mode="out-in" appear>
      <div class="area-conteudo">
        <slot name="conteudo"> </slot>
      </div>
    </transition>

    <transition name="fadeBaixo" mode="out-in" appear>
      <div class="salvar">
        <AreaSalvamento
          data-testid="area-salvamento"
          @cancelar-click="emitirCancelarClick"
          @salvar-click="emitirSalvarClick"
        >
          <slot name="salvamento"></slot>
        </AreaSalvamento>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'material-symbols/outlined.css';

import AreaSalvamento from '../moleculas/AreaSalvamento.vue';

export default defineComponent({
  components: { AreaSalvamento },
  props: {
    salvarVisivel: {
      type: Boolean,
    },
  },
  emits: {
    salvarClick: (mouseEvent: MouseEvent) => true,
    cancelarClick: (mouseEvent: MouseEvent) => true,
  },

  setup(props, { emit }) {
    const emitirSalvarClick = (mouseEvent: MouseEvent) => {
      emit('salvarClick', mouseEvent);
    };

    const emitirCancelarClick = (mouseEvent: MouseEvent) => {
      emit('cancelarClick', mouseEvent);
    };

    // props = reactive(props);
    return {
      emitirSalvarClick,
      emitirCancelarClick,
    };
  },
});
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.editar-evento {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  height: 100vh;
}

.area-conteudo,
.area-salvamento {
  height: 100%;
}

.salvar {
  bottom: 0;
  left: 0;
  right: 0;
}

.visivel {
  /* position: relative;
  transition: all 10s ease-out;
  top: 0; */
  display: flex;
}

.invisivel {
  /* position: relative;
  transition: all 10s ease-out;
  top: 100%; */
  display: none !important;
}
</style>
