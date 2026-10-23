// Organismos
import Timeline from './organismos/Timeline.vue';
import TemplateTimeline from './templates/TemplateTimeline.vue';
import TemplateAgenda from './templates/TemplateAgenda.vue';
import AgendaEventos from './organismos/AgendaEventos.vue';
import EventoTimeline from './moleculas/EventoTimeline.vue';
import EventoTimelineCartao from './moleculas/EventoTimelineCartao.vue';
import EventoTimelineFilosofia from './moleculas/EventoTimelineFilosofia.vue';
import EventoDetalhado from './organismos/EventoDetalhado.vue';
import EditarEvento from './organismos/EditarEvento.vue';

// Tipos
import * as Tipos from './type';

import * as TiposDetalhado from './typeDetalhado';

// Só o tipo: o plugin registra como componente tudo o que este arquivo exporta como objeto.
export type { AparenciaTimeline } from './organismos/Timeline.types';
export type { FiltroAgenda } from './organismos/AgendaEventos.types';
export type { VisaoAgenda } from './templates/TemplateAgenda.types';

export {
  Timeline,
  Tipos,
  TiposDetalhado,
  EventoTimeline,
  EventoTimelineCartao,
  EventoTimelineFilosofia,
  AgendaEventos,
  EventoDetalhado,
  EditarEvento,
  TemplateTimeline,
  TemplateAgenda,
};
