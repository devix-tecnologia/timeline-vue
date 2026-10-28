import { render } from '@testing-library/vue';
import Hora from './Hora.vue';

describe('Hora.vue', () => {
  it('mostra a hora no formato HH:MM, com dois dígitos', () => {
    const { container } = render(Hora, { props: { hora: new Date(2026, 9, 7, 9, 5) } });

    expect(container.textContent?.trim()).toBe('09:05');
  });

  it('acompanha a troca da prop', async () => {
    const { container, rerender } = render(Hora, { props: { hora: new Date(2026, 9, 7, 9, 5) } });

    await rerender({ hora: new Date(2026, 9, 7, 17, 30) });

    expect(container.textContent?.trim()).toBe('17:30');
  });
});
