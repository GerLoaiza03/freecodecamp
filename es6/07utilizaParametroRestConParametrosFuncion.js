/*
Para ayudarnos a crear funciones más flexibles, ES6 introduce el parámetro rest para los parámetros de función. Con el parámetro rest, puedes crear funciones que tomen un número variable de argumentos. Estos argumentos se almacenan en un arreglo al que se puede acceder más tarde desde dentro de la función.

Echa un vistazo a este código:

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
La consola mostrará las cadenas You have passed 3 arguments. y You have passed 4 arguments..

El parámetro rest elimina la necesidad de comprobar el arreglo args y nos permite aplicar map(), filter() y reduce() en el arreglo de parámetros.

Modifica la función sum usando el parámetro rest de tal manera que la función sum sea capaz de recibir cualquier número de argumentos y devolver su suma.
*/

const sum = (...args) => {
  
    return args.reduce((a, b) => a + b, 0);
  }
  
  console.log(sum(1,4,3))

/*PRUEBAS
El resultado de sum(0,1,2) debe ser 3

El resultado de sum(1,2,3,4) debe ser 10

El resultado de sum(5) debe ser 5

El resultado de sum() debe ser 0

sum debe ser una función flecha que utilice la sintaxis de parámetro rest (...) en el parámetro args.
*/