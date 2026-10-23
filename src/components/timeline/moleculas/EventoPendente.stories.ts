import EventoPendente from './EventoPendente.vue';
import { Meta, StoryObj } from '@storybook/vue3-vite';
import { buscarEventoFilosofia, comTemaFilosofia } from '../organismos/Timeline.mock';

export default {
  title: 'Devix/Moleculas/EventoPendente',
  component: EventoPendente,
  decorators: [comTemaFilosofia],
  parameters: {
    docs: {
      description: {
        component: `Evento pendente que passou do horário, em destaque no topo da agenda: "Pendente de ontem", o título, o cliente, quando estava previsto ("Previsto para 6 out. às 17:00") e as ações.

O fundo e o marcador usam a cor de alerta. Recebe o evento inteiro.

## 🎯 Quando usar
- No topo da agenda (AgendaEventos), para o que ficou para trás

## 🚫 Quando NÃO usar
- Para eventos que ainda vão acontecer (use EventoAgenda)

## ♿ Acessibilidade
- Quando clicável, o título é um \`<button>\`: o evento recebe foco e responde a Enter e Espaço
- "Pendente de ontem" é texto, e não só a cor do cartão
- O marcador e a seta são decorativos; o clique das ações não aciona o do cartão`,
      },
    },
  },
  args: {
    evento: buscarEventoFilosofia('Carta revisada para Descartes'),
  },
  argTypes: {
    evento: {
      description: 'Evento pendente mostrado no cartão.',
      table: { type: { summary: 'Evento' } },
    },
  },
} as Meta<typeof EventoPendente>;

type Story = StoryObj<typeof EventoPendente>;

export const Padrao: Story = {};
Padrao.parameters = {
  docs: {
    description: {
      story: 'A carta de ontem para Descartes, com "Abrir carta" e o botão de mais ações.',
    },
  },
};
