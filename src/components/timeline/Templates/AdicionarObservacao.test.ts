import { render, fireEvent } from '@testing-library/vue';
import AreaSalvamento from '../moleculas/AreaSalvamento.vue';

describe('AdicionarObservacao.vue', () => {
  it('emits "adicionarClick" quando clicado no botão Adicionar Observação', async () => {

    const props = {
      observacoes: [],
    };

    const { emitted, getByTestId } = render(AreaSalvamento, { props });
    const elemento = getByTestId('botao-salvar');
    expect(elemento).toBeTruthy();

    await fireEvent.click(elemento);
    // Verifica se o evento foi emitido
    expect(emitted().click).toBeTruthy();
  });

  it('emits "cancelarClick" quando clicado no botão cancelar', async () => {
    const props = {
      status: 'Em andamento',
    };

    const { emitted, getByTestId } = render(AreaSalvamento, { props });
    const elemento = getByTestId('botao-cancelar');
    expect(elemento).toBeTruthy();

    await fireEvent.click(elemento);
    // Verifica se o evento foi emitido
    expect(emitted().click).toBeTruthy();
  });
});
