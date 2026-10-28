const DIA_EM_MS = 24 * 60 * 60 * 1000;

const formatoPorExtenso = new Intl.DateTimeFormat('pt-BR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
const formatoDiaDaSemana = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' });
const formatoDiaEMes = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long' });
const formatoMesAbreviado = new Intl.DateTimeFormat('pt-BR', { month: 'short' });

// Chave: diferença em dias entre a data e a referência.
const ROTULOS_RELATIVOS: Record<number, string> = {
  [-1]: 'Ontem',
  0: 'Hoje',
  1: 'Amanhã',
};

const doisDigitos = (numero: number) => String(numero).padStart(2, '0');

export const comInicialMaiuscula = (texto: string) =>
  texto.charAt(0).toUpperCase() + texto.slice(1);

export const inicioDoDia = (data: Date) =>
  new Date(data.getFullYear(), data.getMonth(), data.getDate());

/** Diferença em dias de calendário: negativa quando `data` é anterior à referência. */
export const diferencaEmDias = (data: Date, referencia: Date = new Date()) =>
  // Arredonda para absorver os dias de 23 h ou 25 h do horário de verão.
  Math.round((inicioDoDia(data).getTime() - inicioDoDia(referencia).getTime()) / DIA_EM_MS);

export const mesmoDia = (a: Date, b: Date) => diferencaEmDias(a, b) === 0;

/** "Ontem", "Hoje" ou "Amanhã"; nos demais dias, `undefined`. */
export const rotuloRelativoDoDia = (data: Date, referencia: Date = new Date()) =>
  ROTULOS_RELATIVOS[diferencaEmDias(data, referencia)];

/** "2026-10-07", no fuso local, para o atributo `datetime`. */
export const dataIso = (data: Date) =>
  `${data.getFullYear()}-${doisDigitos(data.getMonth() + 1)}-${doisDigitos(data.getDate())}`;

/** "09:05" */
export const horaCurta = (data: Date) =>
  `${doisDigitos(data.getHours())}:${doisDigitos(data.getMinutes())}`;

/** "6 out." */
export const dataCurta = (data: Date) => `${data.getDate()} ${formatoMesAbreviado.format(data)}`;

/** "Quarta-feira, 7 de outubro de 2026" */
export const dataPorExtenso = (data: Date) => comInicialMaiuscula(formatoPorExtenso.format(data));

/**
 * "Hoje, 7 de outubro". Fora de ontem, hoje e amanhã, o dia da semana:
 * "Sexta-feira, 9 de outubro". O ano só aparece quando difere do da referência.
 */
export const diaComRotulo = (data: Date, referencia: Date = new Date()) => {
  const prefixo =
    rotuloRelativoDoDia(data, referencia) ?? comInicialMaiuscula(formatoDiaDaSemana.format(data));
  const ano = data.getFullYear() === referencia.getFullYear() ? '' : ` de ${data.getFullYear()}`;
  return `${prefixo}, ${formatoDiaEMes.format(data)}${ano}`;
};
