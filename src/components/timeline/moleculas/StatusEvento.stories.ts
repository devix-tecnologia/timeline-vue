import StatusEvento from './StatusEvento.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Eventos/Moleculas/StatusEvento',
  component: StatusEvento,
  argTypes: {
    aparencia: {
      control: { type: 'select' },
      options: ['outline', 'preenchido', 'vazio'],
    },
    status: {
      control: { type: 'select' },
      options: ['planejado', 'atrasado', 'adiantado', 'realizado', 'cancelado', 'adiado'],
    },
  },
} as Meta<typeof StatusEvento>;

const Template: StoryFn<typeof StatusEvento> = (args) => ({
  components: { StatusEvento },
  setup() {
    const editarClick = () => alert('Clicou no editar status!');
    return { editarClick, args };
  },
  template: '<StatusEvento v-bind="args" :editarClick="editarClick"  />',
});

export const Planejado = Template.bind({});
Planejado.args = {
  status: 'planejado',
  aparencia: 'outline',
};

export const Atrasado = Template.bind({});
Atrasado.args = {
  status: 'atrasado',
  aparencia: 'outline',
};

export const Realizado = Template.bind({});
Realizado.args = {
  status: 'realizado',
  aparencia: 'outline',
};

export const Cancelado = Template.bind({});
Cancelado.args = {
  status: 'cancelado',
  aparencia: 'outline',
};

export const Adiado = Template.bind({});
Adiado.args = {
  status: 'adiado',
  aparencia: 'outline',
};
