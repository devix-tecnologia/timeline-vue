import Botao from './Botao.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/Botao',
  component: Botao,
  parameters: {
    docs: {
      description: {
        component:
          'Este componente possui um <slot> padrão que carrega conteúdo dentro do botão. Por padrão, ícone e título são passados por props, mas podem ser sobrescritos pelo conteúdo do slot.',
      },
    },
  },
  argTypes: {
    aparencia: {
      control: { type: 'select' },
      options: ['outline', 'preenchido', 'vazio'],
    },
    tamanho: {
      control: { type: 'select' },
      options: ['pequeno', 'medio', 'grande'],
    },
  },
} as Meta<typeof Botao>;

const Template: StoryFn<typeof Botao> = (args) => ({
  components: { Botao },
  setup() {
    const handleClick = () => {
      alert('Clicado no botão.');
    };

    return { args, handleClick };
  },
  template: '<Botao v-bind="args" @click="handleClick" />',
});

export const outline = Template.bind({});
outline.args = {
  titulo: 'Botao claro',
  aparencia: 'outline',
  tamanho: 'medio',
  icone: 'add',
};

export const preenchido = Template.bind({});
preenchido.args = {
  titulo: 'Botao escuro',
  aparencia: 'preenchido',
  tamanho: 'medio',
  icone: 'home',
};

export const Pequeno = Template.bind({});
Pequeno.args = {
  titulo: 'Botao escuro',
  aparencia: 'outline',
  tamanho: 'pequeno',
  icone: '',
};

export const Grande = Template.bind({});
Grande.args = {
  titulo: 'Botao escuro',
  aparencia: 'outline',
  tamanho: 'grande',
  icone: '',
};

export const Vazio = Template.bind({});
Vazio.args = {
  titulo: 'Botao como link',
  aparencia: 'vazio',
  tamanho: 'pequeno',
  icone: '',
};
