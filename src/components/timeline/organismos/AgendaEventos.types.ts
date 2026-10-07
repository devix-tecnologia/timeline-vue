/**
 * - `todos`: atrasados, próximos e concluídos.
 * - `pendentes`: atrasados e próximos.
 * - `concluidos`: os já resolvidos (realizados, adiados e cancelados).
 */
export const FILTROS_AGENDA = ['todos', 'pendentes', 'concluidos'] as const;

export type FiltroAgenda = (typeof FILTROS_AGENDA)[number];

export const ROTULOS_FILTRO_AGENDA: Record<FiltroAgenda, string> = {
  todos: 'Todos',
  pendentes: 'Pendentes',
  concluidos: 'Concluídos',
};
