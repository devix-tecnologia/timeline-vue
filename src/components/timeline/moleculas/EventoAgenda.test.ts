import { render, fireEvent } from '@testing-library/vue';
import EventoAgenda from './EventoAgenda.vue';
import { buscarEventoConsultor } from '../organismos/Timeline.mock';

describe('EventoAgenda.vue', () => {
  it('mostra hora, título, cliente, descrição e ações, sem selo para planejado', () => {
    const { getByTestId, getByText, getByRole, queryByTestId } = render(EventoAgenda, {
      props: { evento: buscarEventoConsultor('Demonstração') },
    });

    expect(
      getByTestId('evento-agenda').querySelector('.eventoAgenda__hora')?.textContent?.trim()
    ).toBe('10:00');
    expect(getByText('Banco Horizonte')).toBeTruthy();
    expect(getByText('Apresentação da plataforma')).toBeTruthy();
    expect(getByRole('button', { name: 'Ver detalhes' })).toBeTruthy();
    expect(getByRole('button', { name: 'Concluir' })).toBeTruthy();
    expect(queryByTestId('selo-status')).toBeNull();
  });

  it('mostra o selo e a hora realizada nos concluídos', () => {
    const { getByTestId, getByText } = render(EventoAgenda, {
      props: { evento: buscarEventoConsultor('Retorno por e-mail') },
    });

    expect(getByText('Realizado')).toBeTruthy();
    expect(
      getByTestId('evento-agenda').querySelector('.eventoAgenda__hora')?.textContent?.trim()
    ).toBe('08:40');
  });

  it('emite "click" pelo título e "acaoClick" pelas ações', async () => {
    const { getByRole, emitted } = render(EventoAgenda, {
      props: { evento: buscarEventoConsultor('Demonstração') },
    });

    await fireEvent.click(getByRole('button', { name: 'Concluir' }));
    expect(emitted().acaoClick).toHaveLength(1);
    expect(emitted().click).toBeUndefined();

    await fireEvent.click(getByRole('button', { name: 'Demonstração' }));
    expect(emitted().click).toHaveLength(1);
  });

  it('não é clicável quando o evento diz que não é', async () => {
    const evento = { ...buscarEventoConsultor('Retorno por e-mail'), clicavel: false };
    const { getByTestId, queryByRole, emitted } = render(EventoAgenda, { props: { evento } });

    expect(queryByRole('button')).toBeNull();
    await fireEvent.click(getByTestId('evento-agenda'));
    expect(emitted().click).toBeUndefined();
  });
});
