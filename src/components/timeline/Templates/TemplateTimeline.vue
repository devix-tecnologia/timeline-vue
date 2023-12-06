<template>
  <div class="pagina" data-testid="template-timeline">
    <Topo
      v-if="TemplateTimeline.topo.exibir"
      :titulo="TemplateTimeline.dados.perfil.nome"
      :escuro="false"
      @voltar-click="handleVoltarTela"
    />

    <Timeline
      v-if="TemplateTimeline.timeline.exibir"
      data-testid="timeline"
      :perfilTimeline="TemplateTimeline.dados.perfil"
      :eventosTimeline="TemplateTimeline.dados.eventosTimeline"
      @evento-click="selecionarEvento"
    />

    <Evento
      v-if="TemplateTimeline.dados.eventoAtual && TemplateTimeline.evento.exibir"
      data-testid="evento"
      :perfil="TemplateTimeline.dados.perfil"
      :evento="TemplateTimeline.dados.eventoAtual"
      @observacao-adicionar-click="handleObservacaoAdicionarClick"
      @status-editar-click="handleStatusEditarClick"
    />

    <EditarStatus
      v-if="TemplateTimeline.dados.eventoAtual && TemplateTimeline.editarStatus.exibir"
      :salvarVisivel="TemplateTimeline.editarStatus.exibir"
      :perfil="TemplateTimeline.dados.perfil"
      :evento="TemplateTimeline.dados.eventoAtual"
      @salvar-click="handleStatusSalvarClick"
      @cancelar-click="handleStatusCancelarClick"
    />

    <AdicionarObservacao
      v-if="TemplateTimeline.adicionarObservacao.exibir"
      :salvarVisivel="TemplateTimeline.adicionarObservacao.exibir"
      @adicionar-click="handleAdicionarObservacaoSalvarClick"
      @cancelar-click="handleObservacaoAdicionarCancelarClick"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef, reactive } from 'vue';
import 'material-symbols/outlined.css';

import { Perfil, Status } from '../type';
import { EventoDetalhado as TipoEventoDetalhado } from '../typeDetalhado';
import { Evento as TipoEvento } from '../type';

import Topo from '../moleculas/Topo.vue';
import Evento from '../organismos/EventoDetalhado.vue';
import Timeline from '../organismos/Timeline.vue';
import EditarStatus from './EditarStatus.vue';
import AdicionarObservacao from './AdicionarObservacao.vue';

export default defineComponent({
  props: {
    perfil: {
      required: true,
      type: Object as PropType<Perfil>,
    },
    eventos: {
      required: true,
      type: Array as PropType<TipoEventoDetalhado[]>,
    },
  },

  components: { Topo, Evento, Timeline, EditarStatus, AdicionarObservacao },

  emits: {
    onEventoTimelineClicked: (evento: TipoEventoDetalhado) => true,
    onEventoDetalhadoStatusEditClicked: () => true,
    onEventoDetalhadoObservacoesAddClicked: () => true,
    onEditarStatusSalvarClicked: (status: Status) => true,
    onEditarStatusCancelarClicked: (mouseEvent: MouseEvent) => true,
    onAdicionarObservacaoSalvarClicked: (mensagem: string) => true,
    onAdicionarObservacaoCancelarClicked: (mouseEvent: MouseEvent) => true,
  },

  setup(props, { emit }) {
    const eventosDetalhados = toRef(props, 'eventos');
    const eventoAtual = toRef<TipoEventoDetalhado | null>(null);

    // Função que converte um TipoEvento em EventoDetalhado
    const converterParaTipoDetalhado = (evento: TipoEvento): TipoEventoDetalhado => {
      return {
        ...evento,
        observacoes: [],
      };
    };

    // Função que converte um TipoDetalhado em TipoEvento
    const converterParaTipoEvento = (eventoDetalhado: TipoEventoDetalhado): TipoEvento => {
      const { observacoes, ...tipoEvento } = eventoDetalhado;
      return tipoEvento;
    };

    // Função que converte um array de TipoDetalhado em TipoEvento
    const converterArrayParaTipoEvento = (arrayDetalhado: TipoEventoDetalhado[]): TipoEvento[] => {
      return arrayDetalhado.map(converterParaTipoEvento);
    };

    const TemplateTimeline = reactive({
      topo: { exibir: true },
      timeline: { exibir: true },
      evento: { exibir: false },
      editarStatus: { exibir: false },
      adicionarObservacao: { exibir: false },
      dados: {
        eventos: toRef(props, 'eventos'),
        perfil: toRef(props, 'perfil'),
        eventosTimeline: converterArrayParaTipoEvento(eventosDetalhados.value),
        eventosDetalhados: eventosDetalhados,
        eventoAtual: eventoAtual,
        eventoDetalhado: eventoAtual,
      },
    });

    // Type guard para verificar se um objeto é do tipo EventoDetalhado
    const isEventoDetalhado = (
      evento: TipoEvento | TipoEventoDetalhado
    ): evento is TipoEventoDetalhado => {
      return 'observacoes' in evento;
    };

    const selecionarEvento = (evento: TipoEvento): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = true;
      TemplateTimeline.editarStatus.exibir = false;
      TemplateTimeline.adicionarObservacao.exibir = false;

      if (isEventoDetalhado(evento)) {
        TemplateTimeline.dados.eventoDetalhado = evento;
        TemplateTimeline.dados.eventoAtual = evento;
      } else {
        TemplateTimeline.dados.eventoDetalhado = converterParaTipoDetalhado(evento);
      }
    };

    const handleVoltarTela = (): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = true;
      TemplateTimeline.evento.exibir = false;
      TemplateTimeline.editarStatus.exibir = false;
      TemplateTimeline.adicionarObservacao.exibir = false;
    };

    const handleStatusEditarClick = (mouseEvent: MouseEvent): void => {
      TemplateTimeline.topo.exibir = false;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = false;
      TemplateTimeline.editarStatus.exibir = true;
      TemplateTimeline.adicionarObservacao.exibir = true;
    };

    const handleStatusSalvarClick = (status: Status): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = true;
      TemplateTimeline.editarStatus.exibir = false;
      TemplateTimeline.adicionarObservacao.exibir = false;
      emit('onEditarStatusSalvarClicked', status);
    };

    const handleStatusCancelarClick = (mouseEvent: MouseEvent): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = true;
      TemplateTimeline.adicionarObservacao.exibir = false;
      TemplateTimeline.editarStatus.exibir = false;
      emit('onEditarStatusCancelarClicked', mouseEvent);
    };

    const handleObservacaoAdicionarClick = (mouseEvent: MouseEvent): void => {
      TemplateTimeline.topo.exibir = false;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = false;
      TemplateTimeline.editarStatus.exibir = false;
      TemplateTimeline.adicionarObservacao.exibir = true;
    };

    const handleAdicionarObservacaoSalvarClick = (mensagem: string): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = true;
      TemplateTimeline.editarStatus.exibir = false;
      TemplateTimeline.adicionarObservacao.exibir = false;
      emit('onAdicionarObservacaoSalvarClicked', mensagem);
    };

    const handleObservacaoAdicionarCancelarClick = (mouseEvent: MouseEvent): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = true;
      TemplateTimeline.adicionarObservacao.exibir = false;
      TemplateTimeline.editarStatus.exibir = false;
      emit('onAdicionarObservacaoCancelarClicked', mouseEvent);
    };

    return {
      selecionarEvento,
      handleVoltarTela,
      handleStatusEditarClick,
      handleStatusCancelarClick,
      handleStatusSalvarClick,
      handleObservacaoAdicionarClick,
      handleAdicionarObservacaoSalvarClick,
      handleObservacaoAdicionarCancelarClick,
      TemplateTimeline,
    };
  },
});
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.pagina {
  width: 100%;
  height: 100%;
}
.evento {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.descricao {
  font-size: 1.4rem;
}
</style>
