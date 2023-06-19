import Observacoes from "./Observacoes.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Devix/Timeline/Moleculas/Observacoes",
  component: Observacoes,
  argTypes: {},
} as Meta<typeof Observacoes>;

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
  aoClicar: (evento) => alert("Inserir observação!"),
};
