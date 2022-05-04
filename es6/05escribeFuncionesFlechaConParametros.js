/*
Al igual que una función regular, puedes pasar argumentos a una función flecha.

const doubler = (item) => item * 2;
doubler(4);
doubler(4) devolvería el valor 8.

Si una función flecha tiene un solo parámetro, los paréntesis que encierran el parámetro pueden ser omitidos.

const doubler = item => item * 2;
Es posible pasar más de un argumento a una función flecha.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
multiplier(4, 2) devolverá el valor 8.

Reescribe la función myConcat que añade el contenido de arr2 a arr1 para que la función use la sintaxis de función flecha.
*/

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

/*PRUEBAS
Debes reemplazar la palabra clave var.

myConcat debe ser una variable constante (utilizando const).

myConcat debe ser una función de flecha con dos parámetros

myConcat() debe devolver [1, 2, 3, 4, 5].

La palabra clave function no debe ser usada.
*/