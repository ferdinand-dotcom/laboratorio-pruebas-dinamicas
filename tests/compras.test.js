const { calcularTotal } = require('../src/compras');

describe('Laboratorio de pruebas dinamicas - Compras', () => {

  // RF-01: Calculo del subtotal

  test('CP-01: subtotal con valores positivos', () => {
    expect(calcularTotal(10, 2, 0)).toBe(20);
  });

  test('CP-02: subtotal con precio decimal', () => {
    expect(calcularTotal(15.50, 3, 0)).toBe(46.50);
  });

  // RF-02: Descuentos entre 0 y 100 %

  test('CP-03: descuento minimo del 0 %', () => {
    expect(calcularTotal(100, 2, 0)).toBe(200);
  });

  test('CP-04: descuento valido del 25 %', () => {
    expect(calcularTotal(100, 2, 25)).toBe(150);
  });

  test('CP-05: descuento maximo del 100 %', () => {
    expect(calcularTotal(100, 2, 100)).toBe(0);
  });

  // RF-03: Precision de dos decimales

  test('CP-06: redondeo del resultado decimal', () => {
    expect(calcularTotal(0.333, 3, 0)).toBe(1.00);
  });

  test('CP-07: redondeo con descuento', () => {
    expect(calcularTotal(10.99, 3, 15)).toBe(28.02);
  });

  // RF-04: Validacion de rangos

  test('CP-08: precio negativo genera RangeError', () => {
    expect(() => calcularTotal(-10, 2, 0)).toThrow(RangeError);
  });

  test('CP-09: cantidad cero genera RangeError', () => {
    expect(() => calcularTotal(10, 0, 0)).toThrow(RangeError);
  });

  test('CP-10: cantidad negativa genera RangeError', () => {
    expect(() => calcularTotal(10, -1, 0)).toThrow(RangeError);
  });

  test('CP-11: descuento negativo genera RangeError', () => {
    expect(() => calcularTotal(10, 2, -1)).toThrow(RangeError);
  });

  test('CP-12: descuento mayor al 100 % genera RangeError', () => {
    expect(() => calcularTotal(10, 2, 101)).toThrow(RangeError);
  });

  // RF-05: Validacion de tipos

  test('CP-13: precio en texto genera TypeError', () => {
    expect(() => calcularTotal("10", 2, 0)).toThrow(TypeError);
  });

  test('CP-14: Infinity genera TypeError', () => {
    expect(() => calcularTotal(Infinity, 2, 0)).toThrow(TypeError);
  });

  test('CP-15: NaN genera TypeError', () => {
    expect(() => calcularTotal(NaN, 2, 0)).toThrow(TypeError);
  });

});
