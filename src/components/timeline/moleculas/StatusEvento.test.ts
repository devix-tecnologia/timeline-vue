import { render, fireEvent } from '@testing-library/vue';
import StatusEvento from './StatusEvento.vue';

describe('StatusEvento.vue', () => {
  it('renderiza componente', async () => {
    const props = {
      aparencia: 'outline',
      status: 'planejado',
    };

    const { getByTestId } = render(StatusEvento, { props });
    const buttonValue = getByTestId('status-evento');
    expect(buttonValue).toBeTruthy();
  });

  it('emits "click" when button is clicked', async () => {
    const props = {
      aparencia: 'outline',
      status: 'planejado',
    };
    
    const { emitted, getByTestId } = render(StatusEvento, { props });
    const elemento = getByTestId('status-evento');
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);

    // Verifica se o evento foi emitido
    expect(emitted().editarClick).toBeTruthy();
  });
});
