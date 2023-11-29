import { render, fireEvent } from '@testing-library/vue';
import EventoDetalhado from './EventoDetalhado.vue';
import { dadosEventoDetalhado, dadosPerfil } from '../EventoDetalhado.mock';

describe('EventoDetalhado.vue', () => {
  it('renderiza componente', async () => {
    const props = {
      perfil: dadosPerfil,
      evento: dadosEventoDetalhado[0],
    };

    const { getByTestId } = render(EventoDetalhado, { props });
    const elemento = getByTestId('evento-detalhado');
    expect(elemento).toBeTruthy();
  });

  it('emit "statusEditarClick"', async () => {
    const props = {
      perfil: dadosPerfil,
      evento: dadosEventoDetalhado[0],
    };

    const { emitted, getByTestId } = render(EventoDetalhado, { props });
    const elemento = getByTestId('status-evento');
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);

    // Verifica se o evento foi emitido
    expect(emitted().statusEditarClick).toBeTruthy();
  });
});
