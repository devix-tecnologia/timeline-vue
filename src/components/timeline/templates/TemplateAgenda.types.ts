/**
 * Visões da TemplateAgenda:
 * - `agenda`: o que falta fazer, dia a dia (AgendaEventos).
 * - `historico`: o que já se resolveu, na Timeline com a aparência `marcos`.
 */
export const VISOES_AGENDA = ['agenda', 'historico'] as const;

export type VisaoAgenda = (typeof VISOES_AGENDA)[number];

export const ROTULOS_VISAO_AGENDA: Record<VisaoAgenda, string> = {
  agenda: 'Agenda',
  historico: 'Histórico',
};
