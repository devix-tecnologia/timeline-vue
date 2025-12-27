import '@fontsource/material-icons';
import TituloEvento from './TituloEvento.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/TituloEvento',
  component: TituloEvento,
  argTypes: {
    // titulo: { control: { type: String } },
  },
} as Meta<typeof TituloEvento>;

const tituloEventoMock = 'titulo';

export const Padrao = { args: { titulo: tituloEventoMock } };
