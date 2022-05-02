/*
Cuando la condición en una sentencia if es verdadera, se ejecutará el bloque de código que va a continuación. ¿Qué sucede cuando la condición es falsa? Normalmente no debería ocurrir nada. Con la sentencia else, se puede ejecutar un bloque alternativo de código.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
Combina la sentencia if en una sola sentencia if/else.
*/

function testElse(val) {
    let result = "";
    // Cambia solo el código debajo de esta línea
  
    if (val > 5) {
      result = "Bigger than 5";
    }else{
      result = "5 or Smaller";
    }
  
    // Cambia solo el código encima de esta línea
    return result;
  }
  
  testElse(4);



/*PRUEBAS
Sólo debes tener una sentencia if en el editor

Debes usar una sentencia else

testElse(4) debe devolver la cadena 5 or Smaller

testElse(5) debe devolver la cadena 5 or Smaller

testElse(6) debe devolver la cadena Bigger than 5

testElse(10) debe devolver la cadena Bigger than 5

No debes cambiar el código por encima o por debajo de los comentarios especificados.
*/