import Timeline from "./Timeline.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { dadosEventos, dadosPerfil } from "./Timeline.mock";
import { Evento } from "../type";

export default {
  title: "Devix/Eventos/Organismos/Timeline",
  component: Timeline,
  parameters: {
    componentSubtitle: "Linha do tempo padrão com identidade da Devix",
  },
  argTypes: {},
} as Meta<typeof Timeline>;

const perfilMock = dadosPerfil;

const eventosPorDataMock = dadosEventos;

function atualizarDatas(eventos: Evento[]) {
  const agora = new Date();
  const mesAtual = agora.getMonth() + 1;

  for (let i = 0; i < eventos.length; i++) {
    const evento = eventos[i];
    const mesEvento = evento.data.getMonth() + 1;

    if (mesEvento >= mesAtual) {
      evento.data.setMonth(agora.getMonth(), agora.getDate());
      evento.previsto.setMonth(agora.getMonth(), agora.getDate());
    }
  }
}
atualizarDatas(dadosEventos);

const Template: StoryFn<typeof Timeline> = (args) => ({
  components: { Timeline: Timeline },
  setup() {
    return { args };
  },
  template:
    '<Timeline :perfilTimeline="args.perfilTimeline" :eventosTimeline="args.eventosTimeline" style="position: relative" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  perfilTimeline: perfilMock,
  eventosTimeline: eventosPorDataMock,
};
