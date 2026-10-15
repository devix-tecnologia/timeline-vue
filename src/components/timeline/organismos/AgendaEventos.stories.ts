import AgendaEventos from './AgendaEventos.vue';
import { Meta, StoryObj } from '@storybook/vue3-vite';
import { comTemaExemplo, gerarEventosConsultor } from './Timeline.mock';
import { FILTROS_AGENDA } from './AgendaEventos.types';

export default {
  title: 'Devix/Organismos/AgendaEventos',
  component: AgendaEventos,
  decorators: [comTemaExemplo],
  parameters: {
    docs: {
      description: {
        component: `Agenda de um dia. Separa os eventos em três grupos:
- **Pendentes que passaram do horário**, deste dia ou de antes, em destaque (EventoPendente);
- **Próximos eventos**, os pendentes do dia que ainda vão acontecer (EventoAgenda);
- **Concluídos**, os do dia já resolvidos: realizados, adiados e cancelados (EventoAgenda).

Os filtros Todos, Pendentes e Concluídos escolhem os grupos; o de pendentes mostra quantos são. A regra está em \`utils/agenda\` (\`separarAgenda\`), e o status dos eventos não é alterado.

## 🎯 Quando usar
- Para mostrar o que falta fazer num dia, com o que ficou para trás em destaque

## 🚫 Quando NÃO usar
- Para o histórico do que já aconteceu (use a Timeline com \`aparencia="marcos"\`)

## ♿ Acessibilidade
- Região com o nome "Agenda"; dia e seções em \`<h3>\`, eventos em \`<h4>\`
- Filtros em botões com \`aria-pressed\`
- O dia é um botão (\`diaClick\`), para quem usa a agenda trocar de dia`,
      },
    },
  },
  args: {
    eventos: gerarEventosConsultor(),
    filtroInicial: 'todos',
  },
  argTypes: {
    eventos: {
      description: 'Eventos de qualquer dia; a agenda escolhe os do dia e os atrasados.',
      table: { type: { summary: 'Evento[]' } },
    },
    dia: {
      description: 'Dia da agenda.',
      control: { type: 'date' },
      table: { type: { summary: 'Date' }, defaultValue: { summary: 'hoje' } },
    },
    filtroInicial: {
      description: 'Filtro escolhido ao montar.',
      control: { type: 'select' },
      options: FILTROS_AGENDA,
      table: { type: { summary: 'FiltroAgenda' }, defaultValue: { summary: "'todos'" } },
    },
  },
} as Meta<typeof AgendaEventos>;

type Story = StoryObj<typeof AgendaEventos>;

export const Todos: Story = {};
Todos.parameters = {
  docs: {
    description: {
      story: 'A agenda de hoje do consultor de vendas, com os três grupos.',
    },
  },
};

export const Pendentes: Story = {
  args: { filtroInicial: 'pendentes' },
  parameters: {
    docs: {
      description: {
        story: 'Só o que falta fazer, como na primeira tela do projeto gráfico.',
      },
    },
  },
};

export const SemEventos: Story = {
  name: 'Sem eventos',
  args: { eventos: [] },
  parameters: {
    docs: { description: { story: 'Dia sem eventos: a agenda avisa que não há nada.' } },
  },
};
