import { render, fireEvent } from '@testing-library/vue';
import EventoAgenda from './EventoAgenda.vue';
import { buscarEventoFilosofia } from '../organismos/Timeline.mock';

describe('EventoAgenda.vue', () => {
  it('mostra hora, título, cliente, descrição e ações, sem selo para planejado', () => {
    const { getByTestId, getByText, getByRole, queryByTestId } = render(EventoAgenda, {
      props: { evento: buscarEventoFilosofia('Telegrama urgente para Kant') },
    });

    expect(
      getByTestId('evento-agenda').querySelector('.eventoAgenda__hora')?.textContent?.trim()
    ).toBe('10:00');
    expect(getByText('Königsberg, antes da caminhada das 15h30')).toBeTruthy();
    expect(getByText('Imperativo categórico')).toBeTruthy();
    expect(getByRole('button', { name: 'Ver detalhes' })).toBeTruthy();
    expect(getByRole('button', { name: 'Concluir' })).toBeTruthy();
    expect(queryByTestId('selo-status')).toBeNull();
  });

  it('mostra o selo e a hora realizada nos concluídos', () => {
    const { getByTestId, getByText } = render(EventoAgenda, {
      props: { evento: buscarEventoFilosofia('Pergaminho de Confúcio') },
    });

    expect(getByText('Realizado')).toBeTruthy();
    expect(
      getByTestId('evento-agenda').querySelector('.eventoAgenda__hora')?.textContent?.trim()
    ).toBe('08:40');
  });

  it('emite "click" pelo título e "acaoClick" pelas ações', async () => {
    const { getByRole, emitted } = render(EventoAgenda, {
      props: { evento: buscarEventoFilosofia('Telegrama urgente para Kant') },
    });

    await fireEvent.click(getByRole('button', { name: 'Concluir' }));
    expect(emitted().acaoClick).toHaveLength(1);
    expect(emitted().click).toBeUndefined();

    await fireEvent.click(getByRole('button', { name: 'Telegrama urgente para Kant' }));
    expect(emitted().click).toHaveLength(1);
  });

  it('não é clicável quando o evento diz que não é', async () => {
    const evento = { ...buscarEventoFilosofia('Pergaminho de Confúcio'), clicavel: false };
    const { getByTestId, queryByRole, emitted } = render(EventoAgenda, { props: { evento } });

    expect(queryByRole('button')).toBeNull();
    await fireEvent.click(getByTestId('evento-agenda'));
    expect(emitted().click).toBeUndefined();
  });
});
