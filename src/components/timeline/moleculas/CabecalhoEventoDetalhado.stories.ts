import CabecalhoEventoDetalhado from "./CabecalhoEventoDetalhado.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import {
  dadosEventoDetalhado,
  dadosPerfil,
} from "../organismos/EventoDetalhado.mock";

export default {
  title: "Devix/Eventos/Moleculas/CabecalhoEventoDetalhado",
  component: CabecalhoEventoDetalhado,
  argTypes: {},
} as Meta<typeof CabecalhoEventoDetalhado>;

const perfilMock = dadosPerfil;
const CabecalhoMock = dadosEventoDetalhado[0];
const CabecalhoMock2 = dadosEventoDetalhado[1];

const Template: StoryFn<typeof CabecalhoEventoDetalhado> = (args) => ({
  components: { CabecalhoEventoDetalhado },
  setup() {
    return { args };
  },
  template:
    '<CabecalhoEventoDetalhado :perfilEvento="args.perfilEvento" :dadosEvento="args.dadosEvento" :aoClicar="args.aoClicar" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  perfilEvento: perfilMock,
  dadosEvento: CabecalhoMock,
  aoClicar: (evento) => alert("Olá, Botão data-hora!"),
};

export const SemPerfil = Template.bind({});
SemPerfil.args = {
  dadosEvento: CabecalhoMock2,
  aoClicar: (evento) => alert("Olá, Botão data-hora!"),
};
