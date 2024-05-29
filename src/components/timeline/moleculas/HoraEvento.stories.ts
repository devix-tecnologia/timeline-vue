import HoraEvento from './HoraEvento.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Eventos/Moleculas/HoraEvento',
  component: HoraEvento,
  argTypes: {},
} as Meta<typeof HoraEvento>;

const Template: StoryFn<typeof HoraEvento> = (args) => ({
  components: { HoraEvento: HoraEvento },
  setup() {
    return { args };
  },
  template: '<HoraEvento v-bind="args"  />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  horaPrevista: new Date('2023-05-03T15:00Z'),
};

export const Atrasado = Template.bind({});
Atrasado.args = {
  horaPrevista: new Date('2023-05-03T15:00Z'),
  horaRealizada: new Date('2023-05-03T16:00Z'),
};
