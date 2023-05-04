import { Evento, Perfil } from "../type";

export const dadosPerfil: Perfil = {
  nome: "Maria do Socorro",
  imagem:
    "https://this-person-does-not-exist.com/img/avatar-gen11071f8e0802a35d66684ee9376722b2.jpg",
  icone: "person",
};

export const dadosEventos: Evento[] = [
  {
    id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f1",
    data: new Date("2023-04-26T19:00Z"),
    previsto: new Date("2023-04-26T19:00Z"),
    realizado: new Date("2023-04-26T19:30Z"),
    duracao: null,
    tolerancia: null,
    titulo: "Vacina da Covid",
    subtitulo: "Posto de saúde do bairro",
    destaque: "",
    categoria: {
      nome: "Vacina",
      icone: "vaccines",
    },
    status: "realizado",
    criticidade: "media",
    acao: false,
  },
  {
    id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f2",
    data: new Date("2023-04-26T18:10Z"),
    previsto: new Date("2023-04-26T18:10Z"),
    realizado: new Date("2023-04-26T18:15Z"),
    duracao: null,
    tolerancia: null,
    titulo: "Vacina da gripe",
    subtitulo: "Posto de saúde do bairro",
    destaque: "",
    categoria: {
      nome: "Vacina",
      icone: "vaccines",
    },
    status: "cancelado",
    criticidade: "baixa",
    acao: false,
  },
  {
    id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f3",
    data: new Date("2023-05-03T09:00Z"),
    previsto: new Date("2023-05-03T09:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: null,
    titulo: "Ligar para médica",
    subtitulo: "",
    destaque: "",
    categoria: {
      nome: "Ligação",
      icone: "call",
    },
    status: "planejado",
    criticidade: "baixa",
    acao: true,
  },
  {
    id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f4",
    data: new Date("2023-05-03T10:00Z"),
    previsto: new Date("2023-05-03T10:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: null,
    titulo: "Passeio no parque",
    subtitulo: "",
    destaque: "",
    categoria: {
      nome: "Passeio",
      icone: "tour",
    },
    status: "planejado",
    criticidade: "baixa",
    acao: false,
  },
  {
    id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f5",
    data: new Date("2023-05-03T11:00Z"),
    previsto: new Date("2023-05-03T11:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: null,
    titulo: "Exames do coração",
    subtitulo: "Hospital do Coração",
    destaque: "",
    categoria: {
      nome: "Cardiologista",
      icone: "cardiology",
    },
    status: "planejado",
    criticidade: "media",
    acao: true,
  },
  {
    id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f6",
    data: new Date("2023-04-01T12:00Z"),
    previsto: new Date("2023-04-01T12:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: null,
    titulo: "Consulta",
    subtitulo: "Posto de saúde",
    destaque: "Remarcado",
    categoria: {
      nome: "Tele consulta",
      icone: "call",
    },
    status: "adiado",
    criticidade: "baixa",
    acao: false,
  },
  {
    id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f7",
    data: new Date("2023-04-01T13:00Z"),
    previsto: new Date("2023-04-01T13:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: null,
    titulo: "Consulta cardiologista",
    subtitulo: "Posto de saúde do bairro",
    destaque: "",
    categoria: {
      nome: "Cardiologista",
      icone: "cardiology",
    },
    status: "realizado",
    criticidade: "alta",
    acao: true,
  },
  {
    id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f8",
    data: new Date("2023-05-03T14:00Z"),
    previsto: new Date("2023-05-03T14:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: null,
    titulo: "Dentista",
    subtitulo: "Reta da Penha",
    destaque: "",
    categoria: {
      nome: "Dentista",
      icone: "dentistry",
    },
    status: "planejado",
    criticidade: "baixa",
    acao: false,
  },
  {
    id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f9",
    data: new Date("2023-05-03T15:00Z"),
    previsto: new Date("2023-05-03T15:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: null,
    titulo: "Consulta",
    subtitulo: "Hospital central",
    destaque: "",
    categoria: {
      nome: "Consulta",
      icone: "health_and_safety",
    },
    status: "planejado",
    criticidade: "alta",
    acao: true,
  },
  {
    id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f10",
    data: new Date("2023-05-03T16:30Z"),
    previsto: new Date("2023-05-03T16:30Z"),
    realizado: null,
    duracao: null,
    tolerancia: null,
    titulo: "Remédio de pressão",
    subtitulo: "Aferir a pressão",
    destaque: "",
    categoria: {
      nome: "Remédio",
      icone: "pill",
    },
    status: "planejado",
    criticidade: "alta",
    acao: false,
  },
  {
    id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f11",
    data: new Date("2023-05-03T17:00Z"),
    previsto: new Date("2023-05-03T17:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: null,
    titulo: "Checar temperatura",
    subtitulo: "",
    destaque: "",
    categoria: {
      nome: "Termometro",
      icone: "thermometer_gain",
    },
    status: "planejado",
    criticidade: "baixa",
    acao: true,
  },
  {
    id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f12",
    data: new Date("2023-05-03T18:00Z"),
    previsto: new Date("2023-05-03T18:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: null,
    titulo: "Avaliação Física",
    subtitulo: "",
    destaque: "IMC: 28,4",
    categoria: {
      nome: "Avaliação Física",
      icone: "conditions",
    },
    status: "planejado",
    criticidade: "baixa",
    acao: false,
  },
  {
    id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f13",
    data: new Date("2023-05-03T19:00Z"),
    previsto: new Date("2023-05-03T19:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: null,
    titulo: "Vacina da gripe",
    subtitulo: "Posto de saúde do bairro",
    destaque: "",
    categoria: {
      nome: "Vacina",
      icone: "vaccines",
    },
    status: "planejado",
    criticidade: "baixa",
    acao: true,
  },
  {
    id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f14",
    data: new Date("2023-05-03T20:00Z"),
    previsto: new Date("2023-05-03T20:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: null,
    titulo: "Vitamina D",
    subtitulo: "2 comprimidos",
    destaque: "",
    categoria: {
      nome: "Remédio",
      icone: "pill",
    },
    status: "planejado",
    criticidade: "baixa",
    acao: false,
  },
  {
    id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f15",
    data: new Date("2023-05-03T21:00Z"),
    previsto: new Date("2023-05-03T21:00Z"),
    realizado: null,
    duracao: null,
    tolerancia: null,
    titulo: "Fisioterapia",
    subtitulo: "",
    destaque: "",
    categoria: {
      nome: "Fisioterapia",
      icone: "physical_therapy",
    },
    status: "planejado",
    criticidade: "baixa",
    acao: true,
  },
];
