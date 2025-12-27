import Observacoes from './Observacoes.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';
import { dadosEventoDetalhado } from '../EventoDetalhado.mock';

export default {
  title: 'Devix/Moleculas/Observacoes',
  component: Observacoes,
  argTypes: {},
} as Meta<typeof Observacoes>;

const observacoesMock = dadosEventoDetalhado[0].observacoes;

const Template: StoryFn<typeof Observacoes> = (args) => ({
  components: { Observacoes },
  setup() {
    const adicionarClick = (mouseEvent: MouseEvent) => {
      alert('Clicou no botão adicionar!');
    };

    return { adicionarClick, args };
  },
  template: '<Observacoes v-bind="args" @adicionarClick="adicionarClick" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  tituloBotao: 'Inserir observação',
  observacoes: observacoesMock,
};
