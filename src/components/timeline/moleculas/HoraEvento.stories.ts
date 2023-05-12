import HoraEvento from "./HoraEvento.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Devix/Timeline/Moleculas/HoraEvento",
  component: HoraEvento,
  argTypes: {
    // aparencia: {
    //   control: { type: 'select' },
    //   options: ['padrao', 'riscada'],
    // },
  },
} as Meta<typeof HoraEvento>;

const Template: StoryFn<typeof HoraEvento> = (args) => ({
  components: { HoraEvento: HoraEvento },
  setup() {
    return { args };
  },
  template: '<HoraEvento v-bind="args"  />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  horaPrevista: new Date("2023-05-03T15:00Z"),
  horaRealizada: "",
  // aparencia: 'padrao',
};

export const Atrasado = Template.bind({});
Atrasado.args = {
  horaPrevista: new Date("2023-05-03T15:00Z"),
  horaRealizada: new Date("2023-05-03T16:00Z"),
  // aparencia: 'riscada',
};
