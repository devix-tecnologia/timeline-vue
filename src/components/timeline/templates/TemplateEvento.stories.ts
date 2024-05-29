import TemplateEvento from './TemplateEvento.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import { dadosEventoDetalhado, dadosPerfil } from '../EventoDetalhado.mock';

export default {
  title: 'Devix/Eventos/templates/TemplateEvento',
  component: TemplateEvento,
  parameters: {
    componentSubtitle: 'Tela de detalhes do evento.',
  },
  argTypes: {},
} as Meta<typeof TemplateEvento>;

const perfilMock = dadosPerfil;
const eventoUmMock = dadosEventoDetalhado[0];
const eventoDoisMock = dadosEventoDetalhado[1];

const Template: StoryFn<typeof TemplateEvento> = (args) => ({
  components: { TemplateEvento },
  setup() {
    return { args };
  },
  template: '<TemplateEvento :perfilEvento="args.perfilEvento" :dadosEvento="args.dadosEvento" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  perfilEvento: perfilMock,
  dadosEvento: eventoUmMock,
};

export const SemPerfil = Template.bind({});
SemPerfil.args = {
  dadosEvento: eventoDoisMock,
};
