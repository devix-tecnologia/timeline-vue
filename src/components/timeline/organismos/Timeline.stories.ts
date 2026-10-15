import Timeline from './Timeline.vue';
import { Meta, StoryFn, StoryObj } from '@storybook/vue3-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { computed, ref } from 'vue';
import SeletorOpcoes from '../moleculas/SeletorOpcoes.vue';
import { eventosDaSelecao, perfilCopaDoMundo, titulosPorSelecao } from './CopaDoMundo.mock';
import {
  dadosEventos,
  dadosPerfil,
  dadosPerfilConsultor,
  gerarEventosConsultor,
  temaExemplo,
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
- Rola o próprio contêiner até o evento atual ao montar e quando a lista muda (prop \`rolarAteOAtual\`)

## 🎨 Aparências
A prop \`aparencia\` muda a forma de representar os eventos, sem mudar os dados:
- \`padrao\`: linha vertical, com a hora à esquerda e o ícone da categoria sobre a linha.
- \`cartoes\`: um cartão por evento ao lado de um trilho, com status por extenso, etiquetas de categoria, prioridade e destaque, e separadores de dia por extenso ("Hoje", "Amanhã").
- \`marcos\`: a hora à esquerda, o marcador do status sobre o trilho e um cartão com o status, o cliente e as ações do evento (\`acoes\`, emitidas em \`acaoClick\`).

Cada aparência troca o separador de dia e o evento (\`SeparadorPeriodo\`, \`SeparadorPeriodoCartao\` ou \`SeparadorPeriodoMarcos\`; \`EventoTimeline\`, \`EventoTimelineCartao\` ou \`EventoTimelineMarcos\`); a ordenação, o evento atual e o status atrasado continuam na Timeline.

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
        'Forma de representar os eventos: \`padrao\` (linha com a hora à esquerda), \`cartoes\` (um cartão por evento ao lado do trilho) ou \`marcos\` (hora, marcador do status e cartão com ações).',
      control: { type: 'select' },
      options: APARENCIAS_TIMELINE,
      table: { type: { summary: 'AparenciaTimeline' }, defaultValue: { summary: 'padrao' } },
    },
    rolarAteOAtual: {
      description:
        'Centraliza o evento atual no primeiro ancestral com \`overflow-y\` \`auto\` ou \`scroll\` (que pode ser a própria Timeline), ao montar e quando a lista muda. Nunca rola a página nem contêineres com \`overflow: hidden\`. Desligue quando quem usa a Timeline cuida da posição.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
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

export const Marcos: StoryObj<typeof Timeline> = {
  render: (args) => ({
    components: { Timeline },
    setup() {
      const acoes: string[] = [];
      const registrarAcao = (evento: Evento, acao: { rotulo: string }) => {
        acoes.push(`${acao.rotulo}: ${evento.titulo}`);
      };
      return { args, tema: temaExemplo, registrarAcao };
    },
    template: `
      <div :style="tema" style="max-width: 48rem; padding: 0 2rem">
        <Timeline v-bind="args" @acaoClick="registrarAcao" />
      </div>
    `,
  }),
  args: {
    aparencia: 'marcos',
    eventosTimeline: gerarEventosConsultor(),
  },
  parameters: {
    docs: {
      description: {
        story: `A agenda do consultor de vendas na aparência \`marcos\`, com as cores de uma marca fictícia (a Acme) aplicadas por tokens num contêiner, nos temas claro e escuro.

Cada evento mostra a hora à esquerda (a realizada, quando houver), o marcador do status sobre o trilho e um cartão com o título, o cliente, a hora prevista ou a descrição, o status por extenso e as ações do evento. As ações vêm do campo \`acoes\` do evento, e o clique nelas sai no evento \`acaoClick\`, separado do \`eventoClick\` do cartão.`,
      },
    },
  },
};

/**
 * A mesma Timeline no tema padrão e no de uma marca, cada uma com o tema claro e o escuro
 * forçados por data-tema: os tokens da marca trazem os dois valores, e o tema forçado vale
 * qualquer que seja o do sistema.
 */
export const TemasEMarca: StoryObj<typeof Timeline> = {
  name: 'Temas e marca',
  render: () => ({
    components: { Timeline },
    setup() {
      const combinacoes = [
        { id: 'padrao-claro', rotulo: 'Padrão, claro', tema: 'claro', marca: {} },
        { id: 'padrao-escuro', rotulo: 'Padrão, escuro', tema: 'escuro', marca: {} },
        { id: 'marca-claro', rotulo: 'Marca Acme, claro', tema: 'claro', marca: temaExemplo },
        { id: 'marca-escuro', rotulo: 'Marca Acme, escuro', tema: 'escuro', marca: temaExemplo },
      ].map((combinacao) => ({ ...combinacao, eventos: gerarEventosConsultor() }));
      return { combinacoes };
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr)); gap: 2.4rem; align-items: start">
        <figure
          v-for="item in combinacoes"
          :key="item.id"
          :data-tema="item.tema"
          :data-testid="item.id"
          :style="item.marca"
          style="margin: 0; padding: 1.2rem; color: var(--cor-texto); background: var(--cor-fundo)"
        >
          <figcaption style="padding-bottom: 0.8rem; font-size: 1.4rem">
            {{ item.rotulo }} — <code>data-tema="{{ item.tema }}"</code>
          </figcaption>
          <Timeline aparencia="marcos" :eventosTimeline="item.eventos" :rolarAteOAtual="false" />
        </figure>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const fundo = (id: string) =>
      getComputedStyle(canvas.getByTestId(id).querySelector('.areaTimeline')!).backgroundColor;

    // O fundo de cada Timeline é o do tema forçado, e não o do sistema.
    await expect(fundo('padrao-claro')).toBe('rgb(255, 255, 255)');
    await expect(fundo('padrao-escuro')).toBe('rgb(13, 17, 23)');
    await expect(fundo('marca-claro')).toBe('rgb(255, 255, 255)');
    await expect(fundo('marca-escuro')).toBe('rgb(17, 19, 28)');
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Os tokens \`--cor-*\` trazem o valor do tema claro e o do escuro, em \`light-dark()\`. O tema segue o do sistema, e \`data-tema="claro"\` ou \`data-tema="escuro"\` num contêiner força um deles só ali, para uma aplicação com botão de tema.

Para aplicar uma marca, redefina os tokens no mesmo formato, na página ou num contêiner. Aqui, a marca fictícia Acme:

\`\`\`css
.minha-marca {
  --cor-primaria: light-dark(#4338ca, #a5b4fc);
  --cor-fundo: light-dark(#ffffff, #11131c);
  --cor-texto: light-dark(#1a1c2b, #eceef6);
}
\`\`\``,
      },
    },
  },
};

/**
 * task-005: cada Timeline rola só o próprio contêiner até o evento atual. A página e a
 * moldura com overflow hidden ficam paradas.
 */
export const RolagemAteOAtual: StoryObj<typeof Timeline> = {
  name: 'Rolagem até o evento atual',
  render: () => ({
    components: { Timeline },
    setup() {
      // Uma lista de eventos por Timeline, porque a Timeline altera os eventos que recebe.
      return {
        caixas: [
          { id: 'rolagem-a', altura: '24rem', eventos: gerarEventosConsultor() },
          { id: 'rolagem-b', altura: '32rem', eventos: gerarEventosConsultor() },
        ],
        eventosMoldura: gerarEventosConsultor(),
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2.4rem; color: var(--cor-texto); font-size: 1.4rem">
        <figure v-for="caixa in caixas" :key="caixa.id" style="margin: 0">
          <figcaption style="padding: 0.8rem 0">Contêiner com <code>overflow-y: auto</code> e {{ caixa.altura }} de altura</figcaption>
          <div :data-testid="caixa.id" :style="{ height: caixa.altura, overflowY: 'auto' }">
            <Timeline aparencia="cartoes" :eventosTimeline="caixa.eventos" />
          </div>
        </figure>
        <figure style="margin: 0">
          <figcaption style="padding: 0.8rem 0">Moldura com <code>overflow: hidden</code>, que não rola</figcaption>
          <div data-testid="moldura" style="height: 24rem; overflow: hidden">
            <Timeline aparencia="cartoes" :eventosTimeline="eventosMoldura" />
          </div>
        </figure>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const pagina = canvasElement.ownerDocument.scrollingElement!;

    for (const id of ['rolagem-a', 'rolagem-b']) {
      const caixa = canvas.getByTestId(id);
      const atual = caixa.querySelector<HTMLElement>('.atual')!;
      expect(atual).toBeTruthy();
      // O evento atual desta Timeline fica visível dentro da própria caixa.
      await waitFor(
        () => {
          const limites = caixa.getBoundingClientRect();
          const evento = atual.getBoundingClientRect();
          expect(caixa.scrollTop).toBeGreaterThan(0);
          expect(evento.top).toBeGreaterThanOrEqual(limites.top - 1);
          expect(evento.bottom).toBeLessThanOrEqual(limites.bottom + 1);
        },
        { timeout: 3000 }
      );
    }

    expect(canvas.getByTestId('moldura').scrollTop).toBe(0);
    expect(pagina.scrollTop).toBe(0);
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Duas Timelines, cada uma num contêiner que rola, e uma terceira numa moldura com \`overflow: hidden\`.

Ao montar e quando a lista muda, cada Timeline centraliza o próprio evento atual no primeiro ancestral com \`overflow-y\` \`auto\` ou \`scroll\`. A página e a moldura não rolam, e o intervalo que acompanha o relógio não rola de novo. Para cuidar da posição por conta própria, use \`:rolarAteOAtual="false"\`.`,
      },
    },
  },
};

const ranking = titulosPorSelecao();

/**
 * As finais da Copa do Mundo, de 1930 a 2026, com a conquista de cada seleção. Os chips
 * filtram por seleção e trocam a lista da Timeline, que acompanha a troca da prop.
 */
export const FinaisDaCopaDoMundo: StoryObj<typeof Timeline> = {
  name: 'Finais da Copa do Mundo',
  render: (args) => ({
    components: { Timeline, SeletorOpcoes },
    setup() {
      const selecao = ref('todas');
      const opcoes = [
        {
          valor: 'todas',
          rotulo: 'Todas',
          contador: ranking.reduce((soma, r) => soma + r.titulos, 0),
        },
        ...ranking.map((r) => ({ valor: r.selecao, rotulo: r.selecao, contador: r.titulos })),
      ];
      const eventos = computed(() => eventosDaSelecao(selecao.value));
      return { args, selecao, opcoes, eventos, perfil: perfilCopaDoMundo };
    },
    template: `
      <div style="max-width: 56rem; display: flex; flex-direction: column; gap: 1.6rem">
        <SeletorOpcoes v-model="selecao" aparencia="chips" rotulo="Filtrar por seleção campeã" :opcoes="opcoes" />
        <Timeline v-bind="args" :perfilTimeline="perfil" :eventosTimeline="eventos" />
      </div>
    `,
  }),
  args: {
    aparencia: 'cartoes',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvasElement.querySelectorAll('.eventoCartao')).toHaveLength(23);

    await userEvent.click(canvas.getByRole('button', { name: /^Brasil/ }));

    await waitFor(() => expect(canvasElement.querySelectorAll('.eventoCartao')).toHaveLength(5));
    await expect(canvas.getByText('Brasil pentacampeão')).toBeTruthy();
    await expect(canvas.getByText(/Domingo, 30 de junho de 2002/)).toBeTruthy();
  },
  parameters: {
    docs: {
      description: {
        story: `Todas as finais da Copa do Mundo masculina, de Montevidéu em 1930 a East Rutherford em 2026, com o placar, o estádio, um fato marcante e a conquista de cada seleção naquele ano. A hora é a do pontapé inicial, no horário local do estádio. Em 1950 não houve final: o título saiu do último jogo do quadrangular, o Maracanaço.

Os chips filtram por seleção, com o número de títulos ao lado, e a Timeline acompanha a troca da lista. Troque a \`aparencia\` nos controles para ver as finais nas outras formas.

Títulos por seleção:
${ranking.map((r) => `- **${r.selecao}**: ${r.titulos} (${r.anos.join(', ')})`).join('\n')}

Fontes: os verbetes das finais na Wikipedia em inglês e, para 2026, a cobertura da Associated Press.`,
      },
    },
  },
};
