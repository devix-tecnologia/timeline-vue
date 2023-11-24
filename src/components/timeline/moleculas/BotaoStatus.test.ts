import { render } from '@testing-library/vue';
import BotaoStatus from './BotaoStatus.vue';

describe('BotaoStatus.vue', () => {
  it('emits "clicked" when button is clicked', async () => {
    const { emitted, getByTestId } = render(BotaoStatus);
    const buttonValue = getByTestId('botao');
    expect(buttonValue).toBeTruthy();
    await buttonValue.click();

    // Verifica se o evento foi emitido
    expect(emitted().click).toBeTruthy();
  });
});
