import EditarStatus from "./EditarStatus.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Devix/Eventos/Templates/EditarStatus",
  component: EditarStatus,
  parameters: {
    componentSubtitle: "Tela de edição de Status",
  },
  argTypes: {
    aparencia: {
      control: { type: "select" },
      options: ["outline", "preenchido"],
    },
  },
} as Meta<typeof EditarStatus>;

const Template: StoryFn<typeof EditarStatus> = (args) => ({
  components: { EditarStatus },
  setup() {
    return { args };
  },
  template:
    '<EditarStatus :aoClicar="args.aoClicar" :salvarVisivel="args.salvarVisivel" :aparencia="args.aparencia"  />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  aparencia: "preenchido",
  salvarVisivel: false,
  aoClicar: (evento) => alert("Olá!"),
};
