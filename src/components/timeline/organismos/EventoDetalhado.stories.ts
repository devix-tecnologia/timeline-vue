import EventoDetalhado from "./EventoDetalhado.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { dadosEventoDetalhado, dadosPerfil } from "../EventoDetalhado.mock";
import { Perfil } from '../type';
import { EventoDetalhado as TipoEventoDetalhado } from '../typeDetalhado';

export default {
  title: "Devix/Eventos/Organismos/EventoDetalhado",
  component: EventoDetalhado,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Eb4gpZ5HsK3xPAErpd8TQl/timeline-ui?type=design&node-id=226-2078&mode=design&t=gtygrUm9znRhEPR6-4",
    },
    componentSubtitle:
      "Tela de detalhes do evento. Este componente possui um slot que altera o conteúdo da área de descrição. Para usá-lo basta acrescentar <template #descricao></template> na tela que for usar o componente.",
  },
  argTypes: {},
} as Meta<typeof EventoDetalhado>;

const perfilMock = dadosPerfil;
const eventoUmMock = dadosEventoDetalhado[0];
const eventoDoisMock = dadosEventoDetalhado[1];

const Template: StoryFn<typeof EventoDetalhado> = (args) => ({
  components: { EventoDetalhado },
  setup() {
    return { args };
  },
  template:
    '<EventoDetalhado :perfil="args.perfil" :evento="args.evento" />'
});

export const Padrao = Template.bind({});
Padrao.args = {
  perfil: perfilMock satisfies Perfil,
  evento: eventoUmMock satisfies TipoEventoDetalhado,
};

export const SemPerfil = Template.bind({});
SemPerfil.args = {
  evento: eventoDoisMock satisfies TipoEventoDetalhado,
};
