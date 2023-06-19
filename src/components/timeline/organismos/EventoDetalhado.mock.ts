import { Perfil } from "../type";
import { EventoDetalhado } from "../typeDetalhado";

export const dadosPerfil: Perfil = {
  nome: "Maria do Socorro",
  imagem:
    "https://this-person-does-not-exist.com/img/avatar-gen11071f8e0802a35d66684ee9376722b2.jpg",
  icone: "person",
};

export const dadosEventoDetalhado: EventoDetalhado[] = [
  {
    observacoes: [
      {
        mensagem: "Todo dia antes de dormir ela não quer tomar",
        autor: { nome: "Joana" },
        criadaEm: new Date("2023-05-09T17:00Z"),
      },
      {
        mensagem: "Hoje ela tomou o remédio normalmente.",
        autor: { nome: "Maria" },
        criadaEm: new Date("2023-05-10T18:00Z"),
      },
    ],
    data: new Date("2023-05-09T17:00Z"),
    previsto: new Date("2023-05-09T17:00Z"),
    realizado: new Date("2023-05-09T17:30Z"),
    duracao: null,
    tolerancia: 10,
    titulo: "Dar vitamina D para a paciente",
    subtitulo: "2 comprimidos",
    destaque: "",
    categoria: {
      nome: "Remédio",
      icone: "pill",
    },
    status: "planejado",
    criticidade: "alta",
    aoClicar: (evento) => alert("Olá, mundo!"),
    atual: false,
    scroll: false,
  },
  {
    observacoes: [
      {
        mensagem: "Todo dia antes de dormir ela não quer tomar",
        autor: { nome: "Joana" },
        criadaEm: new Date("2023-05-09T17:00Z"),
      },
      {
        mensagem: "Hoje ela tomou o remédio normalmente.",
        autor: { nome: "Maria" },
        criadaEm: new Date("2023-05-10T18:00Z"),
      },
    ],
    data: new Date("2023-05-09T17:00Z"),
    previsto: new Date("2023-05-09T17:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: 10,
    titulo: "Caminhada no Parque",
    subtitulo: "2 comprimidos",
    destaque: "",
    categoria: {
      nome: "passeio",
      icone: "tour",
    },
    status: "atrasado",
    criticidade: "media",
    aoClicar: (evento) => alert("Olá, mundo!"),
    atual: false,
    scroll: false,
  },
];
