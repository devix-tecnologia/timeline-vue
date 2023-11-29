import { render, fireEvent } from '@testing-library/vue';
import EditarEvento from './EditarEvento.vue';

describe('EditarEvento.vue', () => {
  it('renderiza componente', async () => {
    const props = {
      salvarVisivel: true,
    };

    const { getByTestId } = render(EditarEvento, { props });
    const buttonValue = getByTestId('editar-evento');
    expect(buttonValue).toBeTruthy();
  });

  it('emits "click" when button is clicked', async () => {
    const props = {
      salvarVisivel: true,
    };
    
    const { emitted, getByTestId } = render(EditarEvento, { props });
    const elemento = getByTestId('botao-salvar');
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);

    // Verifica se o evento foi emitido
    expect(emitted().salvarClick).toBeTruthy();
  });
});
