import AreaSalvamento from "./AreaSalvamento.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Devix/Eventos/Moleculas/AreaSalvamento",
  component: AreaSalvamento,
  parameters: {
    componentSubtitle:
      "Este componente possui um <slot> padrão que carrega conteúdo acima dos botões",
  },
  argTypes: {},
} as Meta<typeof AreaSalvamento>;
const Template: StoryFn<typeof AreaSalvamento> = (args) => ({
  components: { AreaSalvamento },
  setup() {
    return { args };
  },
  template: '<AreaSalvamento :aoClicar="args.aoClicar" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  aoClicar: (evento) => alert("Olá!"),
};
