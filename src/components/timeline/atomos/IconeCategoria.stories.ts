import '@fontsource/material-icons';
import IconeCategoria from './IconeCategoria.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/IconeCategoria',
  component: IconeCategoria,
  parameters: {
    docs: {
      description: {
        component: `Exibe um ícone com fundo circular e borda colorida para representar a categoria de um evento na timeline.

## 🎯 Quando usar
- Para exibir ícones categorizados dentro de eventos da timeline
- Quando é necessário diferenciar visualmente tipos de evento (padrão, importante, alerta, sucesso)
- Em列表agens de timeline que precisam de identificação visual rápida por categoria

## 🚫 Quando NÃO usar
- Para ícones de status (use IconeStatus)
- Quando o ícone precisa ser clicável ou interativo
- Em contexts fora da timeline

## ♿ Acessibilidade
- O atributo \`categoria\` é usado como texto alternativo (\`alt\`) do ícone
- As cores de borda seguem o tema visual e devem manter contraste suficiente
- Ícones decorativos devem ser ignorados por leitores de tela quando não伝える informação essencial`,
      },
    },
  },
  argTypes: {
    iconeCategoria: {
      description: 'Nome do ícone do Material Symbols a ser exibido.',
      table: { type: { summary: 'string' } },
    },
    categoria: {
      description: 'Texto alternativo descritivo da categoria, usado como \`alt\` no ícone.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    escuro: {
      description: 'Se \`true\`, aplica fundo escuro; se \`false\`, fundo claro.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    tipo: {
      description:
        'Variação visual da borda: \`padrao\`, \`importante\`, \`alerta\` ou \`sucesso\`.',
      control: { type: 'select' },
      options: ['padrao', 'importante', 'alerta', 'sucesso'],
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    borderColor: {
      description: 'Cor personalizada da borda, sobrescreve a cor definida pelo \`tipo\`.',
      control: { type: 'color' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    backgroundColor: {
      description: 'Cor personalizada do fundo, sobrescreve a cor definida por \`escuro\`.',
      control: { type: 'color' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
  },
} as Meta<typeof IconeCategoria>;

const categoriaMock = 'call';

export const Escuro = { args: { iconeCategoria: categoriaMock, escuro: true, tipo: 'padrao' } };
Escuro.parameters = {
  docs: {
    description: {
      story: 'Ícone com fundo escuro e borda padrão — aparência mais contrasted e sóbria.',
    },
  },
};

export const Claro = { args: { iconeCategoria: categoriaMock, escuro: false, tipo: 'padrao' } };
Claro.parameters = {
  docs: {
    description: {
      story:
        'Ícone com fundo claro e borda padrão — ideal para fundos escuros ou quando se deseja suavizar o destaque.',
    },
  },
};

export const Importante = {
  args: { iconeCategoria: categoriaMock, escuro: true, tipo: 'importante' },
};
Importante.parameters = {
  docs: {
    description: {
      story:
        'Ícone com borda na cor de importância (vermelho/tom de alerta máximo) para eventos críticos.',
    },
  },
};

export const Alerta = { args: { iconeCategoria: categoriaMock, escuro: true, tipo: 'alerta' } };
Alerta.parameters = {
  docs: {
    description: {
      story:
        'Ícone com borda na cor de alerta (amarelo/laranja) para eventos que要求 atenção moderada.',
    },
  },
};

export const Sucesso = { args: { iconeCategoria: categoriaMock, escuro: true, tipo: 'sucesso' } };
Sucesso.parameters = {
  docs: {
    description: {
      story: 'Ícone com borda na cor de sucesso (verde) para eventos concluídos ou positivos.',
    },
  },
};

export const CoresCustomizadas = {
  args: {
    iconeCategoria: 'palette',
    escuro: true,
    tipo: 'padrao',
    borderColor: '#7c3aed',
    backgroundColor: '#ede9fe',
  },
};
CoresCustomizadas.parameters = {
  docs: {
    description: {
      story:
        'Demonstração das props \`borderColor\` e \`backgroundColor\` para customização completa de cores.',
    },
  },
};
