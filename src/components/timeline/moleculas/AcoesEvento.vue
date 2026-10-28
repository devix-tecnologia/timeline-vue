<template>
  <div class="acoesEvento" role="group" aria-label="Ações do evento" data-testid="acoes-evento">
    <Botao
      v-for="acao in acoes"
      :key="acao.id"
      class="acoesEvento__botao"
      :class="{ 'acoesEvento__botao--apenasIcone': acao.apenasIcone }"
      :aparencia="acao.principal ? 'preenchido' : 'outline'"
      :icone="acao.icone"
      :titulo="acao.apenasIcone ? '' : acao.rotulo"
      :aria-label="acao.apenasIcone ? acao.rotulo : undefined"
      :data-testid="`acao-${acao.id}`"
      @click="handleClick(acao, $event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Botao from '../atomos/Botao.vue';
import { AcaoEvento } from '../type';

/**
 * Botões das ações de um evento. O clique não sobe até o cartão, que tem o seu próprio
 * clique (abrir o evento).
 */
export default defineComponent({
  name: 'AcoesEvento',
  components: { Botao },
  props: {
    acoes: {
      required: true,
      type: Array as PropType<AcaoEvento[]>,
    },
  },
  emits: {
    acaoClick: (_acao: AcaoEvento, _mouseEvent: MouseEvent) => true,
  },
  setup(_props, { emit }) {
    const handleClick = (acao: AcaoEvento, mouseEvent: MouseEvent) => {
      mouseEvent.stopPropagation();
      emit('acaoClick', acao, mouseEvent);
    };

    return { handleClick };
  },
});
</script>

<style scoped>
/*
 * O Botao desenha o contorno na cor do texto; aqui as ações usam a cor de destaque,
 * a mesma do botão preenchido.
 */
.acoesEvento {
  --cor-texto: var(--cor-secundaria);
  display: flex;
  gap: 0.8rem;
}

/* Seletores com .btn para valer sobre os tamanhos do Botao (.btn.medio). */
.acoesEvento .acoesEvento__botao.btn {
  flex: 1 1 0;
  min-width: 0;
  min-height: 4.4rem;
  padding: 1rem 1.2rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.acoesEvento__botao :deep(.material-symbols-outlined) {
  padding-right: 0.8rem;
  font-size: 2rem;
}

.acoesEvento .acoesEvento__botao--apenasIcone.btn {
  flex: 0 0 5.6rem;
}

.acoesEvento__botao--apenasIcone :deep(.material-symbols-outlined) {
  padding-right: 0;
}

.acoesEvento__botao:focus-visible {
  outline: 3px solid var(--cor-acao);
  outline-offset: 2px;
}
</style>
