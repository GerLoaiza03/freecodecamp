/*
El operador menor o igual que (<=) compara el valor de dos números. Si el número de la izquierda es menor o igual que el número de la derecha, devuelve true. Si el número a la izquierda es mayor que el número a la derecha, devuelve false. Al igual que el operador de igualdad, el operador menor o igual que convertirá los tipos de datos mientras los compara.

Ejemplos

4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
Agrega el operador menor o igual que a las líneas indicadas para que el valor devuelto tenga sentido.
*/

function testLessOrEqual(val) {
    if (val <= 12) {  // Cambia esta línea
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Cambia esta línea
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);


/*PRUEBAS
  testLessOrEqual(0) debe devolver la cadena Smaller Than or Equal to 12

testLessOrEqual(11) debe devolver la cadena Smaller Than or Equal to 12

testLessOrEqual(12) debe devolver la cadena Smaller Than or Equal to 12

testLessOrEqual(23) debe devolver la cadena Smaller Than or Equal to 24

testLessOrEqual(24) debe devolver la cadena Smaller Than or Equal to 24

testLessOrEqual(25) debe devolver la cadena More Than 24

testLessOrEqual(55) debe devolver la cadena More Than 24

Debes utilizar el operador <= al menos dos veces
  */