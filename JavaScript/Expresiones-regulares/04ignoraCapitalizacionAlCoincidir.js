/*
Hasta ahora, has visto expresiones regulares para hacer coincidir cadenas literales. Pero a veces, tal vez quieras hacer coincidir las diferencias de capitalización.

La capitalización (o también llamada capitalización de letra) es la diferencia entre mayúsculas y minúsculas. Ejemplos de mayúsculas son A, B y C. Ejemplos de minúsculas son a, b y c.

Puedes coincidir ambos casos utilizando algo llamado bandera. Existen otras banderas, pero aquí te centrarás en la que ignora la capitalización de las letras, la bandera i. Puedes usarla añadiéndola a la expresión regular. Un ejemplo de uso de esta bandera es /ignorecase/i. Esta expresión regular puede coincidir con las cadenas ignorecase, igNoreCase e IgnoreCase.

Escribe una expresión regular fccRegex para que coincida con freeCodeCamp sin importar su capitalización. Tu expresión regular no debe coincidir con ninguna abreviatura o variación con espacios.
*/

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Cambia esta línea
let result = fccRegex.test(myString);

/*PRUEBAS
Tu expresión regular debe coincidir con la cadena freeCodeCamp

Tu expresión regular debe coincidir con la cadena FreeCodeCamp

Tu expresión regular debe coincidir con la cadena FreecodeCamp

Tu expresión regular debe coincidir con la cadena FreeCodecamp

Tu expresión regular no debe coincidir con la cadena Free Code Camp

Tu expresión regular debe coincidir con la cadena FreeCOdeCamp

Tu expresión regular no debe coincidir con la cadena FCC

Tu expresión regular debe coincidir con la cadena FrEeCoDeCamp

Tu expresión regular debe coincidir con la cadena FrEeCodECamp

Tu expresión regular debe coincidir con la cadena FReeCodeCAmp
*/