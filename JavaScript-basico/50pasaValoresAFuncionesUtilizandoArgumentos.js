/*
Los parámetros son variables que actúan como marcadores de posición para los valores que deben ser introducidos en una función cuando se llama. Cuando se define una función, se define típicamente junto con uno o más parámetros. Los valores reales que son introducidos (o "pasados") a una función cuando se llama son conocidos como argumentos.

Esta es una función con dos parámetros, param1 y param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Entonces podemos llamar a testFun así: testFun("Hello", "World");. Hemos pasado dos argumentos de cadena, Hello y World. Dentro de la función, param1 será igual a la cadena Hello y param2 será igual a la cadena World. Ten en cuenta que podrías llamar a testFun otra vez con diferentes argumentos y los parámetros tomarían el valor de los nuevos argumentos.

Crea una función llamada functionWithArgs que acepte dos argumentos y muestre la suma de ellos en la consola de desarrollador.
Llama a la función con dos números como argumentos.

*/
/*
Los parámetros son variables que actúan como marcadores de posición para los valores que deben ser introducidos en una función cuando se llama. Cuando se define una función, se define típicamente junto con uno o más parámetros. Los valores reales que son introducidos (o "pasados") a una función cuando se llama son conocidos como argumentos.

Esta es una función con dos parámetros, param1 y param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Entonces podemos llamar a testFun así: testFun("Hello", "World");. Hemos pasado dos argumentos de cadena, Hello y World. Dentro de la función, param1 será igual a la cadena Hello y param2 será igual a la cadena World. Ten en cuenta que podrías llamar a testFun otra vez con diferentes argumentos y los parámetros tomarían el valor de los nuevos argumentos.
*/

function functionWithArgs(sum1,sum2){
    console.log(sum1 + sum2)
  }
  functionWithArgs(3, 3);
  


/*PRUEBAS
functionWithArgs debe ser una función.

functionWithArgs(1,2) debe mostrar 3.

functionWithArgs(7,9) debe mostrar 16.

Debes llamar functionWithArgs con dos números después de definirla.
*/