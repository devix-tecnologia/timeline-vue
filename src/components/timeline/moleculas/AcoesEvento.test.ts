import { render, fireEvent } from '@testing-library/vue';
import { h } from 'vue';
import AcoesEvento from './AcoesEvento.vue';
import { AcaoEvento } from '../type';

const acoes: AcaoEvento[] = [
  { id: 'abrir-proposta', rotulo: 'Abrir proposta', principal: true },
  { id: 'mais-acoes', rotulo: 'Mais ações', icone: 'more_horiz', apenasIcone: true },
];

describe('AcoesEvento.vue', () => {
  it('mostra a ação principal preenchida e a só com ícone pelo nome acessível', () => {
    const { getByRole } = render(AcoesEvento, { props: { acoes } });

    const principal = getByRole('button', { name: 'Abrir proposta' });
    expect(principal.classList).toContain('preenchido');
    const mais = getByRole('button', { name: 'Mais ações' });
    expect(mais.classList).not.toContain('preenchido');
    expect(mais.textContent).not.toContain('Mais ações');
  });

  it('emite "acaoClick" com a ação clicada, sem acionar o clique de quem a contém', async () => {
    const cliqueDoCartao = vi.fn();
    const emitidas: AcaoEvento[] = [];
    const { getByRole } = render({
      render: () =>
        h('article', { onClick: cliqueDoCartao }, [
          h(AcoesEvento, { acoes, onAcaoClick: (acao: AcaoEvento) => emitidas.push(acao) }),
        ]),
    });

    await fireEvent.click(getByRole('button', { name: 'Mais ações' }));

    expect(emitidas).toEqual([acoes[1]]);
    expect(cliqueDoCartao).not.toHaveBeenCalled();
  });
});
