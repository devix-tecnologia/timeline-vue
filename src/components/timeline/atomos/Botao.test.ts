import { render, fireEvent } from '@testing-library/vue';
import Botao from './Botao.vue';
import { Aparencias, Tamanhos } from './Botao.types';

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

  it.each([
    [Aparencias.PREENCHIDO, Tamanhos.PEQUENO],
    [Aparencias.VAZIO, Tamanhos.GRANDE],
  ])('aplica a aparência %s e o tamanho %s como classes do botão', (aparencia, tamanho) => {
    const { getByTestId } = render(Botao, { props: { aparencia, tamanho, titulo: 'Salvar' } });

    expect(getByTestId('botao').classList).toContain(aparencia);
    expect(getByTestId('botao').classList).toContain(tamanho);
  });

  it('é outline e médio por padrão', () => {
    const { getByTestId } = render(Botao, { props: { titulo: 'Salvar' } });

    expect(getByTestId('botao').classList).toContain(Aparencias.OUTLINE);
    expect(getByTestId('botao').classList).toContain(Tamanhos.MEDIO);
  });

  it('deixa o nome da ligadura fora do nome acessível quando há título', () => {
    const { getByRole } = render(Botao, { props: { icone: 'check', titulo: 'Concluir' } });

    expect(getByRole('button', { name: 'Concluir' })).toBeTruthy();
  });

  it('centraliza o ícone quando não há título', () => {
    const { getByTestId } = render(Botao, { props: { icone: 'more_horiz' } });

    expect(getByTestId('botao').querySelector('.btn__icone--sozinho')).toBeTruthy();
  });
});
