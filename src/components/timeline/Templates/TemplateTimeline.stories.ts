import TemplateTimeline from "./TemplateTimeline.vue";
import { Meta, StoryFn } from "@storybook/vue3";
// import { dadosEventoDetalhado, dadosPerfil } from "../EventoDetalhado.mock";
import { dadosEventos, dadosPerfil } from "../organismos/Timeline.mock";
export default {
  title: "Devix/Eventos/Templates/TemplateTimeline",
  component: TemplateTimeline,
  parameters: {
    componentSubtitle: "Tela de detalhes do evento.",
  },
  argTypes: {},
} as Meta<typeof TemplateTimeline>;

const perfilMock = dadosPerfil;
const eventoMock = dadosEventos.length > 1 ? dadosEventos : dadosEventos[0];
const templateValue = dadosEventos.length > 1 ? '<Timeline :perfilTimeline="args.perfilTimeline" :eventosTimeline="args.eventosTimeline" />' : '<EventoDetalhe :perfilEvento="args.perfilTimeline" :dadosEvento="args.eventosTimeline" />';

const Template: StoryFn<typeof TemplateTimeline> = (args) => ({
  components: { TemplateTimeline },
  setup() {
    return { args };
  },
  template: templateValue,
});

export const Padrao = Template.bind({});
Padrao.args = {
  perfilTimeline: perfilMock,
  eventosTimeline: eventoMock
};