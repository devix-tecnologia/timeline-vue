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

const formatoPorExtenso = new Intl.DateTimeFormat('pt-BR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const DIA_EM_MS = 24 * 60 * 60 * 1000;

// Chave: diferença em dias entre a data do separador e hoje.
const ROTULOS_RELATIVOS: Record<number, string> = {
  [-1]: 'Ontem',
  0: 'Hoje',
  1: 'Amanhã',
};

const inicioDoDia = (data: Date) => new Date(data.getFullYear(), data.getMonth(), data.getDate());

const doisDigitos = (numero: number) => String(numero).padStart(2, '0');

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
      dataIso: computed(() => {
        const data = props.dataSeparador;
        return `${data.getFullYear()}-${doisDigitos(data.getMonth() + 1)}-${doisDigitos(data.getDate())}`;
      }),
      dataPorExtenso: computed(() => {
        const texto = formatoPorExtenso.format(props.dataSeparador);
        return texto.charAt(0).toUpperCase() + texto.slice(1);
      }),
      rotuloRelativo: computed(() => {
        // Arredonda para absorver os dias de 23 h ou 25 h do horário de verão.
        const dias = Math.round(
          (inicioDoDia(props.dataSeparador).getTime() - inicioDoDia(new Date()).getTime()) /
            DIA_EM_MS
        );
        return ROTULOS_RELATIVOS[dias];
      }),
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
