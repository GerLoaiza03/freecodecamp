/*
Usando clases de caracteres, pudiste buscar todas las letras del alfabeto con [a-z]. Este tipo de clase de caracteres es tan común que existe un atajo para él, aunque también incluye algunos caracteres adicionales.

La clase de caracteres más cercana en JavaScript para coincidir con el alfabeto es \w. Este atajo equivale a [A-Za-z0-9_]. Esta clase de caracteres coincide con letras mayúsculas y minúsculas más números. Ten en cuenta que esta clase de caracteres también incluye el carácter de guión bajo (_).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
Las cuatro llamadas a test devolverán true.

Estos atajos de clases de caracteres también son conocidos como clases de caracteres abreviados.

Utiliza la clase de caracteres abreviada \w para contar el número de caracteres alfanuméricos en varias citas y cadenas.
*/

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Cambia esta línea
let result = quoteSample.match(alphabetRegexV2).length;

/*PRUEBAS
Tu expresión regular debe usar la bandera global.

Tu expresión regular debe usar el carácter abreviado \w para coincidir con todos los caracteres alfanuméricos.

Tu expresión regular debe encontrar 31 caracteres alfanuméricos en la cadena The five boxing wizards jump quickly.

Tu expresión regular debe encontrar 32 caracteres alfanuméricos en la cadena Pack my box with five dozen liquor jugs.

Tu expresión regular debe encontrar 30 caracteres alfanuméricos en la cadena How vexingly quick daft zebras jump!

Tu expresión regular debe encontrar 36 caracteres alfanuméricos en la cadena 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.
*/