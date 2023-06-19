import Observacoes from "./Observacoes.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { dadosEventoDetalhado } from "../organismos/EventoDetalhado.mock";

export default {
  title: "Devix/Timeline/Moleculas/Observacoes",
  component: Observacoes,
  argTypes: {},
} as Meta<typeof Observacoes>;

const observacoesMock = dadosEventoDetalhado[0].observacoes;

const Template: StoryFn<typeof Observacoes> = (args) => ({
  components: { Observacoes },
  setup() {
    return { args };
  },
  template: '<Observacoes v-bind="args"  />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  titulo: "Inserir observação",
  observacoes: observacoesMock,
  aoClicar: (evento) => alert("Inserir observação!"),
};
