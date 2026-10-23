import type { Component } from 'vue';
import { AcaoEvento, Categoria, Evento, Perfil } from '../type';
import { FOTOS } from '../fotos.mock';

export const dadosPerfil: Perfil = {
  nome: 'Maria do Socorro',
  imagem: FOTOS.mulherDeCardiga,
  icone: 'person',
};

export const dadosEventos: Evento[] = [
  {
    data: new Date('2023-04-26T19:00Z'),
    previstoPara: new Date('2023-04-26T19:00Z'),
    realizado: new Date('2023-04-26T19:30Z'),
    duracao: undefined,
    tolerancia: 10,
    titulo: 'Vacina da Covid',
    subtitulo: 'Posto de saúde do bairro',
    destaque: '',
    categoria: {
      nome: 'Vacina',
      icone: 'vaccines',
    },
    status: 'realizado',
    criticidade: 'media',
    atual: false,
    scroll: false,
    clicavel: true,
  } satisfies Evento,
  {
    data: new Date('2023-04-26T18:10Z'),
    previstoPara: new Date('2023-04-26T18:10Z'),
    realizado: new Date('2023-04-26T18:15Z'),
    duracao: undefined,
    tolerancia: 10,
    titulo: 'Vacina da gripe',
    subtitulo: 'Posto de saúde do bairro',
    destaque: '',
    categoria: {
      nome: 'Vacina',
      icone: 'vaccines',
    },
    status: 'cancelado',
    criticidade: 'baixa',
    atual: false,
    scroll: false,
    clicavel: true,
  } satisfies Evento,
  {
    data: new Date('2023-05-03T11:00Z'),
    previstoPara: new Date('2023-05-03T11:00Z'),
    realizado: undefined,
    duracao: undefined,
    tolerancia: 10,
    titulo: 'Ligar para médica',
    subtitulo: '',
    destaque: '',
    categoria: {
      nome: 'Ligação',
      icone: 'call',
    },
    status: 'planejado',
    criticidade: 'baixa',
    atual: false,
    scroll: false,
    clicavel: true,
  } satisfies Evento,
  {
    data: new Date('2023-05-03T15:00Z'),
    previstoPara: new Date('2023-05-03T15:00Z'),
    realizado: undefined,
    duracao: undefined,
    tolerancia: 10,
    titulo: 'Passeio no parque',
    subtitulo: '',
    destaque: '',
    categoria: {
      nome: 'Passeio',
      icone: 'tour',
    },
    status: 'planejado',
    criticidade: 'baixa',
    atual: false,
    scroll: false,
    clicavel: true,
  } satisfies Evento,
  {
    data: new Date('2023-05-03T20:00Z'),
    previstoPara: new Date('2023-05-03T20:00Z'),
    realizado: undefined,
    duracao: undefined,
    tolerancia: 10,
    titulo: 'Exames do coração',
    subtitulo: 'Hospital do Coração',
    destaque: '',
    categoria: {
      nome: 'Cardiologista',
      icone: 'cardiology',
    },
    status: 'planejado',
    criticidade: 'media',
    atual: false,
    scroll: false,
    clicavel: true,
  } satisfies Evento,
  {
    data: new Date('2023-04-01T12:00Z'),
    previstoPara: new Date('2023-04-01T12:00Z'),
    realizado: undefined,
    duracao: undefined,
    tolerancia: 10,
    titulo: 'Consulta',
    subtitulo: 'Posto de saúde',
    destaque: 'Remarcado',
    categoria: {
      nome: 'Tele consulta',
      icone: 'call',
    },
    status: 'adiado',
    criticidade: 'baixa',
    atual: false,
    scroll: false,
    clicavel: true,
  } satisfies Evento,
  {
    data: new Date('2023-04-01T13:00Z'),
    previstoPara: new Date('2023-04-01T13:00Z'),
    realizado: undefined,
    duracao: undefined,
    tolerancia: 10,
    titulo: 'Consulta cardiologista',
    subtitulo: 'Posto de saúde do bairro',
    destaque: '',
    categoria: {
      nome: 'Cardiologista',
      icone: 'cardiology',
    },
    status: 'realizado',
    criticidade: 'alta',
    atual: false,
    scroll: false,
    clicavel: true,
  } satisfies Evento,
  {
    data: new Date('2023-05-03T12:00Z'),
    previstoPara: new Date('2023-05-03T12:00Z'),
    realizado: undefined,
    duracao: undefined,
    tolerancia: 10,
    titulo: 'Dentista',
    subtitulo: 'Reta da Penha',
    destaque: '',
    categoria: {
      nome: 'Dentista',
      icone: 'dentistry',
    },
    status: 'planejado',
    criticidade: 'baixa',
    atual: false,
    scroll: false,
    clicavel: true,
  } satisfies Evento,
  {
    data: new Date('2023-05-03T13:00Z'),
    previstoPara: new Date('2023-05-03T13:00Z'),
    realizado: undefined,
    duracao: undefined,
    tolerancia: 10,
    titulo: 'Consulta',
    subtitulo: 'Hospital central',
    destaque: '',
    categoria: {
      nome: 'Consulta',
      icone: 'health_and_safety',
    },
    status: 'planejado',
    criticidade: 'alta',
    atual: false,
    scroll: false,
    clicavel: true,
  } satisfies Evento,
  {
    data: new Date('2023-05-03T14:27Z'),
    previstoPara: new Date('2023-05-03T14:27Z'),
    realizado: undefined,
    duracao: undefined,
    tolerancia: 10,
    titulo: 'Remédio de pressão',
    subtitulo: 'Aferir a pressão',
    destaque: '',
    categoria: {
      nome: 'Remédio',
      icone: 'pill',
    },
    status: 'planejado',
    criticidade: 'alta',
    atual: false,
    scroll: false,
    clicavel: true,
  } satisfies Evento,
  {
    data: new Date('2023-05-03T15:00Z'),
    previstoPara: new Date('2023-05-03T15:00Z'),
    realizado: undefined,
    duracao: undefined,
    tolerancia: 10,
    titulo: 'Checar temperatura',
    subtitulo: '',
    destaque: '',
    categoria: {
      nome: 'Termometro',
      icone: 'thermometer_gain',
    },
    status: 'planejado',
    criticidade: 'baixa',
    atual: false,
    scroll: false,
    clicavel: true,
  } satisfies Evento,
  {
    data: new Date('2023-05-08T16:00Z'),
    previstoPara: new Date('2023-05-08T16:00Z'),
    realizado: undefined,
    duracao: undefined,
    tolerancia: 10,
    titulo: 'Avaliação Física',
    subtitulo: '',
    destaque: 'IMC: 28,4',
    categoria: {
      nome: 'Avaliação Física',
      icone: 'conditions',
    },
    status: 'planejado',
    criticidade: 'baixa',
    atual: false,
    scroll: false,
    clicavel: true,
  } satisfies Evento,
  {
    data: new Date('2023-05-09T19:00Z'),
    previstoPara: new Date('2023-05-09T19:00Z'),
    realizado: undefined,
    duracao: undefined,
    tolerancia: 10,
    titulo: 'Vacina da gripe',
    subtitulo: 'Posto de saúde do bairro',
    destaque: '',
    categoria: {
      nome: 'Vacina',
      icone: 'vaccines',
    },
    status: 'planejado',
    criticidade: 'baixa',
    atual: false,
    scroll: false,
    clicavel: true,
  } satisfies Evento,
  {
    data: new Date('2023-05-09T17:00Z'),
    previstoPara: new Date('2023-05-09T17:00Z'),
    realizado: undefined,
    duracao: undefined,
    tolerancia: 10,
    titulo: 'Vitamina D',
    subtitulo: '2 comprimidos',
    destaque: '',
    categoria: {
      nome: 'Remédio',
      icone: 'pill',
    },
    status: 'planejado',
    criticidade: 'baixa',
    atual: false,
    scroll: false,
    clicavel: true,
  } satisfies Evento,
  {
    data: new Date('2023-05-09T18:01Z'),
    previstoPara: new Date('2023-05-09T18:00Z'),
    realizado: undefined,
    duracao: undefined,
    tolerancia: 10,
    titulo: 'Fisioterapia',
    subtitulo: '',
    destaque: '',
    categoria: {
      nome: 'Fisioterapia',
      icone: 'physical_therapy',
    },
    status: 'planejado',
    criticidade: 'baixa',
    atual: false,
    scroll: false,
    clicavel: true,
  } satisfies Evento,
];

/*
 * FILOSOFIA
 * A agenda de quem entrega a correspondência da FilosofiA, uma empresa fictícia de
 * mensagens para os grandes pensadores da história: telegramas, cartas, pombos-correio,
 * pergaminhos e, quando nada mais funciona, sinais de fumaça.
 */

export const dadosPerfilMensageira: Perfil = {
  nome: 'Heloísa Abelardo',
  descricao: 'Mensageira da FilosofiA',
  icone: 'local_post_office',
};

const categoriasMensagem = {
  telegrama: { nome: 'Telegrama', icone: 'bolt' },
  carta: { nome: 'Carta', icone: 'mail' },
  pombo: { nome: 'Pombo-correio', icone: 'raven' },
  pergaminho: { nome: 'Pergaminho', icone: 'history_edu' },
  simposio: { nome: 'Simpósio', icone: 'groups' },
  fumaca: { nome: 'Sinal de fumaça', icone: 'local_fire_department' },
  garrafa: { nome: 'Mensagem na garrafa', icone: 'liquor' },
  encomenda: { nome: 'Encomenda', icone: 'package_2' },
} satisfies Record<string, Categoria>;

const acoesMensagem = {
  verDetalhes: { id: 'ver-detalhes', rotulo: 'Ver detalhes', icone: 'description' },
  concluir: { id: 'concluir', rotulo: 'Concluir', icone: 'check' },
  reagendar: { id: 'reagendar', rotulo: 'Reagendar', icone: 'edit_calendar' },
  abrirCarta: { id: 'abrir-carta', rotulo: 'Abrir carta', principal: true },
  maisAcoes: { id: 'mais-acoes', rotulo: 'Mais ações', icone: 'more_horiz', apenasIcone: true },
} satisfies Record<string, AcaoEvento>;

const acoesDePlanejado = [acoesMensagem.verDetalhes, acoesMensagem.concluir];

type EventoMensagem = Pick<
  Evento,
  | 'titulo'
  | 'subtitulo'
  | 'destaque'
  | 'categoria'
  | 'status'
  | 'criticidade'
  | 'realizado'
  | 'acoes'
> & { previstoPara: Date };

const eventoMensagem = ({ previstoPara, ...evento }: EventoMensagem): Evento => ({
  data: previstoPara,
  previstoPara: new Date(previstoPara),
  tolerancia: 15,
  atual: false,
  scroll: false,
  clicavel: true,
  ...evento,
});

/**
 * Gera a agenda da mensageira em torno de `referencia` (hoje, por padrão): ontem, hoje,
 * amanhã e daqui a três dias. Devolve uma lista nova a cada chamada, porque a Timeline
 * ordena e altera os eventos que recebe.
 *
 * A carta de ontem para Descartes está `planejado` de propósito: a Timeline a marca como
 * atrasada, e a agenda a destaca como pendente.
 */
export function gerarEventosFilosofia(referencia: Date = new Date()): Evento[] {
  const em = (dias: number, horas: number, minutos = 0) => {
    const data = new Date(referencia);
    data.setDate(data.getDate() + dias);
    data.setHours(horas, minutos, 0, 0);
    return data;
  };

  return [
    eventoMensagem({
      previstoPara: em(-1, 9),
      realizado: em(-1, 9, 5),
      titulo: 'Telegrama para Sócrates',
      subtitulo: 'Ágora de Atenas',
      destaque: '',
      categoria: categoriasMensagem.telegrama,
      status: 'realizado',
      criticidade: 'baixa',
    }),
    eventoMensagem({
      previstoPara: em(-1, 11),
      titulo: 'Pombo-correio para Diógenes',
      subtitulo: 'Um barril em Corinto',
      destaque: 'Pediu para o pombo sair do sol',
      categoria: categoriasMensagem.pombo,
      status: 'adiado',
      criticidade: 'baixa',
      acoes: [acoesMensagem.reagendar],
    }),
    eventoMensagem({
      previstoPara: em(-1, 14),
      realizado: em(-1, 14, 10),
      titulo: 'Carta para Hipátia',
      subtitulo: 'Biblioteca de Alexandria',
      destaque: '',
      categoria: categoriasMensagem.carta,
      status: 'realizado',
      criticidade: 'media',
    }),
    eventoMensagem({
      previstoPara: em(-1, 17),
      titulo: 'Carta revisada para Descartes',
      subtitulo: 'Amsterdã, perto da lareira',
      destaque: 'Penso, logo respondo',
      categoria: categoriasMensagem.carta,
      status: 'planejado',
      criticidade: 'alta',
      acoes: [acoesMensagem.abrirCarta, acoesMensagem.maisAcoes],
    }),
    eventoMensagem({
      previstoPara: em(0, 8, 30),
      realizado: em(0, 8, 40),
      titulo: 'Pergaminho de Confúcio',
      subtitulo: 'Qufu, Estado de Lu',
      destaque: '',
      categoria: categoriasMensagem.pergaminho,
      status: 'realizado',
      criticidade: 'baixa',
    }),
    eventoMensagem({
      previstoPara: em(0, 10),
      titulo: 'Telegrama urgente para Kant',
      subtitulo: 'Königsberg, antes da caminhada das 15h30',
      destaque: 'Imperativo categórico',
      categoria: categoriasMensagem.telegrama,
      status: 'planejado',
      criticidade: 'alta',
      acoes: acoesDePlanejado,
    }),
    eventoMensagem({
      previstoPara: em(0, 13, 30),
      titulo: 'Simpósio na Academia',
      subtitulo: 'Platão, em Atenas',
      destaque: 'Levar a lanterna para a caverna',
      categoria: categoriasMensagem.simposio,
      status: 'planejado',
      criticidade: 'media',
      acoes: acoesDePlanejado,
    }),
    eventoMensagem({
      previstoPara: em(0, 16),
      titulo: 'Sinal de fumaça para Heráclito',
      subtitulo: 'Éfeso: o rio já não era o mesmo',
      destaque: '',
      categoria: categoriasMensagem.fumaca,
      status: 'cancelado',
      criticidade: 'baixa',
    }),
    eventoMensagem({
      previstoPara: em(1, 9, 30),
      titulo: 'Pombo-correio para Simone de Beauvoir',
      subtitulo: 'Café de Flore, Paris',
      destaque: 'Resposta em 2 volumes',
      categoria: categoriasMensagem.pombo,
      status: 'planejado',
      criticidade: 'alta',
      acoes: acoesDePlanejado,
    }),
    eventoMensagem({
      previstoPara: em(1, 15),
      titulo: 'Encomenda de lentes para Spinoza',
      subtitulo: 'Haia, oficina de polimento',
      destaque: 'Ética em anexo',
      categoria: categoriasMensagem.encomenda,
      status: 'planejado',
      criticidade: 'media',
      acoes: acoesDePlanejado,
    }),
    eventoMensagem({
      previstoPara: em(3, 10),
      titulo: 'Telegrama para Nietzsche',
      subtitulo: 'Sils-Maria, nos Alpes',
      destaque: 'Assim falou o carteiro',
      categoria: categoriasMensagem.telegrama,
      status: 'planejado',
      criticidade: 'alta',
      acoes: acoesDePlanejado,
    }),
    eventoMensagem({
      previstoPara: em(3, 16),
      titulo: 'Mensagem na garrafa para Hannah Arendt',
      subtitulo: 'Nova York, pelo Atlântico',
      destaque: 'Sobre a condição humana',
      categoria: categoriasMensagem.garrafa,
      status: 'planejado',
      criticidade: 'media',
      acoes: acoesDePlanejado,
    }),
  ];
}

/**
 * Tokens da FilosofiA, a empresa fictícia dos exemplos: índigo, superfícies frias e âmbar
 * para o que está pendente. Cada token traz o valor do tema claro e o do escuro, em light-dark(), como os do
 * global.css. Aplicados num contêiner, trocam as cores dos componentes sem mudá-los, e o
 * contêiner continua seguindo o tema (o do sistema ou o de um data-tema acima dele).
 */
export const temaFilosofia: Record<string, string> = {
  '--fonte': "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  '--cor-primaria': 'light-dark(#4338ca, #a5b4fc)',
  '--cor-secundaria': 'light-dark(#312e81, #c7d2fe)',
  '--cor-terciaria': 'light-dark(#eef0f8, #1c1f2e)',
  '--cor-fundo': 'light-dark(#ffffff, #11131c)',
  '--cor-selecao': 'light-dark(#e0e7ff, #2b2f5c)',
  '--cor-texto-selecao': 'light-dark(#1e1b4b, #eef0ff)',
  '--cor-texto': 'light-dark(#1a1c2b, #eceef6)',
  '--cor-apoio': 'light-dark(#5b6072, #9aa1b5)',
  '--cor-linha': 'light-dark(#e3e5ee, #2a2e40)',
  '--cor-importante': 'light-dark(#c62828, #f87171)',
  '--cor-alerta': 'light-dark(#e39b17, #fbbf24)',
  '--cor-sucesso': 'light-dark(#15803d, #4ade80)',
  '--cor-acao': 'light-dark(#4338ca, #a5b4fc)',
  '--cor-texto-acao': 'light-dark(#ffffff, #11131c)',
  '--cor-texto-sucesso': 'light-dark(#ffffff, #0b1a10)',
  '--cor-texto-importante': 'light-dark(#ffffff, #1a0b0b)',
  '--cor-sucesso-sobre-fundo': 'light-dark(#15803d, #4ade80)',
  '--cor-importante-sobre-fundo': 'light-dark(#c62828, #f87171)',
  '--cor-alerta-sobre-fundo': 'light-dark(#8a5a00, #fbbf24)',
  '--cor-apoio-sobre-fundo': 'light-dark(#4b5162, #9aa1b5)',
  '--cor-sombra': 'light-dark(rgba(67, 56, 202, 0.12), rgba(0, 0, 0, 0.5))',
  'font-family': 'var(--fonte)',
  color: 'var(--cor-texto)',
  'background-color': 'var(--cor-fundo)',
};

/** Decorator das stories: aplica o `temaFilosofia` num contêiner da largura de um celular. */
export const comTemaFilosofia = (story: Component) => ({
  components: { story },
  setup: () => ({ tema: temaFilosofia }),
  template: '<div :style="tema" style="max-width: 48rem; padding: 1.6rem 2rem"><story /></div>',
});

/** Um evento da mensageira pelo título, numa lista nova. */
export const buscarEventoFilosofia = (titulo: string): Evento => {
  const evento = gerarEventosFilosofia().find((candidato) => candidato.titulo === titulo);
  if (!evento) {
    throw new Error(`Evento da mensageira não encontrado: ${titulo}`);
  }
  return evento;
};
