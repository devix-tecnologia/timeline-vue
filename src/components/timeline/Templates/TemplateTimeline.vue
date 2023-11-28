<template>
  <div class="pagina">
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
      :eventosTimeline="TemplateTimeline.dados.eventosTimeline"
      @evento-click="aoSelecionarEvento"
    />

    <Evento
      v-if="TemplateTimeline.dados.eventoAtual && TemplateTimeline.evento.exibir"
      data-testid="evento"
      :perfil="TemplateTimeline.dados.perfil"
      :evento="TemplateTimeline.dados.eventoAtual"
      @on-evento-detalhado-status-edit-clicked="aoEditarEvento"
      @on-evento-detalhado-observacoes-add-clicked="aoAdicionarObservacao"
    />

    <EditarStatus
      v-if="TemplateTimeline.dados.eventoAtual && TemplateTimeline.editarStatus.exibir"
      :salvarVisivel="TemplateTimeline.editarStatus.exibir"
      :perfil="TemplateTimeline.dados.perfil"
      :evento="TemplateTimeline.dados.eventoAtual"
      @on-editar-status-salvar-clicked="aoSalvarStatus"
      @on-editar-status-cancelar-clicked="aoCancelarStatus"
    />

    <AdicionarObservacao
      v-if="TemplateTimeline.adicionarObservacao.exibir"
      :salvarVisivel="TemplateTimeline.adicionarObservacao.exibir"
      @on-adicionar-observacao-salvar-clicked="aoSalvarObservacao"
      @on-adicionar-observacao-cancelar-clicked="aoCancelarObservacao"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef, reactive, computed } from 'vue';
import 'material-symbols/outlined.css';

import { Perfil, Status } from '../type';
import { EventoDetalhado } from '../typeDetalhado';
import { Evento as TipoEvento } from '../type';

import Topo from '../moleculas/Topo.vue';
import Evento from '../organismos/EventoDetalhado.vue';
import Timeline from '../organismos/Timeline.vue';
import EditarStatus from './EditarStatus.vue';
import AdicionarObservacao from './AdicionarObservacao.vue';
import TemplateEvento from './TemplateEvento.vue';

export default defineComponent({
  props: {
    perfil: {
      required: true,
      type: Object as PropType<Perfil>,
    },
    eventos: {
      required: true,
      type: Array as PropType<EventoDetalhado[]>,
    },
  },

  components: { Topo, Evento, Timeline, EditarStatus, AdicionarObservacao },

  emits: {
    onEventoTimelineClicked: (evento: EventoDetalhado) => true,
    onEventoDetalhadoStatusEditClicked: () => true,
    onEventoDetalhadoObservacoesAddClicked: () => true,
    onEditarStatusSalvarClicked: () => true,
    onEditarStatusCancelarClicked: () => true,
    onAdicionarObservacaoSalvarClicked: () => true,
    onAdicionarObservacaoCancelarClicked: () => true,
  },

  setup(props, { emit }) {
    const eventos = toRef(props, 'eventos');

    const eventoAtual = toRef<EventoDetalhado | null>(null);

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
        eventoDetalhado: eventoAtual,
      },
    });

    // const isEventoDetalhado = (evento: TipoEvento | EventoDetalhado): evento is EventoDetalhado => {
    //   return (evento as EventoDetalhado).observacoes !== undefined;
    // };

    // Type guard para verificar se um objeto é do tipo EventoDetalhado
    const isEventoDetalhado = (evento: TipoEvento | EventoDetalhado): evento is EventoDetalhado => {
      return 'observacoes' in evento;
    };

    // Função que converte um TipoEvento em EventoDetalhado
    const converterParaTipoDetalhado = (evento: TipoEvento): EventoDetalhado => {
      return {
        ...evento,
        observacoes: [],
      };
    };

    const aoSelecionarEvento = (evento: TipoEvento): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = true;
      TemplateTimeline.editarStatus.exibir = false;
      TemplateTimeline.adicionarObservacao.exibir = false;

      if (isEventoDetalhado(evento)) {
        TemplateTimeline.dados.eventoDetalhado = evento;
        TemplateTimeline.dados.eventoAtual = evento;
      } else {
        TemplateTimeline.dados.eventoDetalhado = converterParaTipoDetalhado(
          evento
        ) satisfies EventoDetalhado;
      }
    };

    const aoVoltarParaTelaAnterior = (): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = !TemplateTimeline.timeline.exibir;
      TemplateTimeline.evento.exibir = !TemplateTimeline.evento.exibir;
      TemplateTimeline.editarStatus.exibir = false;
      TemplateTimeline.adicionarObservacao.exibir = false;
    };

    const aoEditarEvento = (): void => {
      TemplateTimeline.topo.exibir = false;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = false;
      TemplateTimeline.editarStatus.exibir = true;
      TemplateTimeline.adicionarObservacao.exibir = true;
      emit('onEventoDetalhadoStatusEditClicked');
    };

    const aoSalvarStatus = (novoValor: Status): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = true;
      TemplateTimeline.editarStatus.exibir = false;
      TemplateTimeline.adicionarObservacao.exibir = false;
      emit('onEditarStatusSalvarClicked');
    };

    const aoCancelarStatus = (): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = true;
      TemplateTimeline.adicionarObservacao.exibir = false;
      TemplateTimeline.editarStatus.exibir = false;
      emit('onEditarStatusCancelarClicked');
    };

    const aoAdicionarObservacao = (): void => {
      TemplateTimeline.topo.exibir = false;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = false;
      TemplateTimeline.editarStatus.exibir = false;
      TemplateTimeline.adicionarObservacao.exibir = true;
      emit('onEventoDetalhadoObservacoesAddClicked');
    };

    const aoSalvarObservacao = (mensagem: string): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = true;
      TemplateTimeline.editarStatus.exibir = false;
      TemplateTimeline.adicionarObservacao.exibir = false;
      emit('onAdicionarObservacaoSalvarClicked');
    };

    const aoCancelarObservacao = (): void => {
      TemplateTimeline.topo.exibir = true;
      TemplateTimeline.timeline.exibir = false;
      TemplateTimeline.evento.exibir = true;
      TemplateTimeline.adicionarObservacao.exibir = false;
      TemplateTimeline.editarStatus.exibir = false;
      emit('onAdicionarObservacaoCancelarClicked');
    };

    return {
      aoSelecionarEvento,
      aoVoltarParaTelaAnterior,
      aoEditarEvento,
      aoSalvarStatus,
      aoCancelarStatus,
      aoAdicionarObservacao,
      aoSalvarObservacao,
      aoCancelarObservacao,
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
