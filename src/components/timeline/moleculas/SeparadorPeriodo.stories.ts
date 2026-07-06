import SeparadorPeriodo from './SeparadorPeriodo.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/SeparadorPeriodo',
  component: SeparadorPeriodo,
  parameters: {
    docs: {
      description: {
        component: `Separador visual de período na timeline. Exibe a data (dia, mês e ano) entre grupos de eventos para organizar a linha do tempo.

## 🎯 Quando usar
- Entre eventos de dias diferentes na timeline
- Para agrupar visualmente eventos de um mesmo período

## 🚫 Quando NÃO usar
- Quando não houver necessidade de separação temporal
- Em timelines com eventos de um único dia

## ♿ Acessibilidade
- O dia é exibido em destaque pelo componente BoxData
- O mês e ano são exibidos como texto em \`<h3>\`, mantendo a hierarquia semântica
- As linhas separadoras são puramente decorativas (CSS ::before e ::after)`,
      },
    },
  },
  argTypes: {
    dataSeparador: {
      description: 'Data usada para extrair dia, mês e ano a serem exibidos no separador.',
      table: { type: { summary: 'Date' } },
    },
    aparencia: {
      description: 'Aparência opcional do separador.',
      table: { type: { summary: 'string' } },
      control: { type: 'select' },
    },
  },
} as Meta<typeof SeparadorPeriodo>;

export const Padrao = {
  args: {
    dataSeparador: new Date('2023-05-03T15:00Z'),
    mesNome: 'Janeiro',
  },
};
Padrao.parameters = {
  docs: {
    description: {
      story:
        'Separador exibindo o dia 3, mês Maio e ano 2023. Usado entre grupos de eventos de datas diferentes.',
    },
  },
};
