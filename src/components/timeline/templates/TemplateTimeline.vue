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
      data-testid="evento-detalhado"
      :perfil="TemplateTimeline.dados.perfil"
      :evento="TemplateTimeline.dados.eventoAtual"
      @observacao-adicionar-click="handleObservacaoAdicionarClick"
      @status-editar-click="handleStatusEditarClick"
    />

    <EditarStatus
      v-if="TemplateTimeline.dados.eventoAtual && TemplateTimeline.editarStatus.exibir"
      data-testid="editar-status"
      :salvarVisivel="TemplateTimeline.editarStatus.exibir"
      :perfil="TemplateTimeline.dados.perfil"
      :evento="TemplateTimeline.dados.eventoAtual"
      @salvar-click="handleStatusSalvarClick"
      @cancelar-click="handleStatusCancelarClick"
    />

    <AdicionarObservacao
      v-if="TemplateTimeline.adicionarObservacao.exibir"
      data-testid="adicionar-observacao"
      :salvarVisivel="TemplateTimeline.adicionarObservacao.exibir"
      @adicionar-click="handleAdicionarObservacaoSalvarClick"
      @cancelar-click="handleObservacaoAdicionarCancelarClick"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef, reactive } from 'vue';
import type { DefineComponent } from 'vue';
import 'material-symbols/outlined.css';

import { Perfil, Status } from '../type';
import { EventoDetalhado as TipoEventoDetalhado } from '../typeDetalhado';
import { Evento as TipoEvento } from '../type';

import Topo from '../moleculas/Topo.vue';
import Evento from '../organismos/EventoDetalhado.vue';
import Timeline from '../organismos/Timeline.vue';
import EditarStatus from './EditarStatus.vue';
import AdicionarObservacao from './AdicionarObservacao.vue';

type Tela = 'Timeline' | 'Evento' | 'EditarStatus' | 'AdicionarObservacao';

export default defineComponent({
  components: { Topo, Evento, Timeline, EditarStatus, AdicionarObservacao },
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

  emits: {
    eventoTimelineClicked: (_evento: TipoEventoDetalhado, _mouseEvent: MouseEvent) => true,
    eventoStatusEditClicked: (_evento: TipoEventoDetalhado, _mouseEvent: MouseEvent) => true,
    eventoDetalhadoObservacoesAddClicked: (_evento: TipoEventoDetalhado, _mouseEvent: MouseEvent) =>
      true,
    editarStatusSalvarClicked: (
      _evento: TipoEventoDetalhado,
      _status: Status,
      _mouseEvent: MouseEvent
    ) => true,
    editarStatusCancelarClicked: (_evento: TipoEventoDetalhado, _mouseEvent: MouseEvent) => true,
    adicionarObservacaoSalvarClicked: (
      _evento: TipoEventoDetalhado,
      _mensagem: string,
      _mouseEvent: MouseEvent
    ) => true,
    adicionarObservacaoCancelarClicked: (_evento: TipoEventoDetalhado, _mouseEvent: MouseEvent) =>
      true,
    voltarClick: (_mouseEvent: MouseEvent) => true,
  },

  setup(props, { emit }) {
    const eventosDetalhados = toRef(props, 'eventos');
    const eventoAtual = toRef<TipoEventoDetalhado | null>(null);

    const TemplateTimeline = reactive({
      topo: { exibir: true },
      timeline: { exibir: true },
      evento: { exibir: false },
      editarStatus: { exibir: false },
      adicionarObservacao: { exibir: false },
      dados: {
        eventos: toRef(props, 'eventos'),
        perfil: toRef(props, 'perfil'),
        eventosTimeline: eventosDetalhados,
        eventosDetalhados: eventosDetalhados,
        eventoAtual: eventoAtual,
      },
    });

    // Type guard para verificar se um objeto é do tipo EventoDetalhado
    const isEventoDetalhado = (
      evento: TipoEvento | TipoEventoDetalhado
    ): evento is TipoEventoDetalhado => {
      return 'observacoes' in evento;
    };

    const ativarTela = (tela: Tela) => {
      const telasComTopo: Tela[] = ['Timeline', 'Evento'];

      TemplateTimeline.topo.exibir = telasComTopo.includes(tela);
      TemplateTimeline.timeline.exibir = tela === 'Timeline';
      TemplateTimeline.evento.exibir = tela === 'Evento';
      TemplateTimeline.editarStatus.exibir = tela === 'EditarStatus';
      TemplateTimeline.adicionarObservacao.exibir = tela === 'AdicionarObservacao';
    };

    const selecionarEvento = (evento: TipoEvento, mouseEvent: MouseEvent): void => {
      if (!isEventoDetalhado(evento)) {
        return;
      }
      emit('eventoTimelineClicked', evento, mouseEvent);
      TemplateTimeline.dados.eventoAtual = evento;
      ativarTela('Evento');
    };

    const handleVoltarTela = (mouseEvent: MouseEvent): void => {
      if (TemplateTimeline.dados.eventoAtual) {
        ativarTela('Timeline');
      } else {
        emit('voltarClick', mouseEvent);
      }
    };

    const handleStatusEditarClick = (_mouseEvent: MouseEvent): void => {
      ativarTela('EditarStatus');
    };

    const handleStatusSalvarClick = (status: Status, mouseEvent: MouseEvent): void => {
      if (!TemplateTimeline.dados.eventoAtual) {
        return;
      }

      ativarTela('Evento');
      emit('editarStatusSalvarClicked', TemplateTimeline.dados.eventoAtual, status, mouseEvent);
    };

    const handleStatusCancelarClick = (mouseEvent: MouseEvent): void => {
      if (!TemplateTimeline.dados.eventoAtual) {
        return;
      }

      ativarTela('Evento');
      emit('editarStatusCancelarClicked', TemplateTimeline.dados.eventoAtual, mouseEvent);
    };

    const handleObservacaoAdicionarClick = (mouseEvent: MouseEvent): void => {
      if (TemplateTimeline.dados.eventoAtual) {
        emit(
          'eventoDetalhadoObservacoesAddClicked',
          TemplateTimeline.dados.eventoAtual,
          mouseEvent
        );
        ativarTela('AdicionarObservacao');
      }
    };

    const handleAdicionarObservacaoSalvarClick = (
      mensagem: string,
      mouseEvent: MouseEvent
    ): void => {
      if (!TemplateTimeline.dados.eventoAtual) {
        return;
      }

      ativarTela('Evento');
      emit(
        'adicionarObservacaoSalvarClicked',
        TemplateTimeline.dados.eventoAtual,
        mensagem,
        mouseEvent
      );
    };

    const handleObservacaoAdicionarCancelarClick = (mouseEvent: MouseEvent): void => {
      if (!TemplateTimeline.dados.eventoAtual) {
        return;
      }

      ativarTela('Evento');
      emit('adicionarObservacaoCancelarClicked', TemplateTimeline.dados.eventoAtual, mouseEvent);
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
}) as DefineComponent<Record<string, unknown>, Record<string, unknown>, any>;
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
