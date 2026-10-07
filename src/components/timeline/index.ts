// Organismos
import Timeline from './organismos/Timeline.vue';
import TemplateTimeline from './templates/TemplateTimeline.vue';
import EventoTimeline from './moleculas/EventoTimeline.vue';
import EventoTimelineCartao from './moleculas/EventoTimelineCartao.vue';
import EventoDetalhado from './organismos/EventoDetalhado.vue';
import EditarEvento from './organismos/EditarEvento.vue';

// Tipos
import * as Tipos from './type';

import * as TiposDetalhado from './typeDetalhado';

// Só o tipo: o plugin registra como componente tudo o que este arquivo exporta como objeto.
export type { AparenciaTimeline } from './organismos/Timeline.types';

export {
  Timeline,
  Tipos,
  TiposDetalhado,
  EventoTimeline,
  EventoTimelineCartao,
  EventoDetalhado,
  EditarEvento,
  TemplateTimeline,
};
