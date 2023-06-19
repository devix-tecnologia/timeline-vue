import EditarDataHora from "./EditarDataHora.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { dadosEventoDetalhado } from "../EventoDetalhado.mock";

export default {
  title: "Devix/Eventos/Templates/EditarDataHora",
  component: EditarDataHora,
  parameters: {
    componentSubtitle: "Tela de edição de data/hora",
  },
  argTypes: {},
} as Meta<typeof EditarDataHora>;

const eventoUmMock = dadosEventoDetalhado[0];

const Template: StoryFn<typeof EditarDataHora> = (args) => ({
  components: { EditarDataHora },
  setup() {
    return { args };
  },
  template:
    '<EditarDataHora :aoClicar="args.aoClicar" :salvarVisivel="args.salvarVisivel" :dadosEvento="args.dadosEvento" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  dadosEvento: eventoUmMock,
  salvarVisivel: false,
  aoClicar: (evento) => alert("Olá!"),
};
