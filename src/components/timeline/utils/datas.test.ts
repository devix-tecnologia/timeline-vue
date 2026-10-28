import {
  dataCurta,
  dataIso,
  dataPorExtenso,
  diaComRotulo,
  diferencaEmDias,
  horaCurta,
  rotuloRelativoDoDia,
} from './datas';

const referencia = new Date(2026, 9, 7, 9, 41);

describe('utils/datas', () => {
  it('formata a hora com dois dígitos', () => {
    expect(horaCurta(new Date(2026, 9, 7, 9, 5))).toBe('09:05');
    expect(horaCurta(new Date(2026, 9, 7, 17, 0))).toBe('17:00');
  });

  it('formata a data curta, a ISO e a por extenso', () => {
    const data = new Date(2026, 9, 6, 17, 0);
    expect(dataCurta(data)).toBe('6 out.');
    expect(dataIso(data)).toBe('2026-10-06');
    expect(dataPorExtenso(data)).toBe('Terça-feira, 6 de outubro de 2026');
  });

  it('conta dias de calendário, e não intervalos de 24 horas', () => {
    expect(diferencaEmDias(new Date(2026, 9, 6, 23, 59), referencia)).toBe(-1);
    expect(diferencaEmDias(new Date(2026, 9, 7, 0, 0), referencia)).toBe(0);
    expect(diferencaEmDias(new Date(2026, 9, 10, 8, 0), referencia)).toBe(3);
  });

  it.each([
    [new Date(2026, 9, 6), 'Ontem'],
    [new Date(2026, 9, 7), 'Hoje'],
    [new Date(2026, 9, 8), 'Amanhã'],
    [new Date(2026, 9, 9), undefined],
  ])('rotula %s como %s', (data, rotulo) => {
    expect(rotuloRelativoDoDia(data, referencia)).toBe(rotulo);
  });

  it('mostra o dia com o rótulo relativo, o dia da semana ou o ano', () => {
    expect(diaComRotulo(new Date(2026, 9, 7), referencia)).toBe('Hoje, 7 de outubro');
    expect(diaComRotulo(new Date(2026, 9, 6), referencia)).toBe('Ontem, 6 de outubro');
    expect(diaComRotulo(new Date(2026, 9, 9), referencia)).toBe('Sexta-feira, 9 de outubro');
    expect(diaComRotulo(new Date(2025, 9, 9), referencia)).toBe(
      'Quinta-feira, 9 de outubro de 2025'
    );
  });
});
