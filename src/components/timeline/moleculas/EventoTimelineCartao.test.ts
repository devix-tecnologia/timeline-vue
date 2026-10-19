import { render, fireEvent } from '@testing-library/vue';
import EventoTimelineCartao from './EventoTimelineCartao.vue';

const propsBase = () => ({
  status: 'planejado' as const,
  criticidade: 'alta' as const,
  previstoPara: new Date(2026, 9, 7, 10, 0),
  categoria: { nome: 'Telegrama', icone: 'bolt' },
  titulo: 'Telegrama urgente para Kant',
  subtitulo: 'Königsberg · antes da caminhada das 15h30',
  textoDestaque: 'Imperativo categórico',
});

describe('EventoTimelineCartao.vue', () => {
  it('mostra título, subtítulo, status, categoria, prioridade e destaque', () => {
    const { getByText } = render(EventoTimelineCartao, { props: propsBase() });

    expect(getByText('Telegrama urgente para Kant')).toBeTruthy();
    expect(getByText('Königsberg · antes da caminhada das 15h30')).toBeTruthy();
    expect(getByText('Planejado')).toBeTruthy();
    expect(getByText('Telegrama')).toBeTruthy();
    expect(getByText('Prioridade alta')).toBeTruthy();
    expect(getByText('Imperativo categórico')).toBeTruthy();
  });

  it('não mostra etiqueta de prioridade para criticidade baixa', () => {
    const { queryByText } = render(EventoTimelineCartao, {
      props: { ...propsBase(), criticidade: 'baixa' },
    });

    expect(queryByText(/Prioridade/)).toBeNull();
  });

  it('mostra a hora realizada e a prevista riscada quando o evento foi realizado', () => {
    const { getByTestId } = render(EventoTimelineCartao, {
      props: {
        ...propsBase(),
        status: 'realizado',
        realizadoEm: new Date(2026, 9, 7, 10, 20),
      },
    });

    const cartao = getByTestId('evento-cartao');
    expect(cartao.querySelector('.eventoCartao__horario > .hora-padrao')?.textContent).toContain(
      '10:20'
    );
    expect(cartao.querySelector('.eventoCartao__previsto')?.textContent).toContain('previsto');
    expect(cartao.querySelector('.hora-riscada')?.textContent).toContain('10:00');
  });

  it('emite "click" quando o botão do título é acionado', async () => {
    const { getByRole, emitted } = render(EventoTimelineCartao, { props: propsBase() });

    await fireEvent.click(getByRole('button', { name: 'Telegrama urgente para Kant' }));

    expect(emitted().click).toHaveLength(1);
  });

  it('não tem botão nem emite "click" quando não é clicável', async () => {
    const { getByTestId, queryByRole, emitted } = render(EventoTimelineCartao, {
      props: { ...propsBase(), clicavel: false },
    });

    expect(queryByRole('button')).toBeNull();
    await fireEvent.click(getByTestId('evento-cartao'));
    expect(emitted().click).toBeUndefined();
  });

  it('marca o evento atual com a classe que a Timeline procura e com aria-current', () => {
    const { getByTestId } = render(EventoTimelineCartao, {
      props: { ...propsBase(), ehAtual: true },
    });

    const cartao = getByTestId('evento-cartao');
    expect(cartao.classList).toContain('atual');
    expect(cartao.getAttribute('aria-current')).toBe('true');
  });
});
