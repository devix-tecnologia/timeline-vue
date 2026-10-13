<template>
  <span
    class="marcoStatus"
    :class="`marcoStatus--${status}`"
    :style="{ '--marcoStatus-cor': selo.cor }"
    :data-icone="selo.marco"
    data-testid="marco-status"
    aria-hidden="true"
  ></span>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import 'material-symbols/outlined.css';
import { Status } from '../type';
import { SELOS_STATUS } from './SeloStatus.types';

/**
 * Marcador do status sobre a linha do tempo: um círculo na cor do status, com o ícone.
 * É decorativo: quem o usa mostra o status também por extenso (SeloStatus, por exemplo).
 */
export default defineComponent({
  name: 'MarcoStatus',
  props: {
    status: {
      required: true,
      type: String as PropType<Status>,
    },
  },
  setup(props) {
    return {
      selo: computed(() => SELOS_STATUS[props.status]),
    };
  },
});
</script>

<style scoped>
.marcoStatus {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background: var(--marcoStatus-cor);
  box-shadow: 0 0 0 0.4rem var(--cor-fundo);
  color: var(--cor-fundo);
}

/* Ícone no pseudo-elemento, pelo mesmo motivo do SeloStatus: o axe não mede a ligadura. */
.marcoStatus::before {
  content: attr(data-icone);
  font-family: 'Material Symbols Outlined';
  font-size: 2rem;
  font-variation-settings:
    'FILL' 1,
    'wght' 600;
  line-height: 1;
  font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

/* Planejado ainda não aconteceu: círculo vazado. */
.marcoStatus--planejado {
  border: 2px solid var(--marcoStatus-cor);
  background: var(--cor-fundo);
  color: var(--marcoStatus-cor);
}
</style>
