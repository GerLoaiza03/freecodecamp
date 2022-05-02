/*
Si tienes múltiples condiciones que necesitan ser resueltas, puedes encadenar sentencias if junto con sentencias else if.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
Transforma la lógica para utilizar la sentencia else if.
*/

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }else if (val < 5) {
      return "Smaller than 5";
    }else{
      return "Between 5 and 10";
      }
  
  }
  
  testElseIf(7);


/*PRUEBAS
  Debes tener al menos dos sentencias else

Debes tener al menos dos sentencias if

Debes utilizar llaves de apertura y cierre para cada bloque de código if else.

testElseIf(0) debe devolver la cadena Smaller than 5

testElseIf(5) debe devolver la cadena Between 5 and 10

testElseIf(7) debe devolver la cadena Between 5 and 10

testElseIf(10) debe devolver la cadena Between 5 and 10

testElseIf(12) debe devolver la cadena Greater than 10
  */