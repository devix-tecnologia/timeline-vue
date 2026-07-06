import AreaSalvamento from './AreaSalvamento.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/AreaSalvamento',
  component: AreaSalvamento,
  parameters: {
    docs: {
      description: {
        component: `Área de ação com botões Salvar e Cancelar, além de um slot para conteúdo adicional (como campos de formulário ou indicadores de carregamento).

## 🎯 Quando usar
- No rodapé de formulários de edição de evento
- Sempre que o usuário precisar salvar ou descartar alterações

## 🚫 Quando NÃO usar
- Quando não houver ação de salvamento envolvida
- Em contextos onde apenas um botão de confirmação é necessário

## ♿ Acessibilidade
- Os botões possuem rótulos textuais claros ("Salvar" e "Cancelar")
- O botão "Salvar" é visualmente destacado (preenchido, grande)
- O botão "Cancelar" é secundário (vazio, pequeno), reduzindo o risco de ação acidental`,
      },
    },
  },
  argTypes: {},
} as Meta<typeof AreaSalvamento>;

const Template: StoryFn<typeof AreaSalvamento> = (_args) => ({
  components: { AreaSalvamento },
  setup() {
    const salvarClick = () => {
      alert('Clicado no botão salvar.');
    };

    const cancelarClick = () => {
      alert('Clicado no botão cancelar.');
    };

    return {
      salvarClick,
      cancelarClick,
    };
  },
  template: '<AreaSalvamento @salvarClick="salvarClick" @cancelarClick="cancelarClick"/>',
});

export const Padrao = Template.bind({});
Padrao.args = {};
Padrao.parameters = {
  docs: {
    description: {
      story:
        'Área de salvamento padrão sem conteúdo adicional no slot. Exibe apenas os botões Salvar e Cancelar.',
    },
  },
};

export const ComConteudo = {
  render: () => ({
    components: { AreaSalvamento },
    setup() {
      const salvarClick = () => alert('Clicado no botão salvar.');
      const cancelarClick = () => alert('Clicado no botão cancelar.');
      return { salvarClick, cancelarClick };
    },
    template:
      '<AreaSalvamento @salvarClick="salvarClick" @cancelarClick="cancelarClick">' +
      '<p style="padding: 1rem; background: var(--cor-fundo); border-radius: 0.5rem; text-align: center;">Carregando...</p>' +
      '</AreaSalvamento>',
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Área de salvamento com conteúdo personalizado no slot, como um indicador de carregamento ou campos de formulário.',
      },
    },
  },
};
