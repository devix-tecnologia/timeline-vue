import SeparadorPeriodoCartao from './SeparadorPeriodoCartao.vue';
import { Meta, StoryObj } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/SeparadorPeriodoCartao',
  component: SeparadorPeriodoCartao,
  parameters: {
    docs: {
      description: {
        component: `Separador de dia da aparência \`cartoes\` da Timeline: o dia da semana e a data por extenso, com "Ontem", "Hoje" ou "Amanhã" quando couber.

## 🎯 Quando usar
- Entre dias diferentes, dentro da Timeline com \`aparencia="cartoes"\`

## 🚫 Quando NÃO usar
- Na aparência \`padrao\` da Timeline (use SeparadorPeriodo)

## ♿ Acessibilidade
- A data fica num \`<h3>\`, abaixo do nome do perfil (\`<h2>\`) e acima do título de cada evento (\`<h4>\`)
- A data também vai no atributo \`datetime\` de um \`<time>\`
- O marco sobre o trilho é decorativo (\`aria-hidden\`)`,
      },
    },
  },
  args: {
    dataSeparador: new Date('2023-05-03T15:00Z'),
  },
  argTypes: {
    dataSeparador: {
      description: 'Dia representado pelo separador.',
      control: { type: 'date' },
      table: { type: { summary: 'Date' } },
    },
  },
} as Meta<typeof SeparadorPeriodoCartao>;

type Story = StoryObj<typeof SeparadorPeriodoCartao>;

export const Padrao: Story = {};
Padrao.parameters = {
  docs: { description: { story: 'Dia distante de hoje: só a data por extenso.' } },
};

export const Hoje: Story = {
  args: { dataSeparador: new Date() },
  parameters: {
    docs: { description: { story: 'Dia de hoje: a data ganha o rótulo "Hoje".' } },
  },
};
