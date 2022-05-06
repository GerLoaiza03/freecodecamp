/*
Aprendiste a buscar espacios en blanco usando \s, con una s en minúscula. También puedes buscar todo excepto los espacios en blanco.

Busca caracteres que no sean espacios en blanco usando \S, la cual es una s mayúscula. Este patrón no coincidirá con los caracteres de espacios en blanco, retorno de carro, tabulaciones, alimentación de formulario y saltos de línea. Puedes pensar que es similar a la clase de caracteres [^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
El valor devuelto por el método .length sería 32.

Cambia la expresión regular countNonWhiteSpace para buscar varios caracteres que no sean espacios en blanco en una cadena.
*/

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Cambia esta línea
let result = sample.match(countNonWhiteSpace);

/*PRUEBAS
Tu expresión regular debe usar la bandera global.

Tu expresión regular debe usar el carácter abreviado \S para que coincida con todos los caracteres que no sean espacios en blanco.

Tu expresión regular debe encontrar 35 caracteres que no sean espacios en la cadena Men are from Mars and women are from Venus.

Tu expresión regular debe encontrar 23 caracteres que no sean espacios en la cadena Space: the final frontier.

Tu expresión regular debe encontrar 21 caracteres que no sean espacios en la cadena MindYourPersonalSpace
*/