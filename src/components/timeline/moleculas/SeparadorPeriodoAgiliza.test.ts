import { render, fireEvent } from '@testing-library/vue';
import SeparadorPeriodoAgiliza from './SeparadorPeriodoAgiliza.vue';
import { diaComRotulo } from '../utils/datas';

describe('SeparadorPeriodoAgiliza.vue', () => {
  it('mostra o dia com o rótulo relativo num h3, com o datetime', () => {
    const hoje = new Date();
    const { getByRole, container } = render(SeparadorPeriodoAgiliza, {
      props: { dataSeparador: hoje },
    });

    expect(getByRole('heading', { level: 3 }).textContent?.trim()).toBe(diaComRotulo(hoje));
    expect(getByRole('heading', { level: 3 }).textContent).toMatch(/^\s*Hoje, /);
    expect(container.querySelector('time')?.getAttribute('datetime')).toMatch(
      /^\d{4}-\d{2}-\d{2}$/
    );
  });

  it('não é botão por padrão', () => {
    const { queryByRole } = render(SeparadorPeriodoAgiliza, {
      props: { dataSeparador: new Date() },
    });

    expect(queryByRole('button')).toBeNull();
  });

  it('navegável, é um botão que emite "click"', async () => {
    const { getByRole, emitted } = render(SeparadorPeriodoAgiliza, {
      props: { dataSeparador: new Date(), navegavel: true },
    });

    await fireEvent.click(getByRole('button', { name: /Hoje/ }));

    expect(emitted().click).toHaveLength(1);
  });
});
