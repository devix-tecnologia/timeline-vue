import { render, fireEvent } from '@testing-library/vue';
import BotaoStatus from './BotaoStatus.vue';

describe('BotaoStatus.vue', () => {
  it('emits "clicked" when button is clicked', async () => {
    const { emitted, getByTestId } = render(BotaoStatus);
    const element = getByTestId('botao');
    expect(element).toBeTruthy();
    await fireEvent.click(element);

    // Verifica se o evento foi emitido
    expect(emitted().click).toBeTruthy();
  });
});
