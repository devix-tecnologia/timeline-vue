import AdicionarObservacao from './AdicionarObservacao.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Eventos/Templates/AdicionarObservacao',
  component: AdicionarObservacao,
  parameters: {
    componentSubtitle: 'Tela de adicionar observação',
  },
  argTypes: {},
} as Meta<typeof AdicionarObservacao>;

const Template: StoryFn<typeof AdicionarObservacao> = (args) => ({
  components: { AdicionarObservacao },
  setup() {
    const handleAdicionarClick = (mensagem: string, mouseEvent: MouseEvent) => {
      alert(`Observação adicionada: ${mensagem}`);
    };
    return { handleAdicionarClick, args };
  },
  template:
    '<AdicionarObservacao :adicionarClick="handleAdicionarClick" :salvarVisivel="args.salvarVisivel" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  salvarVisivel: true,
};
