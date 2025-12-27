import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';

const config = {
  plugins: [
    autoprefixer(),
    cssnano({
      preset: 'default',
    }),
    purgecss({
      content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx', './src/**/*.tsx'],
      defaultExtractor: (content: string) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};

export default config;
