import CampoBusca from './CampoBusca.vue';
import { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { comTemaAgiliza } from '../organismos/Timeline.mock';

export default {
  title: 'Devix/Moleculas/CampoBusca',
  component: CampoBusca,
  decorators: [comTemaAgiliza],
  parameters: {
    docs: {
      description: {
        component: `Campo de busca com a lupa à esquerda. Usa \`v-model\`; quem usa o campo decide onde buscar.

## 🎯 Quando usar
- Para filtrar a lista da tela enquanto se digita

## 🚫 Quando NÃO usar
- Para campos de formulário (nome, data, observação)

## ♿ Acessibilidade
- \`<input type="search">\` com nome acessível próprio (\`rotulo\`): o placeholder some ao digitar
- Contorno de foco visível no campo inteiro`,
      },
    },
  },
  args: {
    placeholder: 'Buscar evento ou cliente',
    rotulo: 'Buscar evento ou cliente',
  },
  argTypes: {
    modelValue: {
      description: 'Texto buscado (`v-model`).',
      table: { type: { summary: 'string' }, defaultValue: { summary: "''" } },
    },
    placeholder: {
      description: 'Texto de exemplo, mostrado com o campo vazio.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Buscar'" } },
    },
    rotulo: {
      description: 'Nome acessível do campo.',
      table: { type: { summary: 'string' } },
    },
  },
  render: (args) => ({
    components: { CampoBusca },
    setup() {
      const texto = ref(args.modelValue ?? '');
      return { args, texto };
    },
    template: '<CampoBusca v-bind="args" v-model="texto" />',
  }),
} as Meta<typeof CampoBusca>;

type Story = StoryObj<typeof CampoBusca>;

export const Padrao: Story = {};
Padrao.parameters = {
  docs: { description: { story: 'Campo vazio, com o placeholder.' } },
};

export const ComTexto: Story = {
  name: 'Com texto',
  args: { modelValue: 'AgroSul' },
  parameters: {
    docs: { description: { story: 'Campo com um cliente digitado.' } },
  },
};
