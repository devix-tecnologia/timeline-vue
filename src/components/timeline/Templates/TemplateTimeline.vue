<template>
  <div class="pagina" data-testid="template-timeline">
    <topo
      v-if="TemplateTimeline.topo.exibir"
      :titulo="TemplateTimeline.dados.perfil.nome"
      :escuro="false"
      @voltar-click="aoVoltarParaTelaAnterior"
    />

    <Timeline
      v-if="TemplateTimeline.timeline.exibir"
      data-testid="timeline"
      :perfilTimeline="TemplateTimeline.dados.perfil"
      :eventos-timeline="TemplateTimeline.dados.eventosTimeline"
      @eventoClick="aoSelecionarEvento"
    />

    <EventoDetalhado
      v-if="TemplateTimeline.evento.exibir && TemplateTimeline.dados.eventoAtual"
      data-testid="evento"
      :perfil="TemplateTimeline.dados.perfil"
      :evento="TemplateTimeline.dados.eventoAtual"
      @statusEditarClick="handleStatusEditarClick"
      @observacaoAdicionarClick="handleObservacaoAdicionarClick"
    />

    <EditarStatus
      v-if="TemplateTimeline.dados.eventoAtual && TemplateTimeline.editarStatus.exibir"
      :salvarVisivel="TemplateTimeline.editarStatus.exibir"
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
import { defineComponent, PropType, toRef, reactive, computed } from 'vue';
import 'material-symbols/outlined.css';

import { Perfil, Status } from '../type';
import { EventoDetalhado as TipoEventoDetalhado } from '../typeDetalhado';
import { Evento as TipoEvento } from '../type';

import Topo from '../moleculas/Topo.vue';
import EventoDetalhado from '../organismos/EventoDetalhado.vue';
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

  components: { Topo, EventoDetalhado, Timeline, EditarStatus, AdicionarObservacao },

  emits: {
    eventoClick: (evento: TipoEventoDetalhado) => true,
    statusEditarClick: (mouseEvent: MouseEvent) => true,
    observacaoAdicionarClick: (mouseEvent: MouseEvent) => true,
    statusSalvarClick: (status: Status, mouseEvent: MouseEvent) => true,
    statusCancelarClick: (mouseEvent: MouseEvent) => true,
    observacaoAdicionarSalvarClick: (mensagem: String, mouseEvent: MouseEvent) => true,
    observacaoAdicionarCancelarClick: (mouseEvent: MouseEvent) => true,
  },

  setup(props, { emit }) {
    const eventos = toRef(props, 'eventos');

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
        eventosTimeline: eventos,
        eventoAtual: eventoAtual,
      },
    });

    const isEventoDetalhado = (evento: TipoEvento | TipoEventoDetalhado): evento is TipoEventoDetalhado => {
      return (evento as TipoEventoDetalhado).observacoes !== undefined;
    };

    const aoSelecionarEvento = (evento: TipoEvento): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = true;
      TemplateTimeline.editarStatus.exibir = false;
      TemplateTimeline.adicionarObservacao.exibir = false;
      if (isEventoDetalhado(evento)) {
        TemplateTimeline.dados.eventoAtual = evento;
        emit('eventoClick', evento);
      }
    };

    const aoVoltarParaTelaAnterior = (): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = !TemplateTimeline.timeline.exibir;
      TemplateTimeline.evento.exibir = !TemplateTimeline.evento.exibir;
      TemplateTimeline.editarStatus.exibir = false;
      TemplateTimeline.adicionarObservacao.exibir = false;
    };

    const handleStatusEditarClick = (mouseEvent: MouseEvent): void => {
      TemplateTimeline.topo.exibir = false;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = false;
      TemplateTimeline.editarStatus.exibir = true;
      TemplateTimeline.adicionarObservacao.exibir = true;
      emit('statusEditarClick', mouseEvent);
    };

    const handleStatusSalvarClick = (status: Status, mouseEvent: MouseEvent): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = true;
      TemplateTimeline.editarStatus.exibir = false;
      TemplateTimeline.adicionarObservacao.exibir = false;
      emit('statusSalvarClick', status, mouseEvent);
    };

    const handleStatusCancelarClick = (mouseEvent: MouseEvent): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = true;
      TemplateTimeline.adicionarObservacao.exibir = false;
      TemplateTimeline.editarStatus.exibir = false;
      emit('statusCancelarClick', mouseEvent);
    };

    const handleObservacaoAdicionarClick = (mouseEvent: MouseEvent): void => {
      TemplateTimeline.topo.exibir = false;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = false;
      TemplateTimeline.editarStatus.exibir = false;
      TemplateTimeline.adicionarObservacao.exibir = true;
      emit('observacaoAdicionarClick', mouseEvent);
    };

    const handleAdicionarObservacaoSalvarClick = (
      mensagem: String,
      mouseEvent: MouseEvent
    ): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = true;
      TemplateTimeline.editarStatus.exibir = false;
      TemplateTimeline.adicionarObservacao.exibir = false;
      emit('observacaoAdicionarSalvarClick', mensagem, mouseEvent);
    };

    const handleObservacaoAdicionarCancelarClick = (mouseEvent: MouseEvent): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = true;
      TemplateTimeline.adicionarObservacao.exibir = false;
      TemplateTimeline.editarStatus.exibir = false;
      emit('observacaoAdicionarCancelarClick', mouseEvent);
    };

    return {
      aoSelecionarEvento,
      aoVoltarParaTelaAnterior,
      handleStatusEditarClick,
      handleStatusSalvarClick,
      handleStatusCancelarClick,
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
