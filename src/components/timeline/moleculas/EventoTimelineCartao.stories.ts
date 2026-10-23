import EventoTimelineCartao from './EventoTimelineCartao.vue';
import { Meta, StoryObj } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/EventoTimelineCartao',
  component: EventoTimelineCartao,
  parameters: {
    docs: {
      description: {
        component: `Evento da timeline na aparência \`cartoes\`. Recebe as mesmas props e emite o mesmo \`click\` do EventoTimeline, para a Timeline trocar um pelo outro.

O cartão mostra a hora (e a prevista, riscada, quando o evento foi realizado), o status por extenso, o título, o subtítulo e as etiquetas de categoria, prioridade e destaque. O ícone da categoria fica sobre o trilho, à esquerda.

## 🎯 Quando usar
- Dentro da Timeline com \`aparencia="cartoes"\`
- Quando cada evento tem informação de negócio para mostrar (cliente, valor, prioridade)

## 🚫 Quando NÃO usar
- Na aparência \`padrao\` da Timeline (use EventoTimeline)
- Para o detalhe completo do evento (use EventoDetalhado)

## ♿ Acessibilidade
- Quando clicável, o título é um \`<button>\`: o evento recebe foco e responde a Enter e Espaço
- O contorno de foco aparece no cartão inteiro (\`:focus-visible\`)
- O status e a prioridade são texto, e não só cor
- O evento atual recebe \`aria-current="true"\``,
      },
    },
  },
  args: {
    status: 'planejado',
    criticidade: 'alta',
    ehAtual: false,
    previstoPara: new Date('2026-10-07T13:00Z'),
    realizadoEm: undefined,
    categoria: { nome: 'Telegrama', icone: 'bolt' },
    titulo: 'Telegrama urgente para Kant',
    subtitulo: 'Königsberg · antes da caminhada das 15h30',
    textoDestaque: 'Imperativo categórico',
    clicavel: true,
  },
  argTypes: {
    status: {
      description: 'Status do evento. Muda o selo e o preenchimento do cartão.',
      control: { type: 'select' },
      options: ['planejado', 'adiantado', 'atrasado', 'adiado', 'realizado', 'cancelado'],
      table: { type: { summary: 'Status' } },
    },
    criticidade: {
      description: 'Prioridade do evento. Média e alta ganham etiqueta e faixa colorida.',
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
      description: 'Data e hora previstas.',
      control: { type: 'date' },
      table: { type: { summary: 'Date' } },
    },
    realizadoEm: {
      description:
        'Data e hora em que o evento foi realizado. Quando existe, a prevista aparece riscada.',
      control: { type: 'date' },
      table: { type: { summary: 'Date | null' } },
    },
    categoria: {
      description: 'Nome e ícone (Material Symbols) da categoria.',
      table: { type: { summary: 'Categoria' } },
    },
    titulo: {
      description: 'Título do evento.',
      table: { type: { summary: 'string' } },
    },
    subtitulo: {
      description: 'Linha de apoio, como o cliente e o contexto.',
      table: { type: { summary: 'string' } },
    },
    textoDestaque: {
      description: 'Informação em destaque, numa etiqueta própria.',
      table: { type: { summary: 'string' } },
    },
    clicavel: {
      description: 'Quando falso, o título deixa de ser botão e o clique não é emitido.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
  },
} as Meta<typeof EventoTimelineCartao>;

type Story = StoryObj<typeof EventoTimelineCartao>;

export const Padrao: Story = {};
Padrao.parameters = {
  docs: {
    description: {
      story: 'Evento planejado de prioridade alta, com o assunto em destaque.',
    },
  },
};

export const Atual: Story = {
  args: { ehAtual: true },
  parameters: {
    docs: {
      description: { story: 'Evento atual da timeline: fundo de seleção e borda na cor primária.' },
    },
  },
};

export const Realizado: Story = {
  args: {
    status: 'realizado',
    criticidade: 'media',
    realizadoEm: new Date('2026-10-07T13:10Z'),
    categoria: { nome: 'Carta', icone: 'mail' },
    titulo: 'Carta para Hipátia',
    subtitulo: 'Biblioteca de Alexandria · seção de astronomia',
    textoDestaque: '3 rolos de papiro',
  },
  parameters: {
    docs: {
      description: {
        story: 'Evento realizado: sem preenchimento, com a hora realizada e a prevista riscada.',
      },
    },
  },
};

export const Cancelado: Story = {
  args: {
    status: 'cancelado',
    criticidade: 'baixa',
    categoria: { nome: 'Sinal de fumaça', icone: 'local_fire_department' },
    titulo: 'Sinal de fumaça para Heráclito',
    subtitulo: 'Éfeso: o rio já não era o mesmo',
    textoDestaque: '',
  },
  parameters: {
    docs: {
      description: { story: 'Evento cancelado: borda tracejada e título riscado.' },
    },
  },
};

export const NaoClicavel: Story = {
  name: 'Não clicável',
  args: { clicavel: false },
  parameters: {
    docs: {
      description: {
        story:
          'Com `clicavel` falso o título é texto, e o cartão não recebe foco nem emite clique.',
      },
    },
  },
};
