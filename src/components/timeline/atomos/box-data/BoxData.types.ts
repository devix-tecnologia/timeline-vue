export const Aparencias = {
  PADRAO: 'padrao',
  ESCURO: 'escuro',
  CLARO: 'claro',
} as const;

export type Aparencia = (typeof Aparencias)[keyof typeof Aparencias];
