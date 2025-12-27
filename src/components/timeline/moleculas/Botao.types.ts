export type Tamanho = 'pequeno' | 'medio' | 'grande';
export type Aparencia = 'outline' | 'preenchido' | 'vazio';

export const Tamanhos = {
  PEQUENO: 'pequeno' as Tamanho,
  MEDIO: 'medio' as Tamanho,
  GRANDE: 'grande' as Tamanho,
} as const;

export const Aparencias = {
  OUTLINE: 'outline' as Aparencia,
  PREENCHIDO: 'preenchido' as Aparencia,
  VAZIO: 'vazio' as Aparencia,
} as const;

export default {};
