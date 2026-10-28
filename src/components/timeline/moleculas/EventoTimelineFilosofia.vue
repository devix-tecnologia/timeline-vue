<template>
  <article
    data-testid="evento-filosofia"
    class="eventoFilosofia"
    :class="classes"
    :aria-current="ehAtual ? 'true' : undefined"
    @click="handleClick"
  >
    <div class="eventoFilosofia__hora">
      <Hora :hora="horaPrincipal" />
    </div>

    <div class="eventoFilosofia__trilho" aria-hidden="true">
      <MarcoStatus :status="status" />
    </div>

    <div class="eventoFilosofia__cartao">
      <header class="eventoFilosofia__cabecalho">
        <h4 class="eventoFilosofia__titulo">
          <button v-if="clicavel" type="button" class="eventoFilosofia__acao">{{ titulo }}</button>
          <template v-else>{{ titulo }}</template>
        </h4>
        <SeloStatus :status="status" aparencia="preenchido" />
      </header>
      <p v-if="subtitulo" class="eventoFilosofia__subtitulo">{{ subtitulo }}</p>
      <p v-if="realizadoEm" class="eventoFilosofia__apoio">Previsto para {{ horaPrevista }}</p>
      <p v-if="textoDestaque" class="eventoFilosofia__apoio">{{ textoDestaque }}</p>
      <AcoesEvento
        v-if="acoes && acoes.length > 0"
        class="eventoFilosofia__acoes"
        :acoes="acoes"
        @acao-click="(acao, mouseEvent) => $emit('acaoClick', acao, mouseEvent)"
      />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import Hora from '../atomos/Hora.vue';
import MarcoStatus from '../atomos/MarcoStatus.vue';
import SeloStatus from '../atomos/SeloStatus.vue';
import AcoesEvento from './AcoesEvento.vue';
import { AcaoEvento, Categoria, Criticidade, Status } from '../type';
import { horaCurta } from '../utils/datas';

/**
 * Evento da timeline na aparência `filosofia`: a hora à esquerda, o marcador do status sobre
 * o trilho e um cartão com título, cliente, status por extenso e ações. Recebe as mesmas
 * props e emite o mesmo `click` do EventoTimeline, mais as `acoes` e o `acaoClick`.
 */
export default defineComponent({
  name: 'EventoTimelineFilosofia',
  components: { Hora, MarcoStatus, SeloStatus, AcoesEvento },
  props: {
    status: {
      required: true,
      type: String as PropType<Status>,
    },
    criticidade: {
      required: true,
      type: String as PropType<Criticidade>,
    },
    ehAtual: {
      required: false,
      type: Boolean,
      default: false,
    },
    previstoPara: {
      required: true,
      type: Date,
    },
    realizadoEm: {
      required: false,
      type: Date as PropType<Date | null>,
    },
    categoria: {
      required: true,
      type: Object as PropType<Categoria>,
    },
    titulo: {
      required: true,
      type: String,
    },
    subtitulo: {
      required: false,
      type: String,
    },
    textoDestaque: {
      required: false,
      type: String,
    },
    clicavel: {
      required: false,
      type: Boolean,
      default: true,
    },
    acoes: {
      required: false,
      type: Array as PropType<AcaoEvento[]>,
    },
  },
  emits: {
    click: (_mouseEvent: MouseEvent) => true,
    acaoClick: (_acao: AcaoEvento, _mouseEvent: MouseEvent) => true,
  },
  setup(props, { emit }) {
    // O botão do título recebe o foco e o Enter/Espaço; o clique dele sobe até aqui.
    const handleClick = (mouseEvent: MouseEvent) => {
      if (props.clicavel) {
        emit('click', mouseEvent);
      }
    };

    return {
      handleClick,
      horaPrincipal: computed(() => props.realizadoEm ?? props.previstoPara),
      horaPrevista: computed(() => horaCurta(props.previstoPara)),
      classes: computed(() => [
        `eventoFilosofia--${props.status}`,
        {
          // `atual` é a classe que a Timeline procura para rolar até o evento.
          atual: props.ehAtual,
          'eventoFilosofia--clicavel': props.clicavel,
        },
      ]),
    };
  },
});
</script>

<style scoped>
/* Cor e espaçamento do trilho vêm da Timeline; fora dela, o trilho não tem linha. */
.eventoFilosofia {
  display: grid;
  grid-template-columns: 5.6rem 4.4rem minmax(0, 1fr);
  align-items: start;
  column-gap: 0.8rem;
  color: var(--cor-texto);
}

.eventoFilosofia__hora {
  padding-top: 1.8rem;
}

.eventoFilosofia__hora > .hora-padrao {
  color: var(--cor-texto);
  font-size: 1.8rem;
  font-weight: 700;
}

.eventoFilosofia__trilho {
  position: relative;
  align-self: stretch;
  display: flex;
  justify-content: center;
  padding-top: 1.4rem;
}

.eventoFilosofia__trilho::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: calc(-1 * var(--trilho-espaco, 0rem));
  left: calc(50% - 1px);
  width: 2px;
  background: var(--trilho-cor, transparent);
}

.eventoFilosofia__trilho > .marcoStatus {
  position: relative;
  z-index: 1;
}

.eventoFilosofia__cartao {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.4rem 1.6rem 1.6rem;
  border: 1px solid var(--cor-linha);
  border-radius: 1.2rem;
  background: var(--cor-fundo);
  transition: border-color 0.15s ease;
}

.eventoFilosofia--clicavel {
  cursor: pointer;
}

.eventoFilosofia--clicavel:hover .eventoFilosofia__cartao {
  border-color: color-mix(in srgb, var(--cor-texto) 35%, transparent);
}

.eventoFilosofia:has(.eventoFilosofia__acao:focus-visible) .eventoFilosofia__cartao {
  outline: 3px solid var(--cor-acao);
  outline-offset: 2px;
}

/* O EventoTimeline pinta `.atual` com estilo global; aqui só o cartão ganha a borda. */
.eventoFilosofia.atual,
.eventoFilosofia.atual:hover {
  background-color: transparent;
}

.eventoFilosofia.atual .eventoFilosofia__cartao {
  border-color: var(--cor-primaria);
  box-shadow: 0 0 0 1px var(--cor-primaria);
}

/* A hora fica fora do cartão: não usa a cor de texto da seleção que o `.atual` global impõe. */
.eventoFilosofia.atual .eventoFilosofia__hora > .hora {
  color: var(--cor-texto) !important;
}

.eventoFilosofia__cabecalho {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.8rem;
}

.eventoFilosofia__titulo {
  margin: 0;
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 2.2rem;
}

.eventoFilosofia__acao {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.eventoFilosofia__subtitulo {
  margin: 0;
  font-size: 1.5rem;
  line-height: 2rem;
}

.eventoFilosofia__apoio {
  margin: 0;
  color: var(--cor-apoio);
  font-size: 1.4rem;
  line-height: 2rem;
}

.eventoFilosofia__acoes {
  margin-top: 1rem;
}
</style>
