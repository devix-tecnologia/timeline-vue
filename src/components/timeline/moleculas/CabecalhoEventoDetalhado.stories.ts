import CabecalhoEventoDetalhado from './CabecalhoEventoDetalhado.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';
import { dadosEventoDetalhado, dadosPerfil } from '../EventoDetalhado.mock';
import { EventoDetalhado } from '../typeDetalhado';
import { Perfil } from '../type';

export default {
  title: 'Devix/Moleculas/CabecalhoEventoDetalhado',
  component: CabecalhoEventoDetalhado,
  parameters: {
    docs: {
      description: {
        component: `Cabeçalho da visualização detalhada de um evento. Exibe o perfil do responsável (se disponível), a criticidade, o título com ícone da categoria, e a data/hora do evento.

## 🎯 Quando usar
- No topo da tela de detalhamento de um evento da timeline
- Para apresentar de forma consolidada as principais informações do evento

## 🚫 Quando NÃO usar
- Em listas ou cards compactos — prefira o componente EventoTimeline
- Quando não houver um evento completo para exibir

## ♿ Acessibilidade
- A criticidade é exibida como texto visível, não apenas por cor
- O título usa \`<h1>\` para manter a hierarquia semântica
- Perfil opcional: quando ausente, a seção simplemente não é renderizada`,
      },
    },
  },
  argTypes: {
    perfil: {
      description:
        'Dados do perfil (nome, imagem, icone). Opcional — quando ausente, a seção de perfil não é renderizada.',
      table: { type: { summary: 'Perfil' } },
    },
    evento: {
      description:
        'Dados completos do evento detalhado, incluindo categoria, criticidade, datas e horários.',
      table: { type: { summary: 'EventoDetalhado' } },
    },
  },
} as Meta<typeof CabecalhoEventoDetalhado>;

const perfilMock = dadosPerfil;
const CabecalhoMock = dadosEventoDetalhado[0];
const CabecalhoMock2 = dadosEventoDetalhado[1];

const Template: StoryFn<typeof CabecalhoEventoDetalhado> = (args) => ({
  components: { CabecalhoEventoDetalhado },
  setup() {
    return { args };
  },
  template: '<CabecalhoEventoDetalhado :perfil="args.perfil" :evento="args.evento" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  perfil: perfilMock satisfies Perfil,
  evento: CabecalhoMock satisfies EventoDetalhado,
};
Padrao.parameters = {
  docs: {
    description: {
      story:
        'Cabeçalho completo com perfil, evento realizado, criticidade alta e categoria "Remédio".',
    },
  },
};

export const SemPerfil = Template.bind({});
SemPerfil.args = {
  evento: CabecalhoMock2 satisfies EventoDetalhado,
};
SemPerfil.parameters = {
  docs: {
    description: {
      story:
        'Cabeçalho sem dados de perfil. A seção de perfil é ocultada, mantendo as demais informações do evento atrasado com criticidade média.',
    },
  },
};
