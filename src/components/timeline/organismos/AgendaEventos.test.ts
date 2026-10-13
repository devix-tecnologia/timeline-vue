import { render, fireEvent } from '@testing-library/vue';
import AgendaEventos from './AgendaEventos.vue';
import { gerarEventosConsultor } from './Timeline.mock';
import { Evento } from '../type';

// A manhã de hoje no projeto gráfico: 9:41, antes da demonstração das 10:00.
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
      props: { eventos: gerarEventosConsultor(agora), dia: agora },
    });

    expect(titulos(getAllByTestId('evento-pendente'))).toEqual(['Enviar proposta revisada']);
    expect(titulos(getAllByTestId('evento-agenda'))).toEqual([
      'Demonstração',
      'Workshop',
      'Retorno por e-mail',
      'Alinhamento com a pré-venda',
    ]);
    expect(getByText('Próximos eventos')).toBeTruthy();
    expect(getByText('Concluídos', { selector: 'h3' })).toBeTruthy();
  });

  it('conta os pendentes no filtro e filtra pelos chips', async () => {
    const { getByRole, getAllByTestId, queryAllByTestId, queryByText } = render(AgendaEventos, {
      props: { eventos: gerarEventosConsultor(agora), dia: agora },
    });

    const pendentes = getByRole('button', { name: /Pendentes/ });
    expect(pendentes.textContent).toMatch(/Pendentes\s*3/);

    await fireEvent.click(pendentes);
    expect(titulos(getAllByTestId('evento-agenda'))).toEqual(['Demonstração', 'Workshop']);
    expect(queryByText('Concluídos', { selector: 'h3' })).toBeNull();

    await fireEvent.click(getByRole('button', { name: 'Concluídos' }));
    expect(queryAllByTestId('evento-pendente')).toHaveLength(0);
    expect(titulos(getAllByTestId('evento-agenda'))).toEqual([
      'Retorno por e-mail',
      'Alinhamento com a pré-venda',
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
      props: { eventos: gerarEventosConsultor(agora), dia: agora },
    });

    await fireEvent.click(getByRole('button', { name: 'Workshop' }));
    await fireEvent.click(getByRole('button', { name: 'Abrir proposta' }));
    await fireEvent.click(getByRole('button', { name: /Hoje, 7 de outubro/ }));

    expect((emitted().eventoClick[0] as [Evento])[0].titulo).toBe('Workshop');
    const [evento, acao] = emitted().acaoClick[0] as [Evento, { id: string }];
    expect(evento.titulo).toBe('Enviar proposta revisada');
    expect(acao.id).toBe('abrir-proposta');
    expect(emitted().diaClick).toHaveLength(1);
  });
});
