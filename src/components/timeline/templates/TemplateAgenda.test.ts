import { render, fireEvent } from '@testing-library/vue';
import TemplateAgenda from './TemplateAgenda.vue';
import { dadosPerfilMensageira, gerarEventosFilosofia } from '../organismos/Timeline.mock';
import { Evento } from '../type';

// A manhã de hoje: 9:41, antes do telegrama para Kant das 10:00.
const agora = new Date(2026, 9, 7, 9, 41);

const renderizar = (props: Record<string, unknown> = {}) =>
  render(TemplateAgenda, {
    props: {
      perfil: dadosPerfilMensageira,
      eventos: gerarEventosFilosofia(agora),
      dia: agora,
      ...props,
    },
    slots: { marca: '<span>FilosofiA</span>' },
  });

describe('TemplateAgenda.vue', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(agora);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('mostra a marca, as iniciais, o título, o nome e a função', () => {
    const { getByText, getByRole } = renderizar();

    expect(getByText('FilosofiA')).toBeTruthy();
    expect(getByText('HA')).toBeTruthy();
    expect(getByRole('heading', { level: 1 }).textContent).toBe('Eventos');
    expect(getByRole('heading', { level: 2 }).textContent).toBe('Heloísa Abelardo');
    expect(getByText('Mensageira da FilosofiA')).toBeTruthy();
  });

  it('abre na agenda e troca para o histórico, que só tem eventos resolvidos', async () => {
    const { getByRole, getByTestId, queryByTestId, container } = renderizar();

    expect(getByTestId('agenda-eventos')).toBeTruthy();
    expect(getByRole('button', { name: 'Agenda' }).getAttribute('aria-pressed')).toBe('true');

    await fireEvent.click(getByRole('button', { name: 'Histórico' }));

    expect(queryByTestId('agenda-eventos')).toBeNull();
    const titulos = [...container.querySelectorAll('.eventoFilosofia h4')].map((titulo) =>
      titulo.textContent?.trim()
    );
    expect(titulos).toEqual([
      'Telegrama para Sócrates',
      'Pombo-correio para Diógenes',
      'Carta para Hipátia',
      'Pergaminho de Confúcio',
      'Sinal de fumaça para Heráclito',
    ]);
  });

  it('a busca filtra as duas visões, sem diferenciar acentos', async () => {
    const { getByRole, getAllByTestId, container } = renderizar();

    await fireEvent.update(getByRole('searchbox'), 'platao');
    const naAgenda = getAllByTestId('evento-agenda').map((evento) =>
      evento.querySelector('h4')?.textContent?.trim()
    );
    expect(naAgenda).toEqual(['Simpósio na Academia']);

    await fireEvent.click(getByRole('button', { name: 'Histórico' }));
    await fireEvent.update(getByRole('searchbox'), 'hipatia');
    const noHistorico = [...container.querySelectorAll('.eventoFilosofia h4')].map((titulo) =>
      titulo.textContent?.trim()
    );
    expect(noHistorico).toEqual(['Carta para Hipátia']);
  });

  it('avisa quando a busca não encontra nada no histórico', async () => {
    const { getByRole, getByText } = renderizar({ visaoInicial: 'historico' });

    await fireEvent.update(getByRole('searchbox'), 'nada parecido');

    expect(getByText('Nenhum evento no histórico.')).toBeTruthy();
  });

  it('repassa os cliques de ação das duas visões', async () => {
    const { getByRole, emitted } = renderizar({ filtroInicial: 'pendentes' });

    await fireEvent.click(getByRole('button', { name: 'Abrir carta' }));
    await fireEvent.click(getByRole('button', { name: 'Histórico' }));
    await fireEvent.click(getByRole('button', { name: 'Reagendar' }));

    const acoes = (emitted().acaoClick as [Evento, { id: string }][]).map(
      ([evento, acao]) => `${evento.titulo}: ${acao.id}`
    );
    expect(acoes).toEqual([
      'Carta revisada para Descartes: abrir-carta',
      'Pombo-correio para Diógenes: reagendar',
    ]);
  });
});
