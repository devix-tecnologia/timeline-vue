import { render, fireEvent } from '@testing-library/vue';
import BotaoStatus from './BotaoStatus.vue';

describe('StatusEvento.vue', () => {
  it('emits "clicked" when button is clicked', async () => {
    const props = {
      status: "status",
    };

    const { emitted, getByTestId } = render(BotaoStatus, { props });
    const elemento = getByTestId('botao-status');
    expect(elemento).toBeTruthy();

   // Dispara o evento de clique
   await fireEvent.click(elemento);

    // Verifica se o evento foi emitido
    expect(emitted().click).toBeTruthy();
  });
  
});
