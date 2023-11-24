import { render } from '@testing-library/vue';
import Botao from './Botao.vue';

describe('Botao.vue', () => {
  it('emits "clicked" when button is clicked', async () => {
    const { emitted, getByTestId } = render(Botao);
    const buttonValue = getByTestId('botao');
    expect(buttonValue).toBeTruthy();
    await buttonValue.click();

    // Verifica se o evento foi emitido
    expect(emitted().click).toBeTruthy();
  });
});
