import { render, fireEvent } from '@testing-library/vue';
import CampoBusca from './CampoBusca.vue';

describe('CampoBusca.vue', () => {
  it('tem nome acessível próprio, além do placeholder', () => {
    const { getByRole } = render(CampoBusca, {
      props: { rotulo: 'Buscar evento ou cliente', placeholder: 'Buscar evento ou cliente' },
    });

    const campo = getByRole('searchbox', { name: 'Buscar evento ou cliente' });
    expect(campo.getAttribute('placeholder')).toBe('Buscar evento ou cliente');
  });

  it('emite "update:modelValue" com o texto digitado', async () => {
    const { getByRole, emitted } = render(CampoBusca, { props: { rotulo: 'Buscar' } });

    await fireEvent.update(getByRole('searchbox'), 'AgroSul');

    expect(emitted()['update:modelValue']).toEqual([['AgroSul']]);
  });
});
