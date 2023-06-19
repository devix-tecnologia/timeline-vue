import BotaoStatus from "./BotaoStatus.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Devix/Timeline/Moleculas/BotaoStatus",
  component: BotaoStatus,
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
} as Meta<typeof BotaoStatus>;

const Template: StoryFn<typeof BotaoStatus> = (args) => ({
  components: { BotaoStatus },
  setup() {
    return { args };
  },
  template:
    '<BotaoStatus :aparencia="args.aparencia" :aoClicar="args.aoClicar" :status="args.status" />',
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
  aoClicar: (evento) => alert("Olá, relizado!"),
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
