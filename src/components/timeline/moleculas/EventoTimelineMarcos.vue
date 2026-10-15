<template>
  <article
    data-testid="evento-marcos"
    class="eventoMarcos"
    :class="classes"
    :aria-current="ehAtual ? 'true' : undefined"
    @click="handleClick"
  >
    <div class="eventoMarcos__hora">
      <Hora :hora="horaPrincipal" />
    </div>

    <div class="eventoMarcos__trilho" aria-hidden="true">
      <MarcoStatus :status="status" />
    </div>

    <div class="eventoMarcos__cartao">
      <header class="eventoMarcos__cabecalho">
        <h4 class="eventoMarcos__titulo">
          <button v-if="clicavel" type="button" class="eventoMarcos__acao">{{ titulo }}</button>
          <template v-else>{{ titulo }}</template>
        </h4>
        <SeloStatus :status="status" aparencia="preenchido" />
      </header>
      <p v-if="subtitulo" class="eventoMarcos__subtitulo">{{ subtitulo }}</p>
      <p v-if="realizadoEm" class="eventoMarcos__apoio">Previsto para {{ horaPrevista }}</p>
      <p v-if="textoDestaque" class="eventoMarcos__apoio">{{ textoDestaque }}</p>
      <AcoesEvento
        v-if="acoes && acoes.length > 0"
        class="eventoMarcos__acoes"
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
 * Evento da timeline na aparência `marcos`: a hora à esquerda, o marcador do status sobre
 * o trilho e um cartão com título, cliente, status por extenso e ações. Recebe as mesmas
 * props e emite o mesmo `click` do EventoTimeline, mais as `acoes` e o `acaoClick`.
 */
export default defineComponent({
  name: 'EventoTimelineMarcos',
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
        `eventoMarcos--${props.status}`,
        {
          // `atual` é a classe que a Timeline procura para rolar até o evento.
          atual: props.ehAtual,
          'eventoMarcos--clicavel': props.clicavel,
        },
      ]),
    };
  },
});
</script>

<style scoped>
/* Cor e espaçamento do trilho vêm da Timeline; fora dela, o trilho não tem linha. */
.eventoMarcos {
  display: grid;
  grid-template-columns: 5.6rem 4.4rem minmax(0, 1fr);
  align-items: start;
  column-gap: 0.8rem;
  color: var(--cor-texto);
}

.eventoMarcos__hora {
  padding-top: 1.8rem;
}

.eventoMarcos__hora > .hora-padrao {
  color: var(--cor-texto);
  font-size: 1.8rem;
  font-weight: 700;
}

.eventoMarcos__trilho {
  position: relative;
  align-self: stretch;
  display: flex;
  justify-content: center;
  padding-top: 1.4rem;
}

.eventoMarcos__trilho::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: calc(-1 * var(--trilho-espaco, 0rem));
  left: calc(50% - 1px);
  width: 2px;
  background: var(--trilho-cor, transparent);
}

.eventoMarcos__trilho > .marcoStatus {
  position: relative;
  z-index: 1;
}

.eventoMarcos__cartao {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.4rem 1.6rem 1.6rem;
  border: 1px solid var(--cor-linha);
  border-radius: 1.2rem;
  background: var(--cor-fundo);
  transition: border-color 0.15s ease;
}

.eventoMarcos--clicavel {
  cursor: pointer;
}

.eventoMarcos--clicavel:hover .eventoMarcos__cartao {
  border-color: color-mix(in srgb, var(--cor-texto) 35%, transparent);
}

.eventoMarcos:has(.eventoMarcos__acao:focus-visible) .eventoMarcos__cartao {
  outline: 3px solid var(--cor-acao);
  outline-offset: 2px;
}

/* O EventoTimeline pinta `.atual` com estilo global; aqui só o cartão ganha a borda. */
.eventoMarcos.atual,
.eventoMarcos.atual:hover {
  background-color: transparent;
}

.eventoMarcos.atual .eventoMarcos__cartao {
  border-color: var(--cor-primaria);
  box-shadow: 0 0 0 1px var(--cor-primaria);
}

/* A hora fica fora do cartão: não usa a cor de texto da seleção que o `.atual` global impõe. */
.eventoMarcos.atual .eventoMarcos__hora > .hora {
  color: var(--cor-texto) !important;
}

.eventoMarcos__cabecalho {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.8rem;
}

.eventoMarcos__titulo {
  margin: 0;
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 2.2rem;
}

.eventoMarcos__acao {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.eventoMarcos__subtitulo {
  margin: 0;
  font-size: 1.5rem;
  line-height: 2rem;
}

.eventoMarcos__apoio {
  margin: 0;
  color: var(--cor-apoio);
  font-size: 1.4rem;
  line-height: 2rem;
}

.eventoMarcos__acoes {
  margin-top: 1rem;
}
</style>
