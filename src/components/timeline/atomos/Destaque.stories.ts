import '@fontsource/material-icons';
import Destaque from './Destaque.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/Destaque',
  component: Destaque,
} as Meta<typeof Destaque>;

const DestaqueoMock = 'Texto alinhado a direita';

export const Padrao = { args: { texto: DestaqueoMock } };
