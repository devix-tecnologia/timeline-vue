import Observacoes from "./Observacoes.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { dadosEventoDetalhado } from "../EventoDetalhado.mock";

export default {
  title: "Devix/Eventos/Moleculas/Observacoes",
  component: Observacoes,
  argTypes: {},
} as Meta<typeof Observacoes>;

const observacoesMock = dadosEventoDetalhado[0].observacoes;

const Template: StoryFn<typeof Observacoes> = (args) => ({
  components: { Observacoes },
  setup() {
    return { args };
  },
  template:
    '<Observacoes :tituloBotao="args.tituloBotao" :aoClicar="args.aoClicarBotao" :observacoes="args.observacoes" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  tituloBotao: "Inserir observação",
  observacoes: observacoesMock,
  aoClicarBotao: (evento) => alert("Inserir observação!"),
};
