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
  },

  tags: ['autodocs'],
};

export default preview;
