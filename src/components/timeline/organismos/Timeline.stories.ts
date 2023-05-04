import Timeline from "./Timeline.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { dadosEventos, dadosPerfil } from "./Timeline.mock";

export default {
  title: "Devix/Timeline/Organismos/Timeline",
  component: Timeline,
  parameters: {
    componentSubtitle: "Linha do tempo padrão com identidade da Devix",
  },
  argTypes: {},
} as Meta<typeof Timeline>;

const perfilMock = dadosPerfil;

const eventosPorDataMock = dadosEventos;

function atualizarDatas() {
  const agora = new Date();
  const diaAtual = agora.getDay();
  const mesAtual = agora.getMonth() + 1;
  const anoAtual = agora.getFullYear();
  const numeroMesAtual = mesAtual < 10 ? `0${mesAtual}` : mesAtual;
  const numeroDiaAtual = diaAtual < 10 ? `0${diaAtual}` : diaAtual;

  for (let i = 0; i < dadosEventos.length; i++) {
    const evento = dadosEventos[i];
    const diaEvento = evento.data.getDay();
    const mesEvento = evento.data.getMonth() + 1;
    const anoEvento = evento.data.getFullYear();
    const horaEvento = evento.data.getUTCHours();
    const numeroHoraEvento = horaEvento < 10 ? `0${horaEvento}` : horaEvento;

    const dataEvento =
      anoAtual +
      "-" +
      numeroMesAtual +
      "-" +
      numeroDiaAtual +
      "T" +
      numeroHoraEvento +
      ":00Z";

    if (mesEvento >= mesAtual) {
      evento.data = new Date(dataEvento);
      evento.previsto = new Date(dataEvento);
    }
  }
}
atualizarDatas();

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
