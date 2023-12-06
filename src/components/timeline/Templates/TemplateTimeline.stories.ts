import TemplateTimeline from './TemplateTimeline.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import { dadosEventoDetalhado, dadosPerfil as dadosPerfilEvento } from '../EventoDetalhado.mock';
import { dadosEventosDetalhados, dadosPerfil as dadosPerfilTimeline } from '../Templates//TemplateTimeline.mock';

export default {
  title: 'Devix/Eventos/Templates/TemplateTimeline',
  component: TemplateTimeline,
  parameters: {
    componentSubtitle: 'Timeline com tela de detalhes do evento.',
  },
  argTypes: {},
} as Meta<typeof TemplateTimeline>;

// Corrigir as datas inválidas em dadosEventoDetalhado[0] antes de usá-las

const perfilSemTitulo = { nome: '', imagem: '', icone: '' };
const perfilTimelineMock = dadosPerfilTimeline;
const eventosTimeline = dadosEventosDetalhados;

const Template: StoryFn<typeof TemplateTimeline> = (args) => ({
  components: { TemplateTimeline },
  setup() {
    const handleAdicionarObservacaoSalvarClick = (
      mensagem: String,
      mouseEvent: MouseEvent
    ): void => {
      // Remover alteração dos dados ao finalizar testes
      TemplateTimeline.dados.eventoDetalhado!.observacoes.push({
        mensagem: mensagem,
        autor: { nome: 'José da Silva' },
        criadaEm: new Date(),
      });
    };

    return { handleAdicionarObservacaoSalvarClick, args };
  },
  template:
    '<TemplateTimeline v-bind="args" @observacaoAdicionarSalvarClick="handleAdicionarObservacaoSalvarClick" />',
});

export const Timeline = Template.bind({});
Timeline.args = {
  perfil: perfilTimelineMock,
  eventos: eventosTimeline,
};

export const semTitulo = Template.bind({});
semTitulo.args = {
  perfil: perfilSemTitulo,
  eventos: eventosTimeline,
};
