/*
Los bucles "for" no tienen que iterar de uno en uno a la vez. Al cambiar nuestra final-expression (expresión final), podemos contar con números pares.

Empezaremos en i = 0 y realizaremos el bucle mientras i < 10. Incrementaremos i en 2 cada bucle utilizando i += 2.

const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
ourArray ahora contendrá [0, 2, 4, 6, 8]. Cambiemos nuestra initialization (inicialización) para que podamos contar por números impares.

Inserta los números impares desde 1 hasta 9 en myArray utilizando un bucle for.
*/

// Configuración
// Configuración
const myArray = [];
for (let i=1; i<10 ; i +=2){
    myArray.push(i);
}
// Cambia solo el código debajo de esta línea
console.log(myArray)
// Cambia solo el código debajo de esta línea


/*PRUEBAS
Debes utilizar un bucle for para esto.

myArray debe ser igual a [1, 3, 5, 7, 9].
*/