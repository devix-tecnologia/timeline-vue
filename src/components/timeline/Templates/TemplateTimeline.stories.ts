import TemplateTimeline from './TemplateTimeline.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import {
  dadosEventosDetalhados,
  dadosPerfil as dadosPerfilTimeline,
} from '../Templates//TemplateTimeline.mock';
import { EventoDetalhado } from '../typeDetalhado';

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
      evento: EventoDetalhado,
      mensagem: string
    ): void => {
      evento.observacoes.push({
        mensagem: mensagem,
        autor: { nome: 'José da Silva' },
        criadaEm: new Date(),
      });
      //TODO: fechar a tela de adicionar observação
      alert('Observação adicionada com sucesso!');
    };

    return { handleAdicionarObservacaoSalvarClick, args };
  },
  template:
    '<TemplateTimeline v-bind="args" @adicionarObservacaoSalvarClicked="handleAdicionarObservacaoSalvarClick" />',
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