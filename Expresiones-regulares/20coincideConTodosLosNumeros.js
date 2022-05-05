/*
Has aprendido atajos para patrones de cadenas comunes como los alfanuméricos. Otro patrón común es buscar solo dígitos o números.

El atajo para buscar caracteres de dígitos es \d, con una d minúscula. Esto es igual a la clase de caracteres [0-9], la cual busca un solo carácter de cualquier número entre cero y nueve.

Usa la clase de caracteres abreviada \d para contar cuántos dígitos hay en los títulos de las películas. Los números escritos ("seis" en lugar de 6) no cuentan.
*/

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Cambia esta línea
let result = movieName.match(numRegex).length;

/*PRUEBAS
Tu expresión regular debe usar el carácter de atajo que coincida con caracteres de dígitos

Tu expresión regular debe usar la bandera global.

Tu expresión regular debe encontrar 1 dígito en la cadena 9.

Tu expresión regular debe encontrar 2 dígitos en la cadena Catch 22.

Tu expresión regular debe encontrar 3 dígitos en la cadena 101 Dalmatians.

Tu expresión regular no debe encontrar dígitos en la cadena One, Two, Three.

Tu expresión regular debe encontrar 2 dígitos en la cadena 21 Jump Street.

Tu expresión regular debe encontrar 4 dígitos en la cadena 2001: A Space Odyssey.
*/