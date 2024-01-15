import { Perfil } from '../type';
import { Observacao, EventoDetalhado } from '../typeDetalhado';

export const dadosPerfil: Perfil = {
  nome: 'Maria do Socorro',
  imagem:
    'https://this-person-does-not-exist.com/img/avatar-gen11071f8e0802a35d66684ee9376722b2.jpg',
  icone: 'person',
};

export const dadosEventosDetalhados: EventoDetalhado[] = [
  {
    data: new Date('2023-04-26T19:00Z'),
    previstoPara: new Date('2023-04-26T19:00Z'),
    realizadoEm: new Date('2023-04-26T19:30Z'),
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
    observacoes: [
      {
        mensagem: 'Atraso de 10 minutos',
        autor: { nome: 'Maria do Socorro' },
        criadaEm: new Date('2023-04-26T19:10Z'),
      } satisfies Observacao,
    ],
  } satisfies EventoDetalhado,
  {
    data: new Date('2023-04-20T20:10Z'),
    previstoPara: new Date('2023-04-20:10Z'),
    realizadoEm: new Date('2024-04-20T21:15Z'),
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
    clicavel: false,
    observacoes: [
      {
        mensagem: 'Atraso de 10 minutos',
        autor: { nome: 'Maria do Socorro' },
        criadaEm: new Date('2023-04-26T19:10Z'),
      } satisfies Observacao,
    ],
  } satisfies EventoDetalhado,
];
