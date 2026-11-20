# Matriz de casos de prueba - Unidad 2

## Objetivo
Definir casos de prueba trazables para verificar los requisitos del modulo calcularTotal(precio, cantidad, descuento).

## Casos de prueba

| ID | Requisito | Tecnica | Datos (precio, cantidad, descuento) | Resultado esperado | Prioridad | Estado |
|---|---|---|---|---|---|---|
| CP-01 | RF-01 | Particion valida | (10, 2, 0) | 20.00 | Alta | Aprobado |
| CP-02 | RF-01 | Particion valida | (15.50, 3, 0) | 46.50 | Alta | Aprobado |
| CP-03 | RF-02 | Valor limite inferior | (100, 2, 0) | 200.00 | Alta | Aprobado |
| CP-04 | RF-02 | Particion valida | (100, 2, 25) | 150.00 | Alta | Aprobado |
| CP-05 | RF-02, RF-03 | Valor limite superior | (100, 2, 100) | 0.00 | Alta | Aprobado |
| CP-06 | RF-03 | Precision decimal | (0.333, 3, 0) | 1.00 | Alta | Aprobado |
| CP-07 | RF-03 | Precision decimal | (10.99, 3, 15) | 28.02 | Alta | Aprobado |
| CP-08 | RF-04 | Particion invalida | (-10, 2, 0) | RangeError | Alta | Aprobado |
| CP-09 | RF-04 | Valor limite | (10, 0, 0) | RangeError | Alta | Aprobado |
| CP-10 | RF-04 | Particion invalida | (10, -1, 0) | RangeError | Alta | Aprobado |
| CP-11 | RF-04 | Limite inferior invalido | (10, 2, -1) | RangeError | Alta | Aprobado |
| CP-12 | RF-04 | Limite superior invalido | (10, 2, 101) | RangeError | Alta | Aprobado |
| CP-13 | RF-05 | Particion invalida | ("10", 2, 0) | TypeError | Alta | Aprobado |
| CP-14 | RF-05 | Valor no finito | (Infinity, 2, 0) | TypeError | Alta | Aprobado |
| CP-15 | RF-05 | Valor no numerico | (NaN, 2, 0) | TypeError | Alta | Aprobado |

## Justificacion de las tecnicas

### Particiones de equivalencia
Se seleccionan representantes de conjuntos de entradas validas e invalidas. Esto permite reducir el numero de pruebas manteniendo una cobertura representativa de las clases identificadas.

### Analisis de valores limite
Se comprueban los limites del descuento (0 y 100), la cantidad minima permitida y los valores inmediatamente fuera del rango de descuento.

### Pruebas negativas
Se comprueba que el modulo rechace entradas invalidas mediante las excepciones especificadas, en lugar de devolver resultados incorrectos.

### Precision decimal
Se verifican resultados que requieren redondeo a dos decimales, debido al riesgo de errores de precision en operaciones de punto flotante.

## Cobertura planificada

| Requisito | Casos asociados |
|---|---|
| RF-01 | CP-01, CP-02 |
| RF-02 | CP-03, CP-04, CP-05 |
| RF-03 | CP-05, CP-06, CP-07 |
| RF-04 | CP-08, CP-09, CP-10, CP-11, CP-12 |
| RF-05 | CP-13, CP-14, CP-15 |
| RNF-01 | Medicion exploratoria independiente |

## Control de ejecucion
El estado inicial de los casos es Aprobado. Tras ejecutar Jest se actualizaran los estados a Aprobado o Fallido segun los resultados reales. Los defectos confirmados se documentaran por separado.

## Observaciones
La matriz documenta los resultados esperados definidos por la especificacion, no resultados observados. Las evidencias iniciales y finales permitiran comprobar el comportamiento real de la implementacion.

