import Hora from "./Hora.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Devix/Timeline/Atomos/Hora",
  component: Hora,
  argTypes: {
    hora: { control: { type: "date" } },
    aparencia: {
      control: { type: "select" },
      options: ["padrao", "riscada"],
    },
  },
} as Meta<typeof Hora>;

const horaMock = new Date();

const Template: StoryFn<typeof Hora> = (args) => ({
  components: { Hora },
  setup() {
    return { args };
  },
  template: '<Hora :hora="args.hora" :aparencia="args.aparencia" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  hora: horaMock,
  aparencia: "padrao",
};

export const Riscada = Template.bind({});
Riscada.args = {
  hora: horaMock,
  aparencia: "riscada",
};
