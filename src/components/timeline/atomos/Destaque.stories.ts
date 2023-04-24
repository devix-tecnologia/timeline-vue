import '@fontsource/material-icons';
import Destaque from './Destaque.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Timeline/Atomos/Destaque',
  component: Destaque,
  argTypes: {
    // subtitulo: { control: { type: String } },
  },
} as Meta<typeof Destaque>;

const DestaqueoMock = 'Texto alinhado a direita';

const Template: StoryFn<typeof Destaque> = (args) => ({
  components: { Destaque },
  setup() {
    return { args };
  },
  template: '<Destaque v-bind="args"  />',
});

export const Padrao = Template.bind({});
Padrao.args = { destaque: DestaqueoMock };
