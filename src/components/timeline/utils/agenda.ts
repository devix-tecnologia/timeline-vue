import { Evento, Status } from '../type';
import { diferencaEmDias, mesmoDia } from './datas';

const STATUS_PENDENTES: readonly Status[] = ['planejado', 'atrasado', 'adiantado'];

/** Ainda por fazer: planejado, atrasado ou adiantado. Os demais status já se resolveram. */
export const ehPendente = (evento: Evento) => STATUS_PENDENTES.includes(evento.status);

/** Pendente cujo horário, somado à tolerância, já passou. */
export const estaAtrasado = (evento: Evento, agora: Date) =>
  ehPendente(evento) &&
  (evento.status === 'atrasado' ||
    evento.data.getTime() + evento.tolerancia * 60 * 1000 < agora.getTime());

export type SecoesAgenda = {
  /** Pendentes que passaram do horário, de `dia` ou de antes. */
  atrasados: Evento[];
  /** Pendentes de `dia` que ainda não passaram do horário. */
  proximos: Evento[];
  /** Eventos de `dia` já resolvidos: realizados, adiados ou cancelados. */
  resolvidos: Evento[];
};

const porHorario = (a: Evento, b: Evento) => a.data.getTime() - b.data.getTime();

/** Separa os eventos nas seções da agenda de `dia`, cada uma em ordem de horário. */
export const separarAgenda = (eventos: Evento[], dia: Date, agora: Date): SecoesAgenda => {
  const ordenados = [...eventos].sort(porHorario);
  return {
    atrasados: ordenados.filter(
      (evento) => estaAtrasado(evento, agora) && diferencaEmDias(evento.data, dia) <= 0
    ),
    proximos: ordenados.filter(
      (evento) => ehPendente(evento) && !estaAtrasado(evento, agora) && mesmoDia(evento.data, dia)
    ),
    resolvidos: ordenados.filter((evento) => !ehPendente(evento) && mesmoDia(evento.data, dia)),
  };
};
