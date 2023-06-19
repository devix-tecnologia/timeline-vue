import Botao from "./Botao.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Devix/Timeline/Moleculas/Botao",
  component: Botao,
  argTypes: {
    aparencia: {
      control: { type: "select" },
      options: ["outline", "preenchido"],
    },
    tamanho: {
      control: { type: "select" },
      options: ["pequeno", "medio", "grande"],
    },
  },
} as Meta<typeof Botao>;

const Template: StoryFn<typeof Botao> = (args) => ({
  components: { Botao },
  setup() {
    return { args };
  },
  template: '<Botao v-bind="args"  />',
});

export const outline = Template.bind({});
outline.args = {
  titulo: "Botao claro",
  aparencia: "outline",
  tamanho: "medio",
  icone: "add",
};

export const preenchido = Template.bind({});
preenchido.args = {
  titulo: "Botao escuro",
  aparencia: "preenchido",
  tamanho: "medio",
  icone: "home",
};

export const Pequeno = Template.bind({});
Pequeno.args = {
  titulo: "Botao escuro",
  aparencia: "outline",
  tamanho: "pequeno",
  icone: "",
};

export const Grande = Template.bind({});
Grande.args = {
  titulo: "Botao escuro",
  aparencia: "outline",
  tamanho: "grande",
  icone: "",
};
