import type { Status } from '../type';

export type ApresentacaoStatus = {
  rotulo: string;
  /** Ícone do selo (Material Symbols). */
  icone: string;
  /** Ícone do marcador, dentro de um círculo já preenchido com a cor. */
  marco: string;
  /** Cor do status, como valor CSS. */
  cor: string;
};

/**
 * Rótulo, ícones e cor de cada status, usados pelo SeloStatus e pelo MarcoStatus.
 * O `Record<Status, …>` exige uma entrada por status: um status novo sem selo não compila.
 */
export const SELOS_STATUS: Record<Status, ApresentacaoStatus> = {
  planejado: { rotulo: 'Planejado', icone: 'event', marco: 'event', cor: 'var(--cor-acao)' },
  adiantado: {
    rotulo: 'Adiantado',
    icone: 'fast_forward',
    marco: 'fast_forward',
    cor: 'var(--cor-acao)',
  },
  atrasado: { rotulo: 'Atrasado', icone: 'schedule', marco: 'schedule', cor: 'var(--cor-alerta)' },
  adiado: {
    rotulo: 'Adiado',
    icone: 'event_repeat',
    marco: 'event_repeat',
    cor: 'var(--cor-alerta)',
  },
  realizado: {
    rotulo: 'Realizado',
    icone: 'check_circle',
    marco: 'check',
    cor: 'var(--cor-sucesso)',
  },
  cancelado: { rotulo: 'Cancelado', icone: 'cancel', marco: 'close', cor: 'var(--cor-importante)' },
};

/**
 * - `contorno`: borda fina e fundo transparente.
 * - `preenchido`: fundo tingido com a cor do status e ícone cheio.
 */
export const APARENCIAS_SELO_STATUS = ['contorno', 'preenchido'] as const;

export type AparenciaSeloStatus = (typeof APARENCIAS_SELO_STATUS)[number];
