import EventoDetalhado from './EventoDetalhado.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';
import { dadosEventoDetalhado, dadosPerfil } from '../EventoDetalhado.mock';
import { Perfil, Status } from '../type';
import { EventoDetalhado as TipoEventoDetalhado } from '../typeDetalhado';

export default {
  title: 'Devix/Organismos/EventoDetalhado',
  component: EventoDetalhado,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Eb4gpZ5HsK3xPAErpd8TQl/timeline-ui?type=design&node-id=226-2078&mode=design&t=gtygrUm9znRhEPR6-4',
    },
    docs: {
      description: {
        component: `Componente que exibe os detalhes completos de um evento da timeline: cabeçalho com perfil, descrição, observações e status.

## 🎯 Quando usar
- Para visualizar informações detalhadas de um evento selecionado na timeline
- Quando o usuário precisa ver observações e o status atual do evento
- Em conjunto com a tela de timeline para exibir o painel de detalhes

## 🚫 Quando NÃO usar
- Para exibir apenas um resumo do evento (use componentes de molécula como CabecalhoEvento ou Timeline)
- Em telas que não precisam de interação com status ou observações

## ♿ Acessibilidade
- O componente usa transições \`fadeBaixo\` que respeitam o \`prefers-reduced-motion\`
- O status do evento é renderizado como elemento clicável com data-testid para testes
- O slot #descricao permite inserir conteúdo descritivo semântico`,
      },
    },
  },
  argTypes: {
    perfil: {
      description: 'Dados do perfil do paciente/responsável (nome, imagem, icone).',
      table: {
        type: { summary: 'Perfil' },
      },
    },
    evento: {
      description: 'Dados completos do evento incluindo observações, status e metadados.',
      table: {
        type: { summary: 'EventoDetalhado' },
      },
    },
  },
} as Meta<typeof EventoDetalhado>;

const perfilMock = dadosPerfil;
const eventoUmMock = dadosEventoDetalhado[0];
const eventoDoisMock = dadosEventoDetalhado[1];

// Evento com status "atrasado" usando uma cópia modificada do evento mock
const eventoAtrasadoMock: TipoEventoDetalhado = {
  ...dadosEventoDetalhado[0],
  titulo: 'Administrar insulina',
  subtitulo: 'Verificar glicemia antes de administrar',
  status: 'atrasado' satisfies Status,
  categoria: { nome: 'Medicação', icone: 'medication' },
};

const Template: StoryFn<typeof EventoDetalhado> = (args) => ({
  components: { EventoDetalhado },
  setup() {
    return { args };
  },
  template: '<EventoDetalhado :perfil="args.perfil" :evento="args.evento" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  perfil: perfilMock satisfies Perfil,
  evento: eventoUmMock satisfies TipoEventoDetalhado,
};
Padrao.parameters = {
  docs: {
    description: {
      story: 'Exibição padrão com perfil, descrição, observações e status "realizado".',
    },
  },
};

export const SemPerfil = Template.bind({});
SemPerfil.args = {
  evento: eventoDoisMock satisfies TipoEventoDetalhado,
};
SemPerfil.parameters = {
  docs: {
    description: {
      story:
        'Evento detalhado sem perfil definido — útil quando o contexto do usuário já é conhecido na tela.',
    },
  },
};

export const Atrasado = Template.bind({});
Atrasado.args = {
  perfil: perfilMock satisfies Perfil,
  evento: eventoAtrasadoMock satisfies TipoEventoDetalhado,
};
Atrasado.parameters = {
  docs: {
    description: {
      story: 'Evento com status "atrasado" demonstrando a variação visual do indicador de status.',
    },
  },
};
