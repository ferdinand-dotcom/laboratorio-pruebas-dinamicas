const { performance } = require('node:perf_hooks');
const { calcularTotal } = require('../src/compras');

const iteraciones = 100000;
let acumulado = 0;

// Calentamiento previo
for (let i = 0; i < 10000; i++) {
  calcularTotal(100, 2, 15);
}

// Medicion exploratoria
const inicio = performance.now();

for (let i = 0; i < iteraciones; i++) {
  acumulado += calcularTotal(100, 2, 15);
}

const fin = performance.now();
const tiempoTotal = fin - inicio;
const promedio = tiempoTotal / iteraciones;

console.log('MEDICION EXPLORATORIA DE RENDIMIENTO');
console.log('Iteraciones:', iteraciones);
console.log('Tiempo total (ms):', tiempoTotal.toFixed(4));
console.log('Tiempo promedio por operacion (ms):', promedio.toFixed(8));
console.log('Resultado acumulado:', acumulado);
console.log('Node.js:', process.version);
console.log('Sistema operativo:', process.platform);
console.log('Arquitectura:', process.arch);
