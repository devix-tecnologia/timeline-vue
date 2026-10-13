import EventoTimelineAgiliza from './EventoTimelineAgiliza.vue';
import { Meta, StoryObj } from '@storybook/vue3-vite';
import { comTemaAgiliza } from '../organismos/Timeline.mock';

export default {
  title: 'Devix/Moleculas/EventoTimelineAgiliza',
  component: EventoTimelineAgiliza,
  decorators: [comTemaAgiliza],
  parameters: {
    docs: {
      description: {
        component: `Evento da timeline na aparência \`agiliza\`: a hora à esquerda (a realizada, quando houver), o marcador do status sobre o trilho e um cartão com o título, o cliente, a hora prevista ou a descrição, o status por extenso e as ações.

Recebe as mesmas props e emite o mesmo \`click\` do EventoTimeline, para a Timeline trocar um pelo outro, mais as \`acoes\` e o \`acaoClick\`.

## 🎯 Quando usar
- Dentro da Timeline com \`aparencia="agiliza"\`

## 🚫 Quando NÃO usar
- Nas aparências \`padrao\` e \`cartoes\` (use EventoTimeline ou EventoTimelineCartao)
- Na agenda do dia (use EventoAgenda)

## ♿ Acessibilidade
- Quando clicável, o título é um \`<button>\`: o evento recebe foco e responde a Enter e Espaço
- O status aparece por extenso no selo; o marcador é decorativo
- O evento atual recebe \`aria-current="true"\``,
      },
    },
  },
  args: {
    status: 'realizado',
    criticidade: 'baixa',
    ehAtual: false,
    previstoPara: new Date(2026, 9, 6, 9, 0),
    realizadoEm: new Date(2026, 9, 6, 9, 5),
    categoria: { nome: 'Ligação', icone: 'call' },
    titulo: 'Ligação de prospecção',
    subtitulo: 'Construtora Alicerce',
    textoDestaque: '',
    clicavel: true,
    acoes: [],
  },
  argTypes: {
    status: {
      description: 'Status do evento. Muda o marcador e o selo.',
      control: { type: 'select' },
      options: ['planejado', 'adiantado', 'atrasado', 'adiado', 'realizado', 'cancelado'],
      table: { type: { summary: 'Status' } },
    },
    criticidade: {
      description: 'Prioridade do evento. Não aparece nesta aparência.',
      control: { type: 'select' },
      options: ['baixa', 'media', 'alta'],
      table: { type: { summary: 'Criticidade' } },
    },
    ehAtual: {
      description: 'Destaca o evento como o atual da timeline.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    previstoPara: {
      description: 'Data e hora previstas. Com `realizadoEm`, aparece como "Previsto para".',
      control: { type: 'date' },
      table: { type: { summary: 'Date' } },
    },
    realizadoEm: {
      description: 'Data e hora em que o evento foi realizado. Vira a hora da coluna.',
      control: { type: 'date' },
      table: { type: { summary: 'Date | null' } },
    },
    categoria: {
      description: 'Nome e ícone da categoria. Não aparece nesta aparência.',
      table: { type: { summary: 'Categoria' } },
    },
    titulo: {
      description: 'Título do evento.',
      table: { type: { summary: 'string' } },
    },
    subtitulo: {
      description: 'Cliente ou contexto do evento.',
      table: { type: { summary: 'string' } },
    },
    textoDestaque: {
      description: 'Descrição em uma linha de apoio (ex.: "Nova data a definir").',
      table: { type: { summary: 'string' } },
    },
    clicavel: {
      description: 'Quando falso, o título deixa de ser botão e o clique não é emitido.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    acoes: {
      description: 'Ações do evento, mostradas no fim do cartão.',
      table: { type: { summary: 'AcaoEvento[]' } },
    },
  },
} as Meta<typeof EventoTimelineAgiliza>;

type Story = StoryObj<typeof EventoTimelineAgiliza>;

export const Padrao: Story = {};
Padrao.parameters = {
  docs: {
    description: {
      story: 'Evento realizado: a hora realizada na coluna e a prevista no cartão.',
    },
  },
};

export const Adiado: Story = {
  args: {
    status: 'adiado',
    previstoPara: new Date(2026, 9, 6, 11, 0),
    realizadoEm: undefined,
    categoria: { nome: 'Visita técnica', icone: 'apartment' },
    titulo: 'Visita técnica',
    subtitulo: 'Cooperativa AgroSul',
    textoDestaque: 'Nova data a definir',
    acoes: [{ id: 'reagendar', rotulo: 'Reagendar', icone: 'edit_calendar' }],
  },
  parameters: {
    docs: {
      description: { story: 'Evento adiado, com a descrição e a ação "Reagendar".' },
    },
  },
};

export const Planejado: Story = {
  args: {
    status: 'planejado',
    previstoPara: new Date(2026, 9, 7, 10, 0),
    realizadoEm: undefined,
    categoria: { nome: 'Demonstração', icone: 'present_to_all' },
    titulo: 'Demonstração',
    subtitulo: 'Banco Horizonte',
    textoDestaque: 'Apresentação da plataforma',
    acoes: [
      { id: 'ver-detalhes', rotulo: 'Ver detalhes', icone: 'description' },
      { id: 'concluir', rotulo: 'Concluir', icone: 'check' },
    ],
  },
  parameters: {
    docs: {
      description: { story: 'Evento que ainda vai acontecer: marcador vazado e duas ações.' },
    },
  },
};

export const Atual: Story = {
  args: { ehAtual: true },
  parameters: {
    docs: {
      description: { story: 'Evento atual da timeline: borda do cartão na cor primária.' },
    },
  },
};
