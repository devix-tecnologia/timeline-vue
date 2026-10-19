import { render, fireEvent } from '@testing-library/vue';
import EventoTimelineFilosofia from './EventoTimelineFilosofia.vue';

const propsBase = () => ({
  status: 'realizado' as const,
  criticidade: 'baixa' as const,
  previstoPara: new Date(2026, 9, 6, 9, 0),
  realizadoEm: new Date(2026, 9, 6, 9, 5),
  categoria: { nome: 'Telegrama', icone: 'bolt' },
  titulo: 'Telegrama para Sócrates',
  subtitulo: 'Ágora de Atenas',
  textoDestaque: '',
});

describe('EventoTimelineFilosofia.vue', () => {
  it('mostra a hora realizada, o status por extenso e a hora prevista', () => {
    const { getByTestId, getByText } = render(EventoTimelineFilosofia, { props: propsBase() });

    const evento = getByTestId('evento-filosofia');
    expect(evento.querySelector('.eventoFilosofia__hora')?.textContent?.trim()).toBe('09:05');
    expect(getByText('Realizado')).toBeTruthy();
    expect(getByText('Ágora de Atenas')).toBeTruthy();
    expect(getByText('Previsto para 09:00')).toBeTruthy();
    expect(getByTestId('marco-status').getAttribute('data-icone')).toBe('check');
  });

  it('sem hora realizada, mostra a prevista e a descrição', () => {
    const { getByTestId, getByText, queryByText } = render(EventoTimelineFilosofia, {
      props: {
        ...propsBase(),
        status: 'adiado',
        realizadoEm: undefined,
        previstoPara: new Date(2026, 9, 6, 11, 0),
        textoDestaque: 'Nova data a definir',
      },
    });

    expect(
      getByTestId('evento-filosofia').querySelector('.eventoFilosofia__hora')?.textContent?.trim()
    ).toBe('11:00');
    expect(getByText('Nova data a definir')).toBeTruthy();
    expect(queryByText(/Previsto para/)).toBeNull();
  });

  it('emite "click" pelo botão do título e "acaoClick" pelas ações, sem misturar', async () => {
    const reagendar = { id: 'reagendar', rotulo: 'Reagendar', icone: 'edit_calendar' };
    const { getByRole, emitted } = render(EventoTimelineFilosofia, {
      props: { ...propsBase(), acoes: [reagendar] },
    });

    await fireEvent.click(getByRole('button', { name: 'Reagendar' }));
    expect(emitted().acaoClick).toHaveLength(1);
    expect((emitted().acaoClick[0] as unknown[])[0]).toEqual(reagendar);
    expect(emitted().click).toBeUndefined();

    await fireEvent.click(getByRole('button', { name: 'Telegrama para Sócrates' }));
    expect(emitted().click).toHaveLength(1);
  });

  it('marca o evento atual com a classe que a Timeline procura e com aria-current', () => {
    const { getByTestId } = render(EventoTimelineFilosofia, {
      props: { ...propsBase(), ehAtual: true },
    });

    const evento = getByTestId('evento-filosofia');
    expect(evento.classList).toContain('atual');
    expect(evento.getAttribute('aria-current')).toBe('true');
  });
});
