<template>
  <article
    data-testid="evento-pendente"
    class="eventoPendente"
    :class="{ 'eventoPendente--clicavel': clicavel }"
    @click="handleClick"
  >
    <!-- O cartão só recebe pendentes que passaram do horário, ainda que o status não diga. -->
    <MarcoStatus class="eventoPendente__marco" status="atrasado" />
    <p class="eventoPendente__rotulo">{{ rotulo }}</p>

    <div class="eventoPendente__textos">
      <h4 class="eventoPendente__titulo">
        <button v-if="clicavel" type="button" class="eventoPendente__acao">
          {{ evento.titulo }}
        </button>
        <template v-else>{{ evento.titulo }}</template>
      </h4>
      <p v-if="evento.subtitulo" class="eventoPendente__subtitulo">{{ evento.subtitulo }}</p>
      <p class="eventoPendente__apoio">{{ previsto }}</p>
    </div>
    <span
      v-if="clicavel"
      class="material-symbols-outlined eventoPendente__seta"
      data-icone="chevron_right"
      aria-hidden="true"
    ></span>

    <AcoesEvento
      v-if="evento.acoes && evento.acoes.length > 0"
      class="eventoPendente__acoes"
      :acoes="evento.acoes"
      @acao-click="(acao, mouseEvent) => $emit('acaoClick', acao, mouseEvent)"
    />
  </article>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import 'material-symbols/outlined.css';
import MarcoStatus from '../atomos/MarcoStatus.vue';
import AcoesEvento from './AcoesEvento.vue';
import { AcaoEvento, Evento } from '../type';
import { dataCurta, horaCurta, rotuloRelativoDoDia } from '../utils/datas';

/**
 * Evento pendente que já passou do horário, em destaque no topo da agenda:
 * "Pendente de ontem", o título, o cliente, quando estava previsto e as ações.
 */
export default defineComponent({
  name: 'EventoPendente',
  components: { MarcoStatus, AcoesEvento },
  props: {
    evento: {
      required: true,
      type: Object as PropType<Evento>,
    },
  },
  emits: {
    click: (_mouseEvent: MouseEvent) => true,
    acaoClick: (_acao: AcaoEvento, _mouseEvent: MouseEvent) => true,
  },
  setup(props, { emit }) {
    const clicavel = computed(() => props.evento.clicavel !== false);

    // O botão do título recebe o foco e o Enter/Espaço; o clique dele sobe até aqui.
    const handleClick = (mouseEvent: MouseEvent) => {
      if (clicavel.value) {
        emit('click', mouseEvent);
      }
    };

    return {
      clicavel,
      handleClick,
      rotulo: computed(() => {
        const dia = props.evento.previstoPara;
        const relativo = rotuloRelativoDoDia(dia);
        return `Pendente de ${relativo ? relativo.toLowerCase() : dataCurta(dia)}`;
      }),
      previsto: computed(() => {
        const previsto = props.evento.previstoPara;
        return `Previsto para ${dataCurta(previsto)} às ${horaCurta(previsto)}`;
      }),
    };
  },
});
</script>

<style scoped>
.eventoPendente {
  display: grid;
  grid-template-columns: 3.2rem minmax(0, 1fr) auto;
  align-items: center;
  column-gap: 1.2rem;
  row-gap: 0.8rem;
  padding: 1.6rem;
  border: 1px solid color-mix(in srgb, var(--cor-alerta) 40%, var(--cor-fundo));
  border-radius: 1.2rem;
  background: color-mix(in srgb, var(--cor-alerta) 12%, var(--cor-fundo));
  color: var(--cor-texto);
}

.eventoPendente--clicavel {
  cursor: pointer;
}

.eventoPendente:has(.eventoPendente__acao:focus-visible) {
  outline: 3px solid var(--cor-acao);
  outline-offset: 2px;
}

/* O anel do marcador acompanha o fundo tingido do cartão. */
.eventoPendente__marco {
  box-shadow: none;
}

.eventoPendente__rotulo {
  grid-column: 2 / -1;
  margin: 0;
  color: color-mix(in srgb, var(--cor-alerta) 35%, var(--cor-texto));
  font-size: 1.5rem;
  font-weight: 600;
}

.eventoPendente__textos {
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.eventoPendente__titulo {
  margin: 0;
  font-size: 1.9rem;
  font-weight: 700;
  line-height: 2.4rem;
}

.eventoPendente__acao {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.eventoPendente__subtitulo {
  margin: 0;
  font-size: 1.5rem;
  line-height: 2rem;
}

.eventoPendente__apoio {
  margin: 0;
  font-size: 1.4rem;
  line-height: 2rem;
  opacity: 0.85;
}

/* Ícone no pseudo-elemento, para o axe não medir a ligadura como texto. */
.eventoPendente .eventoPendente__seta {
  grid-column: 3;
  color: var(--cor-texto);
  font-size: 2.4rem;
}

.eventoPendente__seta::before {
  content: attr(data-icone);
}

.eventoPendente__acoes {
  grid-column: 1 / -1;
  margin-top: 0.4rem;
}
</style>
