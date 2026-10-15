import SeparadorPeriodoMarcos from './SeparadorPeriodoMarcos.vue';
import { Meta, StoryObj } from '@storybook/vue3-vite';
import { comTemaExemplo } from '../organismos/Timeline.mock';

export default {
  title: 'Devix/Moleculas/SeparadorPeriodoMarcos',
  component: SeparadorPeriodoMarcos,
  decorators: [comTemaExemplo],
  parameters: {
    docs: {
      description: {
        component: `Separador de dia da aparência \`marcos\` da Timeline: ícone de calendário e "Hoje, 7 de outubro". Fora de ontem, hoje e amanhã, mostra o dia da semana; o ano só aparece quando não é o atual.

Com \`navegavel\`, vira um botão com seta e emite \`click\`: a agenda o usa para trocar de dia.

## 🎯 Quando usar
- Entre dias diferentes, na Timeline com \`aparencia="marcos"\`
- No topo da agenda, com \`navegavel\`

## 🚫 Quando NÃO usar
- Nas aparências \`padrao\` e \`cartoes\` (use SeparadorPeriodo ou SeparadorPeriodoCartao)

## ♿ Acessibilidade
- A data fica num \`<h3>\`, num \`<time>\` com o atributo \`datetime\`
- Os ícones são decorativos (\`aria-hidden\`)`,
      },
    },
  },
  args: {
    dataSeparador: new Date(),
    navegavel: false,
  },
  argTypes: {
    dataSeparador: {
      description: 'Dia representado pelo separador.',
      control: { type: 'date' },
      table: { type: { summary: 'Date' } },
    },
    navegavel: {
      description: 'Mostra a seta e faz do separador um botão.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
} as Meta<typeof SeparadorPeriodoMarcos>;

type Story = StoryObj<typeof SeparadorPeriodoMarcos>;

export const Padrao: Story = {};
Padrao.parameters = {
  docs: { description: { story: 'Dia de hoje, como separador da Timeline.' } },
};

export const Navegavel: Story = {
  name: 'Navegável',
  args: { navegavel: true },
  parameters: {
    docs: { description: { story: 'Com a seta, como no topo da agenda.' } },
  },
};

export const OutroAno: Story = {
  name: 'Outro ano',
  args: { dataSeparador: new Date(2023, 4, 3, 12, 0) },
  parameters: {
    docs: { description: { story: 'Dia distante: dia da semana e ano.' } },
  },
};
