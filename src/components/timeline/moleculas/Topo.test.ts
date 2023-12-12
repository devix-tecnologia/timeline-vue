import { render, fireEvent } from '@testing-library/vue';
import Topo from './Topo.vue';

describe('Observacoes.vue', () => {

  it('emits "click" quando clicado no botão Voltar', async () => {
    const { emitted, getByTestId } = render(Topo);

    const elemento = getByTestId('botao-voltar');
    expect(elemento).toBeTruthy();

    // Dispara o evento de clique
    await fireEvent.click(elemento);

    // Verifica se o evento click foi emitido
    expect(emitted().click).toBeTruthy();
  });

});
