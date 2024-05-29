import EditarEvento from './EditarEvento.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Eventos/Organismos/EditarEvento',
  component: EditarEvento,
  parameters: {
    componentSubtitle:
      'Este componente serve como tela única de edição do evento. Possui <slots> que carregam conteúdo em suas respectivas áreas: #conteudo e #salvamento.',
  },
  argTypes: {},
} as Meta<typeof EditarEvento>;

function atualizarEstado(estadoNovo: string) {
  this.estadoEdicao = estadoNovo;
}

const Template: StoryFn<typeof EditarEvento> = (args) => ({
  components: { EditarEvento },
  setup() {
    return { args };
  },
  template:
    '<EditarEvento :dadosEvento="args.dadosEvento" :aoClicar="args.aoClicar" :salvarVisivel="args.salvarVisivel" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  salvarVisivel: true,
  aoClicar: (evento) => alert('Olá!'),
};

export const SalvarInvisivel = Template.bind({});
SalvarInvisivel.args = {
  salvarVisivel: false,
  aoClicar: (evento) => alert('Olá!'),
};
