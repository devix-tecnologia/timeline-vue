<template>
  <section class="box box-status">
    <h3>Status:</h3>
    <BotaoStatus
      :aparencia="aparencia"
      :status="status"
      data-testid="status-evento"
      @click="handleEditarClick"
    />
  </section>
</template>

<script lang="ts">
import 'material-symbols/outlined.css';
import { defineComponent, reactive, PropType } from 'vue';
import BotaoStatus from './BotaoStatus.vue';
import { Aparencia } from './Botao.vue';
import { Status } from '../type';

export default defineComponent({
  components: { BotaoStatus },
  name: 'StatusEvento',
  props: {
    aparencia: {
      type: String as PropType<Aparencia>,
    },
    status: {
      required: true,
      type: String as PropType<Status>,
    }
  },

  emits: {
    editarClick: (mouseEvent: MouseEvent) => true,
  },

  setup(props, { emit }) {
    const handleEditarClick = (mouseEvent: MouseEvent) => {
      emit('editarClick', mouseEvent);
    };

    props = reactive(props);

    return {
      handleEditarClick,
    };
  },
});
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
