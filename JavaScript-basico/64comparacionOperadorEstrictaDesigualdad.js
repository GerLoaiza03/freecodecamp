/*
El operador de estricta desigualdad !== es el opuesto lógico del operador de estricta igualdad. Esto significa "Estrictamente Desigual", y devuelve false cuando la comparación de estricta igualdad devolvería true y vice versa. El operador de estricta desigualdad no convertirá los tipos de datos.

Ejemplos

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
Agrega el operador de estricta desigualdad a la sentencia if para que la función devuelva la cadena Not Equal cuando val no sea estrictamente igual a 17


*/

// Configuración
function testStrictNotEqual(val) {
    if (val !== 17) { // Cambia esta línea
      return "Not Equal";
    }
    return "Equal";
  }
  
  console.log(testStrictNotEqual(10));




/*PRUEBAS
testStrictNotEqual(17) debe devolver la cadena Equal

testStrictNotEqual("17") debe devolver la cadena Not Equal

testStrictNotEqual(12) debe devolver la cadena Not Equal

testStrictNotEqual("bob") debe devolver la cadena Not Equal

Debes usar el operador !==
*/