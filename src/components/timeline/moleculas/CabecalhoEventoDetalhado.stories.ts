import CabecalhoEventoDetalhado from './CabecalhoEventoDetalhado.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import { dadosEventoDetalhado, dadosPerfil } from '../EventoDetalhado.mock';
import { EventoDetalhado } from '../typeDetalhado';
import { Perfil } from '../type';

export default {
  title: 'Devix/Eventos/Moleculas/CabecalhoEventoDetalhado',
  component: CabecalhoEventoDetalhado,
  argTypes: {},
} as Meta<typeof CabecalhoEventoDetalhado>;

const perfilMock = dadosPerfil;
const CabecalhoMock = dadosEventoDetalhado[0];
const CabecalhoMock2 = dadosEventoDetalhado[1];

const Template: StoryFn<typeof CabecalhoEventoDetalhado> = (args) => ({
  components: { CabecalhoEventoDetalhado },
  setup() {
    return { args };
  },
  template: '<CabecalhoEventoDetalhado :perfil="args.perfil" :evento="args.evento" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  perfil: perfilMock satisfies Perfil,
  evento: CabecalhoMock satisfies EventoDetalhado,
};

export const SemPerfil = Template.bind({});
SemPerfil.args = {
  evento: CabecalhoMock2 satisfies EventoDetalhado,
};
