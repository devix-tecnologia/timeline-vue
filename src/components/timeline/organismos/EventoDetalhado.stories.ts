import EventoDetalhado from "./EventoDetalhado.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { dadosEventoDetalhado, dadosPerfil } from "../EventoDetalhado.mock";

export default {
  title: "Devix/Eventos/Organismos/EventoDetalhado",
  component: EventoDetalhado,
  parameters: {
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
    '<EventoDetalhado :perfilEvento="args.perfilEvento" :dadosEvento="args.dadosEvento" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  perfilEvento: perfilMock,
  dadosEvento: eventoUmMock,
};

export const SemPerfil = Template.bind({});
SemPerfil.args = {
  dadosEvento: eventoDoisMock,
};
