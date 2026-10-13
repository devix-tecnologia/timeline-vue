import { iniciaisDoNome, normalizarParaBusca } from './texto';

describe('utils/texto', () => {
  it.each([
    ['Rafael Moreira', 'RM'],
    ['Maria do Socorro', 'MS'],
    ['  rafael   moreira  ', 'RM'],
    ['Rafael', 'RA'],
    ['', ''],
  ])('as iniciais de "%s" são "%s"', (nome, iniciais) => {
    expect(iniciaisDoNome(nome)).toBe(iniciais);
  });

  it('normaliza sem acentos e em minúsculas', () => {
    expect(normalizarParaBusca('  Reunião de DESCOBERTA ')).toBe('reuniao de descoberta');
  });
});
