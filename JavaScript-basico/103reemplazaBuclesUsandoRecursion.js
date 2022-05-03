/*
La recursión es el concepto que una función puede expresarse en términos de sí misma. Para ayudar a comprender esto, comienza pensando en la siguiente tarea: multiplica los primeros n elementos de un arreglo para crear el producto de esos elementos. Usando un bucle for, puedes hacer esto:

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
Sin embargo, nota que multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. Esto significa que puedes reescribir multiply en términos de sí misma y que nunca necesites hacer uso de un bucle.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
La versión recursiva de multiply se desglosa así. En el caso base, donde n <= 0, devuelve 1. Para valores más grandes de n, se llama a sí misma, pero con n - 1. Esa llamada de función se evalúa de la misma manera, llamando a multiply otra vez hasta que n <= 0. En este punto, todas las funciones pueden devolver y la multiply original devuelve la respuesta.

Nota: Las funciones recursivas deben tener un caso base cuando devuelven sin tener que llamar a la función de nuevo (en este ejemplo, cuando n <= 0), de lo contrario nunca podrán terminar de ejecutarse.

Escribe una función recursiva, sum(arr, n), que devuelve la suma de los primeros elementos n de un arreglo arr.
*/

function sum(arr, n) {
    // Cambia solo el código debajo de esta línea
    if (n <= 0) {
          return 0;
        } else {
          return sum(arr, n - 1) + arr[n - 1];
        }
    // Cambia solo el código encima de esta línea
  }
  
  console.log(sum([1], 0))
  console.log(sum([2, 3, 4], 1))

/*PRUEBAS
sum([1], 0) debe ser igual a 0.

sum([2, 3, 4], 1) debe ser igual a 2.

sum([2, 3, 4, 5], 3) debe ser igual a 9.

Tu código no debe depender de ningún tipo de bluces (for o while) o funciones de orden alto tales como forEach, map, filter, o reduce.).

Debes usar recursión para resolver este problema.
*/