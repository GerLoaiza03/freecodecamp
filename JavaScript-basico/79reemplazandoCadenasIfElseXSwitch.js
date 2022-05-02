/*
Si tienes muchas opciones entre las que elegir, una sentencia switch puede ser más fácil de escribir que muchas sentencias if/else if encadenadas. Lo siguiente:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
puede reemplazarse por:

switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
Cambia la cadena de sentencias if/else if por una sentencia switch.


*/

function chainToSwitch(val) {
    let answer = "";
    // Cambia solo el código debajo de esta línea
  switch(val){
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    default:
      answer = ""
      break  
  }
    // Cambia solo el código encima de esta línea
    return answer;
  }
  
  chainToSwitch(7);



/*PRUEBAS
No debes utilizar sentencias else en ningún lugar en el editor

No debes utilizar sentencias if en ningún lugar en el editor

Debes tener al menos cuatro sentencias break

chainToSwitch("bob") debe ser la cadena Marley

chainToSwitch(42) debe ser la cadena The Answer

chainToSwitch(1) debe ser la cadena There is no #1

chainToSwitch(99) debe ser la cadena Missed me by this much!

chainToSwitch(7) debe ser la cadena Ate Nine

chainToSwitch("John") debe ser "" (cadena vacía)

chainToSwitch(156) debe ser "" (cadena vacía)
*/