import '@fontsource/material-icons';
import SubtituloEvento from './SubtituloEvento.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/SubtituloEvento',
  component: SubtituloEvento,
  argTypes: {
    // subtitulo: { control: { type: String } },
  },
} as Meta<typeof SubtituloEvento>;

const subtituloEventooMock = 'subtitulo';

export const Padrao = { args: { subtitulo: subtituloEventooMock } };
