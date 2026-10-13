import { render, fireEvent } from '@testing-library/vue';
import EventoPendente from './EventoPendente.vue';
import { buscarEventoConsultor } from '../organismos/Timeline.mock';
import { dataCurta } from '../utils/datas';

describe('EventoPendente.vue', () => {
  it('diz de quando é o pendente e quando estava previsto', () => {
    const evento = buscarEventoConsultor('Enviar proposta revisada');
    const { getByText } = render(EventoPendente, { props: { evento } });

    expect(getByText('Pendente de ontem')).toBeTruthy();
    expect(getByText(`Previsto para ${dataCurta(evento.previstoPara)} às 17:00`)).toBeTruthy();
    expect(getByText('Cooperativa AgroSul')).toBeTruthy();
  });

  it('usa o marcador de atrasado, mesmo com o status ainda planejado', () => {
    const evento = buscarEventoConsultor('Enviar proposta revisada');
    const { getByTestId } = render(EventoPendente, { props: { evento } });

    expect(evento.status).toBe('planejado');
    expect(getByTestId('marco-status').classList).toContain('marcoStatus--atrasado');
  });

  it('para pendentes mais antigos, usa a data', () => {
    const evento = buscarEventoConsultor('Enviar proposta revisada');
    const antiga = new Date(2026, 8, 3, 17, 0);
    const { getByText } = render(EventoPendente, {
      props: { evento: { ...evento, data: antiga, previstoPara: antiga } },
    });

    expect(getByText('Pendente de 3 set.')).toBeTruthy();
  });

  it('emite "acaoClick" pela ação principal, sem emitir "click"', async () => {
    const { getByRole, emitted } = render(EventoPendente, {
      props: { evento: buscarEventoConsultor('Enviar proposta revisada') },
    });

    await fireEvent.click(getByRole('button', { name: 'Abrir proposta' }));

    expect(emitted().acaoClick).toHaveLength(1);
    expect(emitted().click).toBeUndefined();
  });
});
