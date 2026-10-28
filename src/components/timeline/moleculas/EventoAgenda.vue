<template>
  <article
    data-testid="evento-agenda"
    class="eventoAgenda"
    :class="{ 'eventoAgenda--clicavel': clicavel }"
    @click="handleClick"
  >
    <div class="eventoAgenda__hora">
      <Hora :hora="evento.realizado ?? evento.previstoPara" />
    </div>

    <div class="eventoAgenda__corpo">
      <div class="eventoAgenda__cabecalho">
        <div class="eventoAgenda__textos">
          <h4 class="eventoAgenda__titulo">
            <button v-if="clicavel" type="button" class="eventoAgenda__acao">
              {{ evento.titulo }}
            </button>
            <template v-else>{{ evento.titulo }}</template>
          </h4>
          <p v-if="evento.subtitulo" class="eventoAgenda__subtitulo">{{ evento.subtitulo }}</p>
          <p v-if="evento.destaque" class="eventoAgenda__apoio">{{ evento.destaque }}</p>
          <SeloStatus
            v-if="evento.status !== 'planejado'"
            class="eventoAgenda__selo"
            :status="evento.status"
            aparencia="preenchido"
          />
        </div>
        <span
          v-if="clicavel"
          class="material-symbols-outlined eventoAgenda__seta"
          data-icone="chevron_right"
          aria-hidden="true"
        ></span>
      </div>

      <AcoesEvento
        v-if="evento.acoes && evento.acoes.length > 0"
        :acoes="evento.acoes"
        @acao-click="(acao, mouseEvent) => $emit('acaoClick', acao, mouseEvent)"
      />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import 'material-symbols/outlined.css';
import Hora from '../atomos/Hora.vue';
import SeloStatus from '../atomos/SeloStatus.vue';
import AcoesEvento from './AcoesEvento.vue';
import { AcaoEvento, Evento } from '../type';

/**
 * Evento na lista da agenda: a hora numa coluna, separada por um divisor do título, do
 * cliente e da descrição, com as ações embaixo. O status só aparece quando não é
 * `planejado`.
 */
export default defineComponent({
  name: 'EventoAgenda',
  components: { Hora, SeloStatus, AcoesEvento },
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

    return { clicavel, handleClick };
  },
});
</script>

<style scoped>
.eventoAgenda {
  display: grid;
  grid-template-columns: 7.2rem minmax(0, 1fr);
  padding: 1.6rem;
  border: 1px solid var(--cor-linha);
  border-radius: 1.2rem;
  background: var(--cor-fundo);
  color: var(--cor-texto);
  transition: border-color 0.15s ease;
}

.eventoAgenda--clicavel {
  cursor: pointer;
}

.eventoAgenda--clicavel:hover {
  border-color: color-mix(in srgb, var(--cor-texto) 35%, transparent);
}

.eventoAgenda:has(.eventoAgenda__acao:focus-visible) {
  outline: 3px solid var(--cor-acao);
  outline-offset: 2px;
}

.eventoAgenda__hora > .hora-padrao {
  color: var(--cor-texto);
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.4rem;
}

.eventoAgenda__corpo {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding-left: 1.6rem;
  border-left: 1px solid var(--cor-linha);
}

.eventoAgenda__cabecalho {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.eventoAgenda__textos {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  min-width: 0;
}

.eventoAgenda__titulo {
  margin: 0;
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 2.4rem;
}

.eventoAgenda__acao {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.eventoAgenda__subtitulo {
  margin: 0;
  font-size: 1.5rem;
  line-height: 2rem;
}

.eventoAgenda__apoio {
  margin: 0;
  color: var(--cor-apoio);
  font-size: 1.4rem;
  line-height: 2rem;
}

.eventoAgenda__selo {
  margin-top: 0.6rem;
}

/* Ícone no pseudo-elemento, para o axe não medir a ligadura como texto. */
.eventoAgenda .eventoAgenda__seta {
  flex: none;
  color: var(--cor-apoio);
  font-size: 2.4rem;
}

.eventoAgenda__seta::before {
  content: attr(data-icone);
}
</style>
