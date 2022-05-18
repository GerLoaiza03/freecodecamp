/*
Los números aleatorios son útiles para crear comportamientos aleatorios.

JavaScript tiene una función Math.random() que genera un número decimal aleatorio entre 0 (inclusivo) y 1 (exclusivo). Así que Math.random() puede devolver un 0 pero nunca devuelve un 1.

Nota: Así como aprendimos en almacenando valores con el operador de igualdad, todas las llamadas de funciones se resolverán antes de que el return se ejecute, así que podemos devolver (return) el valor de la función Math.random().

Cambia randomFraction para que devuelva un número aleatorio en lugar de devolver 0.
*/

function randomFraction() {

    // Cambia solo el código debajo de esta línea
  const random = (Math.random())
    return random;
  
    // Cambia solo el código encima de esta línea
  }

  console.log(randomFraction())

/*PRUEBAS
randomFraction debe devolver un número aleatorio.

El número devuelto por randomFraction debe ser un decimal.

Debes usar Math.random para generar el número decimal aleatorio.
*/