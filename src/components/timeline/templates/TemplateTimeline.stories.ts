import TemplateTimeline from './TemplateTimeline.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';
import {
  dadosEventosDetalhados,
  dadosPerfil as dadosPerfilTimeline,
} from '../templates/TemplateTimeline.mock';
import { EventoDetalhado } from '../typeDetalhado';

export default {
  title: 'Devix/Templates/TemplateTimeline',
  component: TemplateTimeline,
  parameters: {
    docs: {
      description: {
        component: `Template de tela completa que gerencia a navegação entre a timeline de eventos, detalhes do evento, edição de status e adição de observações. Atua como um controlador de telas (multi-step).

## 🎯 Quando usar
- Como tela principal da funcionalidade de timeline
- Quando o usuário precisa navegar entre a lista de eventos, detalhes, edição de status e observações

## 🚫 Quando NÃO usar
- Para exibir apenas a lista de eventos sem interação (use o organismo Timeline diretamente)
- Em telas que não exigem múltiplos estados de navegação

## ♿ Acessibilidade
- O topo inclui botão de voltar para navegação entre telas
- Cada sub-tela (evento, status, observação) possui data-testid próprio para testes
- Transições entre telas usam animações fade que respeitam prefers-reduced-motion`,
      },
    },
  },
  argTypes: {
    perfil: {
      description: 'Dados do perfil exibido no topo e compartilhado entre as sub-telas.',
      table: {
        type: { summary: 'Perfil' },
      },
    },
    eventos: {
      description: 'Lista de eventos detalhados que compõem a timeline.',
      table: {
        type: { summary: 'EventoDetalhado[]' },
      },
    },
  },
} as Meta<typeof TemplateTimeline>;

const perfilSemTitulo = { nome: '', imagem: '', icone: '' };
const perfilTimelineMock = dadosPerfilTimeline;
const eventosTimeline = dadosEventosDetalhados;

const Template: StoryFn<typeof TemplateTimeline> = (args) => ({
  components: { TemplateTimeline },
  setup() {
    const handleAdicionarObservacaoSalvarClick = (
      evento: EventoDetalhado,
      mensagem: string
    ): void => {
      evento.observacoes.push({
        mensagem: mensagem,
        autor: { nome: 'José da Silva' },
        criadaEm: new Date(),
      });
      alert('Observação adicionada com sucesso!');
    };

    const handleVoltarClick = (_mouseEvent: MouseEvent): void => {
      alert('Voltar para a tela anterior!');
    };

    return { handleAdicionarObservacaoSalvarClick, handleVoltarClick, args };
  },
  template:
    '<TemplateTimeline v-bind="args" @voltarClick="handleVoltarClick" @adicionarObservacaoSalvarClicked="handleAdicionarObservacaoSalvarClick" />',
});

export const Timeline = Template.bind({});
Timeline.args = {
  perfil: perfilTimelineMock,
  eventos: eventosTimeline,
};
Timeline.parameters = {
  docs: {
    description: {
      story:
        'Timeline completa com perfil definido e lista de eventos. Navegue entre os eventos clicando neles.',
    },
  },
};

export const semTitulo = Template.bind({});
semTitulo.args = {
  perfil: perfilSemTitulo,
  eventos: eventosTimeline,
};
semTitulo.parameters = {
  docs: {
    description: {
      story: 'Timeline sem nome de perfil no topo — o cabeçalho exibe apenas o botão de voltar.',
    },
  },
};
