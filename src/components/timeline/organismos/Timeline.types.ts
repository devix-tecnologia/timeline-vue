/**
 * Formas de representar os eventos na linha do tempo.
 *
 * - `padrao`: linha vertical, com a hora à esquerda e o ícone da categoria sobre a linha.
 * - `cartoes`: um cartão por evento ao lado de um trilho, com o status por extenso.
 * - `agiliza`: a hora à esquerda, o marcador do status sobre o trilho e um cartão com o
 *   status, o cliente e as ações do evento. Segue o projeto gráfico do agiliza.ai.
 */
export const APARENCIAS_TIMELINE = ['padrao', 'cartoes', 'agiliza'] as const;

export type AparenciaTimeline = (typeof APARENCIAS_TIMELINE)[number];
