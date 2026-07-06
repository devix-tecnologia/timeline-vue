import '@fontsource/material-icons';
import IconeStatus from './IconeStatus.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/IconeStatus',
  component: IconeStatus,
  parameters: {
    docs: {
      description: {
        component: `Exibe um ícone indicador de status para eventos da timeline.

## 🎯 Quando usar
- Para mostrar o estado atual de um evento na timeline
- Como indicador visual de progresso (planejado → realizado)
- Para sinalizar eventos cancelados, adiados ou atrasados

## 🚫 Quando NÃO usar
- Para ícones de categoria (use IconeCategoria)
- Em contexts fora da timeline de eventos
- Como único meio de伝える o status (deve ser acompanhado de texto)

## ♿ Acessibilidade
- O status é aplicado como classe CSS que define o conteúdo via pseudo-elemento \`::before\`
- A cor do ícone varia por status: verde (realizado), vermelho (cancelado), cinza (adiado), laranja (atrasado)
- Planejado fica invisível (opacity: 0) pois o evento ainda não ocorreu`,
      },
    },
  },
  argTypes: {
    status: {
      description: 'Status do evento. Define o ícone e a cor exibidos.',
      control: { type: 'select' },
      options: ['planejado', 'realizado', 'cancelado', 'adiado', 'atrasado'],
      table: { type: { summary: 'Status' } },
    },
  },
} as Meta<typeof IconeStatus>;

export const Planejado = { args: { status: 'planejado' } };
Planejado.parameters = {
  docs: {
    description: {
      story:
        'Evento planejado — o ícone fica invisível (opacity: 0) pois o evento ainda não ocorreu.',
    },
  },
};

export const Realizado = { args: { status: 'realizado' } };
Realizado.parameters = {
  docs: {
    description: {
      story: 'Evento realizado — ícone de check verde indicando conclusão com sucesso.',
    },
  },
};

export const Cancelado = { args: { status: 'cancelado' } };
Cancelado.parameters = {
  docs: {
    description: {
      story: 'Evento cancelado — ícone de "X" vermelho indicando que o evento não ocorrerá.',
    },
  },
};

export const Adiado = { args: { status: 'adiado' } };
Adiado.parameters = {
  docs: {
    description: { story: 'Evento adiado — ícone de cronômetro em cinza indicando reagendamento.' },
  },
};

export const Atrasado = { args: { status: 'atrasado' } };
Atrasado.parameters = {
  docs: {
    description: {
      story: 'Evento atrasado — ícone de alerta laranja indicando que o prazo foi ultrapassado.',
    },
  },
};
