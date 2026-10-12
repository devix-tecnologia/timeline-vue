import { render } from '@testing-library/vue';
import IconeCategoria from './IconeCategoria.vue';

describe('IconeCategoria.vue', () => {
  it('desenha o ícone fora do texto e o esconde do leitor de tela', () => {
    const { container } = render(IconeCategoria, { props: { iconeCategoria: 'call' } });

    const icone = container.querySelector('.material-symbols-outlined');
    expect(icone?.getAttribute('data-icone')).toBe('call');
    expect(icone?.getAttribute('aria-hidden')).toBe('true');
    expect(icone?.textContent).toBe('');
  });

  it('usa o fundo claro quando não é escuro', () => {
    const { container } = render(IconeCategoria, {
      props: { iconeCategoria: 'call', escuro: false },
    });

    expect(container.querySelector('.iconeCategoria')?.classList).toContain('bg-claro');
  });
});
