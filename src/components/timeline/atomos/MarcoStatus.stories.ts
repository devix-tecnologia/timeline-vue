import MarcoStatus from './MarcoStatus.vue';
import { Meta, StoryObj } from '@storybook/vue3-vite';
import { SELOS_STATUS } from './SeloStatus.types';

export default {
  title: 'Devix/Atomos/MarcoStatus',
  component: MarcoStatus,
  parameters: {
    docs: {
      description: {
        component: `Marcador do status sobre a linha do tempo: um círculo na cor do status, com o ícone. O status planejado, que ainda não aconteceu, é vazado.

Ícone e cor vêm de \`SELOS_STATUS\`, o mesmo registro do SeloStatus.

## 🎯 Quando usar
- Sobre o trilho da Timeline na aparência \`marcos\`
- Ao lado do rótulo de um evento pendente (EventoPendente)

## 🚫 Quando NÃO usar
- Como único indicador do status: o marcador é decorativo (use também o SeloStatus)

## ♿ Acessibilidade
- \`aria-hidden\`: quem usa o marcador mostra o status por extenso
- O ícone vem de um pseudo-elemento, e o axe não o mede como texto`,
      },
    },
  },
  args: {
    status: 'realizado',
  },
  argTypes: {
    status: {
      description: 'Status do evento. Define o ícone e a cor.',
      control: { type: 'select' },
      options: Object.keys(SELOS_STATUS),
      table: { type: { summary: 'Status' } },
    },
  },
} as Meta<typeof MarcoStatus>;

type Story = StoryObj<typeof MarcoStatus>;

export const Padrao: Story = {};
Padrao.parameters = {
  docs: { description: { story: 'Marcador de um evento realizado.' } },
};

/**
 * Um marcador por chave de SELOS_STATUS: status novo aparece aqui sem editar a story.
 */
export const Todos: Story = {
  name: 'Todos os status',
  render: () => ({
    components: { MarcoStatus },
    setup() {
      return { statusPossiveis: Object.keys(SELOS_STATUS) };
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 1.6rem; color: var(--cor-texto); font-size: 1.2rem">
        <div v-for="status in statusPossiveis" :key="status" style="display: flex; flex-direction: column; align-items: center; gap: 0.6rem">
          <MarcoStatus :status="status" />
          {{ status }}
        </div>
      </div>
    `,
  }),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Todos os status lado a lado.' } },
  },
};
