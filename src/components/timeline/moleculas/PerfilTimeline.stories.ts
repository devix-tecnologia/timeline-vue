import PerfilTimeline from './PerfilTimeline.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/PerfilTimeline',
  component: PerfilTimeline,
  parameters: {
    docs: {
      description: { component: 'Cabeçalho com avatar e nome do perfil (formato reduzido)' },
    },
  },
  argTypes: {
    formatoReduzido: { control: 'boolean' },
    imagemPerfil: { control: 'text' },
    nomePerfil: { control: 'text' },
    iconePerfil: { control: 'text' },
  },
} as Meta<typeof PerfilTimeline>;

const avatar =
  'https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80';

export const ComImagem = {
  args: {
    imagemPerfil: avatar,
    nomePerfil: 'Dona Maria',
    iconePerfil: '',
    formatoReduzido: false,
  },
};

export const ComIcone = {
  args: {
    imagemPerfil: '',
    nomePerfil: 'Dona Maria',
    iconePerfil: 'person',
    formatoReduzido: false,
  },
};

export const ApenasTitulo = {
  args: {
    imagemPerfil: '',
    nomePerfil: 'Dona Maria',
    iconePerfil: '',
    formatoReduzido: false,
  },
};

export const FormatoReduzido = {
  args: {
    imagemPerfil: '',
    nomePerfil: 'Dona Maria',
    iconePerfil: 'person',
    formatoReduzido: true,
  },
};
