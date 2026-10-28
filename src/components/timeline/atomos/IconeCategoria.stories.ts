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
- Em listagens de timeline que precisam de identificação visual rápida por categoria

## 🚫 Quando NÃO usar
- Para ícones de status (use IconeStatus)
- Quando o ícone precisa ser clicável ou interativo
- Em contextos fora da timeline

## ♿ Acessibilidade
- Com \`categoria\`, o ícone vira uma imagem (\`role="img"\`) que tem a categoria como nome acessível
- Sem \`categoria\`, o ícone é decorativo e fica fora do leitor de tela
- As cores de borda seguem o tema visual e devem manter contraste suficiente
- O ícone pede contraste de 3:1 com o fundo. Com \`backgroundColor\`, que não muda com o tema, defina também \`color\``,
      },
    },
  },
  argTypes: {
    iconeCategoria: {
      description: 'Nome do ícone do Material Symbols a ser exibido.',
      table: { type: { summary: 'string' } },
    },
    categoria: {
      description:
        'Nome da categoria. Vira o nome acessível do ícone (\`role="img"\` com \`aria-label\`); sem ele, o ícone é decorativo.',
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
      description:
        'Cor personalizada do fundo, sobrescreve a cor definida por \`escuro\`. Não muda com o tema.',
      control: { type: 'color' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    color: {
      description:
        'Cor personalizada do ícone, sobrescreve a cor definida por \`escuro\`. Use junto com \`backgroundColor\`, para o ícone não depender do tema.',
      control: { type: 'color' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
  },
} as Meta<typeof IconeCategoria>;

const categoriaMock = 'call';
const nomeCategoriaMock = 'Ligação';

export const Escuro = {
  args: {
    iconeCategoria: categoriaMock,
    categoria: nomeCategoriaMock,
    escuro: true,
    tipo: 'padrao',
  },
};
Escuro.parameters = {
  docs: {
    description: {
      story: 'Ícone com fundo escuro e borda padrão — aparência mais contrastada e sóbria.',
    },
  },
};

export const Claro = {
  args: {
    iconeCategoria: categoriaMock,
    categoria: nomeCategoriaMock,
    escuro: false,
    tipo: 'padrao',
  },
};
Claro.parameters = {
  docs: {
    description: {
      story:
        'Ícone com fundo claro e borda padrão — ideal para fundos escuros ou quando se deseja suavizar o destaque.',
    },
  },
};

export const Importante = {
  args: {
    iconeCategoria: categoriaMock,
    categoria: nomeCategoriaMock,
    escuro: true,
    tipo: 'importante',
  },
};
Importante.parameters = {
  docs: {
    description: {
      story:
        'Ícone com borda na cor de importância (vermelho/tom de alerta máximo) para eventos críticos.',
    },
  },
};

export const Alerta = {
  args: {
    iconeCategoria: categoriaMock,
    categoria: nomeCategoriaMock,
    escuro: true,
    tipo: 'alerta',
  },
};
Alerta.parameters = {
  docs: {
    description: {
      story:
        'Ícone com borda na cor de alerta (amarelo/laranja) para eventos que pedem atenção moderada.',
    },
  },
};

export const Sucesso = {
  args: {
    iconeCategoria: categoriaMock,
    categoria: nomeCategoriaMock,
    escuro: true,
    tipo: 'sucesso',
  },
};
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
    categoria: 'Personalizada',
    escuro: true,
    tipo: 'padrao',
    borderColor: '#7c3aed',
    backgroundColor: '#ede9fe',
    color: '#5b21b6',
  },
};
CoresCustomizadas.parameters = {
  docs: {
    description: {
      story:
        'Demonstração das props \`borderColor\`, \`backgroundColor\` e \`color\` para customização completa de cores. O fundo customizado não muda com o tema, por isso a cor do ícone também é definida.',
    },
  },
};
