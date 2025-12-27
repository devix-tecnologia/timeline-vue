import Topo from './Topo.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/Topo',
  component: Topo,
  argTypes: {},
} as Meta<typeof Topo>;

const Template: StoryFn<typeof Topo> = (args) => ({
  components: { Topo: Topo },
  setup() {
    return { args };
  },
  template: '<Topo :titulo="args.titulo" :escuro="args.escuro"  />',
});

export const Claro = Template.bind({});
Claro.args = {
  titulo: 'Topo claro',
  escuro: false,
};

export const Escuro = Template.bind({});
Escuro.args = {
  titulo: 'Topo escuro',
  escuro: true,
};
