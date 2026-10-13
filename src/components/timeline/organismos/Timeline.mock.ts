import type { Component } from 'vue';
import { AcaoEvento, Categoria, Evento, Perfil } from '../type';

export const dadosPerfil: Perfil = {
  nome: 'Maria do Socorro',
  imagem:
    'https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80',
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
 * CONSULTOR DE VENDAS
 * Agenda de quem vende desenvolvimento de sistemas sob medida: prospecção,
 * descoberta, demonstração, proposta, negociação e contrato.
 */

export const dadosPerfilConsultor: Perfil = {
  nome: 'Rafael Moreira',
  descricao: 'Consultor de vendas',
  icone: 'handshake',
};

const categoriasConsultor = {
  ligacao: { nome: 'Ligação', icone: 'call' },
  email: { nome: 'E-mail', icone: 'mail' },
  reuniao: { nome: 'Reunião', icone: 'groups' },
  visita: { nome: 'Visita técnica', icone: 'apartment' },
  demonstracao: { nome: 'Demonstração', icone: 'present_to_all' },
  workshop: { nome: 'Workshop', icone: 'design_services' },
  proposta: { nome: 'Proposta', icone: 'request_quote' },
  negociacao: { nome: 'Negociação', icone: 'handshake' },
  contrato: { nome: 'Contrato', icone: 'contract' },
  kickoff: { nome: 'Kickoff', icone: 'rocket_launch' },
} satisfies Record<string, Categoria>;

const acoesConsultor = {
  verDetalhes: { id: 'ver-detalhes', rotulo: 'Ver detalhes', icone: 'description' },
  concluir: { id: 'concluir', rotulo: 'Concluir', icone: 'check' },
  reagendar: { id: 'reagendar', rotulo: 'Reagendar', icone: 'edit_calendar' },
  abrirProposta: { id: 'abrir-proposta', rotulo: 'Abrir proposta', principal: true },
  maisAcoes: { id: 'mais-acoes', rotulo: 'Mais ações', icone: 'more_horiz', apenasIcone: true },
} satisfies Record<string, AcaoEvento>;

const acoesDePlanejado = [acoesConsultor.verDetalhes, acoesConsultor.concluir];

type EventoConsultor = Pick<
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

const eventoConsultor = ({ previstoPara, ...evento }: EventoConsultor): Evento => ({
  data: previstoPara,
  previstoPara: new Date(previstoPara),
  tolerancia: 15,
  atual: false,
  scroll: false,
  clicavel: true,
  ...evento,
});

/**
 * Gera a agenda do consultor em torno de `referencia` (hoje, por padrão): ontem,
 * hoje, amanhã e daqui a três dias. Devolve uma lista nova a cada chamada, porque
 * a Timeline ordena e altera os eventos que recebe.
 *
 * A proposta de ontem está `planejado` de propósito: a Timeline a marca como atrasada,
 * e a agenda a destaca como pendente.
 */
export function gerarEventosConsultor(referencia: Date = new Date()): Evento[] {
  const em = (dias: number, horas: number, minutos = 0) => {
    const data = new Date(referencia);
    data.setDate(data.getDate() + dias);
    data.setHours(horas, minutos, 0, 0);
    return data;
  };

  return [
    eventoConsultor({
      previstoPara: em(-1, 9),
      realizado: em(-1, 9, 5),
      titulo: 'Ligação de prospecção',
      subtitulo: 'Construtora Alicerce',
      destaque: '',
      categoria: categoriasConsultor.ligacao,
      status: 'realizado',
      criticidade: 'baixa',
    }),
    eventoConsultor({
      previstoPara: em(-1, 11),
      titulo: 'Visita técnica',
      subtitulo: 'Cooperativa AgroSul',
      destaque: 'Nova data a definir',
      categoria: categoriasConsultor.visita,
      status: 'adiado',
      criticidade: 'baixa',
      acoes: [acoesConsultor.reagendar],
    }),
    eventoConsultor({
      previstoPara: em(-1, 14),
      realizado: em(-1, 14, 10),
      titulo: 'Reunião de descoberta',
      subtitulo: 'Rede Farma Vida',
      destaque: '',
      categoria: categoriasConsultor.reuniao,
      status: 'realizado',
      criticidade: 'media',
    }),
    eventoConsultor({
      previstoPara: em(-1, 17),
      titulo: 'Enviar proposta revisada',
      subtitulo: 'Cooperativa AgroSul',
      destaque: 'R$ 320 mil',
      categoria: categoriasConsultor.proposta,
      status: 'planejado',
      criticidade: 'alta',
      acoes: [acoesConsultor.abrirProposta, acoesConsultor.maisAcoes],
    }),
    eventoConsultor({
      previstoPara: em(0, 8, 30),
      realizado: em(0, 8, 40),
      titulo: 'Retorno por e-mail',
      subtitulo: 'Construtora Alicerce',
      destaque: '',
      categoria: categoriasConsultor.email,
      status: 'realizado',
      criticidade: 'baixa',
    }),
    eventoConsultor({
      previstoPara: em(0, 10),
      titulo: 'Demonstração',
      subtitulo: 'Banco Horizonte',
      destaque: 'Apresentação da plataforma',
      categoria: categoriasConsultor.demonstracao,
      status: 'planejado',
      criticidade: 'alta',
      acoes: acoesDePlanejado,
    }),
    eventoConsultor({
      previstoPara: em(0, 13, 30),
      titulo: 'Workshop',
      subtitulo: 'Rede Farma Vida',
      destaque: 'Levantamento de requisitos',
      categoria: categoriasConsultor.workshop,
      status: 'planejado',
      criticidade: 'media',
      acoes: acoesDePlanejado,
    }),
    eventoConsultor({
      previstoPara: em(0, 16),
      titulo: 'Alinhamento com a pré-venda',
      subtitulo: 'Arquitetura e estimativa da proposta',
      destaque: '',
      categoria: categoriasConsultor.reuniao,
      status: 'cancelado',
      criticidade: 'baixa',
    }),
    eventoConsultor({
      previstoPara: em(1, 9, 30),
      titulo: 'Negociação de contrato',
      subtitulo: 'Banco Horizonte',
      destaque: 'R$ 480 mil',
      categoria: categoriasConsultor.negociacao,
      status: 'planejado',
      criticidade: 'alta',
      acoes: acoesDePlanejado,
    }),
    eventoConsultor({
      previstoPara: em(1, 15),
      titulo: 'Revisão de escopo com o CTO',
      subtitulo: 'Logística Rota Norte',
      destaque: 'Ajustes finais da proposta',
      categoria: categoriasConsultor.reuniao,
      status: 'planejado',
      criticidade: 'media',
      acoes: acoesDePlanejado,
    }),
    eventoConsultor({
      previstoPara: em(3, 10),
      titulo: 'Assinatura do contrato',
      subtitulo: 'Logística Rota Norte',
      destaque: 'R$ 1,2 mi',
      categoria: categoriasConsultor.contrato,
      status: 'planejado',
      criticidade: 'alta',
      acoes: acoesDePlanejado,
    }),
    eventoConsultor({
      previstoPara: em(3, 16),
      titulo: 'Kickoff com o time de entrega',
      subtitulo: 'Logística Rota Norte',
      destaque: 'Squad dedicado por 12 meses',
      categoria: categoriasConsultor.kickoff,
      status: 'planejado',
      criticidade: 'media',
      acoes: acoesDePlanejado,
    }),
  ];
}

/**
 * Tokens de cor do projeto gráfico do agiliza.ai (task-004), tirados da imagem: verde
 * escuro da marca, superfícies claras e âmbar para o que está pendente. Aplicados num
 * contêiner, trocam as cores da Timeline sem mudar os componentes.
 */
export const temaAgiliza: Record<string, string> = {
  '--fonte': "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  '--cor-primaria': '#0e5a3a',
  '--cor-secundaria': '#0e5a3a',
  '--cor-terciaria': '#f1f3f2',
  '--cor-fundo': '#ffffff',
  '--cor-selecao': '#e3f1ea',
  '--cor-texto-selecao': '#0b3b26',
  '--cor-texto': '#1b1f1d',
  '--cor-apoio': '#5f6964',
  '--cor-linha': '#e2e6e4',
  '--cor-importante': '#c62828',
  '--cor-alerta': '#e39b17',
  '--cor-sucesso': '#12784a',
  '--cor-acao': '#0e6b46',
  '--cor-texto-acao': '#ffffff',
  '--cor-texto-sucesso': '#ffffff',
  '--cor-texto-importante': '#ffffff',
  '--cor-sombra': 'rgba(14, 90, 58, 0.12)',
  'font-family': 'var(--fonte)',
  'background-color': 'var(--cor-fundo)',
};

/** Decorator das stories: aplica o `temaAgiliza` num contêiner da largura de um celular. */
export const comTemaAgiliza = (story: Component) => ({
  components: { story },
  setup: () => ({ tema: temaAgiliza }),
  template: '<div :style="tema" style="max-width: 48rem; padding: 1.6rem 2rem"><story /></div>',
});

/** Um evento do consultor pelo título, numa lista nova. */
export const buscarEventoConsultor = (titulo: string): Evento => {
  const evento = gerarEventosConsultor().find((candidato) => candidato.titulo === titulo);
  if (!evento) {
    throw new Error(`Evento do consultor não encontrado: ${titulo}`);
  }
  return evento;
};
