import SeletorOpcoes from './SeletorOpcoes.vue';
import { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { APARENCIAS_SELETOR } from './SeletorOpcoes.types';
import { comTemaFilosofia } from '../organismos/Timeline.mock';

export default {
  title: 'Devix/Moleculas/SeletorOpcoes',
  component: SeletorOpcoes,
  decorators: [comTemaFilosofia],
  parameters: {
    docs: {
      description: {
        component: `Escolha de uma opção entre várias. A estrutura é a mesma nas duas aparências; muda o desenho:
- \`segmentado\`: opções de mesma largura num trilho, para trocar de visão (Agenda × Histórico).
- \`chips\`: pílulas do tamanho do rótulo, para filtrar (Todos, Pendentes, Concluídos).

Cada opção pode ter um \`contador\`. Usa \`v-model\`.

## 🎯 Quando usar
- Para trocar de visão ou de filtro sem sair da tela

## 🚫 Quando NÃO usar
- Para escolhas múltiplas
- Para navegar entre telas

## ♿ Acessibilidade
- Grupo com nome (\`rotulo\`) e opções em \`<button>\` com \`aria-pressed\`
- Alvo de toque de 4,4rem de altura e contorno de foco visível`,
      },
    },
  },
  args: {
    rotulo: 'Visão dos eventos',
    aparencia: 'segmentado',
    opcoes: [
      { valor: 'agenda', rotulo: 'Agenda' },
      { valor: 'historico', rotulo: 'Histórico' },
    ],
  },
  argTypes: {
    opcoes: {
      description: 'Opções: `valor`, `rotulo` e `contador` opcional.',
      table: { type: { summary: 'OpcaoSeletor[]' } },
    },
    modelValue: {
      description: 'Valor da opção escolhida (`v-model`).',
      table: { type: { summary: 'string' } },
    },
    rotulo: {
      description: 'Nome acessível do grupo.',
      table: { type: { summary: 'string' } },
    },
    aparencia: {
      description: '`segmentado` (trilho, mesma largura) ou `chips` (pílulas).',
      control: { type: 'select' },
      options: APARENCIAS_SELETOR,
      table: { type: { summary: 'AparenciaSeletor' }, defaultValue: { summary: "'segmentado'" } },
    },
  },
  render: (args) => ({
    components: { SeletorOpcoes },
    setup() {
      const valor = ref(args.opcoes[0].valor);
      return { args, valor };
    },
    template: '<SeletorOpcoes v-bind="args" v-model="valor" />',
  }),
} as Meta<typeof SeletorOpcoes>;

type Story = StoryObj<typeof SeletorOpcoes>;

export const Segmentado: Story = {};
Segmentado.parameters = {
  docs: { description: { story: 'Agenda × Histórico, como no topo do TemplateAgenda.' } },
};

export const Chips: Story = {
  args: {
    rotulo: 'Filtrar eventos',
    aparencia: 'chips',
    opcoes: [
      { valor: 'pendentes', rotulo: 'Pendentes', contador: 3 },
      { valor: 'todos', rotulo: 'Todos' },
      { valor: 'concluidos', rotulo: 'Concluídos' },
    ],
  },
  parameters: {
    docs: { description: { story: 'Filtros da agenda, com o contador de pendentes.' } },
  },
};
