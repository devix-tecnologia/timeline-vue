import DescricaoEvento from './DescricaoEvento.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/DescricaoEvento',
  component: DescricaoEvento,
  argTypes: {},
} as Meta<typeof DescricaoEvento>;

const tituloMock = 'Título';
const subtituloMock = 'Subtítulo';

export const Simples = { args: { titulo: tituloMock, subtitulo: '' } };
export const Completa = { args: { titulo: tituloMock, subtitulo: subtituloMock } };
