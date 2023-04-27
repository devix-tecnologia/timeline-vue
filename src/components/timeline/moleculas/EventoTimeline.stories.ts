import EventoTimeline from './EventoTimeline.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Timeline/Moleculas/EventoTimeline',
  component: EventoTimeline,
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['planejado', 'realizado', 'cancelado', 'adiado', 'atrasado'],
    },
    criticidade: {
      control: { type: 'select' },
      options: ['normal', 'media', 'alta'],
    },
  },
} as Meta<typeof EventoTimeline>;

const Template: StoryFn<typeof EventoTimeline> = (args) => ({
  components: { EventoTimeline: EventoTimeline },
  setup() {
    return { args };
  },
  template: '<EventoTimeline :dadosEvento="args" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  previsto: '2023-04-19T11:00Z',
  realizado: '',
  tolerancia: '',
  titulo: 'Consulta Clinico geral',
  subtitulo: 'Posto de saúde do bairro',
  destaque: 'Estava passando mal',
  categoria: {
    nome: 'Cardiologista',
    icone: 'cardiology',
  },
  status: 'planejado',
  criticidade: 'media',
  acao: false,
};

export const Atual = Template.bind({});
Atual.args = {
  previsto: '2023-04-19T10:00Z',
  realizado: '',
  tolerancia: '',
  titulo: 'Consulta',
  subtitulo: 'Posto de saúde',
  destaque: '',
  categoria: {
    nome: 'Tele consulta',
    icone: 'call',
  },
  status: 'realizado',
  criticidade: 'alta',
  acao: false,
  selecionado: true,
};

export const Importante = Template.bind({});
Importante.args = {
  previsto: '2023-04-19T18:00Z',
  realizado: '',
  tolerancia: '',
  titulo: 'Consulta cardiologista',
  subtitulo: 'Posto de saúde do bairro',
  destaque: '',
  categoria: {
    nome: 'Cardiologista',
    icone: 'cardiology',
  },
  status: 'planejado',
  criticidade: 'alta',
  acao: false,
};

export const Realizado = Template.bind({});
Realizado.args = {
  previsto: '2023-04-20T12:30Z',
  realizado: '',
  tolerancia: '',
  titulo: 'Vacina da gripe',
  subtitulo: 'Posto de saúde do bairro',
  destaque: '',
  categoria: {
    nome: 'Vacina',
    icone: 'vaccines',
  },
  status: 'realizado',
  criticidade: 'media',
  acao: true,
};
