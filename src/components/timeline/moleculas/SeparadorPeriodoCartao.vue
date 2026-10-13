<template>
  <div class="separadorCartao" data-testid="separador-cartao">
    <span class="separadorCartao__trilho" aria-hidden="true">
      <span class="separadorCartao__marco"></span>
    </span>
    <h3 class="separadorCartao__titulo">
      <time :datetime="dataIso">
        <span v-if="rotuloRelativo" class="separadorCartao__relativo">{{ rotuloRelativo }}</span>
        {{ dataPorExtenso }}
      </time>
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { dataIso, dataPorExtenso, rotuloRelativoDoDia } from '../utils/datas';

/**
 * Separador de dia da aparência `cartoes`: data por extenso, com "Ontem", "Hoje"
 * ou "Amanhã" quando couber.
 */
export default defineComponent({
  name: 'SeparadorPeriodoCartao',
  props: {
    dataSeparador: {
      required: true,
      type: Date,
    },
  },
  setup(props) {
    return {
      dataIso: computed(() => dataIso(props.dataSeparador)),
      dataPorExtenso: computed(() => dataPorExtenso(props.dataSeparador)),
      rotuloRelativo: computed(() => rotuloRelativoDoDia(props.dataSeparador)),
    };
  },
});
</script>

<style scoped>
/* Largura, cor e espaçamento do trilho vêm da Timeline; fora dela, o trilho não tem linha. */
.separadorCartao {
  display: grid;
  grid-template-columns: var(--trilho-largura, 5.6rem) minmax(0, 1fr);
  align-items: center;
  color: var(--cor-texto);
}

.separadorCartao__trilho {
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
}

.separadorCartao__trilho::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: calc(-1 * var(--trilho-espaco, 0rem));
  left: calc(50% - 1px);
  width: 2px;
  background: var(--trilho-cor, transparent);
}

/* O anel na cor do fundo separa o marco da linha do trilho. */
.separadorCartao__marco {
  position: relative;
  z-index: 1;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background: var(--cor-primaria);
  box-shadow: 0 0 0 0.4rem var(--cor-fundo);
}

.separadorCartao__titulo {
  padding: 1.2rem 0;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2.4rem;
}

.separadorCartao__relativo {
  display: inline-block;
  margin-right: 0.8rem;
  padding: 0 0.8rem;
  border-radius: 0.6rem;
  background: var(--cor-primaria);
  color: var(--cor-texto-selecao);
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
