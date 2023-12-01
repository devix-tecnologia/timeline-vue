import { render, fireEvent } from '@testing-library/vue';
import StatusEvento from './StatusEvento.vue';

describe('BotaoStatus.vue', () => {
  it('emits "clicked" when button is clicked', async () => {
    const props = {
      status: "status",
    };

    const { emitted, getByTestId } = render(StatusEvento, { props });
    const elemento = getByTestId('botao');
    expect(elemento).toBeTruthy();

   // Dispara o evento de clique
   await fireEvent.click(elemento);

    // Verifica se o evento foi emitido
    expect(emitted().click).toBeTruthy();
  });
  
});
