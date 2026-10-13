import Timeline from './Timeline.vue';
import { Meta, StoryFn, StoryObj } from '@storybook/vue3-vite';
import {
  dadosEventos,
  dadosPerfil,
  dadosPerfilConsultor,
  gerarEventosConsultor,
  temaAgiliza,
} from './Timeline.mock';
import { APARENCIAS_TIMELINE } from './Timeline.types';
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

## 🎨 Aparências
A prop \`aparencia\` muda a forma de representar os eventos, sem mudar os dados:
- \`padrao\`: linha vertical, com a hora à esquerda e o ícone da categoria sobre a linha.
- \`cartoes\`: um cartão por evento ao lado de um trilho, com status por extenso, etiquetas de categoria, prioridade e destaque, e separadores de dia por extenso ("Hoje", "Amanhã").
- \`agiliza\`: a hora à esquerda, o marcador do status sobre o trilho e um cartão com o status, o cliente e as ações do evento (\`acoes\`, emitidas em \`acaoClick\`). Segue o projeto gráfico do agiliza.ai.

Cada aparência troca o separador de dia e o evento (\`SeparadorPeriodo\`, \`SeparadorPeriodoCartao\` ou \`SeparadorPeriodoAgiliza\`; \`EventoTimeline\`, \`EventoTimelineCartao\` ou \`EventoTimelineAgiliza\`); a ordenação, o evento atual e o status atrasado continuam na Timeline.

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
    aparencia: {
      description:
        'Forma de representar os eventos: \`padrao\` (linha com a hora à esquerda), \`cartoes\` (um cartão por evento ao lado do trilho) ou \`agiliza\` (hora, marcador do status e cartão com ações).',
      control: { type: 'select' },
      options: APARENCIAS_TIMELINE,
      table: { type: { summary: 'AparenciaTimeline' }, defaultValue: { summary: 'padrao' } },
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

export const Cartoes: StoryObj<typeof Timeline> = {
  name: 'Cartões',
  render: Template,
  args: {
    aparencia: 'cartoes',
    perfilTimeline: dadosPerfilConsultor,
    eventosTimeline: gerarEventosConsultor(),
  },
  parameters: {
    docs: {
      description: {
        story: `Agenda de um consultor de vendas de desenvolvimento de sistemas, de ontem a daqui a três dias, na aparência \`cartoes\`.

Cada evento vira um cartão com a hora, o status por extenso, o cliente e as etiquetas de categoria, prioridade e destaque (o valor da proposta, a pauta do encontro). A prioridade aparece também na faixa à esquerda do cartão. Eventos encerrados perdem o preenchimento, o cancelado fica tracejado e o evento atual ganha o fundo de seleção.

A proposta de ontem não foi enviada: a Timeline a marca como atrasada.`,
      },
    },
  },
};

/**
 * Uma Timeline por valor de APARENCIAS_TIMELINE: aparência nova aparece aqui sem editar a story.
 */
export const Aparencias: StoryObj<typeof Timeline> = {
  name: 'Aparências lado a lado',
  render: () => ({
    components: { Timeline },
    setup() {
      // Uma lista de eventos por Timeline, porque a Timeline altera os eventos que recebe.
      const aparencias = APARENCIAS_TIMELINE.map((aparencia) => ({
        aparencia,
        eventos: gerarEventosConsultor(),
      }));
      return { aparencias, perfil: dadosPerfilConsultor };
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(36rem, 1fr)); gap: 2.4rem; align-items: start">
        <figure v-for="item in aparencias" :key="item.aparencia" style="margin: 0">
          <figcaption style="padding: 0.8rem 0; color: var(--cor-texto); font-size: 1.4rem">
            aparencia: <code>{{ item.aparencia }}</code>
          </figcaption>
          <Timeline
            :aparencia="item.aparencia"
            :perfilTimeline="perfil"
            :eventosTimeline="item.eventos"
          />
        </figure>
      </div>
    `,
  }),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'A mesma agenda do consultor de vendas em cada aparência, para comparar as formas de representar os eventos.',
      },
    },
  },
};

export const Agiliza: StoryObj<typeof Timeline> = {
  render: (args) => ({
    components: { Timeline },
    setup() {
      const acoes: string[] = [];
      const registrarAcao = (evento: Evento, acao: { rotulo: string }) => {
        acoes.push(`${acao.rotulo}: ${evento.titulo}`);
      };
      return { args, tema: temaAgiliza, registrarAcao };
    },
    template: `
      <div :style="tema" style="max-width: 48rem; padding: 0 2rem">
        <Timeline v-bind="args" @acaoClick="registrarAcao" />
      </div>
    `,
  }),
  args: {
    aparencia: 'agiliza',
    eventosTimeline: gerarEventosConsultor(),
  },
  parameters: {
    docs: {
      description: {
        story: `A agenda do consultor de vendas na aparência \`agiliza\`, com as cores do projeto gráfico do agiliza.ai aplicadas por tokens num contêiner.

Cada evento mostra a hora à esquerda (a realizada, quando houver), o marcador do status sobre o trilho e um cartão com o título, o cliente, a hora prevista ou a descrição, o status por extenso e as ações do evento. As ações vêm do campo \`acoes\` do evento, e o clique nelas sai no evento \`acaoClick\`, separado do \`eventoClick\` do cartão.`,
      },
    },
  },
};
