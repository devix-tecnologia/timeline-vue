export type OpcaoSeletor = {
  valor: string;
  rotulo: string;
  /** Número mostrado ao lado do rótulo (ex.: quantos eventos estão pendentes). */
  contador?: number;
};

/**
 * - `segmentado`: opções de mesma largura num trilho, para trocar de visão.
 * - `chips`: pílulas do tamanho do rótulo, para filtrar.
 */
export const APARENCIAS_SELETOR = ['segmentado', 'chips'] as const;

export type AparenciaSeletor = (typeof APARENCIAS_SELETOR)[number];
