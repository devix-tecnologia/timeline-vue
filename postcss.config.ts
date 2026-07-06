import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';

const config = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.ts', './src/**/*.tsx'],
      safelist: {
        standard: [/^fadeBaixo-/, /^fadeTopo-/],
        deep: [/^fadeBaixo-/, /^fadeTopo-/],
      },
      defaultExtractor: (content: string) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};

export default config;
