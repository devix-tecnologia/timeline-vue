import AdiantarHorario from "./AdiantarHorario.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { dadosEventoDetalhado } from "../EventoDetalhado.mock";

export default {
  title: "Devix/Eventos/Templates/AdiantarHorario",
  component: AdiantarHorario,
  parameters: {
    componentSubtitle:
      "Tela de edição de horário. O usuário pode adiantar o horário da tarefa.",
  },
  argTypes: {},
} as Meta<typeof AdiantarHorario>;

const eventoUmMock = dadosEventoDetalhado[0];

const Template: StoryFn<typeof AdiantarHorario> = (args) => ({
  components: { AdiantarHorario },
  setup() {
    return { args };
  },
  template:
    '<AdiantarHorario :aoClicar="args.aoClicar" :salvarVisivel="args.salvarVisivel" :evento="args.dadosEvento" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  salvarVisivel: true,
  dadosEvento: eventoUmMock,
};
