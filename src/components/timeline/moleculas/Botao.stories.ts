import Botao from "./Botao.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Devix/Eventos/Moleculas/Botao",
  component: Botao,
  parameters: {
    componentSubtitle:
      "Este componente possui um <slot> padrão que carrega conteúdo dentro do botão. Por padrão, ícone e título são passados por props, mas podem ser sobrescritos pelo conteúdo do slot.",
  },
  argTypes: {
    aparencia: {
      control: { type: "select" },
      options: ["outline", "preenchido", "vazio"],
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
  template:
    '<Botao :titulo="args.titulo" :icone="args.icone" :aparencia="args.aparencia" :tamanho="args.tamanho" :aoClicar="args.aoClicar" />',
});

export const outline = Template.bind({});
outline.args = {
  titulo: "Botao claro",
  aparencia: "outline",
  tamanho: "medio",
  icone: "add",
  aoClicar: (evento) => alert("Olá, outline!"),
};

export const preenchido = Template.bind({});
preenchido.args = {
  titulo: "Botao escuro",
  aparencia: "preenchido",
  tamanho: "medio",
  icone: "home",
  aoClicar: (evento) => alert("Olá, Preenchido!"),
};

export const Pequeno = Template.bind({});
Pequeno.args = {
  titulo: "Botao escuro",
  aparencia: "outline",
  tamanho: "pequeno",
  icone: "",
  aoClicar: (evento) => alert("Olá, Pequeno!"),
};

export const Grande = Template.bind({});
Grande.args = {
  titulo: "Botao escuro",
  aparencia: "outline",
  tamanho: "grande",
  icone: "",
  aoClicar: (evento) => alert("Olá, Grande!"),
};

export const Vazio = Template.bind({});
Vazio.args = {
  titulo: "Botao como link",
  aparencia: "vazio",
  tamanho: "pequeno",
  icone: "",
  aoClicar: (evento) => alert("Olá, Vazio!"),
};
