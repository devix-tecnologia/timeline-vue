import { render, fireEvent } from '@testing-library/vue';
import AdicionarObservacao from './AdicionarObservacao.vue';

describe('AdicionarObservacao.vue', () => {
  it('emits "adicionarClick" quando clicado no botão Adicionar Observação', async () => {
    const props = {};

    const { emitted, getByTestId } = render(AdicionarObservacao, { props });

    //preench o campo observação
    const observacaoInput = getByTestId('observacao-textarea');
    expect(observacaoInput).toBeTruthy();
    const mensagemTexto = 'teste adicionando observação';
    await fireEvent.update(observacaoInput, mensagemTexto);

    const salvarStatus = getByTestId('botao-salvar');
    expect(salvarStatus).toBeTruthy();
    await fireEvent.click(salvarStatus);

    //verifica se o payload do evento é o esperado
    const adicionarClick = emitted().adicionarClick;
    expect(adicionarClick).toHaveLength(1);

    const payload = adicionarClick[0];
    if (!Array.isArray(payload)) {
      new Error('Payload não é um array');
      return;
    }

    expect(payload).toHaveLength(2);
    const mensagem = payload[0];
    expectTypeOf(mensagem).toMatchTypeOf<String>();
    expect(mensagem).toEqual(mensagemTexto);
  });

  it('emits "cancelarClick" quando clicado no botão cancelar', async () => {
    const props = {};

    const { emitted, getByTestId } = render(AdicionarObservacao, { props });
    const elemento = getByTestId('botao-cancelar');
    expect(elemento).toBeTruthy();

    await fireEvent.click(elemento);
    // Verifica se o evento foi emitido
    expect(emitted().cancelarClick).toBeTruthy();
  });
});
