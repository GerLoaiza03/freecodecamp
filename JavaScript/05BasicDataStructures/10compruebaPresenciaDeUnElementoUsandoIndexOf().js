/*
Ya que los arreglos pueden modificarse, o mutarse, en cualquier momento, no se puede garantizar dónde estará un dato concreto en un arreglo determinado, o si ese elemento sigue existiendo. Afortunadamente, JavaScript nos proporciona otro método incorporado, indexOf(), que nos permite comprobar rápida y fácilmente la presencia de un elemento en un arreglo. indexOf() toma un elemento como parámetro, y cuando lo llama, devuelve la posición, o índice, de ese elemento, o -1 si el elemento no existe en el arreglo.

Por ejemplo:

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
indexOf('dates') devuelve -1, indexOf('oranges') devuelve 2, e indexOf('pears') devuelve 1 (el primer índice en el que existe cada elemento).

indexOf() puede ser increíblemente útil para verificar rápidamente la presencia de un elemento en un arreglo. Hemos definido una función, quickCheck, que toma un arreglo y un elemento como argumentos. Modifica la función usando indexOf() para que devuelva true si el elemento pasado existe en el arreglo, y false si no existe.
*/

//solucion 1
function quickCheck(arr, elem) {
    // Cambia solo el código debajo de esta línea
  if(arr.indexOf(elem) >=0){
    return true
  }else{
    return false
  }
  
    // Cambia solo el código encima de esta línea
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//solucion2 freeCodeCamp
/*Code Explanation
demonstrates how the problem can be solved using the ? : (conditional) operator.*/
// function quickCheck(arr, elem) {
//     return arr.indexOf(elem) >= 0 ? true : false;
//   }
//   console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));


//solucion3 freeCodeCamp
/*Code Explanation
demonstrates how the problem can be solved by directly returning result of the comparison.*/
// function quickCheck(arr, elem) {
//     return arr.indexOf(elem) != -1;
//   }
//   console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));


/*PRUEBAS
La función quickCheck debe devolver un valor booleano (true o false), no una cadena ("true" o "false")

quickCheck(["squash", "onions", "shallots"], "mushrooms") debe devolver false

quickCheck(["onions", "squash", "shallots"], "onions") debe devolver true

quickCheck([3, 5, 9, 125, 45, 2], 125) debe devolver true

quickCheck([true, false, false], undefined) debe devolver false

La función quickCheck debe utilizar el método indexOf()
*/