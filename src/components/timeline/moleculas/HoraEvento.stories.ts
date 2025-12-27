import HoraEvento from './HoraEvento.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/HoraEvento',
  component: HoraEvento,
  argTypes: {},
} as Meta<typeof HoraEvento>;

export const Padrao = { args: { horaPrevista: new Date('2023-05-03T15:00Z') } };
export const Atrasado = {
  args: {
    horaPrevista: new Date('2023-05-03T15:00Z'),
    horaRealizada: new Date('2023-05-03T16:00Z'),
  },
};
