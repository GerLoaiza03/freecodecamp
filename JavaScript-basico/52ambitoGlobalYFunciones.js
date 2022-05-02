/*
En JavaScript, el ámbito se refiere a la visibilidad de las variables. Las variables definidas fuera de un bloque de función tienen un ámbito Global. Esto significa que pueden ser observadas desde cualquier lugar en tu código JavaScript.

Las variables que se declaran sin las palabras clave let o const se crean automáticamente en el ámbito global. Esto puede crear consecuencias no intencionadas en cualquier lugar de tu código o al volver a ejecutar una función. Siempre debes declarar tus variables con let o const.

Usando let o const, declara una variable global llamada myGlobal fuera de cualquier función. Inicialízala con un valor de 10.

Dentro de la función fun1, asigna 5 a oopsGlobal sin usar las palabras clave let o const.
*/

/*
En JavaScript, el ámbito se refiere a la visibilidad de las variables. Las variables definidas fuera de un bloque de función tienen un ámbito Global. Esto significa que pueden ser observadas desde cualquier lugar en tu código JavaScript.

Las variables que se declaran sin las palabras clave let o const se crean automáticamente en el ámbito global. Esto puede crear consecuencias no intencionadas en cualquier lugar de tu código o al volver a ejecutar una función. Siempre debes declarar tus variables con let o const.
*/


// Declara la variable myGlobal debajo de esta línea
const myGlobal=10;

function fun1() {
  // Asigna 5 a oopsGlobal aquí
  oopsGlobal = 5;
}

// Cambia solo el código encima de esta línea

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}



/*PRUEBAS
myGlobal debe ser definida

myGlobal debe tener un valor de 10

myGlobal debe declararse usando las palabras clave let o const

oopsGlobal debe ser una variable global y tener un valor de 5
*/