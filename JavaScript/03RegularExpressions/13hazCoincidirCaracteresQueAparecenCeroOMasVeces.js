/*
El último desafío utilizó el signo más + para buscar caracteres que aparecen una o más veces. También hay una opción para hacer coincidir caracteres que aparecen cero o más veces.

El carácter que hace esto es el asterisco o la estrella: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
/*
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
En orden, los tres match devolverán los valores ["goooooooo"], ["g"], y null.

Para este desafío, chewieQuote ha sido inicializada entre bastidores con la cadena Aaaaaaaaaaaaaaaarrrgh!. Crea una expresión regular chewieRegex que utilice el carácter * para encontrar el carácter A mayúscula seguido inmediatamente por cero o más caracteres a minúscula en chewieQuote. Tu expresión regular no necesita banderas o clases de caracteres, y no debe coincidir con ninguna de las otras comillas.
*/

// Cambia solo el código debajo de esta línea
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/g; // Cambia esta línea
// Cambia solo el código encima de esta línea

let result = chewieQuote.match(chewieRegex);

/*PRUEBAS
Tu expresión regular chewieRegex debe utilizar el * para que coincida con cero o más caracteres a.

Tu expresión regular debe coincidir con la cadena A en chewieQuote.

Tu expresión regular debe coincidir con la cadena Aaaaaaaaaaaaaaaa en chewieQuote.

Tu expresión regular chewieRegex debe coincidir con 16 caracteres en chewieQuote.

Tu regex no debe coincidir con ningún carácter en la cadena He made a fair move. Screaming about it can't help you.

Tu regex no debe coincidir con ningún carácter en la cadena Let him have it. It's not wise to upset a Wookiee.
*/