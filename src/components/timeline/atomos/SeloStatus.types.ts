import type { Status } from '../type';

export type ApresentacaoStatus = {
  rotulo: string;
  icone: string;
};

/**
 * Rótulo e ícone (Material Symbols) de cada status.
 * O `Record<Status, …>` exige uma entrada por status: um status novo sem selo não compila.
 */
export const SELOS_STATUS: Record<Status, ApresentacaoStatus> = {
  planejado: { rotulo: 'Planejado', icone: 'event' },
  adiantado: { rotulo: 'Adiantado', icone: 'fast_forward' },
  atrasado: { rotulo: 'Atrasado', icone: 'schedule' },
  adiado: { rotulo: 'Adiado', icone: 'update' },
  realizado: { rotulo: 'Realizado', icone: 'check_circle' },
  cancelado: { rotulo: 'Cancelado', icone: 'cancel' },
};
