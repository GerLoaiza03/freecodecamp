/*
En JavaScript todas las variables y nombres de función son sensibles a mayúsculas y minúsculas. Esto significa que la capitalización importa.

MYVAR no es lo mismo que MyVar ni myvar. Es posible tener múltiples variables distintas con el mismo nombre pero diferente capitalización. Se recomienda encarecidamente que por el bien de la claridad, no utilices esta funcionalidad del lenguaje.

Buena Práctica

Escribe los nombres de las variables en JavaScript en camelCase. En camelCase, los nombres de variables de múltiples palabras tienen la primera palabra en minúsculas y la primera letra de cada palabra posterior en mayúsculas.

Ejemplos:

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
Modifica las declaraciones y asignaciones existentes para que sus nombres usen camelCase.

No crees ninguna variable nueva.
*/
//Buena Practica camelCase

// Declaración de variables
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Asignación de variables
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


/*PRUEBAS
studlyCapVar debe estar definido y tener un valor de 10.

properCamelCase debe estar definido y tener una cadena con valor A String.

titleCaseOver debe estar definido y tener una cadena con valor 9000.

studlyCapVar debe usar camelCase tanto en las secciones de declaración como de asignación.

properCamelCase debe usar camelCase tanto en las secciones de declaración como de asignación.

titleCaseOver debe usar camelCase tanto en las secciones de declaración como de asignación.
*/