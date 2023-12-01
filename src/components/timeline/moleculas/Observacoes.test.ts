import { render, fireEvent } from '@testing-library/vue';
import Botao from './Botao.vue';

describe('Observacoes.vue', () => {

  it('emits "click" quando clicado no botão Adicionar Observação', async () => {
    const { emitted, getByTestId } = render(Botao);

    const elemento = getByTestId('botao');
    expect(elemento).toBeTruthy();

    // Dispara o evento de clique
    await fireEvent.click(elemento);

    // Verifica se o evento click foi emitido
    expect(emitted().click).toBeTruthy();
  });

});
