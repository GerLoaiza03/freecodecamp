/*
Comprende la inmutabilidad de las cadenas
En JavaScript, los valores de cadena (String) son inmutables, lo que significa que no pueden ser alterados una vez creados.

Por ejemplo, el siguiente código:

let myStr = "Bob";
myStr[0] = "J";
no puede cambiar el valor de myStr a Job, porque el contenido de myStr no puede ser alterado. Ten en cuenta que esto no significa que myStr no puede cambiarse, solo que los caracteres individuales de una cadena literal no pueden ser cambiados. La única forma de cambiar myStr sería asignarla con una nueva cadena, como esta:

let myStr = "Bob";
myStr = "Job";
Corrige la asignación de myStr para que contenga el valor de cadena Hello World usando el método mostrado en el ejemplo anterior.
*/

// Configuración
let myStr = "Jello World";

// Cambia solo el código debajo de esta línea
myStr = "Hello World"; // Cambia esta línea
// Cambia solo el código encima de esta línea



/*PRUEBAS
myStr debe tener una cadena con valor Hello World.

No debes cambiar el código por encima del comentario especificado.
*/