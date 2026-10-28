/**
 * Iniciais de um nome: "Heloísa Abelardo" → "HA"; com um nome só, as duas primeiras letras.
 * Adaptado do Avatar do @storytype/components, que usa o primeiro e o segundo nome;
 * aqui vão o primeiro e o último ("Maria do Socorro" → "MS").
 */
export const iniciaisDoNome = (nome: string) => {
  const partes = nome.trim().split(/\s+/).filter(Boolean);
  if (partes.length === 0) {
    return '';
  }
  const iniciais =
    partes.length > 1 ? `${partes[0][0]}${partes[partes.length - 1][0]}` : partes[0].slice(0, 2);
  return iniciais.toUpperCase();
};

/** Minúsculas e sem acentos, para comparar o texto buscado com o dos eventos. */
export const normalizarParaBusca = (texto: string) =>
  texto
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();
