import { Evento, Perfil } from '../type';

/**
 * Finais da Copa do Mundo masculina, de 1930 a 2026. Fontes: os verbetes "<ano> FIFA World
 * Cup final" da Wikipedia em inglês e, para 2026, a cobertura da Associated Press.
 *
 * A hora é a do pontapé inicial no horário local do estádio. A data é montada no fuso de
 * quem vê a story, para a Timeline mostrar a hora local, e não a convertida.
 *
 * Em 1950 não houve final: a Copa terminou num quadrangular, decidido no último jogo,
 * Uruguai 2 × 1 Brasil.
 */
type Final = {
  ano: number;
  mes: number;
  dia: number;
  hora: string;
  campeao: string;
  vice: string;
  placar: string;
  estadio: string;
  fato: string;
  /** Na decisão de 1950, que não foi uma final. */
  jogoDecisivo?: boolean;
};

export const FINAIS: Final[] = [
  {
    ano: 1930,
    mes: 7,
    dia: 30,
    hora: '12:45',
    campeao: 'Uruguai',
    vice: 'Argentina',
    placar: '4 × 2',
    estadio: 'Estádio Centenário, Montevidéu',
    fato: 'Cada tempo foi jogado com a bola de uma das seleções.',
  },
  {
    ano: 1934,
    mes: 6,
    dia: 10,
    hora: '15:30',
    campeao: 'Itália',
    vice: 'Tchecoslováquia',
    placar: '2 × 1 na prorrogação',
    estadio: 'Stadio Nazionale PNF, Roma',
    fato: 'Schiavio marca o gol do título já na prorrogação.',
  },
  {
    ano: 1938,
    mes: 6,
    dia: 19,
    hora: '17:00',
    campeao: 'Itália',
    vice: 'Hungria',
    placar: '4 × 2',
    estadio: 'Stade Olympique de Colombes, Colombes',
    fato: 'Vittorio Pozzo vira o único técnico com dois títulos.',
  },
  {
    ano: 1950,
    mes: 7,
    dia: 16,
    hora: '15:00',
    campeao: 'Uruguai',
    vice: 'Brasil',
    placar: '2 × 1',
    estadio: 'Maracanã, Rio de Janeiro',
    fato: 'O Maracanaço: o gol de Ghiggia silencia mais de 170 mil pessoas.',
    jogoDecisivo: true,
  },
  {
    ano: 1954,
    mes: 7,
    dia: 4,
    hora: '17:00',
    campeao: 'Alemanha Ocidental',
    vice: 'Hungria',
    placar: '3 × 2',
    estadio: 'Wankdorfstadion, Berna',
    fato: 'O Milagre de Berna: virada sobre a Hungria, que abriu 2 × 0.',
  },
  {
    ano: 1958,
    mes: 6,
    dia: 29,
    hora: '15:00',
    campeao: 'Brasil',
    vice: 'Suécia',
    placar: '5 × 2',
    estadio: 'Estádio Råsunda, Solna',
    fato: 'Pelé, aos 17 anos, marca duas vezes no primeiro título brasileiro.',
  },
  {
    ano: 1962,
    mes: 6,
    dia: 17,
    hora: '14:30',
    campeao: 'Brasil',
    vice: 'Tchecoslováquia',
    placar: '3 × 1',
    estadio: 'Estádio Nacional, Santiago',
    fato: 'Sem Pelé, machucado, Amarildo e Garrincha garantem o bi.',
  },
  {
    ano: 1966,
    mes: 7,
    dia: 30,
    hora: '15:00',
    campeao: 'Inglaterra',
    vice: 'Alemanha Ocidental',
    placar: '4 × 2 na prorrogação',
    estadio: 'Wembley, Londres',
    fato: 'Hurst faz três gols, um deles discutido até hoje.',
  },
  {
    ano: 1970,
    mes: 6,
    dia: 21,
    hora: '12:00',
    campeao: 'Brasil',
    vice: 'Itália',
    placar: '4 × 1',
    estadio: 'Estádio Azteca, Cidade do México',
    fato: 'Com o tri, a Taça Jules Rimet fica com o Brasil para sempre.',
  },
  {
    ano: 1974,
    mes: 7,
    dia: 7,
    hora: '16:00',
    campeao: 'Alemanha Ocidental',
    vice: 'Países Baixos',
    placar: '2 × 1',
    estadio: 'Olympiastadion, Munique',
    fato: 'Pênalti para a Holanda antes de um alemão tocar na bola.',
  },
  {
    ano: 1978,
    mes: 6,
    dia: 25,
    hora: '15:00',
    campeao: 'Argentina',
    vice: 'Países Baixos',
    placar: '3 × 1 na prorrogação',
    estadio: 'Estádio Monumental, Buenos Aires',
    fato: 'Kempes marca duas vezes no primeiro título argentino.',
  },
  {
    ano: 1982,
    mes: 7,
    dia: 11,
    hora: '20:00',
    campeao: 'Itália',
    vice: 'Alemanha Ocidental',
    placar: '3 × 1',
    estadio: 'Santiago Bernabéu, Madri',
    fato: 'Paolo Rossi abre o placar, e o grito de Tardelli vira símbolo.',
  },
  {
    ano: 1986,
    mes: 6,
    dia: 29,
    hora: '12:00',
    campeao: 'Argentina',
    vice: 'Alemanha Ocidental',
    placar: '3 × 2',
    estadio: 'Estádio Azteca, Cidade do México',
    fato: 'Passe de Maradona, gol de Burruchaga a seis minutos do fim.',
  },
  {
    ano: 1990,
    mes: 7,
    dia: 8,
    hora: '20:00',
    campeao: 'Alemanha Ocidental',
    vice: 'Argentina',
    placar: '1 × 0',
    estadio: 'Stadio Olimpico, Roma',
    fato: 'Brehme converte o pênalti; Monzón é o primeiro expulso numa final.',
  },
  {
    ano: 1994,
    mes: 7,
    dia: 17,
    hora: '12:30',
    campeao: 'Brasil',
    vice: 'Itália',
    placar: '0 × 0 e 3 × 2 nos pênaltis',
    estadio: 'Rose Bowl, Pasadena',
    fato: 'A primeira final nos pênaltis termina com a cobrança de Baggio por cima.',
  },
  {
    ano: 1998,
    mes: 7,
    dia: 12,
    hora: '21:00',
    campeao: 'França',
    vice: 'Brasil',
    placar: '3 × 0',
    estadio: 'Stade de France, Saint-Denis',
    fato: 'Zidane marca dois gols de cabeça no primeiro título francês.',
  },
  {
    ano: 2002,
    mes: 6,
    dia: 30,
    hora: '20:00',
    campeao: 'Brasil',
    vice: 'Alemanha',
    placar: '2 × 0',
    estadio: 'Estádio Internacional de Yokohama, Yokohama',
    fato: 'Ronaldo marca os dois gols do penta.',
  },
  {
    ano: 2006,
    mes: 7,
    dia: 9,
    hora: '20:00',
    campeao: 'Itália',
    vice: 'França',
    placar: '1 × 1 e 5 × 3 nos pênaltis',
    estadio: 'Olympiastadion, Berlim',
    fato: 'Zidane é expulso na prorrogação, na sua última partida.',
  },
  {
    ano: 2010,
    mes: 7,
    dia: 11,
    hora: '20:30',
    campeao: 'Espanha',
    vice: 'Países Baixos',
    placar: '1 × 0 na prorrogação',
    estadio: 'Soccer City, Joanesburgo',
    fato: 'Iniesta marca aos 116 minutos o primeiro título espanhol.',
  },
  {
    ano: 2014,
    mes: 7,
    dia: 13,
    hora: '16:00',
    campeao: 'Alemanha',
    vice: 'Argentina',
    placar: '1 × 0 na prorrogação',
    estadio: 'Maracanã, Rio de Janeiro',
    fato: 'Götze decide, e uma seleção europeia enfim vence nas Américas.',
  },
  {
    ano: 2018,
    mes: 7,
    dia: 15,
    hora: '18:00',
    campeao: 'França',
    vice: 'Croácia',
    placar: '4 × 2',
    estadio: 'Estádio Lujniki, Moscou',
    fato: 'A primeira final com gol contra e com pênalti marcado pelo VAR.',
  },
  {
    ano: 2022,
    mes: 12,
    dia: 18,
    hora: '18:00',
    campeao: 'Argentina',
    vice: 'França',
    placar: '3 × 3 e 4 × 2 nos pênaltis',
    estadio: 'Estádio de Lusail, Lusail',
    fato: 'Mbappé faz três gols, mas Messi enfim levanta a taça.',
  },
  {
    ano: 2026,
    mes: 7,
    dia: 19,
    hora: '15:00',
    campeao: 'Espanha',
    vice: 'Argentina',
    placar: '1 × 0 na prorrogação',
    estadio: 'MetLife Stadium, East Rutherford',
    fato: 'Ferran Torres decide aos 106 minutos, e Emiliano Martínez faz dez defesas.',
  },
];

/** A Alemanha Ocidental soma os títulos com a Alemanha, como na contagem oficial. */
const selecao = (nome: string) => (nome === 'Alemanha Ocidental' ? 'Alemanha' : nome);

/** As seleções no feminino ("a Itália"); as demais, no masculino ("o Brasil"). */
const FEMININAS = ['Itália', 'Alemanha', 'Inglaterra', 'Argentina', 'França', 'Espanha'];

const CONQUISTAS = ['campeão', 'bicampeão', 'tricampeão', 'tetracampeão', 'pentacampeão'];

const conquista = (nome: string, titulos: number) => {
  const palavra = CONQUISTAS[titulos - 1] ?? `${titulos} vezes campeão`;
  return FEMININAS.includes(selecao(nome)) ? palavra.replace(/ão$/, 'ã') : palavra;
};

export const perfilCopaDoMundo: Perfil = {
  nome: 'Finais da Copa do Mundo',
  icone: 'emoji_events',
  descricao: 'De 1930 a 2026',
};

/** Um evento por final, já realizado, com a conquista de cada seleção naquele ano. */
export function gerarEventosFinais(): Evento[] {
  const titulos = new Map<string, number>();
  return FINAIS.map((final) => {
    const total = (titulos.get(selecao(final.campeao)) ?? 0) + 1;
    titulos.set(selecao(final.campeao), total);
    const [hora, minuto] = final.hora.split(':').map(Number);
    const data = new Date(final.ano, final.mes - 1, final.dia, hora, minuto);
    return {
      data,
      previstoPara: new Date(data),
      tolerancia: 0,
      titulo: `${final.campeao} ${conquista(final.campeao, total)}`,
      subtitulo: `${final.placar} sobre ${final.vice === 'Países Baixos' ? 'os' : artigo(final.vice)} ${final.vice} · ${final.estadio}. ${final.fato}`,
      destaque: total === 1 ? '1º título' : `${total}º título`,
      categoria: final.jogoDecisivo
        ? { nome: 'Jogo decisivo', icone: 'sports_soccer' }
        : { nome: 'Final', icone: 'emoji_events' },
      status: 'realizado',
      // Baixa: a aparência cartoes não mostra a etiqueta de prioridade.
      criticidade: 'baixa',
      atual: false,
      scroll: false,
      clicavel: false,
    } satisfies Evento;
  });
}

const artigo = (nome: string) =>
  FEMININAS.includes(selecao(nome)) ||
  ['Suécia', 'Hungria', 'Tchecoslováquia', 'Croácia'].includes(nome)
    ? 'a'
    : 'o';

/** Títulos por seleção, do maior para o menor, e por ordem alfabética no empate. */
export function titulosPorSelecao(): { selecao: string; titulos: number; anos: number[] }[] {
  const porSelecao = new Map<string, number[]>();
  for (const final of FINAIS) {
    const nome = selecao(final.campeao);
    porSelecao.set(nome, [...(porSelecao.get(nome) ?? []), final.ano]);
  }
  return [...porSelecao]
    .map(([nome, anos]) => ({ selecao: nome, titulos: anos.length, anos }))
    .sort((a, b) => b.titulos - a.titulos || a.selecao.localeCompare(b.selecao, 'pt-BR'));
}

/** Os eventos de uma seleção, ou de todas, numa lista nova (a Timeline altera os que recebe). */
export const eventosDaSelecao = (nome: string) => {
  const eventos = gerarEventosFinais();
  return nome === 'todas'
    ? eventos
    : eventos.filter((_evento, indice) => selecao(FINAIS[indice].campeao) === nome);
};
