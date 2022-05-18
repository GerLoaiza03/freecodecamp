/*
Los desafíos por el momento han cubierto las letras que coinciden con el alfabeto y los números. También puedes hacer que coincidan los espacios en blanco o los espacios entre las letras.

Puedes buscar los espacios en blanco usando \s que es una s minúscula. Este patrón no solo coincide con los espacios en blanco, también con los caracteres de retorno de carro, tabulaciones, alimentación de formulario y saltos de línea. Puedes pensar que es similar a las clases de caracteres [ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
Esta llamada a match debe devolver [" ", " "].

Cambia la expresión regular countWhiteSpace para buscar múltiples caracteres de espacio en blanco en una cadena.
*/

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Cambia esta línea
let result = sample.match(countWhiteSpace);

/*PRUEBAS
Tu expresión regular debe usar una bandera global.

Tu expresión regular debe usar el carácter abreviado \s para que coincida con los caracteres de espacio en blanco.

Tu expresión regular debe encontrar ocho espacios en la cadena Men are from Mars and women are from Venus.

Tu expresión regular debe encontrar tres espacios en la cadena Space: the final frontier.

Tu expresión no debe encontrar espacios en la cadena MindYourPersonalSpace
*/