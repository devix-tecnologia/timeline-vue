import Hora from './Hora.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Timeline/Atomos/Hora',
  component: Hora,
  argTypes: {
    // hora: { control: { type: String } },
    aparencia: {
      control: { type: 'select' },
      options: ['padrao', 'riscada'],
    },
  },
} as Meta<typeof Hora>;

const horaMock = '09:00';

const Template: StoryFn<typeof Hora> = (args) => ({
  components: { Hora },
  setup() {
    return { args };
  },
  template: '<Hora v-bind="args"  />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  hora: horaMock,
  aparencia: 'padrao',
};

export const Riscada = Template.bind({});
Riscada.args = {
  hora: horaMock,
  aparencia: 'riscada',
};
