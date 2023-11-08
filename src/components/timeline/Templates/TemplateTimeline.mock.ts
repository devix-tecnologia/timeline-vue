import { Perfil } from "../type";
import { EventoDetalhado } from "../typeDetalhado";

export const dadosPerfil: Perfil = {
  nome: "Maria do Socorro",
  imagem:
    "https://this-person-does-not-exist.com/img/avatar-gen11071f8e0802a35d66684ee9376722b2.jpg",
  icone: "person",
};

export const dadosEventosDetalhados: EventoDetalhado[] = [
  {
    data: new Date("2023-04-26T19:00Z"),
    previsto: new Date("2023-04-26T19:00Z"),
    realizado: new Date("2023-04-26T19:30Z"),
    duracao: null,
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
    observacoes: [
      {
        mensagem: "Atraso de 10 minutos",
        autor: { nome: "Maria do Socorro" },
        criadaEm: new Date("2023-04-26T19:10Z"),
      }
    ],
  },
  {
    data: new Date("2023-04-26T18:10Z"),
    previsto: new Date("2023-04-26T18:10Z"),
    realizado: new Date("2023-04-26T18:15Z"),
    duracao: null,
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
    observacoes: [
      {
        mensagem: "Atraso de 10 minutos",
        autor: { nome: "Maria do Socorro" },
        criadaEm: new Date("2023-04-26T19:10Z"),
      }
    ],
  }
];
