import '@fontsource/material-icons';
import IconeStatus from './IconeStatus.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/IconeStatus',
  component: IconeStatus,
  argTypes: {
    // status: { control: { type: String } },
    status: {
      control: { type: 'select' },
      options: ['planejado', 'realizado', 'cancelado', 'adiado', 'atrasado'],
    },
  },
} as Meta<typeof IconeStatus>;

export const Planejado = { args: { status: 'planejado' } };
export const Realizado = { args: { status: 'realizado' } };
export const Cancelado = { args: { status: 'cancelado' } };
export const Adiado = { args: { status: 'adiado' } };
export const Atrasado = { args: { status: 'atrasado' } };
