import EditarStatus from "./EditarStatus.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Devix/Eventos/Templates/EditarStatus",
  component: EditarStatus,
  parameters: {
    componentSubtitle: "Tela de edição de Status",
  },
  argTypes: {},
} as Meta<typeof EditarStatus>;

const Template: StoryFn<typeof EditarStatus> = (args) => ({
  components: { EditarStatus },
  setup() {
    return { args };
  },
  template:
    '<EditarStatus :aoClicar="args.aoClicar" :salvarVisivel="args.salvarVisivel"  />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  salvarVisivel: true,
  aoClicar: (evento) => alert("Olá!"),
};
