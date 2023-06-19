import "@fontsource/material-icons";
import TituloEvento from "./TituloEvento.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Devix/Eventos/Atomos/TituloEvento",
  component: TituloEvento,
  argTypes: {
    // titulo: { control: { type: String } },
  },
} as Meta<typeof TituloEvento>;

const tituloEventoMock = "titulo";

const Template: StoryFn<typeof TituloEvento> = (args) => ({
  components: { TituloEvento },
  setup() {
    return { args };
  },
  template: '<TituloEvento v-bind="args"  />',
});

export const Padrao = Template.bind({});
Padrao.args = { titulo: tituloEventoMock };
