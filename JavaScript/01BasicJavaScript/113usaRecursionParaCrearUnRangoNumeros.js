/*
Continuando con el desafío anterior, te ofrecemos otra oportunidad de crear una función recursiva para resolver un problema.

Hemos definido una función llamada rangeOfNumbers con dos parámetros. La función debe devolver un arreglo de enteros que comienza con el número representado por el parámetro startNum y termina con el número representado por el parámetro endNum. El número inicial será siempre menor o igual que el número final. Tu función debe utilizar recursión, llamándose a sí misma, y no utilizar bucles de ningún tipo. También debe funcionar en el caso que startNum y endNum sean iguales.
*/

//SOLUCION1
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      console.log(numbers)
      numbers.push(endNum);
      return numbers;
    }
  }
  
  console.log(rangeOfNumbers(1, 5))


//SOLUCION2
function rangeOfNumbers2(startNum, endNum) {
    return startNum === endNum
      ? [startNum]
      : rangeOfNumbers2(startNum, endNum - 1).concat(endNum);
  }

//SOLUCION 3
function rangeOfNumbers3(startNum, endNum) {
    return startNum === endNum
      ? [startNum]
      : [...rangeOfNumbers3(startNum, endNum - 1), endNum ];
  }

/*PRUEBAS
Tu función debe devolver un arreglo.

Tu código no debe utilizar bucles (for, while o funciones de orden superior como forEach, map, filter, o reduce).

rangeOfNumbers debe utilizar recursión (llamadas a sí mismo) para resolver este desafío.

rangeOfNumbers(1, 5) debe devolver [1, 2, 3, 4, 5].

rangeOfNumbers(6, 9) debe devolver [6, 7, 8, 9].

rangeOfNumbers(4, 4) debe devolver [4].
*/