import { render } from '@testing-library/vue';
import SeparadorPeriodoCartao from './SeparadorPeriodoCartao.vue';

const emDias = (dias: number) => {
  const data = new Date();
  data.setDate(data.getDate() + dias);
  return data;
};

describe('SeparadorPeriodoCartao.vue', () => {
  it('mostra a data por extenso, com a inicial maiúscula, e o datetime do dia', () => {
    const { getByRole, container } = render(SeparadorPeriodoCartao, {
      props: { dataSeparador: new Date(2023, 4, 3, 12, 0) },
    });

    expect(getByRole('heading', { level: 3 }).textContent?.trim()).toBe(
      'Quarta-feira, 3 de maio de 2023'
    );
    expect(container.querySelector('time')?.getAttribute('datetime')).toBe('2023-05-03');
  });

  it.each([
    [-1, 'Ontem'],
    [0, 'Hoje'],
    [1, 'Amanhã'],
  ])('rotula o dia a %i dia(s) de hoje como "%s"', (dias, rotulo) => {
    const { container } = render(SeparadorPeriodoCartao, {
      props: { dataSeparador: emDias(dias) },
    });

    expect(container.querySelector('.separadorCartao__relativo')?.textContent).toBe(rotulo);
  });

  it('não rotula dias mais distantes', () => {
    const { container } = render(SeparadorPeriodoCartao, {
      props: { dataSeparador: emDias(3) },
    });

    expect(container.querySelector('.separadorCartao__relativo')).toBeNull();
  });
});
