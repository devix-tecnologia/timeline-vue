import SeloStatus from './SeloStatus.vue';
import { Meta, StoryObj } from '@storybook/vue3-vite';
import { APARENCIAS_SELO_STATUS, SELOS_STATUS } from './SeloStatus.types';

export default {
  title: 'Devix/Atomos/SeloStatus',
  component: SeloStatus,
  parameters: {
    docs: {
      description: {
        component: `Selo com o status do evento por extenso, acompanhado de um ícone na cor do status.

## 🎯 Quando usar
- Nos cartões de evento das aparências \`cartoes\` (\`contorno\`) e \`agiliza\` (\`preenchido\`) da Timeline
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
    aparencia: 'contorno',
  },
  argTypes: {
    status: {
      description: 'Status do evento. Define o rótulo, o ícone e a cor do ícone.',
      control: { type: 'select' },
      options: Object.keys(SELOS_STATUS),
      table: { type: { summary: 'Status' } },
    },
    aparencia: {
      description:
        '\`contorno\` (borda fina, fundo transparente) ou \`preenchido\` (fundo tingido com a cor do status e ícone cheio).',
      control: { type: 'select' },
      options: APARENCIAS_SELO_STATUS,
      table: { type: { summary: 'AparenciaSeloStatus' }, defaultValue: { summary: "'contorno'" } },
    },
  },
} as Meta<typeof SeloStatus>;

type Story = StoryObj<typeof SeloStatus>;

export const Padrao: Story = {};
Padrao.parameters = {
  docs: { description: { story: 'Selo de um evento planejado.' } },
};

export const Preenchido: Story = {
  args: { status: 'realizado', aparencia: 'preenchido' },
  parameters: {
    // Ícones abaixo de 3:1 com o fundo: realizado preenchido, #00a816 sobre #dbf3de (2,70:1) no
    // claro.
    contrasteIcones: 'off',
    docs: {
      description: {
        story: 'Selo preenchido, com fundo tingido e ícone cheio, como na aparência `agiliza`.',
      },
    },
  },
};

/**
 * Um selo por chave de SELOS_STATUS: status novo aparece aqui sem editar a story.
 */
export const Todos: Story = {
  name: 'Todos os status',
  render: () => ({
    components: { SeloStatus },
    setup() {
      return { statusPossiveis: Object.keys(SELOS_STATUS), aparencias: APARENCIAS_SELO_STATUS };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.2rem; color: var(--cor-texto)">
        <div v-for="aparencia in aparencias" :key="aparencia" style="display: flex; flex-wrap: wrap; gap: 0.8rem">
          <SeloStatus
            v-for="status in statusPossiveis"
            :key="status"
            :status="status"
            :aparencia="aparencia"
          />
        </div>
      </div>
    `,
  }),
  parameters: {
    // Ícones abaixo de 3:1 com o fundo: atrasado e adiantado, #f0cc0d sobre branco (1,57:1) no
    // claro; realizado preenchido (2,70:1) no claro; cancelado, #bb0202 sobre o fundo (2,81:1) no
    // escuro.
    contrasteIcones: 'off',
    controls: { disable: true },
    docs: { description: { story: 'Todos os status lado a lado, uma linha por aparência.' } },
  },
};
