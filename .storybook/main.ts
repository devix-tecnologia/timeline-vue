import type { StorybookConfig } from '@storybook/vue3-vite';
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // "@storybook/addon-designs",
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {},
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
};
export default config;
