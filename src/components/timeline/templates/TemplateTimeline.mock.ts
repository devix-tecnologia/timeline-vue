import { Perfil } from "../type";
import { Observacao, EventoDetalhado } from "../typeDetalhado";

export const dadosPerfil: Perfil = {
  nome: "Maria do Socorro",
  imagem:
    "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
  icone: "person",
};

export const dadosEventosDetalhados: EventoDetalhado[] = [
  {
    data: new Date("2023-04-26T19:00Z"),
    previstoPara: new Date("2023-04-26T19:00Z"),
    realizado: new Date("2023-04-26T19:30Z"),
    duracao: undefined,
    tolerancia: 10,
    titulo: "Vacina da Covid",
    subtitulo: "Posto de saúde do bairro",
    destaque: "",
    categoria: {
      nome: "Vacina",
      icone: "vaccines",
    },
    status: "realizado",
    criticidade: "media",
    atual: false,
    scroll: false,
    clicavel: true,
    observacoes: [
      {
        mensagem: "Atraso de 10 minutos",
        autor: { nome: "Maria do Socorro" },
        criadaEm: new Date("2023-04-26T19:10Z"),
      } satisfies Observacao,
    ],
  } satisfies EventoDetalhado,
  {
    data: new Date("2023-04-26T20:10Z"),
    previstoPara: new Date("2023-04-20:10Z"),
    realizado: new Date("2023-04-26T20:15Z"),
    duracao: undefined,
    tolerancia: 10,
    titulo: "Vacina da gripe",
    subtitulo: "Posto de saúde do bairro",
    destaque: "",
    categoria: {
      nome: "Vacina",
      icone: "vaccines",
    },
    status: "cancelado",
    criticidade: "baixa",
    atual: false,
    scroll: false,
    clicavel: false,
    observacoes: [
      {
        mensagem: "Atraso de 10 minutos",
        autor: { nome: "Maria do Socorro" },
        criadaEm: new Date("2023-04-26T19:10Z"),
      } satisfies Observacao,
    ],
  } satisfies EventoDetalhado
];
