/*
Los nombres de usuario se utilizan en todas partes en Internet. Son los que dan a los usuarios una identidad única en tus sitios favoritos.

Se necesita comprobar todos los nombres de usuario en una base de datos. Estas son algunas reglas simples que los usuarios deben seguir al crear su nombre de usuario.

Los nombres de usuario sólo pueden utilizar caracteres alfanuméricos.

Los únicos números del nombre de usuario tienen que estar al final. Puede tener un cero o más al final. El nombre de usuario no puede iniciar con un número.

Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres sólo puede utilizar letras del alfabeto como caracteres.

Cambia la expresión regular userCheck para que se ajuste a las restricciones indicadas anteriormente.
*/

//solucion1
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)

// Code Explanation
// ^ - start of input
// [a-z] - first character is a letter
// [a-z]+ - following characters are letters
// \d*$ - input ends with 0 or more digits
// | - or
// ^[a-z] - first character is a letter
// \d\d+ - following characters are 2 or more digits
// $ - end of input


//solucion2
let username2 = "JackOfAllTrades";
let userCheck2 = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result2 = userCheck2.test(username2);
console.log(result2)

// ^ - start of input
// [a-z] - first character is a letter
// [0-9]{2,0} - ends with two or more numbers
// | - or
// [a-z]+ - has one or more letters next
// \d* - and ends with zero or more numbers
// $ - end of input
// i - ignore case of input

/*PRUEBAS
Tu expresión regular debe coincidir con la cadena JACK

Tu expresión regular no debe coincidir con la cadena J

Tu expresión regular debe coincidir con la cadena Jo

Tu expresión regular debe coincidir con la cadena Oceans11

Tu expresión regular debe coincidir con la cadena RegexGuru

Tu expresión regular no debe coincidir con la cadena 007

Tu expresión regular no debe coincidir con la cadena 9

Tu expresión regular no debe coincidir con la cadena A1

Tu expresión regular no debe coincidir con la cadena BadUs3rnam3

Tu expresión regular debe coincidir con la cadena Z97

Tu expresión regular no debe coincidir con la cadena c57bT3

Tu expresión regular debe coincidir con la cadena AB1

Tu expresión regular no debe coincidir con la cadena J%4
*/