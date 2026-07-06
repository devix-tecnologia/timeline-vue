import AdiantarHorario from './AdiantarHorario.vue';
import { Meta } from '@storybook/vue3-vite';
import { dadosEventoDetalhado } from '../EventoDetalhado.mock';

export default {
  title: 'Devix/Templates/AdiantarHorario',
  component: AdiantarHorario,
  parameters: {
    docs: {
      description: {
        component: `Tela para adiantar o horário de um evento. Exibe o horário atual em formato editável e um botão para reduzir 15 minutos incrementais.

## 🎯 Quando usar
- Quando o usuário precisa antecipar o horário de um evento
- Em fluxos de remanejamento de tarefas na timeline

## 🚫 Quando NÃO usar
- Para adiar (postergar) o horário — o componente só permite adiantar
- Quando o horário do evento já passou

## ♿ Acessibilidade
- O campo de horário possui label "Horário" com classe \`.sr-only\` (acessível apenas para leitores de tela)
- O botão "- 15 minutos" permite ajuste rápido sem digitação manual
- O horário formatado segue o padrão dd/MM/yyyy - HH:mm`,
      },
    },
  },
  argTypes: {
    evento: {
      description: 'Evento cujo horário será adiantado. Usa \`previstoPara\` como horário base.',
      table: {
        type: { summary: 'EventoDetalhado' },
      },
    },
    salvarVisivel: {
      description: 'Controla a exibição dos botões de salvar e cancelar.',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} as Meta<typeof AdiantarHorario>;

const eventoUmMock = dadosEventoDetalhado[0];

export const Padrao = {
  args: {
    salvarVisivel: true,
    evento: eventoUmMock,
  },
};
Padrao.parameters = {
  docs: {
    description: {
      story:
        'Tela de adiantamento de horário com botões de salvar visíveis. Clique em "- 15 minutos" para reduzir o horário incrementalmente.',
    },
  },
};

export const SalvamentoOculto = {
  args: {
    salvarVisivel: false,
    evento: eventoUmMock,
  },
};
SalvamentoOculto.parameters = {
  docs: {
    description: {
      story:
        'Tela de adiantamento com área de salvamento oculta — útil durante transições ou carregamento.',
    },
  },
};
