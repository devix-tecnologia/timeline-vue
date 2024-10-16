import { render, fireEvent } from '@testing-library/vue';
import Botao, { Aparencias, Tamanhos } from './Botao.vue';

describe('Botao.vue', () => {
  it('renderiza componente', async () => {
    const props = {
      aparencia: Aparencias.OUTLINE,
      tamanho: Tamanhos.MEDIO,
      titulo: 'sidarta',
    };

    const { getByTestId } = render(Botao, { props });
    const buttonValue = getByTestId('botao');
    expect(buttonValue).toBeTruthy();
  });

  it('emits "click" when button is clicked', async () => {
    const { emitted, getByTestId } = render(Botao);
    const buttonValue = getByTestId('botao');
    expect(buttonValue).toBeTruthy();
    await fireEvent.click(buttonValue);

    // Verifica se o evento foi emitido
    expect(emitted().click).toBeTruthy();
  });
});
