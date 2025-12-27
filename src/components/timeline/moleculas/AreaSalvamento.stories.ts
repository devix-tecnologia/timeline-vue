import AreaSalvamento from './AreaSalvamento.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/AreaSalvamento',
  component: AreaSalvamento,
  parameters: {
    docs: {
      description: {
        component: 'Este componente possui um <slot> padrão que carrega conteúdo acima dos botões',
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
