import { render, fireEvent } from '@testing-library/vue';
import Observacoes from '../moleculas/Observacoes.vue';
import StatusEvento from '../moleculas/StatusEvento.vue';
import { Status } from '../type';

describe('EventoDetalhado.vue', () => {
  
  it('emits "adicionarClick" quando clicado no botão Adicionar Observação', async () => {

    const props = {
      observacoes: [],
    };

    const { emitted, getByTestId } = render(Observacoes, { props });
    const elemento = getByTestId('botao-adicionar');
    expect(elemento).toBeTruthy();

    await fireEvent.click(elemento);
    // Verifica se o evento foi emitido
    expect(emitted().click).toBeTruthy();
  });

  it('emits "cancelarClick" quando clicado no botão cancelar', async () => {
    const props = {
      status: 'Em andamento' as Status,
    };

    const { emitted, getByTestId } = render(StatusEvento, { props });
    const elemento = getByTestId('botao-status');
    expect(elemento).toBeTruthy();

    await fireEvent.click(elemento);
    // Verifica se o evento foi emitido
    expect(emitted().click).toBeTruthy();
  });
  
});
