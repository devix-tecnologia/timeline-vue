import { iniciaisDoNome, normalizarParaBusca } from './texto';

describe('utils/texto', () => {
  it.each([
    ['Heloísa Abelardo', 'HA'],
    ['Maria do Socorro', 'MS'],
    ['  heloísa   abelardo  ', 'HA'],
    ['Heloísa', 'HE'],
    ['', ''],
  ])('as iniciais de "%s" são "%s"', (nome, iniciais) => {
    expect(iniciaisDoNome(nome)).toBe(iniciais);
  });

  it('normaliza sem acentos e em minúsculas', () => {
    expect(normalizarParaBusca('  Simpósio na ACADEMIA ')).toBe('simposio na academia');
  });
});
