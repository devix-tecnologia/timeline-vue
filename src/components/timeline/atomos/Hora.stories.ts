import Hora from './Hora.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/Hora',
  component: Hora,
  argTypes: {
    hora: { control: { type: 'date' } },
    aparencia: {
      control: { type: 'select' },
      options: ['padrao', 'riscada'],
    },
  },
} as Meta<typeof Hora>;

const horaMock = new Date();

export const Padrao = { args: { hora: horaMock, aparencia: 'padrao' } };
export const Riscada = { args: { hora: horaMock, aparencia: 'riscada' } };
