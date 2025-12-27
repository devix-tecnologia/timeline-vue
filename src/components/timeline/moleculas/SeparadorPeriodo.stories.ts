import SeparadorPeriodo from './SeparadorPeriodo.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/SeparadorPeriodo',
  component: SeparadorPeriodo,
  argTypes: {
    aparencia: {
      control: { type: 'select' },
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
  dataSeparador: new Date('2023-05-03T15:00Z'),
  mesNome: 'Janeiro',
};
