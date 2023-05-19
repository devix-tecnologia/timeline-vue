import { Evento, Perfil } from "../type";

export const dadosPerfil: Perfil = {
  nome: "Maria do Socorro",
  imagem:
    "https://this-person-does-not-exist.com/img/avatar-gen11071f8e0802a35d66684ee9376722b2.jpg",
  icone: "person",
};

export const dadosEventos: Evento[] = [
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
  },
  {
    data: new Date("2023-05-03T11:00Z"),
    previsto: new Date("2023-05-03T11:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: 10,
    titulo: "Ligar para médica",
    subtitulo: "",
    destaque: "",
    categoria: {
      nome: "Ligação",
      icone: "call",
    },
    status: "planejado",
    criticidade: "baixa",

    atual: false,
    scroll: false,
  },
  {
    data: new Date("2023-05-03T15:00Z"),
    previsto: new Date("2023-05-03T15:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: 10,
    titulo: "Passeio no parque",
    subtitulo: "",
    destaque: "",
    categoria: {
      nome: "Passeio",
      icone: "tour",
    },
    status: "planejado",
    criticidade: "baixa",

    atual: false,
    scroll: false,
  },
  {
    data: new Date("2023-05-03T20:00Z"),
    previsto: new Date("2023-05-03T20:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: 10,
    titulo: "Exames do coração",
    subtitulo: "Hospital do Coração",
    destaque: "",
    categoria: {
      nome: "Cardiologista",
      icone: "cardiology",
    },
    status: "planejado",
    criticidade: "media",

    atual: false,
    scroll: false,
  },
  {
    data: new Date("2023-04-01T12:00Z"),
    previsto: new Date("2023-04-01T12:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: 10,
    titulo: "Consulta",
    subtitulo: "Posto de saúde",
    destaque: "Remarcado",
    categoria: {
      nome: "Tele consulta",
      icone: "call",
    },
    status: "adiado",
    criticidade: "baixa",

    atual: false,
    scroll: false,
  },
  {
    data: new Date("2023-04-01T13:00Z"),
    previsto: new Date("2023-04-01T13:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: 10,
    titulo: "Consulta cardiologista",
    subtitulo: "Posto de saúde do bairro",
    destaque: "",
    categoria: {
      nome: "Cardiologista",
      icone: "cardiology",
    },
    status: "realizado",
    criticidade: "alta",

    atual: false,
    scroll: false,
  },
  {
    data: new Date("2023-05-03T12:00Z"),
    previsto: new Date("2023-05-03T12:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: 10,
    titulo: "Dentista",
    subtitulo: "Reta da Penha",
    destaque: "",
    categoria: {
      nome: "Dentista",
      icone: "dentistry",
    },
    status: "planejado",
    criticidade: "baixa",

    atual: false,
    scroll: false,
  },
  {
    data: new Date("2023-05-03T13:00Z"),
    previsto: new Date("2023-05-03T13:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: 10,
    titulo: "Consulta",
    subtitulo: "Hospital central",
    destaque: "",
    categoria: {
      nome: "Consulta",
      icone: "health_and_safety",
    },
    status: "planejado",
    criticidade: "alta",

    atual: false,
    scroll: false,
  },
  {
    data: new Date("2023-05-03T14:27Z"),
    previsto: new Date("2023-05-03T14:27Z"),
    realizado: null,
    duracao: null,
    tolerancia: 10,
    titulo: "Remédio de pressão",
    subtitulo: "Aferir a pressão",
    destaque: "",
    categoria: {
      nome: "Remédio",
      icone: "pill",
    },
    status: "planejado",
    criticidade: "alta",

    atual: false,
    scroll: false,
  },
  {
    data: new Date("2023-05-03T15:00Z"),
    previsto: new Date("2023-05-03T15:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: 10,
    titulo: "Checar temperatura",
    subtitulo: "",
    destaque: "",
    categoria: {
      nome: "Termometro",
      icone: "thermometer_gain",
    },
    status: "planejado",
    criticidade: "baixa",

    atual: false,
    scroll: false,
  },
  {
    data: new Date("2023-05-08T16:00Z"),
    previsto: new Date("2023-05-08T16:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: 10,
    titulo: "Avaliação Física",
    subtitulo: "",
    destaque: "IMC: 28,4",
    categoria: {
      nome: "Avaliação Física",
      icone: "conditions",
    },
    status: "planejado",
    criticidade: "baixa",

    atual: false,
    scroll: false,
  },
  {
    data: new Date("2023-05-09T19:00Z"),
    previsto: new Date("2023-05-09T19:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: 10,
    titulo: "Vacina da gripe",
    subtitulo: "Posto de saúde do bairro",
    destaque: "",
    categoria: {
      nome: "Vacina",
      icone: "vaccines",
    },
    status: "planejado",
    criticidade: "baixa",

    atual: false,
    scroll: false,
  },
  {
    data: new Date("2023-05-09T17:00Z"),
    previsto: new Date("2023-05-09T17:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: 10,
    titulo: "Vitamina D",
    subtitulo: "2 comprimidos",
    destaque: "",
    categoria: {
      nome: "Remédio",
      icone: "pill",
    },
    status: "planejado",
    criticidade: "baixa",
    aoClicar: (evento) => alert("Olá, mundo!"),
    atual: false,
    scroll: false,
  },
  {
    data: new Date("2023-05-09T18:01Z"),
    previsto: new Date("2023-05-09T18:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: 10,
    titulo: "Fisioterapia",
    subtitulo: "",
    destaque: "",
    categoria: {
      nome: "Fisioterapia",
      icone: "physical_therapy",
    },
    status: "planejado",
    criticidade: "baixa",

    atual: false,
    scroll: false,
  },
];
