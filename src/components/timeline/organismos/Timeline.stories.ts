import Timeline from './Timeline.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import { dadosEventos, dadosPerfil } from './Timeline.mock';

export default {
  title: 'Devix/Timeline/Organismos/Timeline',
  component: Timeline,
  parameters: {
    componentSubtitle: 'Linha do tempo padrão com identidade da Devix',
  },
  argTypes: {},
} as Meta<typeof Timeline>;

const perfilMock = dadosPerfil;

const eventosPorDataMock = dadosEventos;

const Template: StoryFn<typeof Timeline> = (args) => ({
  components: { Timeline: Timeline },
  setup() {
    return { args };
  },
  template:
    '<Timeline :perfilTimeline="args.perfilTimeline" :eventosTimeline="args.eventosTimeline" style="position: relative" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  perfilTimeline: perfilMock,
  eventosTimeline: eventosPorDataMock,
};
