import AdicionarObservacao from "./AdicionarObservacao.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Devix/Eventos/Templates/AdicionarObservacao",
  component: AdicionarObservacao,
  parameters: {
    componentSubtitle: "Tela de adicionar observação",
  },
  argTypes: {},
} as Meta<typeof AdicionarObservacao>;

const Template: StoryFn<typeof AdicionarObservacao> = (args) => ({
  components: { AdicionarObservacao },
  setup() {
    return { args };
  },
  template:
    '<AdicionarObservacao :aoClicar="args.aoClicar" :salvarVisivel="args.salvarVisivel" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  salvarVisivel: true,
  aoClicar: (evento) => alert("Olá!"),
};
