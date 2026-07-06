import TemplateEvento from './TemplateEvento.vue';
import { Meta } from '@storybook/vue3-vite';
import { dadosEventoDetalhado, dadosPerfil } from '../EventoDetalhado.mock';
import { Status } from '../type';
import { EventoDetalhado } from '../typeDetalhado';

export default {
  title: 'Devix/Templates/TemplateEvento',
  component: TemplateEvento,
  parameters: {
    docs: {
      description: {
        component: `Template de página completa para exibição de detalhes de um evento. Combina o Topo (com nome da categoria) e o organismo EventoDetalhado.

## 🎯 Quando usar
- Como tela de detalhes após selecionar um evento na timeline
- Quando é necessário navegar de volta para a tela anterior

## 🚫 Quando NÃO usar
- Em contextos onde o topo com título não é desejado (use o organismo EventoDetalhado diretamente)
- Para edição de eventos (use TemplateEditarEvento)

## ♿ Acessibilidade
- O componente Topo inclui botão de voltar para navegação
- A estrutura segue uma hierarquia de cabeçalho e conteúdo`,
      },
    },
  },
  argTypes: {
    perfilEvento: {
      description: 'Dados do perfil (nome, imagem, icone) exibido no cabeçalho do evento.',
      table: {
        type: { summary: 'Perfil' },
      },
    },
    dadosEvento: {
      description: 'Dados completos do evento a ser exibido.',
      table: {
        type: { summary: 'EventoDetalhado' },
      },
    },
  },
} as Meta<typeof TemplateEvento>;

const perfilMock = dadosPerfil;
const eventoUmMock = dadosEventoDetalhado[0];
const eventoDoisMock = dadosEventoDetalhado[1];

const eventoCanceladoMock: EventoDetalhado = {
  ...dadosEventoDetalhado[0],
  titulo: 'Consulta oftalmológica',
  status: 'cancelado' satisfies Status,
  categoria: { nome: 'Consulta', icone: 'stethoscope' },
};

export const Padrao = {
  args: {
    perfilEvento: perfilMock,
    dadosEvento: eventoUmMock,
  },
};
Padrao.parameters = {
  docs: {
    description: {
      story: 'Exibição padrão com perfil, evento e topo mostrando a categoria "Remédio".',
    },
  },
};

export const SemPerfil = {
  args: {
    perfilEvento: { nome: '', imagem: '', icone: '' },
    dadosEvento: eventoDoisMock,
  },
};
SemPerfil.parameters = {
  docs: {
    description: {
      story: 'Template sem perfil definido — o topo ainda exibe o nome da categoria do evento.',
    },
  },
};

export const Cancelado = {
  args: {
    perfilEvento: perfilMock,
    dadosEvento: eventoCanceladoMock,
  },
};
Cancelado.parameters = {
  docs: {
    description: {
      story:
        'Evento com status "cancelado" demonstrando a variação visual do indicador no cabeçalho detalhado.',
    },
  },
};
