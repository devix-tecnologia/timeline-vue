import LinhaDoTempo from './LinhaDoTempo.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Timeline/Organismos/LinhaDoTempo',
  component: LinhaDoTempo,
  parameters: {
    componentSubtitle: 'Linha do tempo padrão com identidade da Devix',
  },
  argTypes: {},
} as Meta<typeof LinhaDoTempo>;

const timelineMock = [
  {
    nome: 'Marcos Patricio',
    imagem:
      'https://jpimg.com.br/uploads/2017/04/1356121060-stenio-garcia-ira-retornar-como-o-bino-de-carga-pesada-768x586.png',
    eventos: [
      {
        data: '30/03/2023',
        hora_prevista: '9:00',
        hora_realizada: '10:00',
        titulo: 'Ligar para farmácia Drogasil',
        subtitulo: 'Contação remédio pressão 30',
        destaque: 'Sem sinal de telefone',
        categoria: {
          nome: 'Ligação',
          icone: 'call',
        },
        status: 'realizado',
        criticidade: 'baixa',
        visualizacao: '',
      },
      {
        data: '30/03/2023',
        hora_prevista: '10:00',
        hora_realizada: '',
        titulo: 'Vacina da gripe',
        subtitulo: 'Posto de saúde do bairro 30',
        destaque: '',
        categoria: {
          nome: 'Vacina',
          icone: 'vaccines',
        },
        status: 'atrasado',
        criticidade: 'media',
        visualizacao: '',
      },
      {
        data: '30/03/2023',
        hora_prevista: '10:00',
        hora_realizada: '',
        titulo: 'Consulta cardiologista',
        subtitulo: 'Posto de saúde do bairro 30',
        destaque: 'Estava passando mal',
        categoria: {
          nome: 'Cardiologista',
          icone: 'cardiology',
        },
        status: 'cancelado',
        criticidade: 'alta',
      },
      {
        data: '31/03/2023',
        hora_prevista: '8:00',
        hora_realizada: '',
        titulo: 'Consulta cardiologista',
        subtitulo: 'Posto de saúde do bairro 31',
        destaque: '',
        categoria: {
          nome: 'Cardiologista',
          icone: 'cardiology',
        },
        status: 'planejada',
        criticidade: 'alta',
        visualizacao: 'atual',
      },
    ],
  },
];

const eventosPorDataMock = {
  '2023-04-18': [
    {
      data: '2023-04-18T12:00Z',
      hora_prevista: '12:00',
      hora_realizada: '',
      titulo: 'Vacina da gripe',
      subtitulo: 'Posto de saúde do bairro',
      destaque: '',
      categoria: { nome: 'Vacina', icone: 'vaccines' },
      status: 'atrasado',
      criticidade: 'media',
      visualizacao: '',
    },
    {
      data: '2023-04-18T15:00Z',
      hora_prevista: '15:00',
      hora_realizada: '16:00',
      titulo: 'Ligar para farmácia Drogasil',
      subtitulo: 'Contação remédio pressão',
      destaque: 'Sem sinal de telefone',
      categoria: { nome: 'Ligação', icone: 'call' },
      status: 'realizado',
      criticidade: 'baixa',
      visualizacao: '',
    },
    {
      data: '2023-04-18T16:00Z',
      hora_prevista: '16:00',
      hora_realizada: '',
      titulo: 'Consulta cardiologista',
      subtitulo: 'Posto de saúde do bairro',
      destaque: 'Estava passando mal',
      categoria: { nome: 'Cardiologista', icone: 'cardiology' },
      status: 'cancelado',
      criticidade: 'alta',
    },
  ],
  '2023-04-19': [
    {
      data: '2023-04-19T11:00Z',
      hora_prevista: '11:00',
      hora_realizada: '',
      titulo: 'Consulta Clinico geral',
      subtitulo: 'Posto de saúde do bairro',
      destaque: 'Estava passando mal',
      categoria: { nome: 'Cardiologista', icone: 'cardiology' },
      status: 'cancelado',
      criticidade: 'media',
    },
    {
      data: '2023-04-19T15:00Z',
      hora_prevista: '15:00',
      hora_realizada: '',
      titulo: 'Consulta cardiologista',
      subtitulo: 'Posto de saúde do bairro',
      destaque: '',
      categoria: { nome: 'Cardiologista', icone: 'cardiology' },
      status: 'planejada',
      criticidade: 'alta',
      visualizacao: 'atual',
    },
    {
      data: '2023-04-19T18:00Z',
      hora_prevista: '18:00',
      hora_realizada: '',
      titulo: 'Consulta cardiologista',
      subtitulo: 'Posto de saúde do bairro',
      destaque: '',
      categoria: {
        nome: 'Cardiologista',
        icone: 'cardiology',
      },
      status: 'planejada',
      criticidade: 'alta',
      visualizacao: '',
    },
  ],
};

const Template: StoryFn<typeof LinhaDoTempo> = (args) => ({
  components: { LinhaDoTempo: LinhaDoTempo },
  setup() {
    return { args };
  },
  template:
    '<LinhaDoTempo :dadosTimeline="args.dadosTimeline" :eventosTimeline="args.eventosTimeline" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  dadosTimeline: timelineMock,
  eventosTimeline: eventosPorDataMock,
};
