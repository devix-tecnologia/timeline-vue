<template>
  <section class="agendaEventos" aria-label="Agenda" data-testid="agenda-eventos">
    <SeparadorPeriodoAgiliza :dataSeparador="dia" navegavel @click="$emit('diaClick', $event)" />

    <SeletorOpcoes v-model="filtro" aparencia="chips" rotulo="Filtrar eventos" :opcoes="opcoes" />

    <template v-if="filtro !== 'concluidos'">
      <EventoPendente
        v-for="evento in secoes.atrasados"
        :key="chave(evento)"
        :evento="evento"
        @click="$emit('eventoClick', evento, $event)"
        @acao-click="(acao, mouseEvent) => $emit('acaoClick', evento, acao, mouseEvent)"
      />

      <template v-if="secoes.proximos.length > 0">
        <h3 class="agendaEventos__secao">Próximos eventos</h3>
        <EventoAgenda
          v-for="evento in secoes.proximos"
          :key="chave(evento)"
          :evento="evento"
          @click="$emit('eventoClick', evento, $event)"
          @acao-click="(acao, mouseEvent) => $emit('acaoClick', evento, acao, mouseEvent)"
        />
      </template>
    </template>

    <template v-if="filtro !== 'pendentes' && secoes.resolvidos.length > 0">
      <h3 class="agendaEventos__secao">Concluídos</h3>
      <EventoAgenda
        v-for="evento in secoes.resolvidos"
        :key="chave(evento)"
        :evento="evento"
        @click="$emit('eventoClick', evento, $event)"
        @acao-click="(acao, mouseEvent) => $emit('acaoClick', evento, acao, mouseEvent)"
      />
    </template>

    <p v-if="vazia" class="agendaEventos__vazia">{{ mensagemVazia }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, ref, PropType } from 'vue';
import SeparadorPeriodoAgiliza from '../moleculas/SeparadorPeriodoAgiliza.vue';
import SeletorOpcoes from '../moleculas/SeletorOpcoes.vue';
import EventoPendente from '../moleculas/EventoPendente.vue';
import EventoAgenda from '../moleculas/EventoAgenda.vue';
import { AcaoEvento, Evento } from '../type';
import { separarAgenda } from '../utils/agenda';
import { FILTROS_AGENDA, FiltroAgenda, ROTULOS_FILTRO_AGENDA } from './AgendaEventos.types';

const MENSAGENS_VAZIA: Record<FiltroAgenda, string> = {
  todos: 'Nenhum evento neste dia.',
  pendentes: 'Nenhum evento pendente.',
  concluidos: 'Nenhum evento concluído neste dia.',
};

/**
 * Agenda de um dia: os pendentes que passaram do horário em destaque, os próximos eventos
 * e os já concluídos, com filtro por chips. Complementa a Timeline na aparência `agiliza`,
 * que mostra o histórico.
 */
export default defineComponent({
  name: 'AgendaEventos',
  components: { SeparadorPeriodoAgiliza, SeletorOpcoes, EventoPendente, EventoAgenda },
  props: {
    eventos: {
      required: true,
      type: Array as PropType<Evento[]>,
    },
    dia: {
      type: Date,
      default: () => new Date(),
    },
    filtroInicial: {
      type: String as PropType<FiltroAgenda>,
      default: 'todos',
      validator: (filtro: string) => (FILTROS_AGENDA as readonly string[]).includes(filtro),
    },
  },
  emits: {
    eventoClick: (_evento: Evento, _mouseEvent: MouseEvent) => true,
    acaoClick: (_evento: Evento, _acao: AcaoEvento, _mouseEvent: MouseEvent) => true,
    diaClick: (_mouseEvent: MouseEvent) => true,
  },
  setup(props) {
    const filtro = ref<FiltroAgenda>(props.filtroInicial);
    const secoes = computed(() => separarAgenda(props.eventos, props.dia, new Date()));
    const quantidadePendentes = computed(
      () => secoes.value.atrasados.length + secoes.value.proximos.length
    );

    const vazia = computed(() => {
      const { atrasados, proximos, resolvidos } = secoes.value;
      const pendentes = atrasados.length + proximos.length;
      return {
        todos: pendentes + resolvidos.length === 0,
        pendentes: pendentes === 0,
        concluidos: resolvidos.length === 0,
      }[filtro.value];
    });

    return {
      filtro,
      secoes,
      vazia,
      mensagemVazia: computed(() => MENSAGENS_VAZIA[filtro.value]),
      opcoes: computed(() =>
        FILTROS_AGENDA.map((valor) => ({
          valor,
          rotulo: ROTULOS_FILTRO_AGENDA[valor],
          contador: valor === 'pendentes' ? quantidadePendentes.value : undefined,
        }))
      ),
      chave: (evento: Evento) => `${evento.data.getTime()}-${evento.titulo}`,
    };
  },
});
</script>

<style scoped>
.agendaEventos {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  color: var(--cor-texto);
}

.agendaEventos__secao {
  margin: 1.2rem 0 0;
  font-size: 1.9rem;
  font-weight: 700;
  line-height: 2.4rem;
}

.agendaEventos__vazia {
  margin: 1.2rem 0;
  color: var(--cor-apoio);
  font-size: 1.5rem;
  text-align: center;
}
</style>
