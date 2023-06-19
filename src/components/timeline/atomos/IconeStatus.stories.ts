import "@fontsource/material-icons";
import IconeStatus from "./IconeStatus.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Devix/Eventos/Atomos/IconeStatus",
  component: IconeStatus,
  argTypes: {
    // status: { control: { type: String } },
    status: {
      control: { type: "select" },
      options: ["planejado", "realizado", "cancelado", "adiado", "atrasado"],
    },
  },
} as Meta<typeof IconeStatus>;

const Template: StoryFn<typeof IconeStatus> = (args) => ({
  components: { IconeStatus },
  setup() {
    return { args };
  },
  template: '<IconeStatus v-bind="args"  />',
});

export const Planejado = Template.bind({});
Planejado.args = { status: "planejado" };

export const Realizado = Template.bind({});
Realizado.args = { status: "realizado" };

export const Cancelado = Template.bind({});
Cancelado.args = { status: "cancelado" };

export const Adiado = Template.bind({});
Adiado.args = { status: "adiado" };

export const Atrasado = Template.bind({});
Atrasado.args = { status: "atrasado" };
