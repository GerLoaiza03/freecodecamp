/*
En el primer desafío de objetos mencionamos el uso de notación de corchetes como una manera de acceder a los valores de una propiedad mediante la evaluación de una variable. Por ejemplo, imagina que nuestro objeto foods está siendo usado en un programa para una caja registradora de supermercado. Tenemos una función que establece selectedFood y queremos revisar en nuestro objeto foods si ese alimento está presente. Esto podría verse así:

let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
El código evaluará el valor almacenado en la variable selectedFood y devolverá el valor de esa clave en el objeto foods, o undefined si no está presente. La notación de corchetes es muy útil porque a veces no conocemos las propiedades de los objetos antes de la ejecución o necesitamos acceder a ellos de una manera más dinámica.

Hemos definido una función, checkInventory, que recibe como argumento un elemento escaneado. Devuelve el valor actual de la clave scannedItem en el objeto foods. Puedes asumir que sólo se proporcionarán claves válidas como argumento a checkInventory.
*/

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Cambia solo el código debajo de esta línea
    return foods[scannedItem]
    // Cambia solo el código encima de esta línea
  }
  
  console.log(checkInventory("apples"));

/*PRUEBAS
checkInventory debe ser una función.

El objeto foods debe tener solo los siguientes pares clave-valor: apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27.

checkInventory("apples") debe devolver 25.

checkInventory("bananas") debe devolver 13.

checkInventory("strawberries") debe devolver 27.
*/