import SeparadorPeriodo from './SeparadorPeriodo.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/SeparadorPeriodo',
  component: SeparadorPeriodo,
  argTypes: {
    aparencia: {
      control: { type: 'select' },
    },
  },
} as Meta<typeof SeparadorPeriodo>;

export const Padrao = {
  args: {
    dataSeparador: new Date('2023-05-03T15:00Z'),
    mesNome: 'Janeiro',
  },
};
