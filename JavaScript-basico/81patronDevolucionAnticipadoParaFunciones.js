/*
Cuando se alcanza una sentencia return, la ejecución de la función actual se detiene y el control se devuelve a la ubicación de la llamada.

Ejemplo

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
Lo anterior mostrará la cadena Hello en la consola y devolverá la cadena World. La cadena byebye nunca se mostrará en la consola, porque la función termina en la sentencia return.

Modifica la función abTest para que cuando a o b sean menores que 0 la función salga inmediatamente con un valor undefined.

Sugerencia
Recuerda que undefined es una palabra clave, no una cadena.
*/


// Configuración
function abTest(a, b) {
    // Cambia solo el código debajo de esta línea
  if(a < 0 || b < 0){
    return undefined;
  }
    // Cambia solo el código encima de esta línea
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  console.log(abTest(2,2));
  console.log(abTest(0,0));





/*PRUEBAS
abTest(2, 2) debe devolver un número

abTest(2, 2) debe devolver 8

abTest(-2, 2) debe devolver undefined

abTest(2, -2) debe devolver undefined

abTest(2, 8) debe devolver 18

abTest(3, 3) debe devolver 12

abTest(0, 0) debe devolver 0
*/