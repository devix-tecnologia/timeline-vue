import { ehPendente, estaAtrasado, separarAgenda } from './agenda';
import { gerarEventosConsultor } from '../organismos/Timeline.mock';
import { Evento } from '../type';

// A manhã de hoje no projeto gráfico: 9:41, antes da demonstração das 10:00.
const hoje = new Date(2026, 9, 7, 9, 41);
const titulos = (eventos: Evento[]) => eventos.map((evento) => evento.titulo);

describe('utils/agenda', () => {
  it('considera pendentes só planejado, atrasado e adiantado', () => {
    const [ligacao, visita, , proposta] = gerarEventosConsultor(hoje);
    expect(ehPendente(ligacao)).toBe(false); // realizado
    expect(ehPendente(visita)).toBe(false); // adiado
    expect(ehPendente(proposta)).toBe(true); // planejado
  });

  it('considera atrasado o pendente que passou do horário com a tolerância', () => {
    const [, , , proposta] = gerarEventosConsultor(hoje);
    const previsto = proposta.data.getTime();
    const tolerancia = proposta.tolerancia * 60 * 1000;
    expect(estaAtrasado(proposta, new Date(previsto + tolerancia - 1))).toBe(false);
    expect(estaAtrasado(proposta, new Date(previsto + tolerancia + 1))).toBe(true);
  });

  it('separa a agenda do dia como no projeto gráfico', () => {
    const secoes = separarAgenda(gerarEventosConsultor(hoje), hoje, hoje);

    expect(titulos(secoes.atrasados)).toEqual(['Enviar proposta revisada']);
    expect(titulos(secoes.proximos)).toEqual(['Demonstração', 'Workshop']);
    expect(titulos(secoes.resolvidos)).toEqual([
      'Retorno por e-mail',
      'Alinhamento com a pré-venda',
    ]);
  });

  it('move para os atrasados o pendente de hoje que passou do horário', () => {
    const tarde = new Date(2026, 9, 7, 11, 0);
    const secoes = separarAgenda(gerarEventosConsultor(hoje), tarde, tarde);

    expect(titulos(secoes.atrasados)).toEqual(['Enviar proposta revisada', 'Demonstração']);
    expect(titulos(secoes.proximos)).toEqual(['Workshop']);
  });

  it('não altera a ordem nem o status dos eventos recebidos', () => {
    const eventos = gerarEventosConsultor(hoje).reverse();
    const antes = eventos.map((evento) => `${evento.titulo}:${evento.status}`);
    separarAgenda(eventos, hoje, hoje);
    expect(eventos.map((evento) => `${evento.titulo}:${evento.status}`)).toEqual(antes);
  });
});
