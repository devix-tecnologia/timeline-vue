import { render } from '@testing-library/vue';
import MyComponent from './TemplateTimeline.vue';

describe('MyComponent.vue', () => {
  it('emits "eventoTimelineClicked" when first button is clicked', async () => {
    const { emitted, getByTestId } = render(MyComponent);
    const buttonValue = getByTestId('selectEventButton');
    await buttonValue.click();

    // Verifica se o evento foi emitido
    expect(emitted().eventoTimelineClicked).toBeTruthy();
  });

});
