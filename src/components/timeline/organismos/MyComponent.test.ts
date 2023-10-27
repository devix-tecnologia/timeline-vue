import { render } from '@testing-library/vue';
import MyComponent from './MyComponent.vue';

describe('MyComponent.vue', () => {
  it('emits "clicaramNoBotaoUpdateValue" when first button is clicked', async () => {
    const { emitted, getByTestId } = render(MyComponent);
    const buttonValue = getByTestId('updateValueButton');
    await buttonValue.click();

    // Verifica se o evento foi emitido
    expect(emitted().clicaramNoBotaoUpdateValue).toBeTruthy();
  });

  it('emits "clicaramNoBotaoUpdateStatus" when second button is clicked', async () => {
    const { emitted, getByTestId } = render(MyComponent);
    const buttonStatus = getByTestId('updateStatusButton');
    await buttonStatus.click();

    // Verifica se o evento foi emitido
    expect(emitted().clicaramNoBotaoUpdateStatus).toBeTruthy();
  });
});
