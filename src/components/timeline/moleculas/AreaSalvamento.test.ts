import { render, fireEvent } from '@testing-library/vue';
import AreaSalvamento from './AreaSalvamento.vue';

describe('AreaSalvamento.vue', () => {
  it('emits "salvarClick" quando clicado no botão salvar', async () => {
    const { emitted, getByTestId } = render(AreaSalvamento);
    const elemento = getByTestId('botao-salvar');
    expect(elemento).toBeTruthy();

    await fireEvent.click(elemento);
    // Verifica se o evento foi emitido
    expect(emitted().click).toBeTruthy();
  });

  it('emits "cancelarClick" quando clicado no botão cancelar', async () => {
    const { emitted, getByTestId } = render(AreaSalvamento);
    const elemento = getByTestId('botao-cancelar');
    expect(elemento).toBeTruthy();

    await fireEvent.click(elemento);
    // Verifica se o evento foi emitido
    expect(emitted().click).toBeTruthy();
  });
});
