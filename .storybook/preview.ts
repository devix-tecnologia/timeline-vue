import '@fontsource/material-icons';
import '../src/global.css';
import type { Preview } from '@storybook/vue3-vite';

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
      test: 'todo',
    },
  },

  tags: ['autodocs'],
};

export default preview;
