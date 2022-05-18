/*
Cuando las variables de JavaScript son declaradas, tienen un valor inicial de undefined (indefinido). Si haces una operación matemática en una variable undefined, tu resultado será NaN lo que significa "Not a Number" (no es un número). Si concatenas una cadena con una variable undefined, obtendrás una cadena de undefined.

Inicializa las tres variables a, b, y c con 5, 10 y "I am a" respectivamente para que no sean undefined.
*/

// Cambia solo el código debajo de esta línea
var a;
var b;
var c;
// Cambia solo el código encima de esta línea
a = 5;
b = 10;
c = 'I am a'

a = a + 1;
b = b + 5;
c = c + " String!";


/*PRUEBAS
a debe ser definido y evaluado para tener el valor de 6.

b debe ser definido y evaluado para tener el valor de 15.

c no debe contener undefined y debe tener una cadena con valor I am a String!

No debes cambiar el código debajo del comentario especificado.
*/