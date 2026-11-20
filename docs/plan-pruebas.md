# Plan de pruebas dinamicas - Unidad 2

## 1. Objetivo
Verificar y validar el funcionamiento del modulo de calculo de compras de una tienda digital mediante pruebas dinamicas automatizadas con Jest, identificando defectos, aplicando correcciones y comprobando la ausencia de regresiones en los casos evaluados.

## 2. Alcance
Se evaluara la funcion calcularTotal(precio, cantidad, descuento), considerando:

- RF-01: Calculo del subtotal como precio por cantidad para valores positivos.
- RF-02: Aplicacion de descuentos entre 0 % y 100 %.
- RF-03: Resultado total con dos decimales y total cero para descuentos del 100 %.
- RF-04: RangeError para precio negativo, cantidad menor o igual a cero y descuentos fuera de rango.
- RF-05: TypeError para entradas no numericas o no finitas.
- RNF-01: Exploracion limitada del rendimiento.

No se incluyen interfaces graficas, bases de datos, pagos reales ni integraciones externas.

## 3. Riesgos identificados
| ID | Riesgo | Impacto | Prioridad |
|---|---|---|---|
| R-01 | Aceptacion de precios o cantidades invalidas | Alto | Alta |
| R-02 | Descuentos fuera del rango permitido | Alto | Alta |
| R-03 | Resultados con decimales incorrectos | Medio | Alta |
| R-04 | Conversion implicita de cadenas a numeros | Alto | Alta |
| R-05 | Aceptacion de Infinity o NaN | Alto | Alta |
| R-06 | Rendimiento insuficiente en ejecuciones repetidas | Bajo | Baja |

## 4. Tipos y niveles de pruebas
Se aplicaran pruebas funcionales de caja negra mediante particiones de equivalencia, analisis de valores limite y casos negativos.

Se utilizaran pruebas automatizadas de nivel unitario sobre la funcion calcularTotal.

Despues de corregir los defectos, se ejecutaran pruebas de confirmacion y regresion.

Se realizara una exploracion no funcional de rendimiento, sin establecer conclusiones de capacidad o escalabilidad.

## 5. Ambiente de pruebas
- Sistema operativo: Windows.
- Editor: Visual Studio Code.
- Terminal: PowerShell.
- Node.js: 22.14.0.
- npm: 10.9.2.
- Jest: 30.5.2.
- Lenguaje: JavaScript.
- Control de versiones: Git y GitHub.

## 6. Criterios de entrada
- Requisitos funcionales y no funcionales disponibles.
- Codigo original conservado en Git.
- Entorno Node.js y Jest configurado.
- Casos de prueba definidos con resultados esperados.
- Archivos de prueba preparados para su ejecucion.

## 7. Criterios de salida
- Al menos 12 casos documentados.
- Al menos 10 pruebas automatizadas.
- Evidencia conservada de la ejecucion inicial.
- Al menos tres defectos confirmados y documentados.
- Correcciones verificadas mediante nuevas ejecuciones.
- Todas las pruebas automatizadas aprobadas al cierre.
- Evidencia final y resultados de regresion disponibles.
- Medicion exploratoria de rendimiento documentada.
- Reporte final con trazabilidad y riesgos residuales.

## 8. Estrategia de ejecucion
1. Disenar los casos a partir de los requisitos.
2. Automatizar los casos seleccionados con Jest.
3. Ejecutar las pruebas sobre el codigo defectuoso original.
4. Guardar los resultados iniciales.
5. Registrar los defectos reproducibles.
6. Corregir el codigo incrementalmente.
7. Reejecutar las pruebas y verificar la regresion.
8. Explorar el rendimiento y documentar las limitaciones.
9. Elaborar el reporte final.

## 9. Evidencias y trazabilidad
Cada caso tendra un identificador unico y estara vinculado a un requisito. Los resultados iniciales y finales se conservaran en la carpeta evidencias.

Los defectos se relacionaran con los casos que demuestren su existencia y con las correcciones correspondientes.

## 10. Limitaciones
Las pruebas unitarias no garantizan la ausencia total de defectos. La medicion de rendimiento sera exploratoria y dependera del equipo utilizado. No se evaluara el comportamiento de una tienda digital completa.

## 11. Referencias conceptuales
- Guia didactica de Verificacion y Validacion de Software, Unidad 2.
- ISTQB Certified Tester Foundation Level Syllabus v4.0.1 (2024).
- ISO/IEC/IEEE 29119-2, 29119-3 y 29119-4 (2021).
- ISO/IEC 25010:2023.
