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

  it('com categoria, é uma imagem com o nome da categoria', () => {
    const { getByRole } = render(IconeCategoria, {
      props: { iconeCategoria: 'call', categoria: 'Ligação' },
    });

    expect(getByRole('img', { name: 'Ligação' })).toBeTruthy();
  });

  it('sem categoria, é decorativo', () => {
    const { container, queryByRole } = render(IconeCategoria, {
      props: { iconeCategoria: 'call' },
    });

    expect(queryByRole('img')).toBeNull();
    expect(container.querySelector('[aria-label]')).toBeNull();
  });

  it('usa o fundo claro quando não é escuro', () => {
    const { container } = render(IconeCategoria, {
      props: { iconeCategoria: 'call', escuro: false },
    });

    expect(container.querySelector('.iconeCategoria')?.classList).toContain('bg-claro');
  });
});
