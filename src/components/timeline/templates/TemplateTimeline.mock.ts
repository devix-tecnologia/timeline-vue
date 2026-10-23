import { Perfil } from '../type';
import { Observacao, EventoDetalhado } from '../typeDetalhado';
import { FOTOS } from '../fotos.mock';

export const dadosPerfil: Perfil = {
  nome: 'Maria do Socorro',
  imagem: FOTOS.mulherDeCardiga,
  icone: 'person',
};

export const dadosEventosDetalhados: EventoDetalhado[] = [
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
    observacoes: [
      {
        mensagem: 'Atraso de 10 minutos',
        autor: { nome: 'Maria do Socorro' },
        criadaEm: new Date('2023-04-26T19:10Z'),
      } satisfies Observacao,
    ],
  } satisfies EventoDetalhado,
  {
    data: new Date('2023-04-26T20:10Z'),
    previstoPara: new Date('2023-04-20:10Z'),
    realizado: new Date('2023-04-26T20:15Z'),
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
