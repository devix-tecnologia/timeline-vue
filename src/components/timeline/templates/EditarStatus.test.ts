import { render, fireEvent } from '@testing-library/vue';
import EditarStatus from './EditarStatus.vue';
import { EventoDetalhado } from '../typeDetalhado';
import { Status } from '../type';
import { dadosEventosDetalhados } from './TemplateTimeline.mock';

describe('EditarStatus.vue', () => {
  it('Testar renderização do componente', () => {
    const props = {
      evento: dadosEventosDetalhados[0] satisfies EventoDetalhado,
      salvarVisivel: true,
    };

    const { getByTestId } = render(EditarStatus, { props });
    const elemento = getByTestId('editar-status');
    expect(elemento).toBeTruthy();
  });

  it('Testar emissao do evento "salvarClick" quando clicado no botao salvar', async () => {
    const props = {
      evento: dadosEventosDetalhados[0] satisfies EventoDetalhado,
      salvarVisivel: true,
    };

    const { emitted, getByTestId } = render(EditarStatus, { props });
    const elementoStatusCancelado = getByTestId('botao-status-cancelado');
    expect(elementoStatusCancelado).toBeTruthy();

    await fireEvent.click(elementoStatusCancelado);

    const salvarStatus = getByTestId('botao-salvar');
    expect(salvarStatus).toBeTruthy();
    await fireEvent.click(salvarStatus);

    const salvarClick = emitted().salvarClick;
    expect(salvarClick).toBeTruthy();
    expect(salvarClick).toHaveLength(1);

    const payload = salvarClick[0];
    if (!Array.isArray(payload)) {
      new Error('Payload não é um array');
      return;
    }

    expect(payload).toHaveLength(2);
    const status = payload[0];
    expectTypeOf(status).toMatchTypeOf<Status>();
    expect(status).toEqual('cancelado');
  });
});
