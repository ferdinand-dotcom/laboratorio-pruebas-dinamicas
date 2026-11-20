function calcularTotal(precio, cantidad, descuento) {

  // RF-05: Validacion de tipos y valores finitos
  if (
    typeof precio !== 'number' ||
    typeof cantidad !== 'number' ||
    typeof descuento !== 'number' ||
    !Number.isFinite(precio) ||
    !Number.isFinite(cantidad) ||
    !Number.isFinite(descuento)
  ) {
    throw new TypeError('Los valores deben ser numericos y finitos');
  }

  // RF-04: Validacion de rangos
  if (
    precio < 0 ||
    cantidad <= 0 ||
    descuento < 0 ||
    descuento > 100
  ) {
    throw new RangeError('Los valores estan fuera del rango permitido');
  }

  // RF-01: Calculo del subtotal
  const subtotal = precio * cantidad;

  // RF-02: Aplicacion del descuento
  const valorDescuento = subtotal * descuento / 100;
  const total = subtotal - valorDescuento;

  // RF-03: Redondeo a dos decimales
  return Math.round((total + Number.EPSILON) * 100) / 100;
}

module.exports = { calcularTotal };
