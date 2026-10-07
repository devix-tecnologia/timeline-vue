import SeloStatus from './SeloStatus.vue';
import { Meta, StoryObj } from '@storybook/vue3-vite';
import { SELOS_STATUS } from './SeloStatus.types';

export default {
  title: 'Devix/Atomos/SeloStatus',
  component: SeloStatus,
  parameters: {
    docs: {
      description: {
        component: `Selo com o status do evento por extenso, acompanhado de um ícone na cor do status.

## 🎯 Quando usar
- No cartão de evento da aparência \`cartoes\` da Timeline
- Quando o status precisa ser lido, e não só reconhecido pela cor ou pelo ícone

## 🚫 Quando NÃO usar
- Na aparência \`padrao\` da Timeline, que mostra o status só pelo ícone (use IconeStatus)
- Para mudar o status (use BotaoStatus)

## ♿ Acessibilidade
- O status é texto: não depende da cor (WCAG 1.4.1)
- O ícone é decorativo (\`aria-hidden\`), para o leitor de tela não ler o nome da ligadura
- O texto herda a cor de quem usa o selo, e mantém o contraste do fundo em que está`,
      },
    },
  },
  args: {
    status: 'planejado',
  },
  argTypes: {
    status: {
      description: 'Status do evento. Define o rótulo, o ícone e a cor do ícone.',
      control: { type: 'select' },
      options: Object.keys(SELOS_STATUS),
      table: { type: { summary: 'Status' } },
    },
  },
} as Meta<typeof SeloStatus>;

type Story = StoryObj<typeof SeloStatus>;

export const Padrao: Story = {};
Padrao.parameters = {
  docs: { description: { story: 'Selo de um evento planejado.' } },
};

/**
 * Um selo por chave de SELOS_STATUS: status novo aparece aqui sem editar a story.
 */
export const Todos: Story = {
  name: 'Todos os status',
  render: () => ({
    components: { SeloStatus },
    setup() {
      return { statusPossiveis: Object.keys(SELOS_STATUS) };
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 0.8rem; color: var(--cor-texto)">
        <SeloStatus v-for="status in statusPossiveis" :key="status" :status="status" />
      </div>
    `,
  }),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Todos os status lado a lado.' } },
  },
};
