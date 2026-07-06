import Botao from './Botao.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/Botao',
  component: Botao,
  parameters: {
    docs: {
      description: {
        component: `Botão versátil com suporte a ícone Material Symbols, diferentes aparências e tamanhos.

Possui um <slot> padrão que carrega conteúdo dentro do botão. Por padrão, ícone e título são passados por props, mas podem ser sobrescritos pelo conteúdo do slot.

## 🎯 Quando usar
- Como ação primária, secundária ou terciária em formulários e painéis
- Para ações de navegação estilo link (aparência "vazio")
- Quando precisar de um botão com ícone + texto

## 🚫 Quando NÃO usar
- Para ações que exigem confirmação complexa (prefira modal/dialog)
- Em contexts onde um link HTML (<a>) é semanticamente mais apropriado
- Para múltiplas ações primárias na mesma tela (apenas um botão "preenchido" por vez)

## ♿ Acessibilidade
- O slot padrão permite personalizar o conteúdo acessível
- O botão usa o elemento nativo <button>, garantindo interação por teclado
- O evento \`click\` é emitido com o MouseEvent original
- A aparência "vazio" mantém foco visível e é adequada para ações menos destacadas`,
      },
    },
  },
  argTypes: {
    titulo: {
      description: 'Texto exibido dentro do botão.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "''" } },
    },
    icone: {
      description: 'Nome do ícone do Material Symbols exibido antes do título.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    aparencia: {
      description:
        'Estilo visual do botão: \`outline\` (borda), \`preenchido\` (fundo sólido) ou \`vazio\` (apenas texto).',
      control: { type: 'select' },
      options: ['outline', 'preenchido', 'vazio'],
      table: { type: { summary: 'Aparencia' }, defaultValue: { summary: 'outline' } },
    },
    tamanho: {
      description: 'Tamanho do botão: \`pequeno\`, \`medio\` ou \`grande\`.',
      control: { type: 'select' },
      options: ['pequeno', 'medio', 'grande'],
      table: { type: { summary: 'Tamanho' }, defaultValue: { summary: 'medio' } },
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
outline.parameters = {
  docs: {
    description: {
      story:
        'Botão no estilo "outline" (borda) com ícone e texto. Aparência padrão com fundo transparente e borda de 1px.',
    },
  },
};

export const preenchido = Template.bind({});
preenchido.args = {
  titulo: 'Botao escuro',
  aparencia: 'preenchido',
  tamanho: 'medio',
  icone: 'home',
};
preenchido.parameters = {
  docs: {
    description: {
      story:
        'Botão no estilo "preenchido" com fundo sólido. Ideal para ações primárias de destaque.',
    },
  },
};

export const Pequeno = Template.bind({});
Pequeno.args = {
  titulo: 'Botao escuro',
  aparencia: 'outline',
  tamanho: 'pequeno',
  icone: '',
};
Pequeno.parameters = {
  docs: {
    description: {
      story: 'Botão no tamanho "pequeno" — padding reduzido (1rem) e fonte small. Sem ícone.',
    },
  },
};

export const Grande = Template.bind({});
Grande.args = {
  titulo: 'Botao escuro',
  aparencia: 'outline',
  tamanho: 'grande',
  icone: '',
};
Grande.parameters = {
  docs: {
    description: {
      story: 'Botão no tamanho "grande" — padding de 2rem, fonte large e peso bold. Sem ícone.',
    },
  },
};

export const Vazio = Template.bind({});
Vazio.args = {
  titulo: 'Botao como link',
  aparencia: 'vazio',
  tamanho: 'pequeno',
  icone: '',
};
Vazio.parameters = {
  docs: {
    description: {
      story:
        'Botão no estilo "vazio" — sem borda nem fundo, apenas texto. Comporta-se visualmente como um link.',
    },
  },
};

export const IconeApenas = Template.bind({});
IconeApenas.args = {
  titulo: '',
  aparencia: 'outline',
  tamanho: 'medio',
  icone: 'favorite',
};
IconeApenas.parameters = {
  docs: {
    description: {
      story: 'Botão exibindo apenas o ícone, sem texto. Útil em ações compactas como favoritar.',
    },
  },
};
