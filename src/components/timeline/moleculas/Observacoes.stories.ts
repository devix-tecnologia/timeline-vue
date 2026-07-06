import Observacoes from './Observacoes.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';
import { dadosEventoDetalhado } from '../EventoDetalhado.mock';

export default {
  title: 'Devix/Moleculas/Observacoes',
  component: Observacoes,
  parameters: {
    docs: {
      description: {
        component: `Seção de observações de um evento. Exibe uma lista cronológica reversa de comentários e um botão para adicionar novas observações.

## 🎯 Quando usar
- Na tela de detalhamento do evento para registrar e consultar observações
- Sempre que o evento permitir anotações livres pelos cuidadores ou profissionais

## 🚫 Quando NÃO usar
- Para mensagens curtas ou notificações — prefira um campo de texto simples
- Quando não houver suporte a backend para persistir as observações

## ♿ Acessibilidade
- Cada observação é um item de lista (\`<li>\`) dentro de uma lista não ordenada
- O autor e a data são exibidos como texto, garantindo que a informação não dependa apenas de cor
- O botão "adicionar" possui rótulo textual e ícone para melhor identificação`,
      },
    },
  },
  argTypes: {
    observacoes: {
      description: 'Lista de observações do evento, ordenadas da mais recente para a mais antiga.',
      table: { type: { summary: 'Observacao[]' } },
    },
    tituloBotao: {
      description: 'Texto exibido no botão de adicionar nova observação.',
      table: { type: { summary: 'string' } },
    },
  },
} as Meta<typeof Observacoes>;

const observacoesMock = dadosEventoDetalhado[0].observacoes;

const Template: StoryFn<typeof Observacoes> = (args) => ({
  components: { Observacoes },
  setup() {
    const adicionarClick = (_mouseEvent: MouseEvent) => {
      alert('Clicou no botão adicionar!');
    };

    return { adicionarClick, args };
  },
  template: '<Observacoes v-bind="args" @adicionarClick="adicionarClick" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  tituloBotao: 'Inserir observação',
  observacoes: observacoesMock,
};
Padrao.parameters = {
  docs: {
    description: {
      story:
        'Lista de observações preenchida com dados mockados, exibindo autor, data e mensagem de cada observação.',
    },
  },
};

export const Vazio = Template.bind({});
Vazio.args = {
  tituloBotao: 'Inserir observação',
  observacoes: [],
};
Vazio.parameters = {
  docs: {
    description: {
      story: 'Estado vazio: exibe apenas o botão de adicionar, sem nenhuma observação na lista.',
    },
  },
};
