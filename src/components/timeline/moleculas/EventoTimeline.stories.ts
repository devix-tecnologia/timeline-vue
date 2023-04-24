import EventoTimeline from './EventoTimeline.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Timeline/Moleculas/EventoTimeline',
  component: EventoTimeline,
  argTypes: {
    visualizacao: {
      control: { type: 'select' },
      options: ['padrao', 'atual'],
    },
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
  template: '<EventoTimeline :evento="args"  />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  hora_prevista: '9:00',
  hora_realizada: '',
  titulo: 'Evento padrão',
  subtitulo: 'Apenas planejado',
  destaque: 'Destaque',
  categoria: {
    nome: 'Ligação',
    icone: 'call',
  },
  status: 'planejado',
  criticidade: 'normal',
  visualizacao: 'padrao',
};

export const Atual = Template.bind({});
Atual.args = {
  hora_prevista: '9:00',
  hora_realizada: '',
  titulo: 'Evento atual',
  subtitulo: 'Muda o background',
  destaque: 'Destaque',
  categoria: {
    nome: 'Ligação',
    icone: 'call',
  },
  status: 'planejado',
  criticidade: 'normal',
  visualizacao: 'atual',
};

export const Importante = Template.bind({});
Importante.args = {
  hora_prevista: '9:00',
  hora_realizada: '',
  titulo: 'Criticidade alta',
  subtitulo: 'Fica com borda vermelha',
  destaque: 'Destaque',
  categoria: {
    nome: 'Ligação',
    icone: 'call',
  },
  status: 'planejado',
  criticidade: 'alta',
  visualizacao: 'padrao',
};

export const Realizado = Template.bind({});
Realizado.args = {
  hora_prevista: '9:00',
  hora_realizada: '10:00',
  titulo: 'Evento realizado com atraso',
  subtitulo: 'Fica esmaecido',
  destaque: 'Destaque',
  categoria: {
    nome: 'Ligação',
    icone: 'call',
  },
  status: 'realizado',
  criticidade: 'normal',
  visualizacao: 'padrao',
};
