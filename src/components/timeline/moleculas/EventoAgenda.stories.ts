import EventoAgenda from './EventoAgenda.vue';
import { Meta, StoryObj } from '@storybook/vue3-vite';
import { buscarEventoFilosofia, comTemaFilosofia } from '../organismos/Timeline.mock';

export default {
  title: 'Devix/Moleculas/EventoAgenda',
  component: EventoAgenda,
  decorators: [comTemaFilosofia],
  parameters: {
    docs: {
      description: {
        component: `Evento na lista da agenda: a hora numa coluna, separada por um divisor do título, do cliente e da descrição (\`destaque\`), com a seta e as ações embaixo. O status só aparece quando não é \`planejado\`.

Recebe o evento inteiro.

## 🎯 Quando usar
- Nos próximos eventos e nos concluídos da agenda (AgendaEventos)

## 🚫 Quando NÃO usar
- Para pendentes que passaram do horário (use EventoPendente)
- Na Timeline (use EventoTimelineFilosofia)

## ♿ Acessibilidade
- Quando clicável, o título é um \`<button>\`: o evento recebe foco e responde a Enter e Espaço
- A seta é decorativa; o clique das ações não aciona o do cartão`,
      },
    },
  },
  args: {
    evento: buscarEventoFilosofia('Telegrama urgente para Kant'),
  },
  argTypes: {
    evento: {
      description: 'Evento mostrado no cartão.',
      table: { type: { summary: 'Evento' } },
    },
  },
} as Meta<typeof EventoAgenda>;

type Story = StoryObj<typeof EventoAgenda>;

export const Padrao: Story = {};
Padrao.parameters = {
  docs: { description: { story: 'Próximo evento, com "Ver detalhes" e "Concluir".' } },
};

export const Concluido: Story = {
  name: 'Concluído',
  args: { evento: buscarEventoFilosofia('Pergaminho de Confúcio') },
  parameters: {
    docs: {
      description: { story: 'Evento realizado: a hora realizada e o selo do status.' },
    },
  },
};
