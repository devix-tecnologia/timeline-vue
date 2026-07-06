import EditarStatus from './EditarStatus.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';
import { dadosEventoDetalhado } from '../EventoDetalhado.mock';
import { EventoDetalhado } from '../typeDetalhado';

export default {
  title: 'Devix/Templates/EditarStatus',
  component: EditarStatus,
  parameters: {
    docs: {
      description: {
        component: `Tela de alteração de status do evento. Permite selecionar entre "Realizado", "Cancelado" e "Adiado". Quando "Adiado" é selecionado, exibe campo para nova data.

## 🎯 Quando usar
- Para alterar o status de um evento (realizado, cancelado, adiado)
- Como fluxo secundário a partir da tela de detalhes do evento

## 🚫 Quando NÃO usar
- Para editar outros atributos do evento (use EditarEvento com slots específicos)
- Quando o status não pode ser alterado (evento já finalizado)

## ♿ Acessibilidade
- Os botões de status possuem data-testid para testes automatizados
- O campo de nova data (para status "adiado") aparece condicionalmente com transição suave
- Use o slot #salvamento para instruções adicionais de teclado`,
      },
    },
  },
  argTypes: {
    evento: {
      description: 'Evento cujo status será alterado. O status atual é pré-selecionado.',
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
} as Meta<typeof EditarStatus>;

const eventoUmMock = dadosEventoDetalhado[0];

const Template: StoryFn<typeof EditarStatus> = (args) => ({
  components: { EditarStatus },
  setup() {
    return { args };
  },
  template:
    '<EditarStatus :aoClicar="args.aoClicar" :salvarVisivel="args.salvarVisivel"  :evento="args.evento"  />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  evento: eventoUmMock satisfies EventoDetalhado,
  salvarVisivel: true,
};
Padrao.parameters = {
  docs: {
    description: {
      story:
        'Estado padrão com botões de salvar visíveis. O status atual do evento vem pré-selecionado.',
    },
  },
};

export const SalvamentoOculto = Template.bind({});
SalvamentoOculto.args = {
  evento: eventoUmMock satisfies EventoDetalhado,
  salvarVisivel: false,
};
SalvamentoOculto.parameters = {
  docs: {
    description: {
      story:
        'Área de salvamento oculta. Pode ser usado durante loading ou quando a ação ainda não está disponível.',
    },
  },
};
