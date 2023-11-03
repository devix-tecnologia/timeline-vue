import TemplateTimeline from "./TemplateTimeline.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { dadosEventoDetalhado, dadosPerfil as dadosPerfilEvento } from "../EventoDetalhado.mock";
import { dadosEventos, dadosPerfil as dadosPerfilTimeline } from "../organismos/Timeline.mock";

export default {
  title: "Devix/Eventos/Templates/TemplateTimeline",
  component: TemplateTimeline,
  parameters: {
    componentSubtitle: "Timeline com tela de detalhes do evento.",
  },
  argTypes: {},
} as Meta<typeof TemplateTimeline>;


// Corrigir as datas inválidas em dadosEventoDetalhado[0] antes de usá-las
const eventoDetalhado = dadosEventoDetalhado[0];
const perfilEventoMock = dadosPerfilTimeline;

const perfilTimelineMock = dadosPerfilTimeline;
const eventosTimeline = dadosEventos;

const Template: StoryFn<typeof TemplateTimeline> = (args) => ({
  components: { TemplateTimeline },
  setup() {
    return { args };
  },
  template: '<TemplateTimeline :perfil="args.perfil" :eventos="args.eventos" />',
});

export const Timeline = Template.bind({});
Timeline.args = {
  perfil: perfilTimelineMock,
  eventos: eventosTimeline,
};

export const EventoDetalhado = Template.bind({});
EventoDetalhado.args = {
  perfil: perfilEventoMock,
  eventos: eventoDetalhado,  
};