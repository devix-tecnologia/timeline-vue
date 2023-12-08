import { render, fireEvent } from '@testing-library/vue';
import MyComponent from './MyComponent.vue';

describe('MyComponent.vue', () => {
  it('emits "clicaramNoBotaoUpdateValue" when first button is clicked', async () => {
    const { emitted, getByTestId } = render(MyComponent);
    const element = getByTestId('updateValueButton');
    await fireEvent.click(element);

    // Verifica se o evento foi emitido
    expect(emitted().updateValueClick).toBeTruthy();
  });

  it('emits "clicaramNoBotaoUpdateStatus" when second button is clicked', async () => {
    const { emitted, getByTestId } = render(MyComponent);
    const element = getByTestId('updateStatusButton');
    await fireEvent.click(element);

    // Verifica se o evento foi emitido
    expect(emitted().updateStatusClick).toBeTruthy();
  });
  
});
