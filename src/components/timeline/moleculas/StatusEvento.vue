<template>
  <section class="box box-status">
    <h3>Status:</h3>
    <BotaoStatus
      data-testid="botao-status"
      :aparencia="aparencia"
      :status="status"
      @click="emitClick"
    />
  </section>
</template>

<script lang="ts">
import 'material-symbols/outlined.css';
import { defineComponent, reactive, PropType } from 'vue';
import type { DefineComponent } from 'vue';
import BotaoStatus from './BotaoStatus.vue';
import { Aparencia } from './Botao.vue';
import { Status } from '../type';

export default defineComponent({
  name: 'StatusEvento',
  components: { BotaoStatus },
  props: {
    aparencia: {
      type: String as PropType<Aparencia>,
    },
    status: {
      required: true,
      type: String as PropType<Status>,
    },
  },

  emits: {
    click: (_mouseEvent: MouseEvent) => true,
  },

  setup(props, { emit }) {
    const emitClick = (mouseEvent: MouseEvent) => {
      emit('click', mouseEvent);
    };

    props = reactive(props);

    return {
      emitClick,
      props,
    };
  },
}) as DefineComponent<Record<string, unknown>, Record<string, unknown>, any>;
</script>

<style scoped>
/* CABEÇALHO */
.material-symbols-outlined {
  font-size: 2.6rem;
}

.box {
  padding: 1.4rem;
  background: transparent;
  box-shadow: 0px 0px 15px var(--cor-sombra);
  border-radius: 1rem;
  color: var(--cor-texto);
}

.box-status {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
}
</style>
