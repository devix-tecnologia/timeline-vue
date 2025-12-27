import TemplateEvento from './TemplateEvento.vue';
import { Meta } from '@storybook/vue3-vite';
import { dadosEventoDetalhado, dadosPerfil } from '../EventoDetalhado.mock';

export default {
  title: 'Devix/templates/TemplateEvento',
  component: TemplateEvento,
  parameters: {
    docs: { description: { component: 'Tela de detalhes do evento.' } },
  },
  argTypes: {},
} as Meta<typeof TemplateEvento>;

const perfilMock = dadosPerfil;
const eventoUmMock = dadosEventoDetalhado[0];
const eventoDoisMock = dadosEventoDetalhado[1];

export const Padrao = {
  args: {
    perfilEvento: perfilMock,
    dadosEvento: eventoUmMock,
  },
};

export const SemPerfil = {
  args: {
    perfilEvento: { nome: '', imagem: '', icone: '' },
    dadosEvento: eventoDoisMock,
  },
};
