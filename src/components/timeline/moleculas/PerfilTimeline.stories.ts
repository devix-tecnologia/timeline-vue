import PerfilTimeline from "./PerfilTimeline.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Devix/Timeline/Moleculas/PerfilTimeline",
  component: PerfilTimeline,
  argTypes: {},
} as Meta<typeof PerfilTimeline>;

const avatar =
  "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80";

const Template: StoryFn<typeof PerfilTimeline> = (args) => ({
  components: { PerfilTimeline: PerfilTimeline },
  setup() {
    return { args };
  },
  template: '<PerfilTimeline v-bind="args" style="position: relative"  />',
});

export const ComImagem = Template.bind({});
ComImagem.args = {
  imagemPerfil: avatar,
  nomePerfil: "Dona Maria",
  iconePerfil: "",
};

export const ComIcone = Template.bind({});
ComIcone.args = {
  imagemPerfil: "",
  nomePerfil: "Dona Maria",
  iconePerfil: "person",
};

export const ApenasTitulo = Template.bind({});
ApenasTitulo.args = {
  imagemPerfil: "",
  nomePerfil: "Dona Maria",
  iconePerfil: "",
};
