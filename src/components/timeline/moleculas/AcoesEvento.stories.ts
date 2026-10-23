import AcoesEvento from './AcoesEvento.vue';
import { Meta, StoryObj } from '@storybook/vue3-vite';
import { comTemaFilosofia } from '../organismos/Timeline.mock';

export default {
  title: 'Devix/Moleculas/AcoesEvento',
  component: AcoesEvento,
  decorators: [comTemaFilosofia],
  parameters: {
    docs: {
      description: {
        component: `Botões das ações de um evento, a partir do campo \`acoes\` do evento. Usa o Botao: a ação \`principal\` é preenchida, as demais têm contorno, e \`apenasIcone\` mostra só o ícone.

O clique emite \`acaoClick\` com a ação e não sobe até o cartão, que tem o próprio clique.

## 🎯 Quando usar
- Nos cartões da agenda e da Timeline com a aparência \`filosofia\`

## 🚫 Quando NÃO usar
- Para ações da tela, fora de um evento (use o Botao)

## ♿ Acessibilidade
- Grupo com o nome "Ações do evento"
- A ação só com ícone usa o rótulo como nome acessível (\`aria-label\`)
- Contorno de foco visível em cada botão`,
      },
    },
  },
  args: {
    acoes: [
      { id: 'ver-detalhes', rotulo: 'Ver detalhes', icone: 'description' },
      { id: 'concluir', rotulo: 'Concluir', icone: 'check' },
    ],
  },
  argTypes: {
    acoes: {
      description:
        'Ações do evento: `id`, `rotulo`, `icone` opcional, `principal` (preenchido) e `apenasIcone`.',
      table: { type: { summary: 'AcaoEvento[]' } },
    },
  },
} as Meta<typeof AcoesEvento>;

type Story = StoryObj<typeof AcoesEvento>;

export const Padrao: Story = {};
Padrao.parameters = {
  docs: { description: { story: 'Duas ações com contorno, como nos próximos eventos da agenda.' } },
};

export const PrincipalEMais: Story = {
  name: 'Principal e mais ações',
  args: {
    acoes: [
      { id: 'abrir-carta', rotulo: 'Abrir carta', principal: true },
      { id: 'mais-acoes', rotulo: 'Mais ações', icone: 'more_horiz', apenasIcone: true },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'A ação principal preenchida e um botão só com ícone, como no evento pendente.',
      },
    },
  },
};

export const Unica: Story = {
  name: 'Única',
  args: { acoes: [{ id: 'reagendar', rotulo: 'Reagendar', icone: 'edit_calendar' }] },
  parameters: {
    docs: { description: { story: 'Uma ação ocupa toda a largura, como no evento adiado.' } },
  },
};
