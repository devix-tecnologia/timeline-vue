import { render, fireEvent } from '@testing-library/vue';
import Topo from './Topo.vue';

describe('Observacoes.vue', () => {

  it('emits "click" quando clicado no botão Voltar', async () => {
    const { emitted, getByTestId } = render(Topo);

    const topo = getByTestId('topo');
    expect(topo).toBeTruthy();

    // Dispara o evento de clique
    await fireEvent.click(topo);

    // Aguarda um pequeno atraso para permitir que o Vue processe o evento
    await new Promise(resolve => setTimeout(resolve, 100));

    // Verifica se o evento click foi emitido
    expect(emitted().click).toBeTruthy();
  });

});
