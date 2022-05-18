/*
Es hora de hacer una pausa y probar tus nuevas habilidades para escribir expresiones regulares. Un grupo de criminales se han escapado de la cárcel, pero no sabes cuántos. Sin embargo, sabes que permanecen unidos cuando están alrededor de otras personas. Eres responsable de encontrar a todos los criminales a la vez.

Este es un ejemplo para revisar cómo hacer esto:

La expresión regular /z+/ coincide con la letra z cuando aparece una o más veces seguidas. Encontrará coincidencias en las siguientes cadenas:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
Pero no encuentra coincidencias en las siguientes cadenas, ya que no hay letras z:

""
"ABC"
"abcabc"
Escribe una expresión regular codiciosa que encuentre uno o más criminales dentro de un grupo de personas. Un criminal está representado por la letra mayúscula C.
*/

let reCriminals = /C+/; // Cambia esta línea

/*PRUEBAS
Tu expresión regular debe coincidir con un criminal (C) en la cadena C

Tu expresión regular debe coincidir con dos criminales (CC) en la cadena CC

Tu expresión regular debe coincidir con tres criminales (CCC) en la cadena P1P5P4CCCcP2P6P3.

Tu expresión regular debe coincidir con cinco criminales (CCCCC) en la cadena P6P2P7P4P5CCCCCP3P1

Tu expresión regular no debe coincidir con ningún criminal en la cadena vacía ""

Tu regex no debe coincidir con ningún criminal en la cadena P1P2P3

Tu expresión regular debe coincidir con cincuenta criminales (CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC) en la cadena P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3.
*/