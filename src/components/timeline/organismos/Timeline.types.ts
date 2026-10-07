/**
 * Formas de representar os eventos na linha do tempo.
 *
 * - `padrao`: linha vertical, com a hora à esquerda e o ícone da categoria sobre a linha.
 * - `cartoes`: um cartão por evento ao lado de um trilho, com o status por extenso.
 */
export const APARENCIAS_TIMELINE = ['padrao', 'cartoes'] as const;

export type AparenciaTimeline = (typeof APARENCIAS_TIMELINE)[number];
