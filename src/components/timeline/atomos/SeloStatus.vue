<template>
  <span
    class="seloStatus"
    :class="[`seloStatus--${status}`, `seloStatus--${aparencia}`]"
    :style="{ '--seloStatus-cor': selo.cor }"
    data-testid="selo-status"
  >
    <span
      class="material-symbols-outlined seloStatus__icone"
      :data-icone="selo.icone"
      aria-hidden="true"
    ></span>
    {{ selo.rotulo }}
  </span>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import 'material-symbols/outlined.css';
import { Status } from '../type';
import { APARENCIAS_SELO_STATUS, AparenciaSeloStatus, SELOS_STATUS } from './SeloStatus.types';

export default defineComponent({
  name: 'SeloStatus',
  props: {
    status: {
      required: true,
      type: String as PropType<Status>,
    },
    aparencia: {
      type: String as PropType<AparenciaSeloStatus>,
      default: 'contorno',
      validator: (aparencia: string) =>
        (APARENCIAS_SELO_STATUS as readonly string[]).includes(aparencia),
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
/* O texto herda a cor de quem usa o selo; a cor do status fica no ícone e no fundo. */
.seloStatus {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.2rem 0.8rem 0.2rem 0.6rem;
  border: 1px solid color-mix(in srgb, currentColor 30%, transparent);
  border-radius: 99rem;
  color: inherit;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.6rem;
  white-space: nowrap;
}

.seloStatus .seloStatus__icone {
  color: var(--seloStatus-cor);
  font-size: 1.6rem;
}

/*
 * O nome do ícone vem do atributo, num pseudo-elemento. Como texto do DOM, a ligadura
 * seria medida pelo axe como texto comum sempre que a fonte ainda não tivesse carregado.
 */
.seloStatus__icone::before {
  content: attr(data-icone);
}

.seloStatus--preenchido {
  padding: 0.4rem 1rem 0.4rem 0.8rem;
  border-color: transparent;
  background: color-mix(in srgb, var(--seloStatus-cor) 14%, var(--cor-fundo));
  color: var(--cor-texto);
}

.seloStatus--preenchido .seloStatus__icone {
  font-variation-settings: 'FILL' 1;
}
</style>
