/*
En una declaración switch puede que no seas capaz de especificar todos los valores posibles como declaraciones de case (caso). En su lugar, se puede añadir la declaración default, la cual se ejecutará si no se encuentran declaraciones case. Piensa en ella como la última sentencia else en una cadena if/else.

Una declaración default debe ser el último caso.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
Escribe una declaración switch para establecer answer con las siguientes condiciones:
a - apple
b - bird
c - cat
default - stuff
*/

function switchOfStuff(val) {
    let answer = "";
    // Cambia solo el código debajo de esta línea
  switch (val){
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
     answer = "stuff";
     break;
  }
  
  
    // Cambia solo el código encima de esta línea
    return answer;
  }
  
  switchOfStuff(1);


/*PRUEBAS
  switchOfStuff("a") debe devolver la cadena apple

switchOfStuff("b") debe devolver la cadena bird

switchOfStuff("c") debe devolver la cadena cat

switchOfStuff("d") debe devolver la cadena stuff

switchOfStuff(4) debe devolver la cadena stuff

No debes usar ninguna sentencia if o else

Debes utilizar una declaración default

Debes tener al menos 3 declaraciones de ruptura (break)
  */