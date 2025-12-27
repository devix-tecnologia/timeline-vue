import '@fontsource/material-icons';
import BoxData from './BoxData.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/BoxData',
  component: BoxData,
  argTypes: {
    // dataBox: { control: { type: String } },
    aparencia: {
      control: { type: 'select' },
      options: ['padrao', 'escuro', 'claro'],
    },
  },
} as Meta<typeof BoxData>;

const Template: StoryFn<typeof BoxData> = (args) => ({
  components: { BoxData },
  setup() {
    return { args };
  },
  template: '<BoxData v-bind="args"  />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  dataNumero: '01',
  aparencia: 'padrao',
};

export const Escuro = Template.bind({});
Escuro.args = {
  dataNumero: '01',
  aparencia: 'escuro',
};

export const Claro = Template.bind({});
Claro.args = {
  dataNumero: '01',
  aparencia: 'claro',
};
