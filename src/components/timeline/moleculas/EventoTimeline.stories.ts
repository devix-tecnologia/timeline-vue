import EventoTimeline from './EventoTimeline.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/EventoTimeline',
  component: EventoTimeline,
  parameters: {
    docs: {
      description: {
        component: `Card principal da timeline que representa um evento na linha do tempo. Exibe status, horário, categoria, título, subtítulo e destaque.

## 🎯 Quando usar
- Como item individual na lista da timeline
- Para representar qualquer tipo de evento agendado, realizado ou cancelado

## 🚫 Quando NÃO usar
- Para exibir detalhes completos do evento — use a tela de detalhamento com CabecalhoEventoDetalhado
- Quando o evento não possui data prevista (campo obrigatório)

## ♿ Acessibilidade
- O contraste de cor do status é reforçado por classes CSS específicas
- O cursor e o hover indicam interatividade quando clicavel = true
- O evento atual (ehAtual) recebe destaque visual com fundo diferenciado`,
      },
    },
  },
  argTypes: {
    status: {
      description: 'Status atual do evento. Altera o ícone e a cor do card.',
      table: { type: { summary: 'Status' } },
      control: { type: 'select' },
      options: ['planejado', 'realizado', 'cancelado', 'adiado', 'atrasado'],
    },
    criticidade: {
      description: 'Nível de criticidade do evento. Altera a cor do indicador visual.',
      table: { type: { summary: 'Criticidade' } },
      control: { type: 'select' },
      options: ['normal', 'media', 'alta'],
    },
    ehAtual: {
      description:
        'Quando true, destaca o evento como o atual na timeline aplicando um fundo especial.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
      control: 'boolean',
    },
    previstoPara: {
      description: 'Data e hora prevista para o evento.',
      table: { type: { summary: 'Date' } },
    },
    realizadoEm: {
      description: 'Data e hora em que o evento foi realizado (opcional).',
      table: { type: { summary: 'Date' } },
    },
    categoria: {
      description: 'Objeto contendo nome e ícone da categoria do evento.',
      table: { type: { summary: 'Categoria' } },
    },
    titulo: {
      description: 'Título principal do evento.',
      table: { type: { summary: 'string' } },
    },
    subtitulo: {
      description: 'Subtítulo ou descrição secundária do evento.',
      table: { type: { summary: 'string' } },
    },
    textoDestaque: {
      description: 'Texto de destaque adicional exibido ao final do card.',
      table: { type: { summary: 'string' } },
    },
    clicavel: {
      description: 'Habilita ou desabilita o clique no evento. Quando true, emite o evento click.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
      control: 'boolean',
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
Padrao.parameters = {
  docs: {
    description: {
      story:
        'Evento planejado com criticidade média, subtítulo e texto de destaque. Estado padrão de um evento futuro.',
    },
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
Atual.parameters = {
  docs: {
    description: {
      story:
        'Evento marcado como atual (ehAtual = true). Recebe destaque visual com fundo diferenciado na timeline.',
    },
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
Importante.parameters = {
  docs: {
    description: {
      story:
        'Evento planejado com criticidade alta. Demonstra o indicador visual de prioridade máxima.',
    },
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
Realizado.parameters = {
  docs: {
    description: {
      story:
        'Evento já realizado com ação habilitada (clicavel = true). Exibe o estado de conclusão.',
    },
  },
};
