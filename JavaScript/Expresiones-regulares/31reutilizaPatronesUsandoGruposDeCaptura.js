/*
Digamos que quieres hacer coincidir una palabra que aparece varias veces como la siguiente.

let repeatStr = "row row row your boat";
Podrías usar /row row row/, pero ¿qué pasa si no conoces la palabra específica que se repite? Los grupos de captura pueden utilizarse para encontrar subcadenas repetidas.

Los grupos de captura se construyen encerrando entre paréntesis el patrón de expresión regular a capturar. En este caso, el objetivo es capturar una palabra formada por caracteres alfanuméricos, por lo que el grupo de captura será \w+ encerrado entre paréntesis: /(\w+)/.

La subcadena que coincide con el grupo se guarda en una "variable" temporal, a la que se puede acceder dentro de la misma expresión regular utilizando una barra invertida y el número del grupo de captura (por ejemplo, \1). Los grupos de captura se numeran automáticamente por la posición de sus paréntesis de apertura (de izquierda a derecha), empezando por el 1.

El siguiente ejemplo encuentra cualquier palabra que aparezca tres veces separada por un espacio:

let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
El uso del método .match() en una cadena devolverá un arreglo con la subcadena coincidente, junto con sus grupos capturados.

Utiliza los grupos de captura en reRegex para que coincida con una cadena que conste sólo del mismo número repetido exactamente tres veces separado por espacios.
*/

//solucion Mia
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Cambia esta línea
let result = reRegex.test(repeatNum);

/*Solucion Pagina
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
*/

/*PRUEBAS
Tu expresión regular debe utilizar la clase de caracteres abreviada para los dígitos.

Tu expresión regular debe reutilizar un grupo de captura dos veces.

Tu expresión regular debe coincidir con la cadena 42 42 42.

Tu expresión regular debe coincidir con la cadena 100 100 100.

Tu expresión regular no debe coincidir con la cadena 42 42 42 42.

Tu expresión regular no debe coincidir con la cadena 42 42.

Tu expresión regular no debe coincidir con la cadena 101 102 103.

Tu expresión regular no debe coincidir con la cadena 1 2 3.

Tu expresión regular debe coincidir con la cadena 10 10 10.
*/