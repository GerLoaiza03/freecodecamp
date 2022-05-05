/*
Hasta ahora, sólo has podido extraer o buscar un patrón una vez.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
Aquí match devolverá ["Repeat"].

Para buscar o extraer un patrón más de una vez, puedes utilizar la bandera g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
Y aquí match devuelve el valor ["Repeat", "Repeat", "Repeat"]

Utilizando la expresión regular starRegex, encuentra y extrae ambas palabras Twinkle de la cadena twinkleStar.

Nota
En tu expresión regular puedes utilizar múltiples banderas, como /search/gi
*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Cambia esta línea
let result = twinkleStar.match(starRegex); // Cambia esta línea

/*PRUEBAS
La expresión regular starRegex debe utilizar la bandera global g

Tu expresión regular starRegex debe utilizar la bandera que no distingue entre mayúsculas y minúsculas i

Tu coincidencia (match) debe coincidir con ambas apariciones de la palabra Twinkle

Tu coincidencia result debe tener dos elementos en él.
*/