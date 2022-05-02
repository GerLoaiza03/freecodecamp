/*
En Informática una cola (queue) es una estructura de datos abstracta donde los elementos se mantienen en orden. Los nuevos elementos se pueden añadir en la parte posterior de la cola y los elementos antiguos se retiran de la parte delantera de la cola.

Escribe una función nextInLine que tome un arreglo (arr) y un número (item) como argumentos.

Agrega el número al final del arreglo, luego elimina el primer elemento del arreglo.

La función nextInLine debe entonces devolver el elemento que fue removido.


*/

/*OK
function nextInLine(arr, item) {
  // Cambia solo el código debajo de esta línea
  arr.push(item);
  console.log(`Hola ${arr}`)
  const removed = arr.shift();
  return removed;
  // Cambia solo el código encima de esta línea
}

// Configuración
const testArr = [1, 2, 3, 4, 5];

// Muestra el código
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

*/

//VERIFICANDO CAMBIOS
function nextInLine(arr, item) {
  // Cambia solo el código debajo de esta línea
  arr.push(item);
  console.log(`Hola ${arr}`)
  const removed = arr.shift();
  // return removed;
  // Cambia solo el código encima de esta línea
}

// Configuración
const testArr = [1, 2, 3, 4, 5];

// Muestra el código
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));
// console.log("After: " + testArr);
console.log(JSON.stringify(nextInLine([], 5)));
// console.log(nextInLine([], 1));
// console.log(nextInLine([2], 1));
// console.log(nextInLine([5,6,7,8,9], 1));
// console.log(nextInLine(testArr, 10), testArr[4]);


/*PRUEBAS
nextInLine([], 5) debe devolver un número.

nextInLine([], 1) debe devolver 1

nextInLine([2], 1) debe devolver 2

nextInLine([5,6,7,8,9], 1) debe devolver 5

Después de nextInLine(testArr, 10), testArr[4] debe ser igual a 10
*/