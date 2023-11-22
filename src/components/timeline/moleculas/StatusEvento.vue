<template>
  <section class="box box-status">
    <h3>Status:</h3>
    <BotaoStatus
      :aparencia="aparencia"
      :aoClicar="aoClicar"
      :status="status"
      @click="aoEditarEvento"
    />
  </section>
</template>

<script lang="ts">
import 'material-symbols/outlined.css';
import { defineComponent, reactive, PropType } from 'vue';
import { AoClicarEvento } from '../type';
import BotaoStatus from './BotaoStatus.vue';

export default defineComponent({
  components: { BotaoStatus },
  name: 'StatusEvento',
  props: {
    aparencia: {
      type: String,
    },
    status: {
      required: true,
      type: String,
    },
    aoClicar: {
      required: false,
      type: Function as PropType<AoClicarEvento>,
    },
  },

  emits: {
    onStatusEventoEditClicked: () => true,
  },

  setup(props, { emit }) {
    const aoEditarEvento = () => {
      emit('onStatusEventoEditClicked');
    };

    props = reactive(props);

    return {
      aoEditarEvento,
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
