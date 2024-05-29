import EditarStatus from './EditarStatus.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import { dadosEventoDetalhado } from '../EventoDetalhado.mock';
import { EventoDetalhado } from '../typeDetalhado';

export default {
  title: 'Devix/Eventos/Templates/EditarStatus',
  component: EditarStatus,
  parameters: {
    componentSubtitle: 'Tela de edição de Status',
  },
  argTypes: {},
} as Meta<typeof EditarStatus>;

const eventoUmMock = dadosEventoDetalhado[0];

const Template: StoryFn<typeof EditarStatus> = (args) => ({
  components: { EditarStatus },
  setup() {
    return { args };
  },
  template:
    '<EditarStatus :aoClicar="args.aoClicar" :salvarVisivel="args.salvarVisivel"  :evento="args.evento"  />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  evento: eventoUmMock satisfies EventoDetalhado,
  salvarVisivel: true,
};
