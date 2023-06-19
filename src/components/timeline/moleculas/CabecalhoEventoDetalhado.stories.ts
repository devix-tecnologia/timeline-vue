import CabecalhoEventoDetalhado from "./CabecalhoEventoDetalhado.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import {
  dadosEventoDetalhado,
  dadosPerfil,
} from "../organismos/EventoDetalhado.mock";

export default {
  title: "Devix/Timeline/Moleculas/CabecalhoEventoDetalhado",
  component: CabecalhoEventoDetalhado,
  argTypes: {},
} as Meta<typeof CabecalhoEventoDetalhado>;

const perfilMock = dadosPerfil;
const CabecalhoMock = dadosEventoDetalhado[0];
const CabecalhoMock2 = dadosEventoDetalhado[1];

console.log(CabecalhoMock);

const Template: StoryFn<typeof CabecalhoEventoDetalhado> = (args) => ({
  components: { CabecalhoEventoDetalhado },
  setup() {
    return { args };
  },
  template:
    '<CabecalhoEventoDetalhado :perfilTimeline="args.perfilTimeline" :cabecalhoEventoDetalhado="args.cabecalhoEventoDetalhado" :aoClicar="args.aoClicar" />',
});

export const Padrao = Template.bind({});
Padrao.args = {
  perfilTimeline: perfilMock,
  cabecalhoEventoDetalhado: CabecalhoMock,
  aoClicar: (evento) => alert("Olá, Botão data-hora!"),
};

export const SemPerfil = Template.bind({});
SemPerfil.args = {
  cabecalhoEventoDetalhado: CabecalhoMock2,
  aoClicar: (evento) => alert("Olá, Botão data-hora!"),
};
