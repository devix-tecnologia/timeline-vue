import Topo from './Topo.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/Topo',
  component: Topo,
  parameters: {
    docs: {
      description: {
        component: `Barra superior da tela com título e botão de voltar. Suporta dois esquemas de cor: claro e escuro.

## 🎯 Quando usar
- Como barra de navegação no topo de telas da timeline
- Para exibir o título da tela atual com opção de retorno

## 🚫 Quando NÃO usar
- Em telas que não exigem navegação de volta
- Quando um cabeçalho mais robusto com ações adicionais for necessário

## ♿ Acessibilidade
- O botão de voltar utiliza \`arrow_back\` do Material Symbols como indicador visual
- O título é renderizado como \`<h3>\` para manter a hierarquia semântica
- O contraste entre fundo e texto é ajustado pelas classes bg-escuro e bg-claro`,
      },
    },
  },
  argTypes: {
    titulo: {
      description: 'Título exibido na barra superior.',
      table: { type: { summary: 'string' } },
    },
    escuro: {
      description:
        'Quando true, aplica fundo escuro (cor-secundaria) com texto claro. Quando false, fundo claro (cor-fundo).',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
      control: 'boolean',
    },
  },
} as Meta<typeof Topo>;

const Template: StoryFn<typeof Topo> = (args) => ({
  components: { Topo: Topo },
  setup() {
    return { args };
  },
  template: '<Topo :titulo="args.titulo" :escuro="args.escuro"  />',
});

export const Claro = Template.bind({});
Claro.args = {
  titulo: 'Topo claro',
  escuro: false,
};
Claro.parameters = {
  docs: {
    description: {
      story: 'Topo com fundo claro. Ideal para telas que exigem contraste suave com o conteúdo.',
    },
  },
};

export const Escuro = Template.bind({});
Escuro.args = {
  titulo: 'Topo escuro',
  escuro: true,
};
Escuro.parameters = {
  docs: {
    description: {
      story: 'Topo com fundo escuro. Ideal para destacar a barra superior com alto contraste.',
    },
  },
};
