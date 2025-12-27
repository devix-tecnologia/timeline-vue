import '@fontsource/material-icons';
import BoxData from './BoxData.vue';
import { Aparencias } from './BoxData.types';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/BoxData',
  component: BoxData,
  argTypes: {
    aparencia: {
      control: { type: 'select' },
      options: Object.values(Aparencias),
    },
  },
} as Meta<typeof BoxData>;

export const Padrao = { args: { dataNumero: 1, aparencia: 'padrao' } };
export const Escuro = { args: { dataNumero: 1, aparencia: 'escuro' } };
export const Claro = { args: { dataNumero: 1, aparencia: 'claro' } };
