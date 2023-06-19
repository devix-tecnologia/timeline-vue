import StatusEvento from "./StatusEvento.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Devix/Eventos/Moleculas/StatusEvento",
  component: StatusEvento,
  argTypes: {
    aparencia: {
      control: { type: "select" },
      options: ["outline", "preenchido"],
    },
    status: {
      control: { type: "select" },
      options: ["planejado", "atrasado", "realizado", "cancelado", "adiado"],
    },
  },
} as Meta<typeof StatusEvento>;

const Template: StoryFn<typeof StatusEvento> = (args) => ({
  components: { StatusEvento },
  setup() {
    return { args };
  },
  template:
    '<StatusEvento :aparencia="args.aparencia" :aoClicar="args.aoClicar" :status="args.status"  />',
});

export const Planejado = Template.bind({});
Planejado.args = {
  status: "planejado",
  aparencia: "outline",
  aoClicar: (evento) => alert("Olá, planejado!"),
};

export const Atrasado = Template.bind({});
Atrasado.args = {
  status: "atrasado",
  aparencia: "outline",
  aoClicar: (evento) => alert("Olá, atrasado!"),
};

export const Realizado = Template.bind({});
Realizado.args = {
  status: "realizado",
  aparencia: "outline",
  aoClicar: (evento) => alert("Olá, realizado!"),
};

export const Cancelado = Template.bind({});
Cancelado.args = {
  status: "cancelado",
  aparencia: "outline",
  aoClicar: (evento) => alert("Olá, cancelado!"),
};

export const Adiado = Template.bind({});
Adiado.args = {
  status: "adiado",
  aparencia: "outline",
  aoClicar: (evento) => alert("Olá, adiado!"),
};
