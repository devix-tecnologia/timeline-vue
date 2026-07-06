import Hora from './Hora.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/Hora',
  component: Hora,
  parameters: {
    docs: {
      description: {
        component: `Exibe o horário de um evento no formato HH:MM.

## 🎯 Quando usar
- Para mostrar o horário de início ou término de um evento na timeline
- Quando um evento foi cancelado ou adiado e o horário original precisa ser riscado

## 🚫 Quando NÃO usar
- Para exibir datas (use BoxData)
- Em contexts onde o formato de hora não é HH:MM
- Como único identificador do evento (deve ser acompanhado de título)

## ♿ Acessibilidade
- O horário é renderizado como texto simples, acessível por leitores de tela
- A variant "riscada" aplica \`text-decoration: line-through\` visualmente
- O tamanho da fonte reduz na versão riscada (1rem vs 1.4rem)`,
      },
    },
  },
  argTypes: {
    hora: {
      description: 'Objeto Date contendo o horário a ser exibido.',
      control: { type: 'date' },
      table: { type: { summary: 'Date' } },
    },
    aparencia: {
      description: 'Aparência do horário: \`padrao\` (normal) ou \`riscada\` (tachado).',
      control: { type: 'select' },
      options: ['padrao', 'riscada'],
      table: { type: { summary: 'string' }, defaultValue: { summary: 'padrao' } },
    },
  },
} as Meta<typeof Hora>;

const horaMock = new Date();

export const Padrao = { args: { hora: horaMock, aparencia: 'padrao' } };
Padrao.parameters = {
  docs: {
    description: {
      story: 'Horário no formato HH:MM com estilo padrão — peso 500 e tamanho 1.4rem.',
    },
  },
};

export const Riscada = { args: { hora: horaMock, aparencia: 'riscada' } };
Riscada.parameters = {
  docs: {
    description: {
      story:
        'Horário com estilo tachado (line-through) para indicar cancelamento ou reagendamento. Fonte reduzida para 1rem.',
    },
  },
};
