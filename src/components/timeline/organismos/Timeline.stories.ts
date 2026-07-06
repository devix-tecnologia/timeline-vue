import Timeline from './Timeline.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';
import { dadosEventos, dadosPerfil } from './Timeline.mock';
import { Evento } from '../type';

export default {
  title: 'Devix/Organismos/Timeline',
  component: Timeline,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Eb4gpZ5HsK3xPAErpd8TQl/timeline-ui?type=design&node-id=226-2538&mode=design&t=gtygrUm9znRhEPR6-4',
    },
    docs: {
      description: {
        component: `Linha do tempo que agrupa eventos por data, com separadores de dia e destaque para o evento mais próximo do horário atual.

## 🎯 Quando usar
- Exibir uma sequência cronológica de eventos
- Mostrar linha do tempo de compromissos/agenda
- Destacar visualmente o evento mais próximo ("atual")
- Navegar por eventos passados, presentes e futuros

## 🚫 Quando NÃO usar
- Listas simples sem ordenação temporal (use uma lista comum)
- Eventos únicos sem agrupamento por data
- Dados não-cronológicos

## 📦 Estrutura
O componente recebe um perfil opcional no topo e uma lista de eventos. Internamente:
- Ordena os eventos por data
- Insere separadores de período entre dias diferentes
- Identifica e marca o evento "atual" (mais próximo do horário corrente com status planejado/atrasado)
- Atualiza o status para "atrasado" quando ultrapassa a tolerância
- Rola automaticamente até o evento atual na montagem

## ♿ Acessibilidade
- Os eventos são navegáveis por teclado via click
- Cada evento possui \`data-testid\` para testes automatizados
- O perfil possui imagem com fallback para ícone e texto`,
      },
    },
  },
  argTypes: {
    perfilTimeline: {
      description: 'Dados do perfil exibido no topo da timeline (nome, imagem, ícone)',
      table: { type: { summary: 'Perfil | undefined' }, defaultValue: { summary: 'undefined' } },
    },
    eventosTimeline: {
      description: 'Lista de eventos a serem exibidos na linha do tempo, ordenados por data',
      table: { type: { summary: 'Evento[]' } },
    },
  },
} as Meta<typeof Timeline>;

const perfilMock = dadosPerfil;

const eventosPorDataMock = dadosEventos;

function atualizarDatas(eventos: Evento[]) {
  const agora = new Date();
  const mesAtual = agora.getMonth() + 1;

  for (let i = 0; i < eventos.length; i++) {
    const evento = eventos[i];
    const mesEvento = evento.data.getMonth() + 1;

    if (mesEvento >= mesAtual) {
      evento.data.setMonth(agora.getMonth(), agora.getDate());
      evento.previstoPara.setMonth(agora.getMonth(), agora.getDate());
    }
  }
}
atualizarDatas(dadosEventos);

const Template: StoryFn<typeof Timeline> = (args) => ({
  components: { Timeline: Timeline },
  setup() {
    const emitirEventoClick = (evento: Evento) => {
      alert(`foi clicado no evento ${evento.titulo}`);
    };
    return { args, emitirEventoClick };
  },
  template:
    '<Timeline v-bind="args" @eventoClick="emitirEventoClick" style="position: relative" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  perfilTimeline: perfilMock,
  eventosTimeline: eventosPorDataMock,
};
Padrao.parameters = {
  docs: {
    description: {
      story:
        'Timeline completa com perfil e múltiplos eventos em diferentes status e criticidades.',
    },
  },
};

export const SemPerfil = Template.bind({});
SemPerfil.args = {
  perfilTimeline: undefined,
  eventosTimeline: eventosPorDataMock,
};
SemPerfil.parameters = {
  docs: {
    description: {
      story:
        'Timeline sem o perfil no topo. Útil quando o contexto do perfil já é conhecido pelo usuário.',
    },
  },
};
