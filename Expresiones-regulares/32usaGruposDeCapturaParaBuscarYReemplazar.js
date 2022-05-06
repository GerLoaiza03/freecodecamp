/*
La búsqueda es útil. Sin embargo, puedes hacer que la búsqueda sea aún más poderosa si también cambias (o reemplazas) el texto con el que coincide.

Puedes buscar y reemplazar texto en una cadena usando .replace() en una cadena. Las entradas para .replace() son primero el patrón de expresiones regulares que deseas buscar. El segundo parámetro es la cadena para reemplazar la coincidencia o una función para hacer algo.

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
La llamada replace devolverá la cadena The sky is blue..

También puedes acceder a grupos de captura en la cadena de reemplazo con signos de dólar. ($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
La llamada replace devolverá la cadena Camp Code.

Escribe una expresión regular fixRegex utilizando tres grupos de captura que buscarán cada palabra en la cadena one two three. Luego actualiza la variable replaceText para reemplazar one two three con la cadena three two one y asigna el resultado a la variable result. Asegúrate de utilizar grupos de captura en la cadena de reemplazo utilizando la sintaxis del signo de dólar ($).
*/



/*PRUEBAS
Debes utilizar .replace() para buscar y reemplazar.

Tu expresión regular debe cambiar la cadena one two three a la cadena three two one

No debes cambiar la última línea.

fixRegex debe usar al menos tres grupos de captura.

replaceText debe usar cadena(s) de subcoincidencia entre paréntesis (es decir, la enésima cadena de subcoincidencia entre parentesis, $n, corresponde al enésimo grupo de captura).
*/