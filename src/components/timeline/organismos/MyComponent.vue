<template>
  <button data-testid="updateValueButton" @click="handleButtonValueClick">
    Update Value
  </button>
  <button data-testid="updateStatusButton" @click="handleButtonStatusClick">
    Update Status
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyComponent',

  emits: {
    //caso queira validar o tipo de evento que será emitido, pode-se alterar o null para uma função que verifique o tipo dos parâmetros
    clicaramNoBotaoUpdateValue: null,
    clicaramNoBotaoUpdateStatus: null,
  },

  setup(_, ctx) {
    const handleButtonValueClick = (mouseEvent: MouseEvent) => {
      ctx.emit('clicaramNoBotaoUpdateValue', mouseEvent);
    };

    const handleButtonStatusClick = (mouseEvent: MouseEvent) => {
      ctx.emit('clicaramNoBotaoUpdateStatus', mouseEvent);
    };

    return {
      handleButtonValueClick,
      handleButtonStatusClick,
    };
  },
});
</script>
