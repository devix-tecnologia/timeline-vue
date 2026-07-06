import '@fontsource/material-icons';
import TituloEvento from './TituloEvento.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/TituloEvento',
  component: TituloEvento,
  parameters: {
    docs: {
      description: {
        component: `Exibe o título principal de um evento na timeline.

## 🎯 Quando usar
- Para mostrar o nome ou título principal do evento
- Como cabeçalho primário dentro de um card de timeline

## 🚫 Quando NÃO usar
- Para subtítulos ou descrições secundárias (use SubtituloEvento)
- Em contexts fora da timeline de eventos

## ♿ Acessibilidade
- Renderizado como <h3> (cabeçalho nível 3), mantendo a hierarquia semântica dentro da timeline
- O texto é totalmente acessível por leitores de tela`,
      },
    },
  },
  argTypes: {
    titulo: {
      description: 'Texto do título principal do evento.',
      table: { type: { summary: 'string' } },
    },
  },
} as Meta<typeof TituloEvento>;

const tituloEventoMock = 'titulo';

export const Padrao = { args: { titulo: tituloEventoMock } };
Padrao.parameters = {
  docs: { description: { story: 'Título padrão com texto simples.' } },
};

export const TituloLongo = {
  args: { titulo: 'Reunião de alinhamento semanal da equipe de desenvolvimento' },
};
TituloLongo.parameters = {
  docs: {
    description: {
      story:
        'Título com texto mais longo para verificar o comportamento de layout e quebra de linha.',
    },
  },
};
