import { render, fireEvent } from '@testing-library/vue';
import Observacoes from './Observacoes.vue';

describe('Observacoes.vue', () => {
  it('emits "salvarClick" quando clicado no botão salvar', async () => {
    const props = {
      observacoes: [],
    };

    const { emitted, getByTestId } = render(Observacoes, { props });
    const elemento = getByTestId('botao-salvar');
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);

    // Verifica se o evento foi emitido
    expect(emitted().salvarClick).toBeTruthy();
  });

  it('emits "cancelarClick" quando clicado no botão cancelar', async () => {
    const props = {
      observacoes: [],
    };

    const { emitted, getByTestId } = render(Observacoes, { props });
    const elemento = getByTestId('botao-cancelar');
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);

    // Verifica se o evento foi emitido
    expect(emitted().cancelarClick).toBeTruthy();
  });
});
