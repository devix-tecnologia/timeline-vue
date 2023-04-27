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

const horaMock = '2023-12-10T11:00Z';

const Template: StoryFn<typeof HoraEvento> = (args) => ({
  components: { HoraEvento: HoraEvento },
  setup() {
    return { args };
  },
  template: '<HoraEvento v-bind="args"  />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  horaPrevista: horaMock,
  horaRealizada: '',
  // aparencia: 'padrao',
};

export const Atrasado = Template.bind({});
Atrasado.args = {
  horaPrevista: horaMock,
  horaRealizada: '2023-12-10T12:00Z',
  // aparencia: 'riscada',
};
