import EventoTimeline from './EventoTimeline.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Eventos/Moleculas/EventoTimeline',
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
  template:
    '<EventoTimeline :status="args.status"  :criticidade="args.criticidade"  :ehAtual="args.ehAtual"  :previstoPara="args.previstoPara"  :realizado="args.realizado"  :categoria="args.categoria"  :titulo="args.titulo"  :subtitulo="args.subtitulo" :destaque="args.destaque" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  previstoPara: new Date('2023-04-19T11:00Z'),
  realizadoEm: '',
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
  ehAtual: false,
};

export const Atual = Template.bind({});
Atual.args = {
  previstoPara: new Date('2023-04-19T10:00Z'),
  realizadoEm: '',
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
  ehAtual: true,
};

export const Importante = Template.bind({});
Importante.args = {
  previstoPara: new Date('2023-04-19T18:00Z'),
  realizadoEm: '',
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
  ehAtual: false,
};

export const Realizado = Template.bind({});
Realizado.args = {
  previstoPara: new Date('2023-04-20T12:30Z'),
  realizadoEm: '',
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
  ehAtual: false,
};
