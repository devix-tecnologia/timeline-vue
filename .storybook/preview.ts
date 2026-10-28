import '@fontsource/material-icons';
import '../src/global.css';
import type { Preview } from '@storybook/vue3-vite';
import { verificaContrasteIcones } from './contrasteIcones';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    options: {
      storySort: {
        order: ['Exemplos', ['Atomos', 'Moleculas', 'Organismos', 'Templates'], 'Eventos'], // Define a ordem dos grupos de histórias
        method: 'alphabetical', // Ordena as histórias dentro de cada grupo em ordem alfabética
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'error',
    },
  },

  tags: ['autodocs'],

  // O axe não mede os ícones; o contraste deles com o fundo é verificado aqui. Uma story fica
  // de fora com `parameters: { contrasteIcones: 'off' }`.
  afterEach: async ({ canvasElement, parameters, viewMode }) => {
    if (viewMode !== 'story' || parameters.contrasteIcones === 'off') return;
    await verificaContrasteIcones(canvasElement);
  },
};

export default preview;
