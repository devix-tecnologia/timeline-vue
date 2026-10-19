import { render, fireEvent } from '@testing-library/vue';
import AgendaEventos from './AgendaEventos.vue';
import { gerarEventosFilosofia } from './Timeline.mock';
import { Evento } from '../type';

// A manhã de hoje: 9:41, antes do telegrama para Kant das 10:00.
const agora = new Date(2026, 9, 7, 9, 41);

const titulos = (elementos: HTMLElement[]) =>
  elementos.map((elemento) => elemento.querySelector('h4')?.textContent?.trim());

describe('AgendaEventos.vue', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(agora);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('mostra o pendente de ontem, os próximos e os concluídos do dia', () => {
    const { getAllByTestId, getByText } = render(AgendaEventos, {
      props: { eventos: gerarEventosFilosofia(agora), dia: agora },
    });

    expect(titulos(getAllByTestId('evento-pendente'))).toEqual(['Carta revisada para Descartes']);
    expect(titulos(getAllByTestId('evento-agenda'))).toEqual([
      'Telegrama urgente para Kant',
      'Simpósio na Academia',
      'Pergaminho de Confúcio',
      'Sinal de fumaça para Heráclito',
    ]);
    expect(getByText('Próximos eventos')).toBeTruthy();
    expect(getByText('Concluídos', { selector: 'h3' })).toBeTruthy();
  });

  it('conta os pendentes no filtro e filtra pelos chips', async () => {
    const { getByRole, getAllByTestId, queryAllByTestId, queryByText } = render(AgendaEventos, {
      props: { eventos: gerarEventosFilosofia(agora), dia: agora },
    });

    const pendentes = getByRole('button', { name: /Pendentes/ });
    expect(pendentes.textContent).toMatch(/Pendentes\s*3/);

    await fireEvent.click(pendentes);
    expect(titulos(getAllByTestId('evento-agenda'))).toEqual([
      'Telegrama urgente para Kant',
      'Simpósio na Academia',
    ]);
    expect(queryByText('Concluídos', { selector: 'h3' })).toBeNull();

    await fireEvent.click(getByRole('button', { name: 'Concluídos' }));
    expect(queryAllByTestId('evento-pendente')).toHaveLength(0);
    expect(titulos(getAllByTestId('evento-agenda'))).toEqual([
      'Pergaminho de Confúcio',
      'Sinal de fumaça para Heráclito',
    ]);
  });

  it('avisa quando não há eventos no filtro', () => {
    const { getByText } = render(AgendaEventos, {
      props: { eventos: [], dia: agora, filtroInicial: 'pendentes' },
    });

    expect(getByText('Nenhum evento pendente.')).toBeTruthy();
  });

  it('repassa os cliques de evento, de ação e do dia', async () => {
    const { getByRole, emitted } = render(AgendaEventos, {
      props: { eventos: gerarEventosFilosofia(agora), dia: agora },
    });

    await fireEvent.click(getByRole('button', { name: 'Simpósio na Academia' }));
    await fireEvent.click(getByRole('button', { name: 'Abrir carta' }));
    await fireEvent.click(getByRole('button', { name: /Hoje, 7 de outubro/ }));

    expect((emitted().eventoClick[0] as [Evento])[0].titulo).toBe('Simpósio na Academia');
    const [evento, acao] = emitted().acaoClick[0] as [Evento, { id: string }];
    expect(evento.titulo).toBe('Carta revisada para Descartes');
    expect(acao.id).toBe('abrir-carta');
    expect(emitted().diaClick).toHaveLength(1);
  });
});
