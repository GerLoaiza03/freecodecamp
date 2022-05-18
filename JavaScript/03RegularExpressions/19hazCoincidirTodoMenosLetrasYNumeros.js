/*
Has aprendido que puedes usar un atajo para emparejar alfanuméricos [A-Za-z0-9_] usando \w. Un patrón natural que tal vez quieras buscar es lo contrario a la alfanumérica.

Puedes buscar lo contrario de \w con \W. Ten en cuenta, el patrón contrario usa letra mayúscula. Este atajo es lo mismo que [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
El primer match devuelve el valor ["%"] y el segundo devuelve ["!"].

Usa la clase de caracteres abreviados \W para contar el número de caracteres no alfanuméricos en varias comillas y cadenas.
*/

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Cambia esta línea
let result = quoteSample.match(nonAlphabetRegex).length;

/*PRUEBAS
Tu expresión regular debe usar la bandera global.

Tu expresión regular debe encontrar 6 caracteres no alfanuméricos en la cadena The five boxing wizards jump quickly..

Tu expresión regular debe utilizar el carácter abreviado para coincidir con los caracteres no alfanuméricos.

Tu expresión regular debe encontrar 8 caracteres no alfanuméricos en la cadena Pack my box with five dozen liquor jugs.

Tu expresión regular debe encontrar 6 caracteres no alfanuméricos en la cadena How vexingly quick daft zebras jump!

Tu expresión regular debe encontrar 12 caracteres no alfanuméricos en la cadena 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.
*/