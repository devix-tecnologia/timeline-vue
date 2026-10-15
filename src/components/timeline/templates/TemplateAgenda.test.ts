import { render, fireEvent } from '@testing-library/vue';
import TemplateAgenda from './TemplateAgenda.vue';
import { dadosPerfilConsultor, gerarEventosConsultor } from '../organismos/Timeline.mock';
import { Evento } from '../type';

// A manhã de hoje no projeto gráfico: 9:41, antes da demonstração das 10:00.
const agora = new Date(2026, 9, 7, 9, 41);

const renderizar = (props: Record<string, unknown> = {}) =>
  render(TemplateAgenda, {
    props: {
      perfil: dadosPerfilConsultor,
      eventos: gerarEventosConsultor(agora),
      dia: agora,
      ...props,
    },
    slots: { marca: '<span>acme.app</span>' },
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

    expect(getByText('acme.app')).toBeTruthy();
    expect(getByText('RM')).toBeTruthy();
    expect(getByRole('heading', { level: 1 }).textContent).toBe('Eventos');
    expect(getByRole('heading', { level: 2 }).textContent).toBe('Rafael Moreira');
    expect(getByText('Consultor de vendas')).toBeTruthy();
  });

  it('abre na agenda e troca para o histórico, que só tem eventos resolvidos', async () => {
    const { getByRole, getByTestId, queryByTestId, container } = renderizar();

    expect(getByTestId('agenda-eventos')).toBeTruthy();
    expect(getByRole('button', { name: 'Agenda' }).getAttribute('aria-pressed')).toBe('true');

    await fireEvent.click(getByRole('button', { name: 'Histórico' }));

    expect(queryByTestId('agenda-eventos')).toBeNull();
    const titulos = [...container.querySelectorAll('.eventoMarcos h4')].map((titulo) =>
      titulo.textContent?.trim()
    );
    expect(titulos).toEqual([
      'Ligação de prospecção',
      'Visita técnica',
      'Reunião de descoberta',
      'Retorno por e-mail',
      'Alinhamento com a pré-venda',
    ]);
  });

  it('a busca filtra as duas visões, sem diferenciar acentos', async () => {
    const { getByRole, getAllByTestId, container } = renderizar();

    await fireEvent.update(getByRole('searchbox'), 'farma vida');
    const naAgenda = getAllByTestId('evento-agenda').map((evento) =>
      evento.querySelector('h4')?.textContent?.trim()
    );
    expect(naAgenda).toEqual(['Workshop']);

    await fireEvent.click(getByRole('button', { name: 'Histórico' }));
    await fireEvent.update(getByRole('searchbox'), 'reuniao');
    const noHistorico = [...container.querySelectorAll('.eventoMarcos h4')].map((titulo) =>
      titulo.textContent?.trim()
    );
    expect(noHistorico).toEqual(['Reunião de descoberta', 'Alinhamento com a pré-venda']);
  });

  it('avisa quando a busca não encontra nada no histórico', async () => {
    const { getByRole, getByText } = renderizar({ visaoInicial: 'historico' });

    await fireEvent.update(getByRole('searchbox'), 'nada parecido');

    expect(getByText('Nenhum evento no histórico.')).toBeTruthy();
  });

  it('repassa os cliques de ação das duas visões', async () => {
    const { getByRole, emitted } = renderizar({ filtroInicial: 'pendentes' });

    await fireEvent.click(getByRole('button', { name: 'Abrir proposta' }));
    await fireEvent.click(getByRole('button', { name: 'Histórico' }));
    await fireEvent.click(getByRole('button', { name: 'Reagendar' }));

    const acoes = (emitted().acaoClick as [Evento, { id: string }][]).map(
      ([evento, acao]) => `${evento.titulo}: ${acao.id}`
    );
    expect(acoes).toEqual([
      'Enviar proposta revisada: abrir-proposta',
      'Visita técnica: reagendar',
    ]);
  });
});
