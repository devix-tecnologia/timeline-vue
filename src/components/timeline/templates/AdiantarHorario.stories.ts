import AdiantarHorario from './AdiantarHorario.vue';
import { Meta } from '@storybook/vue3-vite';
import { dadosEventoDetalhado } from '../EventoDetalhado.mock';

export default {
  title: 'Devix/Templates/AdiantarHorario',
  component: AdiantarHorario,
  parameters: {
    docs: {
      description: {
        component: 'Tela de edição de horário. O usuário pode adiantar o horário da tarefa.',
      },
    },
  },
  argTypes: {},
} as Meta<typeof AdiantarHorario>;

const eventoUmMock = dadosEventoDetalhado[0];

export const Padrao = {
  args: {
    salvarVisivel: true,
    evento: eventoUmMock,
  },
};
