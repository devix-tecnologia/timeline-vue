import '@fontsource/material-icons';
import SubtituloEvento from './SubtituloEvento.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Timeline/Atomos/SubtituloEvento',
  component: SubtituloEvento,
  argTypes: {
    // subtitulo: { control: { type: String } },
  },
} as Meta<typeof SubtituloEvento>;

const subtituloEventooMock = 'subtitulo';

const Template: StoryFn<typeof SubtituloEvento> = (args) => ({
  components: { SubtituloEvento },
  setup() {
    return { args };
  },
  template: '<SubtituloEvento v-bind="args"  />',
});

export const Padrao = Template.bind({});
Padrao.args = { subtitulo: subtituloEventooMock };
