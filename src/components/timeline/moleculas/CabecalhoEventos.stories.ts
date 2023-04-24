import CabecalhoEventos from './CabecalhoEventos.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Timeline/Moleculas/CabecalhoEventos',
  component: CabecalhoEventos,
  argTypes: {},
} as Meta<typeof CabecalhoEventos>;

const avatar =
  'https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80';

const Template: StoryFn<typeof CabecalhoEventos> = (args) => ({
  components: { CabecalhoEventos: CabecalhoEventos },
  setup() {
    return { args };
  },
  template: '<CabecalhoEventos v-bind="args" style="position: relative"  />',
});

export const ComImagem = Template.bind({});
ComImagem.args = {
  imagemCabecalho: avatar,
  nomeCabecalho: 'Dona Maria',
  icone: '',
};

export const ComIcone = Template.bind({});
ComIcone.args = {
  imagemCabecalho: '',
  nomeCabecalho: 'Dona Maria',
  icone: 'person',
};

export const ApenasTitulo = Template.bind({});
ApenasTitulo.args = {
  imagemCabecalho: '',
  nomeCabecalho: 'Dona Maria',
  icone: '',
};
