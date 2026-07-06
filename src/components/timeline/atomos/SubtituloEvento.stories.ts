import '@fontsource/material-icons';
import SubtituloEvento from './SubtituloEvento.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/SubtituloEvento',
  component: SubtituloEvento,
  parameters: {
    docs: {
      description: {
        component: `Exibe o subtítulo ou descrição secundária de um evento na timeline.

## 🎯 Quando usar
- Para mostrar uma descrição curta abaixo do título do evento
- Como complemento ao TituloEvento em cards de timeline

## 🚫 Quando NÃO usar
- Para o título principal do evento (use TituloEvento)
- Para conteúdo longo que ultrapasse uma linha — o layout não foi dimensionado para múltiplas linhas

## ♿ Acessibilidade
- Renderizado como <h4> (cabeçalho nível 4), mantendo a hierarquia semântica
- O texto é totalmente acessível por leitores de tela`,
      },
    },
  },
  argTypes: {
    subtitulo: {
      description: 'Texto do subtítulo ou descrição secundária do evento.',
      table: { type: { summary: 'string' } },
    },
  },
} as Meta<typeof SubtituloEvento>;

const subtituloEventooMock = 'subtitulo';

export const Padrao = { args: { subtitulo: subtituloEventooMock } };
Padrao.parameters = {
  docs: { description: { story: 'Subtítulo padrão com texto simples.' } },
};

export const SubtituloLongo = {
  args: { subtitulo: 'Descrição complementar do evento na timeline' },
};
SubtituloLongo.parameters = {
  docs: {
    description: {
      story: 'Subtítulo com texto mais longo para verificar o comportamento de layout.',
    },
  },
};
