# Reporte de pruebas dinamicas - Unidad 2

## 1. Objetivo

Evaluar el comportamiento de la funcion calcularTotal(precio, cantidad, descuento) mediante pruebas automatizadas, registrar defectos, aplicar correcciones incrementales y verificar los resultados con pruebas de regresion.

## 2. Entorno de ejecucion

- Lenguaje: JavaScript.
- Entorno: Node.js v22.14.0.
- Framework de pruebas: Jest 30.5.2.
- Sistema operativo: Windows de 64 bits.
- Control de versiones: Git y GitHub.
- Ejecucion de pruebas: npm test.

## 3. Diseno y cobertura de pruebas

Se disenaron 15 casos de prueba utilizando particiones de equivalencia, analisis de valores limite, pruebas negativas y verificacion de precision decimal.

| Requisito | Casos | Resultado final |
|---|---|---|
| RF-01 | CP-01, CP-02 | Aprobados |
| RF-02 | CP-03, CP-04, CP-05 | Aprobados |
| RF-03 | CP-05, CP-06, CP-07 | Aprobados |
| RF-04 | CP-08 a CP-12 | Aprobados |
| RF-05 | CP-13 a CP-15 | Aprobados |
| RNF-01 | Medicion exploratoria | Ejecutada |

Todos los requisitos definidos tienen al menos una verificacion asociada. No se midio cobertura estructural de sentencias ni ramas.

## 4. Ejecucion y resultados

| Etapa | Aprobadas | Fallidas | Total |
|---|---:|---:|---:|
| Ejecucion inicial | 5 | 10 | 15 |
| Correccion de tipos | 8 | 7 | 15 |
| Correccion de rangos | 13 | 2 | 15 |
| Regresion final | 15 | 0 | 15 |

La regresion final alcanzo una tasa de aprobacion del 100 % de los casos automatizados disenados.

## 5. Defectos confirmados y correcciones

### DEF-01 - Redondeo decimal
- Severidad: Media.
- Requisito afectado: RF-03.
- Casos: CP-06 y CP-07.
- Causa observada: El codigo original devolvia resultados sin redondeo a dos decimales.
- Correccion: Redondeo del total calculado.
- Estado: Corregido y verificado.

### DEF-02 - Falta de validacion de rangos
- Severidad: Alta.
- Requisito afectado: RF-04.
- Casos: CP-08 a CP-12.
- Causa observada: El codigo original no rechazaba valores fuera de rango.
- Correccion: Validaciones con RangeError.
- Estado: Corregido y verificado.

### DEF-03 - Falta de validacion de tipos
- Severidad: Alta.
- Requisito afectado: RF-05.
- Casos: CP-13 a CP-15.
- Causa observada: El codigo original aceptaba entradas incompatibles o no finitas.
- Correccion: Validaciones con TypeError y Number.isFinite.
- Estado: Corregido y verificado.

## 6. Medicion exploratoria de rendimiento

Se ejecutaron 100000 operaciones de la funcion, precedidas por 10000 operaciones de calentamiento.

- Tiempo total observado: 55.7621 ms.
- Tiempo promedio observado: 0.00055762 ms por operacion.
- Resultado acumulado: 17000000.
- Entorno: Node.js v22.14.0, Windows x64.
- Evidencia: evidencias/rendimiento.txt.

Esta medicion corresponde a una sola ejecucion local. No se realizaron pruebas de concurrencia, carga sostenida ni comparaciones estadisticas entre varias ejecuciones. Por ello, los resultados son exploratorios y no constituyen garantias de rendimiento.

## 7. Riesgos residuales y limitaciones

- Los numeros de punto flotante pueden presentar diferencias de precision en casos no incluidos en la matriz.
- No se realizaron pruebas de concurrencia ni carga sostenida.
- No se midio cobertura estructural de codigo.
- El conjunto de datos es representativo de los requisitos, pero no exhaustivo.
- La medicion de rendimiento se realizo en un unico entorno local.

## 8. Conclusion critica

La ejecucion inicial permitio identificar diez casos fallidos relacionados con tres defectos confirmados. Las correcciones incrementales permitieron observar una mejora progresiva de cinco a quince pruebas aprobadas.

La regresion final verifico que las correcciones no provocaron fallos en los casos automatizados existentes. Sin embargo, aprobar todos los casos no demuestra la ausencia absoluta de defectos.

Se recomienda ampliar los escenarios de precision monetaria, incorporar cobertura estructural y repetir las mediciones de rendimiento en distintos entornos.

## 9. Evidencias

- docs/plan-pruebas.md
- docs/matriz-casos.md
- docs/defectos.md
- evidencias/pruebas-iniciales.txt
- evidencias/pruebas-parciales-tipos.txt
- evidencias/pruebas-parciales-rangos.txt
- evidencias/pruebas-finales.txt
- evidencias/rendimiento.txt
