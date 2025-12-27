<template>
  <Botao :aparencia="aparencia" :class="classes" data-testid="botao-status" @click="emitirClick">
    <IconeStatus class="icone" :status="status" /> {{ status }}
  </Botao>
</template>

<script lang="ts">
import 'material-symbols/outlined.css';
import { defineComponent, reactive, computed, PropType } from 'vue';
import { Status } from '../type';
import Botao from './Botao.vue';
import type { Aparencia } from './Botao.types';
import IconeStatus from '../atomos/IconeStatus.vue';

export default defineComponent({
  name: 'BotaoStatus',
  components: { Botao, IconeStatus },
  props: {
    aparencia: {
      type: String as PropType<Aparencia>,
    },
    status: {
      type: String as PropType<Status>,
      default: 'planejado',
    },
  },
  emits: {
    click: (_mouseEvent: MouseEvent) => true,
  },
  setup(props, { emit }) {
    props = reactive(props);

    const classes = computed(() => ({
      [`${props.status}`]: true,
    }));

    const emitirClick = (mouseEvent: MouseEvent) => {
      emit('click', mouseEvent);
    };

    return {
      emitirClick,
      classes,
    };
  },
});
</script>

<style scoped>
/* CABEÇALHO */
.material-symbols-outlined {
  font-size: 2.6rem;
}

.btn {
  text-transform: capitalize;
}

.icone {
  font-size: 2.4rem;
  padding: 0.4rem 1.4rem 0 0;
  display: inline-block;
  width: auto;
}

.planejado.icone {
  display: none;
}

.btn.realizado {
  border: 1px solid var(--cor-sucesso);
  color: var(--cor-sucesso);
}
.btn.realizado:active,
.btn.preenchido.realizado {
  background: var(--cor-sucesso);
  color: var(--cor-texto);
}
.btn.realizado:active .icone::before,
.btn.preenchido.realizado .icone::before {
  color: var(--cor-texto);
}

.btn.cancelado {
  border: 1px solid var(--cor-importante);
  color: var(--cor-importante);
}
.btn.cancelado:active,
.btn.preenchido.cancelado {
  background: var(--cor-importante);
  color: var(--cor-texto);
}
.btn.cancelado:active .icone::before,
.btn.preenchido.cancelado .icone::before {
  color: var(--cor-texto);
}

.btn.atrasado {
  border: 1px solid var(--cor-alerta);
  color: var(--cor-alerta);
}

.btn.atrasado:active,
.btn.preenchido.atrasado {
  background: var(--cor-alerta);
  color: var(--cor-texto-selecao);
}
.btn.atrasado:active .icone::before,
.btn.preenchido.atrasado .icone::before {
  color: var(--cor-texto-selecao);
}

.btn.adiado {
  border: 1px solid var(--cor-apoio);
  color: var(--cor-apoio);
}

.btn.adiado:active,
.btn.preenchido.adiado {
  background: var(--cor-apoio);
  color: var(--cor-fundo);
}

.btn.adiado:active .icone::before,
.btn.preenchido.adiado .icone::before {
  color: var(--cor-fundo);
}
</style>
