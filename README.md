# Laboratorio de pruebas dinamicas - Unidad 2

## Descripcion

Proyecto academico de verificacion y validacion de software mediante pruebas dinamicas automatizadas.

Se evalua una funcion JavaScript denominada `calcularTotal(precio, cantidad, descuento)`, que calcula el importe de una compra y aplica un descuento porcentual.

El proyecto documenta la planificacion, el diseno de casos, la deteccion de defectos, las correcciones incrementales y las pruebas de regresion.

## Tecnologias

- JavaScript
- Node.js v22.14.0
- Jest 30.5.2
- Git y GitHub

## Requisitos funcionales

- RF-01: Calcular subtotal.
- RF-02: Aplicar descuentos entre 0 y 100 %.
- RF-03: Redondear el total a dos decimales.
- RF-04: Rechazar valores fuera de rango con RangeError.
- RF-05: Rechazar valores no numericos o no finitos con TypeError.

## Requisito no funcional

- RNF-01: Realizar una medicion exploratoria de rendimiento.

## Instalacion

Clonar el repositorio:

```bash
git clone https://github.com/ferdinand-dotcom/laboratorio-pruebas-dinamicas.git
cd laboratorio-pruebas-dinamicas
npm ci
```

## Ejecutar pruebas automatizadas

```bash
npm test
```

Resultado final registrado:

- 15 pruebas ejecutadas.
- 15 pruebas aprobadas.
- 0 pruebas fallidas.

## Ejecutar medicion exploratoria

```bash
node tests/rendimiento.js
```

En la ejecucion documentada se realizaron 100000 operaciones, con un tiempo total observado de 55.7621 ms.

Este resultado es exploratorio y puede variar entre equipos y ejecuciones.

## Estructura del proyecto

```text
laboratorio-pruebas-dinamicas/
|-- src/
|   `-- compras.js
|-- tests/
|   |-- compras.test.js
|   `-- rendimiento.js
|-- docs/
|   |-- plan-pruebas.md
|   |-- matriz-casos.md
|   |-- defectos.md
|   `-- reporte-pruebas.md
|-- evidencias/
|   |-- pruebas-iniciales.txt
|   |-- pruebas-parciales-tipos.txt
|   |-- pruebas-parciales-rangos.txt
|   |-- pruebas-finales.txt
|   `-- rendimiento.txt
|-- package.json
|-- package-lock.json
|-- .gitignore
`-- README.md
```

## Resultados de regresion

| Etapa | Aprobadas | Fallidas |
|---|---:|---:|
| Codigo original | 5 | 10 |
| Validacion de tipos | 8 | 7 |
| Validacion de rangos | 13 | 2 |
| Correccion final | 15 | 0 |

## Defectos identificados

- DEF-01: Falta de redondeo decimal.
- DEF-02: Ausencia de validacion de rangos.
- DEF-03: Ausencia de validacion de tipos.

Los tres defectos fueron corregidos y verificados mediante las pruebas automatizadas.

## Evidencias y documentacion

Consultar los archivos de las carpetas `docs/` y `evidencias/` para revisar la planificacion, matriz de casos, defectos y resultados de las ejecuciones.

## Limitaciones

La aprobacion de los 15 casos no implica ausencia total de defectos. No se realizaron pruebas de concurrencia ni medicion de cobertura estructural del codigo.
