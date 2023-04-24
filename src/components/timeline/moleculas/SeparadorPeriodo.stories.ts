import SeparadorPeriodo from './SeparadorPeriodo.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Timeline/Moleculas/SeparadorPeriodo',
  component: SeparadorPeriodo,
  argTypes: {
    aparencia: {
      control: { type: 'select' },
      options: ['padrao', 'escuro', 'claro'],
    },
  },
} as Meta<typeof SeparadorPeriodo>;

const Template: StoryFn<typeof SeparadorPeriodo> = (args) => ({
  components: { SeparadorPeriodo: SeparadorPeriodo },
  setup() {
    return { args };
  },
  template: '<SeparadorPeriodo v-bind="args"  />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  dataSeparador: '01',
  mesNome: 'Janeiro',
  aparencia: 'padrao',
};

export const Escuro = Template.bind({});
Escuro.args = {
  dataSeparador: '01',
  mesNome: 'Janeiro',
  aparencia: 'escuro',
};

export const Claro = Template.bind({});
Claro.args = {
  dataSeparador: '01',
  mesNome: 'Janeiro',
  aparencia: 'claro',
};
