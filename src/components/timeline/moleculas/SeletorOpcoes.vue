<template>
  <div
    class="seletorOpcoes"
    :class="`seletorOpcoes--${aparencia}`"
    role="group"
    :aria-label="rotulo"
    data-testid="seletor-opcoes"
  >
    <button
      v-for="opcao in opcoes"
      :key="opcao.valor"
      type="button"
      class="seletorOpcoes__opcao"
      :class="{ 'seletorOpcoes__opcao--selecionada': opcao.valor === modelValue }"
      :aria-pressed="opcao.valor === modelValue"
      :data-testid="`opcao-${opcao.valor}`"
      @click="$emit('update:modelValue', opcao.valor)"
    >
      {{ opcao.rotulo }}
      <span v-if="opcao.contador !== undefined" class="seletorOpcoes__contador">
        {{ opcao.contador }}
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { APARENCIAS_SELETOR, AparenciaSeletor, OpcaoSeletor } from './SeletorOpcoes.types';

/**
 * Escolha de uma opção entre várias, em botões com `aria-pressed`. Serve para trocar de
 * visão (`segmentado`) e para filtrar (`chips`); a estrutura é a mesma, muda a aparência.
 * O segmentado é um trilho com a opção selecionada preenchida e alvo de toque de 4,4rem.
 */
export default defineComponent({
  name: 'SeletorOpcoes',
  props: {
    opcoes: {
      required: true,
      type: Array as PropType<OpcaoSeletor[]>,
    },
    modelValue: {
      required: true,
      type: String,
    },
    /** Nome acessível do grupo (ex.: "Filtrar eventos"). */
    rotulo: {
      required: true,
      type: String,
    },
    aparencia: {
      type: String as PropType<AparenciaSeletor>,
      default: 'segmentado',
      validator: (aparencia: string) =>
        (APARENCIAS_SELETOR as readonly string[]).includes(aparencia),
    },
  },
  emits: {
    'update:modelValue': (_valor: string) => true,
  },
});
</script>

<style scoped>
.seletorOpcoes {
  display: flex;
  gap: 0.8rem;
}

.seletorOpcoes__opcao {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  min-height: 4.4rem;
  border: 0;
  background: var(--cor-terciaria);
  color: var(--cor-texto);
  font: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
}

.seletorOpcoes__opcao--selecionada {
  background: var(--cor-secundaria);
  color: var(--cor-terciaria);
  font-weight: 600;
}

.seletorOpcoes__opcao:focus-visible {
  outline: 3px solid var(--cor-acao);
  outline-offset: 2px;
}

.seletorOpcoes__contador {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.2rem;
  height: 2.2rem;
  padding: 0 0.6rem;
  border-radius: 99rem;
  background: var(--cor-fundo);
  color: var(--cor-texto);
  font-size: 1.3rem;
  font-weight: 700;
}

/* SEGMENTADO: opções de mesma largura num trilho */

.seletorOpcoes--segmentado {
  gap: 0;
  padding: 0.4rem;
  border-radius: 1.2rem;
  background: var(--cor-terciaria);
}

.seletorOpcoes--segmentado .seletorOpcoes__opcao {
  flex: 1 1 0;
  border-radius: 0.9rem;
}

.seletorOpcoes--segmentado .seletorOpcoes__opcao:not(.seletorOpcoes__opcao--selecionada) {
  background: transparent;
}

/* CHIPS: pílulas do tamanho do rótulo */

.seletorOpcoes--chips {
  flex-wrap: wrap;
}

.seletorOpcoes--chips .seletorOpcoes__opcao {
  padding: 0 1.6rem;
  border-radius: 99rem;
}

.seletorOpcoes--chips .seletorOpcoes__opcao--selecionada {
  padding-right: 0.8rem;
}

.seletorOpcoes--chips .seletorOpcoes__opcao:not(.seletorOpcoes__opcao--selecionada) {
  padding-right: 1.6rem;
}
</style>
