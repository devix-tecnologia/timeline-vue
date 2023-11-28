import { render, fireEvent } from '@testing-library/vue';
import Observacoes from './Observacoes.vue';

describe('Observacoes.vue', () => {
  it('emits "adicionarClick" quando clicado no botão salvar', async () => {
    const props = {
      observacoes: [],
    };

    const { emitted, getByTestId } = render(Observacoes, { props });
    const elemento = getByTestId('botao-adicionar');
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);

    // Verifica se o evento foi emitido
    expect(emitted().adicionarClick).toBeTruthy();
  });
});
