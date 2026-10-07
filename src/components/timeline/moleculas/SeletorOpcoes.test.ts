import { render, fireEvent } from '@testing-library/vue';
import SeletorOpcoes from './SeletorOpcoes.vue';

const opcoes = [
  { valor: 'todos', rotulo: 'Todos' },
  { valor: 'pendentes', rotulo: 'Pendentes', contador: 3 },
  { valor: 'concluidos', rotulo: 'Concluídos' },
];

describe('SeletorOpcoes.vue', () => {
  it('marca a opção escolhida com aria-pressed', () => {
    const { getByRole } = render(SeletorOpcoes, {
      props: { opcoes, modelValue: 'pendentes', rotulo: 'Filtrar eventos' },
    });

    expect(getByRole('group', { name: 'Filtrar eventos' })).toBeTruthy();
    expect(getByRole('button', { name: /Pendentes/ }).getAttribute('aria-pressed')).toBe('true');
    expect(getByRole('button', { name: 'Todos' }).getAttribute('aria-pressed')).toBe('false');
  });

  it('mostra o contador da opção', () => {
    const { getByRole } = render(SeletorOpcoes, {
      props: { opcoes, modelValue: 'todos', rotulo: 'Filtrar eventos' },
    });

    expect(getByRole('button', { name: /Pendentes/ }).textContent).toMatch(/Pendentes\s*3/);
  });

  it('emite "update:modelValue" com o valor da opção clicada', async () => {
    const { getByRole, emitted } = render(SeletorOpcoes, {
      props: { opcoes, modelValue: 'todos', rotulo: 'Filtrar eventos' },
    });

    await fireEvent.click(getByRole('button', { name: 'Concluídos' }));

    expect(emitted()['update:modelValue']).toEqual([['concluidos']]);
  });

  it('aplica a classe da aparência', () => {
    const { getByTestId } = render(SeletorOpcoes, {
      props: { opcoes, modelValue: 'todos', rotulo: 'Filtrar eventos', aparencia: 'chips' },
    });

    expect(getByTestId('seletor-opcoes').classList).toContain('seletorOpcoes--chips');
  });
});
