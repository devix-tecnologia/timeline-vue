import Timeline from "./Timeline.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { dadosEventos, dadosPerfil } from "./Timeline.mock";
import { Evento } from "../type";

export default {
  title: "Devix/Eventos/Organismos/Timeline",
  component: Timeline,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Eb4gpZ5HsK3xPAErpd8TQl/timeline-ui?type=design&node-id=226-2538&mode=design&t=gtygrUm9znRhEPR6-4",
    },
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
    const emitEventoClicado = (evento: Evento) => {
      alert(`foi clicado no evento ${evento.titulo}`);
    };
    return { args, emitEventoClicado };
  },
  template:
    '<Timeline @eventoTimelineClicked="emitEventoClicado" :perfilTimeline="args.perfilTimeline" :eventosTimeline="args.eventosTimeline" style="position: relative" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  perfilTimeline: perfilMock,
  eventosTimeline: eventosPorDataMock,
};
