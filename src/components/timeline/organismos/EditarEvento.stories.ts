import EditarEvento from './EditarEvento.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Organismos/EditarEvento',
  component: EditarEvento,
  parameters: {
    docs: {
      description: {
        component: `Componente de layout que serve como tela única de edição de um evento. Possui dois slots: #conteudo (área principal) e #salvamento (área extra abaixo dos botões).

## 🎯 Quando usar
- Como estrutura-base para telas de edição de evento (status, observação, horário)
- Quando é necessário um padrão consistente de "editar + salvar/cancelar"

## 🚫 Quando NÃO usar
- Para telas que não exigem ação de salvar ou cancelar
- Como substituto para um modal de confirmação simples

## ♿ Acessibilidade
- Os botões de salvar e cancelar são emitidos como eventos para o componente pai
- O slot #salvamento permite inserir conteúdo extra acessível via teclado
- Use aria-labels nos slots para descrever ações personalizadas`,
      },
    },
  },
  argTypes: {
    salvarVisivel: {
      description: 'Controla a visibilidade da área de salvamento (botões salvar/cancelar).',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} as Meta<typeof EditarEvento>;

const Template: StoryFn<typeof EditarEvento> = (args) => ({
  components: { EditarEvento },
  setup() {
    return { args };
  },
  template:
    '<EditarEvento :dadosEvento="args.dadosEvento" :aoClicar="args.aoClicar" :salvarVisivel="args.salvarVisivel" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  salvarVisivel: true,
  aoClicar: (_evento) => alert('Olá!'),
};
Padrao.parameters = {
  docs: {
    description: {
      story:
        'Estado padrão com a área de salvamento visível, exibindo botões de salvar e cancelar.',
    },
  },
};

export const SalvarInvisivel = Template.bind({});
SalvarInvisivel.args = {
  salvarVisivel: false,
  aoClicar: (_evento) => alert('Olá!'),
};
SalvarInvisivel.parameters = {
  docs: {
    description: {
      story:
        'Área de salvamento oculta. Útil durante a transição entre etapas ou quando a ação de salvar não está disponível.',
    },
  },
};
