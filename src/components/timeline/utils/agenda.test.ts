import { ehPendente, estaAtrasado, separarAgenda } from './agenda';
import { gerarEventosFilosofia } from '../organismos/Timeline.mock';
import { Evento } from '../type';

// A manhã de hoje: 9:41, antes do telegrama para Kant das 10:00.
const hoje = new Date(2026, 9, 7, 9, 41);
const titulos = (eventos: Evento[]) => eventos.map((evento) => evento.titulo);

describe('utils/agenda', () => {
  it('considera pendentes só planejado, atrasado e adiantado', () => {
    const [telegrama, pombo, , carta] = gerarEventosFilosofia(hoje);
    expect(ehPendente(telegrama)).toBe(false); // realizado
    expect(ehPendente(pombo)).toBe(false); // adiado
    expect(ehPendente(carta)).toBe(true); // planejado
  });

  it('considera atrasado o pendente que passou do horário com a tolerância', () => {
    const [, , , carta] = gerarEventosFilosofia(hoje);
    const previsto = carta.data.getTime();
    const tolerancia = carta.tolerancia * 60 * 1000;
    expect(estaAtrasado(carta, new Date(previsto + tolerancia - 1))).toBe(false);
    expect(estaAtrasado(carta, new Date(previsto + tolerancia + 1))).toBe(true);
  });

  it('separa a agenda do dia em atrasados, próximos e resolvidos', () => {
    const secoes = separarAgenda(gerarEventosFilosofia(hoje), hoje, hoje);

    expect(titulos(secoes.atrasados)).toEqual(['Carta revisada para Descartes']);
    expect(titulos(secoes.proximos)).toEqual([
      'Telegrama urgente para Kant',
      'Simpósio na Academia',
    ]);
    expect(titulos(secoes.resolvidos)).toEqual([
      'Pergaminho de Confúcio',
      'Sinal de fumaça para Heráclito',
    ]);
  });

  it('move para os atrasados o pendente de hoje que passou do horário', () => {
    const tarde = new Date(2026, 9, 7, 11, 0);
    const secoes = separarAgenda(gerarEventosFilosofia(hoje), tarde, tarde);

    expect(titulos(secoes.atrasados)).toEqual([
      'Carta revisada para Descartes',
      'Telegrama urgente para Kant',
    ]);
    expect(titulos(secoes.proximos)).toEqual(['Simpósio na Academia']);
  });

  it('não altera a ordem nem o status dos eventos recebidos', () => {
    const eventos = gerarEventosFilosofia(hoje).reverse();
    const antes = eventos.map((evento) => `${evento.titulo}:${evento.status}`);
    separarAgenda(eventos, hoje, hoje);
    expect(eventos.map((evento) => `${evento.titulo}:${evento.status}`)).toEqual(antes);
  });
});
