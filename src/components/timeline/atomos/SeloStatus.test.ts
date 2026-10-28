import { render } from '@testing-library/vue';
import SeloStatus from './SeloStatus.vue';
import { SELOS_STATUS } from './SeloStatus.types';
import { Status } from '../type';

describe('SeloStatus.vue', () => {
  it.each(Object.entries(SELOS_STATUS))('mostra o status "%s" por extenso', (status, selo) => {
    const { getByTestId } = render(SeloStatus, { props: { status: status as Status } });

    const elemento = getByTestId('selo-status');
    expect(elemento.textContent).toContain(selo.rotulo);
    expect(elemento.classList).toContain(`seloStatus--${status}`);
  });

  it('desenha o ícone fora do texto e o esconde do leitor de tela', () => {
    const { getByTestId } = render(SeloStatus, { props: { status: 'realizado' } });

    const icone = getByTestId('selo-status').querySelector('.seloStatus__icone');
    expect(icone?.getAttribute('aria-hidden')).toBe('true');
    expect(icone?.getAttribute('data-icone')).toBe('check_circle');
  });

  it('usa a aparência contorno por padrão e aceita a preenchida', async () => {
    const { getByTestId, rerender } = render(SeloStatus, { props: { status: 'adiado' } });

    expect(getByTestId('selo-status').classList).toContain('seloStatus--contorno');
    await rerender({ status: 'adiado', aparencia: 'preenchido' });
    expect(getByTestId('selo-status').classList).toContain('seloStatus--preenchido');
  });

  it('expõe a cor do status para o ícone e o fundo', () => {
    const { getByTestId } = render(SeloStatus, { props: { status: 'cancelado' } });

    expect(getByTestId('selo-status').style.getPropertyValue('--seloStatus-cor')).toBe(
      SELOS_STATUS.cancelado.cor
    );
  });
});
