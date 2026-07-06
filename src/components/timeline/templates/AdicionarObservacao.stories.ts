import AdicionarObservacao from './AdicionarObservacao.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Templates/AdicionarObservacao',
  component: AdicionarObservacao,
  parameters: {
    docs: {
      description: {
        component: `Tela para adicionar uma observação textual a um evento. Usa o layout EditarEvento como estrutura com um textarea no slot #conteudo.

## 🎯 Quando usar
- Quando o usuário precisa registrar uma observação livre sobre um evento
- Como fluxo secundário a partir da tela de detalhes do evento

## 🚫 Quando NÃO usar
- Para anexar arquivos ou mídia (o componente aceita apenas texto)
- Quando a observação é gerada automaticamente pelo sistema

## ♿ Acessibilidade
- O textarea possui \`aria-labelledby\' vinculado ao label "Observação:"
- O foco deve ser gerenciado para levar o cursor ao textarea ao abrir a tela
- A área de texto é dimensionada para mínimo de 20rem de altura`,
      },
    },
  },
  argTypes: {
    salvarVisivel: {
      description: 'Controla a exibição dos botões de salvar e cancelar.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    observacao: {
      description: 'Texto inicial da observação (para edição de observação existente).',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof AdicionarObservacao>;

const Template: StoryFn<typeof AdicionarObservacao> = (args) => ({
  components: { AdicionarObservacao },
  setup() {
    const handleAdicionarClick = (mensagem: string, _mouseEvent: MouseEvent) => {
      alert(`Observação adicionada: ${mensagem}`);
    };
    return { handleAdicionarClick, args };
  },
  template:
    '<AdicionarObservacao :adicionarClick="handleAdicionarClick" :salvarVisivel="args.salvarVisivel" :observacao="args.observacao" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  salvarVisivel: true,
};
Padrao.parameters = {
  docs: {
    description: {
      story:
        'Tela vazia para adicionar uma nova observação. O textarea inicia em branco e a área de salvamento está visível.',
    },
  },
};

export const ComObservacaoExistente = Template.bind({});
ComObservacaoExistente.args = {
  salvarVisivel: true,
  observacao: 'Paciente apresentou melhora significativa após o procedimento.',
};
ComObservacaoExistente.parameters = {
  docs: {
    description: {
      story:
        'Observação com texto pré-preenchido — útil para edição de uma observação já existente.',
    },
  },
};

export const SalvamentoOculto = Template.bind({});
SalvamentoOculto.args = {
  salvarVisivel: false,
};
SalvamentoOculto.parameters = {
  docs: {
    description: {
      story: 'Área de salvamento oculta. O textarea permanece editável para rascunho.',
    },
  },
};
