import { render, fireEvent } from '@testing-library/vue';
import Observacoes from './Observacoes.vue';
import { Observacao } from '../typeDetalhado';

describe('Observacoes.vue', () => {
  it('renderiza componente', async () => {
    const props = {
      observacoes: [
        {
          mensagem: 'paciente estava agitado',
          autor: { nome: 'Dr. Fulano' },
          criadaEm: new Date('2021-01-01T10:00:00.000Z'),
        },
        {
          mensagem: 'paciente estava tremendo',
          autor: { nome: 'Dr. Fulano' },
          criadaEm: new Date('2021-01-01T10:30:00.000Z'),
        },
        {
          mensagem: 'paciente reclamava de dor',
          autor: { nome: 'Dr. Fulano' },
          criadaEm: new Date('2021-01-01T10:40:00.000Z'),
        },
      ] satisfies Observacao[],
    };

    const { getByTestId } = render(Observacoes, { props });
    props.observacoes.forEach((observacao, i) => {
      const elemento = getByTestId(`observacao-${i}`);
      expect(elemento).toBeTruthy();
      expect(elemento.textContent).toContain(observacao.mensagem);
    });
  });

  it('emits "adicionarClick" quando clicado no botão salvar', async () => {
    const props = {
      observacoes: [],
    };

    const { emitted, getByTestId } = render(Observacoes, { props });
    const elemento = getByTestId('botao-adicionar');
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);

    // Verifica se o evento foi emitido
    expect(emitted().adicionarClick).toBeTruthy();
  });
});
