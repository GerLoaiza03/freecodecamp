/*
En lugar de generar un número entero aleatorio entre cero y un número dado como lo hicimos anteriormente, podemos generar un número entero aleatorio que se encuentre dentro de un rango de dos números específicos.

Para ello, definiremos un número mínimo min y un número máximo max.

Esta es la fórmula que utilizaremos. Tómate un momento para leerla e intenta entender lo que este código está haciendo:

Math.floor(Math.random() * (max - min + 1)) + min
Crea una función llamada randomRange que tenga un rango myMin y myMax y devuelva un número entero aleatorio mayor o igual a myMin, y es menor o igual a myMax, inclusivo.
*/

function randomRange(myMin, myMax) {
    // Cambia solo el código debajo de esta línea
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Cambia solo el código encima de esta línea
  }
  

/*PRUEBAS
El número aleatorio más bajo que puede ser generado por randomRange debe ser igual a tu número mínimo, myMin.

El número aleatorio más alto que puede ser generado por randomRange debe ser igual a tu número máximo, myMax.

El número aleatorio generado por randomRange debe ser un entero, no un decimal.

randomRange debe usar myMax y myMin, y devolver un número aleatorio en tu rango.
*/