import EventoTimeline from './EventoTimeline.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/EventoTimeline',
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

export const Padrao = {
  args: {
    previstoPara: new Date('2023-04-19T11:00Z'),
    realizado: '',
    titulo: 'Consulta Clinico geral',
    subtitulo: 'Posto de saúde do bairro',
    destaque: 'Estava passando mal',
    categoria: { nome: 'Cardiologista', icone: 'cardiology' },
    status: 'planejado',
    criticidade: 'media',
    acao: false,
    ehAtual: false,
  },
};

export const Atual = {
  args: {
    previstoPara: new Date('2023-04-19T10:00Z'),
    realizado: '',
    titulo: 'Consulta',
    subtitulo: 'Posto de saúde',
    destaque: '',
    categoria: { nome: 'Tele consulta', icone: 'call' },
    status: 'realizado',
    criticidade: 'alta',
    acao: false,
    ehAtual: true,
  },
};

export const Importante = {
  args: {
    previstoPara: new Date('2023-04-19T18:00Z'),
    realizado: '',
    titulo: 'Consulta cardiologista',
    subtitulo: 'Posto de saúde do bairro',
    destaque: '',
    categoria: { nome: 'Cardiologista', icone: 'cardiology' },
    status: 'planejado',
    criticidade: 'alta',
    acao: false,
    ehAtual: false,
  },
};

export const Realizado = {
  args: {
    previstoPara: new Date('2023-04-20T12:30Z'),
    realizado: '',
    titulo: 'Vacina da gripe',
    subtitulo: 'Posto de saúde do bairro',
    destaque: '',
    categoria: { nome: 'Vacina', icone: 'vaccines' },
    status: 'realizado',
    criticidade: 'media',
    acao: true,
    ehAtual: false,
  },
};
