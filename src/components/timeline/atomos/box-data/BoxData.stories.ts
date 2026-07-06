import '@fontsource/material-icons';
import BoxData from './BoxData.vue';
import { Aparencias } from './BoxData.types';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/BoxData',
  component: BoxData,
  parameters: {
    docs: {
      description: {
        component: `Exibe o número do dia em um quadrado estilizado, representando a data de um evento na timeline.

## 🎯 Quando usar
- Para mostrar o dia do mês de um evento na timeline
- Como marcador visual de data em conjunto com outros componentes de evento

## 🚫 Quando NÃO usar
- Para exibir horários (use Hora)
- Para exibir datas completas com mês e ano
- Em contexts fora da timeline

## ♿ Acessibilidade
- O número é renderizado como texto em elemento <h3>, sendo semântico e acessível
- As cores de fundo e texto variam conforme a aparência, mas seguem o tema para manter contraste`,
      },
    },
  },
  argTypes: {
    dataNumero: {
      description: 'Número do dia a ser exibido (1-31).',
      table: { type: { summary: 'number' } },
    },
    aparencia: {
      description:
        'Esquema de cores: \`padrao\` (fundo primary), \`escuro\` (fundo secondary) ou \`claro\` (fundo tertiary com sombra).',
      control: { type: 'select' },
      options: Object.values(Aparencias),
      table: { type: { summary: 'Aparencia' }, defaultValue: { summary: 'padrao' } },
    },
  },
} as Meta<typeof BoxData>;

export const Padrao = { args: { dataNumero: 1, aparencia: 'padrao' } };
Padrao.parameters = {
  docs: { description: { story: 'Aparência padrão — fundo na cor primária com texto claro.' } },
};

export const Escuro = { args: { dataNumero: 1, aparencia: 'escuro' } };
Escuro.parameters = {
  docs: {
    description: {
      story:
        'Aparência escura — fundo na cor secundária com texto na cor primária. Ideal para destaque maior.',
    },
  },
};

export const Claro = { args: { dataNumero: 1, aparencia: 'claro' } };
Claro.parameters = {
  docs: {
    description: {
      story:
        'Aparência clara — fundo na cor terciária com sombra suave. Ideal para fundos escuros.',
    },
  },
};

export const DataDoisDigitos = { args: { dataNumero: 25, aparencia: 'padrao' } };
DataDoisDigitos.parameters = {
  docs: {
    description: {
      story:
        'Exemplo com número de dois dígitos (25) para verificar o alinhamento e dimensionamento.',
    },
  },
};
