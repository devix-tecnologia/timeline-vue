import '@fontsource/material-icons';
import Destaque from './Destaque.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/Destaque',
  component: Destaque,
  parameters: {
    docs: {
      description: {
        component: `Exibe um texto de destaque alinhado à direita, usado para informações complementares em eventos da timeline.

## 🎯 Quando usar
- Para exibir informações adicionais como duração, prioridade ou metadados do evento
- Como elemento de destaque visual na linha do tempo, alinhado à direita

## 🚫 Quando NÃO usar
- Para o título ou subtítulo principal do evento (use TituloEvento ou SubtituloEvento)
- Para conteúdo longo que ultrapasse 15% da largura do container

## ♿ Acessibilidade
- O texto é renderizado como div simples — é acessível por leitores de tela
- O componente fica com opacidade reduzida (0.65) quando o evento está realizado, cancelado ou adiado`,
      },
    },
  },
  argTypes: {
    texto: {
      description: 'Texto de destaque a ser exibido, alinhado à direita.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
  },
} as Meta<typeof Destaque>;

const DestaqueoMock = 'Texto alinhado a direita';

export const Padrao = { args: { texto: DestaqueoMock } };
Padrao.parameters = {
  docs: { description: { story: 'Texto de destaque alinhado à direita com estilo padrão.' } },
};

export const TextoLongo = { args: { texto: '2h 30min de duração' } };
TextoLongo.parameters = {
  docs: {
    description: {
      story: 'Exemplo com texto mais longo representando metadados como duração do evento.',
    },
  },
};
