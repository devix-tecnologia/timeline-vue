import { render } from '@testing-library/vue';
import MarcoStatus from './MarcoStatus.vue';
import { SELOS_STATUS } from './SeloStatus.types';
import { Status } from '../type';

describe('MarcoStatus.vue', () => {
  it.each(Object.entries(SELOS_STATUS))(
    'desenha o ícone e a cor do status "%s"',
    (status, selo) => {
      const { getByTestId } = render(MarcoStatus, { props: { status: status as Status } });

      const marco = getByTestId('marco-status');
      expect(marco.getAttribute('data-icone')).toBe(selo.marco);
      expect(marco.style.getPropertyValue('--marcoStatus-cor')).toBe(selo.cor);
    }
  );

  it('é decorativo e não tem texto', () => {
    const { getByTestId } = render(MarcoStatus, { props: { status: 'realizado' } });

    const marco = getByTestId('marco-status');
    expect(marco.getAttribute('aria-hidden')).toBe('true');
    expect(marco.textContent).toBe('');
  });
});
