import '@fontsource/material-icons';
import IconeCategoria from './IconeCategoria.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Timeline/Atomos/IconeCategoria',
  component: IconeCategoria,
  argTypes: {
    // categoria: { control: { type: String } },
    tipo: {
      control: { type: 'select' },
      options: ['padrao', 'importante', 'alerta', 'sucesso'],
    },
  },
} as Meta<typeof IconeCategoria>;

const categoriaMock = 'call';

const Template: StoryFn<typeof IconeCategoria> = (args) => ({
  components: { IconeCategoria },
  setup() {
    return { args };
  },
  template: '<IconeCategoria v-bind="args"  />',
});

export const Escuro = Template.bind({});
Escuro.args = {
  iconeCategoria: categoriaMock,
  escuro: true,
  tipo: 'padrao',
};

export const Claro = Template.bind({});
Claro.args = {
  iconeCategoria: categoriaMock,
  escuro: false,
  tipo: 'padrao',
};

export const Importante = Template.bind({});
Importante.args = {
  iconeCategoria: categoriaMock,
  escuro: true,
  tipo: 'importante',
};

export const Alerta = Template.bind({});
Alerta.args = {
  iconeCategoria: categoriaMock,
  escuro: true,
  tipo: 'alerta',
};

export const Sucesso = Template.bind({});
Sucesso.args = {
  iconeCategoria: categoriaMock,
  escuro: true,
  tipo: 'sucesso',
};
