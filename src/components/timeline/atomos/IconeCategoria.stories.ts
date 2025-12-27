import '@fontsource/material-icons';
import IconeCategoria from './IconeCategoria.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/IconeCategoria',
  component: IconeCategoria,
  argTypes: {
    // categoria: { control: { type: String } },
    tipo: {
      control: { type: 'select' },
      options: ['padrao', 'importante', 'alerta', 'sucesso'],
    },
  },
} as Meta<typeof IconeCategoria>;

const categoriaMock = 'call';

export const Escuro = { args: { iconeCategoria: categoriaMock, escuro: true, tipo: 'padrao' } };
export const Claro = { args: { iconeCategoria: categoriaMock, escuro: false, tipo: 'padrao' } };
export const Importante = {
  args: { iconeCategoria: categoriaMock, escuro: true, tipo: 'importante' },
};
export const Alerta = { args: { iconeCategoria: categoriaMock, escuro: true, tipo: 'alerta' } };
export const Sucesso = { args: { iconeCategoria: categoriaMock, escuro: true, tipo: 'sucesso' } };
