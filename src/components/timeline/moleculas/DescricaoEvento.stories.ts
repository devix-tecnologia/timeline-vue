import DescricaoEvento from './DescricaoEvento.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Timeline/Moleculas/DescricaoEvento',
  component: DescricaoEvento,
  argTypes: {},
} as Meta<typeof DescricaoEvento>;

const tituloMock = 'Título';
const subtituloMock = 'Subtítulo';

const Template: StoryFn<typeof DescricaoEvento> = (args) => ({
  components: { DescricaoEvento: DescricaoEvento },
  setup() {
    return { args };
  },
  template: '<DescricaoEvento v-bind="args"  />',
});

export const Simples = Template.bind({});
Simples.args = {
  titulo: tituloMock,
  subtitulo: '',
};

export const Completa = Template.bind({});
Completa.args = {
  titulo: tituloMock,
  subtitulo: subtituloMock,
};
