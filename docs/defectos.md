# Registro de defectos confirmados

## DEF-01: Ausencia de redondeo a dos decimales

- Requisito: RF-03.
- Casos relacionados: CP-06 y CP-07.
- Severidad: Media.
- Estado: Confirmado, pendiente de correccion.

### Pasos para reproducir
1. Ejecutar npm test.
2. Observar los resultados de CP-06 y CP-07.
3. Comparar los valores obtenidos con los esperados.

### Resultado esperado
CP-06 debe devolver 1.00 y CP-07 debe devolver 28.02.

### Resultado real
La funcion devuelve el resultado aritmetico sin aplicar el redondeo requerido.

### Evidencia
Archivo evidencias/pruebas-iniciales.txt.

## DEF-02: Ausencia de validacion de rangos

- Requisito: RF-04.
- Casos relacionados: CP-08, CP-09, CP-10, CP-11 y CP-12.
- Severidad: Alta.
- Estado: Confirmado, pendiente de correccion.

### Pasos para reproducir
1. Ejecutar npm test.
2. Revisar los casos CP-08 a CP-12.
3. Comprobar que no se generan las excepciones esperadas.

### Resultado esperado
La funcion debe lanzar RangeError para precio negativo, cantidad menor o igual a cero y descuento fuera de 0 a 100.

### Resultado real
La funcion realiza operaciones con entradas fuera del rango permitido sin lanzar RangeError.

### Evidencia
Archivo evidencias/pruebas-iniciales.txt.

## DEF-03: Ausencia de validacion de tipos

- Requisito: RF-05.
- Casos relacionados: CP-13, CP-14 y CP-15.
- Severidad: Alta.
- Estado: Confirmado, pendiente de correccion.

### Pasos para reproducir
1. Ejecutar npm test.
2. Revisar los casos CP-13, CP-14 y CP-15.
3. Comprobar que la funcion no lanza TypeError.

### Resultado esperado
La funcion debe lanzar TypeError ante entradas no numericas o no finitas.

### Resultado real
La funcion permite conversiones implicitas o devuelve resultados no finitos sin lanzar TypeError.

### Evidencia
Archivo evidencias/pruebas-iniciales.txt.

## Resumen
- Defectos registrados: 3.
- Severidad alta: 2.
- Severidad media: 1.
- Estado general: Pendientes de correccion.
- Ejecucion inicial: 5 pruebas aprobadas y 10 fallidas.

## Verificacion final de defectos

### DEF-01: Redondeo decimal
- Estado final: Corregido y verificado.
- Correccion: Se implemento el redondeo a dos decimales.
- Pruebas de confirmacion: CP-06 y CP-07.
- Resultado: Aprobadas.

### DEF-02: Validacion de rangos
- Estado final: Corregido y verificado.
- Correccion: Se incorporo RangeError para valores fuera de rango.
- Pruebas de confirmacion: CP-08 a CP-12.
- Resultado: Aprobadas.

### DEF-03: Validacion de tipos
- Estado final: Corregido y verificado.
- Correccion: Se incorporo TypeError para entradas no numericas o no finitas.
- Pruebas de confirmacion: CP-13 a CP-15.
- Resultado: Aprobadas.

## Resultado de regresion
- Pruebas ejecutadas: 15.
- Pruebas aprobadas: 15.
- Pruebas fallidas: 0.
- Evidencia: evidencias/pruebas-finales.txt.
- Conclusion: Los tres defectos documentados fueron corregidos y las pruebas automatizadas existentes aprobaron tras las modificaciones.
