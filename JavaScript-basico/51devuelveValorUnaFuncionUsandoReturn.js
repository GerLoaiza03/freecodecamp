/*
Podemos pasar valores a una función con argumentos. Puedes utilizar una declaración de devolución (return) para enviar un valor fuera de una función.

Ejemplo

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answer tiene el valor 8.

plusThree toma un argumento para num y devuelve un valor igual a num + 3.

Crea una función timesFive que acepte un argumento, lo multiplique por 5y devuelva el nuevo valor.
*/
/*
Podemos pasar valores a una función con argumentos. Puedes utilizar una declaración de devolución (return) para enviar un valor fuera de una función.

Ejemplo

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answer tiene el valor 8.

plusThree toma un argumento para num y devuelve un valor igual a num + 3.
*/

function timesFive(num){
    return num*5;
}
const multiplicacion = console.log(timesFive(5));



/*PRUEBAS
timesFive debe ser una función

timesFive(5) debe devolver 25

timesFive(2) debe devolver 10

timesFive(0) debe devolver 0
*/