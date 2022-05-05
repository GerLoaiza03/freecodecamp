/*
El último desafío mostró cómo buscar dígitos usando el atajo \d con una d minúscula. También puedes buscar caracteres que no sean dígitos usando un atajo similar que utilice una D mayúscula en su lugar.

El atajo para buscar caracteres que no sean dígitos es \D. Esto es igual a la clase de caracteres [^0-9], el cual busca un único carácter que no sea un número entre cero y nueve.

Usa la clase de caracteres abreviada \D para contar cuántos caracteres que no sean dígitos hay en los títulos de las películas.
*/

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Cambia esta línea
let result = movieName.match(noNumRegex).length;

/*PRUEBAS
Tu expresión regular debe usar el carácter de atajo que coincida con caracteres que no sean dígitos

Tu expresión regular debe usar la bandera global.

Tu expresión regular no debe encontrar caracteres que no sean dígitos en la cadena 9.

Tu expresión regular debe encontrar 6 caracteres que no sean dígitos en la cadena Catch 22.

Tu expresión regular debe encontrar 11 caracteres que no sean dígitos en la cadena 101 Dalmatians.

Tu expresión regular debe encontrar 15 caracteres que no sean dígitos en la cadena One, Two, Three.

Tu expresión regular debe encontrar 12 caracteres que no sean dígitos en la cadena 21 Jump Street.

Tu expresión regular debe encontrar 17 caracteres que no sean dígitos en la cadena 2001: A Space Odyssey.
*/