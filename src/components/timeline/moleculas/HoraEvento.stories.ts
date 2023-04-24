import HoraEvento from './HoraEvento.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Timeline/Moleculas/HoraEvento',
  component: HoraEvento,
  argTypes: {
    // aparencia: {
    //   control: { type: 'select' },
    //   options: ['padrao', 'riscada'],
    // },
  },
} as Meta<typeof HoraEvento>;

const horaMock = '09:00';

const Template: StoryFn<typeof HoraEvento> = (args) => ({
  components: { HoraEvento: HoraEvento },
  setup() {
    return { args };
  },
  template: '<HoraEvento v-bind="args"  />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  hora: horaMock,
  horaFim: '',
  // aparencia: 'padrao',
};

export const Atrasado = Template.bind({});
Atrasado.args = {
  hora: horaMock,
  horaFim: '10:00',
  // aparencia: 'riscada',
};
