<template>
  <article
    data-testid="evento-cartao"
    class="eventoCartao"
    :class="classes"
    :aria-current="ehAtual ? 'true' : undefined"
    @click="handleClick"
  >
    <div class="eventoCartao__trilho" aria-hidden="true">
      <IconeCategoria :iconeCategoria="categoria.icone" :tipo="bordaCategoria" />
    </div>

    <div class="eventoCartao__corpo">
      <header class="eventoCartao__cabecalho">
        <div class="eventoCartao__horario">
          <Hora :hora="horaPrincipal" />
          <div v-if="realizadoEm" class="eventoCartao__previsto">
            previsto
            <Hora :hora="previstoPara" aparencia="riscada" />
          </div>
        </div>
        <SeloStatus :status="status" />
      </header>

      <h4 class="eventoCartao__titulo">
        <button v-if="clicavel" type="button" class="eventoCartao__acao">{{ titulo }}</button>
        <template v-else>{{ titulo }}</template>
      </h4>
      <p v-if="subtitulo" class="eventoCartao__subtitulo">{{ subtitulo }}</p>

      <ul class="eventoCartao__etiquetas">
        <li class="eventoCartao__etiqueta">{{ categoria.nome }}</li>
        <li
          v-if="rotuloCriticidade"
          class="eventoCartao__etiqueta eventoCartao__etiqueta--criticidade"
        >
          {{ rotuloCriticidade }}
        </li>
        <li v-if="textoDestaque" class="eventoCartao__etiqueta eventoCartao__etiqueta--destaque">
          {{ textoDestaque }}
        </li>
      </ul>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import Hora from '../atomos/Hora.vue';
import IconeCategoria from '../atomos/IconeCategoria.vue';
import SeloStatus from '../atomos/SeloStatus.vue';
import { Categoria, Status, Criticidade } from '../type';

const ROTULOS_CRITICIDADE: Record<Criticidade, string | undefined> = {
  baixa: undefined,
  media: 'Prioridade média',
  alta: 'Prioridade alta',
};

const BORDAS_CRITICIDADE: Record<Criticidade, string | undefined> = {
  baixa: undefined,
  media: 'alerta',
  alta: 'importante',
};

/**
 * Evento da timeline na aparência `cartoes`: mesmas props e mesmo `click` do
 * EventoTimeline, para que a Timeline troque um pelo outro.
 */
export default defineComponent({
  name: 'EventoTimelineCartao',
  components: {
    Hora,
    IconeCategoria,
    SeloStatus,
  },
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
  },
  emits: {
    click: (_mouseEvent: MouseEvent) => true,
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
      rotuloCriticidade: computed(() => ROTULOS_CRITICIDADE[props.criticidade]),
      bordaCategoria: computed(() => BORDAS_CRITICIDADE[props.criticidade]),
      classes: computed(() => [
        `eventoCartao--${props.status}`,
        `eventoCartao--criticidade-${props.criticidade}`,
        {
          // `atual` é a classe que a Timeline procura para rolar até o evento.
          atual: props.ehAtual,
          'eventoCartao--clicavel': props.clicavel,
        },
      ]),
    };
  },
});
</script>

<style scoped>
/* Largura, cor e espaçamento do trilho vêm da Timeline; fora dela, o trilho não tem linha. */
.eventoCartao {
  display: grid;
  grid-template-columns: var(--trilho-largura, 5.6rem) minmax(0, 1fr);
  align-items: start;
  color: var(--cor-texto);
}

.eventoCartao__trilho {
  position: relative;
  align-self: stretch;
  display: flex;
  justify-content: center;
  padding-top: 1.4rem;
}

.eventoCartao__trilho::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: calc(-1 * var(--trilho-espaco, 0rem));
  left: calc(50% - 1px);
  width: 2px;
  background: var(--trilho-cor, transparent);
}

.eventoCartao__trilho :deep(.areaCategoria) {
  position: relative;
  z-index: 1;
  display: block;
  width: auto;
  padding: 0;
}

.eventoCartao__corpo {
  --eventoCartao-destaque: transparent;

  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.2rem 1.6rem 1.4rem 2rem;
  border: 1px solid color-mix(in srgb, var(--cor-texto) 15%, transparent);
  border-radius: 1rem;
  background: var(--cor-terciaria);
  box-shadow: inset 0.4rem 0 0 var(--eventoCartao-destaque);
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}

.eventoCartao--criticidade-media .eventoCartao__corpo {
  --eventoCartao-destaque: var(--cor-alerta);
}

.eventoCartao--criticidade-alta .eventoCartao__corpo {
  --eventoCartao-destaque: var(--cor-importante);
}

/* Eventos encerrados perdem o preenchimento; o cancelado ganha borda tracejada. */
.eventoCartao--realizado .eventoCartao__corpo,
.eventoCartao--adiado .eventoCartao__corpo,
.eventoCartao--cancelado .eventoCartao__corpo {
  background: transparent;
}

.eventoCartao--cancelado .eventoCartao__corpo {
  border-style: dashed;
}

.eventoCartao--cancelado .eventoCartao__titulo,
.eventoCartao--cancelado .eventoCartao__acao {
  text-decoration: line-through;
}

.eventoCartao--atrasado .eventoCartao__corpo {
  border-color: var(--cor-alerta);
}

/* O EventoTimeline pinta `.atual` com estilo global; no cartão, só o corpo muda de fundo. */
.eventoCartao.atual,
.eventoCartao.atual:hover {
  background-color: transparent;
}

.eventoCartao.atual .eventoCartao__corpo {
  border: 2px solid var(--cor-primaria);
  background: var(--cor-selecao);
  color: var(--cor-texto-selecao);
}

.eventoCartao.atual :deep(.seloStatus__icone) {
  color: inherit;
}

.eventoCartao--clicavel {
  cursor: pointer;
}

.eventoCartao--clicavel:hover .eventoCartao__corpo {
  border-color: color-mix(in srgb, var(--cor-texto) 45%, transparent);
}

.eventoCartao:has(.eventoCartao__acao:focus-visible) .eventoCartao__corpo {
  outline: 3px solid var(--cor-acao);
  outline-offset: 2px;
}

.eventoCartao__cabecalho {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.eventoCartao__horario {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.8rem;
}

.eventoCartao__horario > .hora-padrao {
  font-size: 1.6rem;
  font-weight: 700;
}

.eventoCartao__horario :deep(.hora) {
  color: inherit;
}

.eventoCartao__previsto {
  display: inline-flex;
  align-items: baseline;
  gap: 0.4rem;
  font-size: 1.2rem;
}

.eventoCartao__previsto > .hora-riscada {
  font-size: 1.2rem;
}

.eventoCartao__titulo {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.3;
}

.eventoCartao__acao {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.eventoCartao__subtitulo {
  margin: 0;
  font-size: 1.4rem;
  line-height: 1.4;
  opacity: 0.85;
}

.eventoCartao__etiquetas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 0.4rem 0 0;
  padding: 0;
  list-style: none;
}

.eventoCartao__etiqueta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.2rem 0.8rem;
  border: 1px solid color-mix(in srgb, currentColor 25%, transparent);
  border-radius: 0.6rem;
  font-size: 1.2rem;
  line-height: 1.6rem;
}

.eventoCartao__etiqueta--criticidade::before {
  content: '';
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: var(--eventoCartao-destaque);
}

.eventoCartao__etiqueta--destaque {
  border-color: var(--cor-primaria);
  font-weight: 700;
}
</style>
