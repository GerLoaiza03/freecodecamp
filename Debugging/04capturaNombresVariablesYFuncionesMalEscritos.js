/*
Los métodos console.log() y typeof son las dos formas principales de comprobar los valores intermedios y los tipos de salida de un programa. Ahora es el momento de entrar en las formas comúnes que adoptan los errores (bugs). Un problema a nivel de sintaxis con el que las personas que escriben rápido pueden simpatizar es el humilde error ortográfico.

Los caracteres transpuestos, omitidos o mal escritos en el nombre de una variable o función harán que el navegador busque un objeto que no existe, y se queje en forma de error de referencia. Los nombres de variables y funciones de JavaScript distinguen entre mayúsculas y minúsculas.

Corrige los dos errores ortográficos en el código para que funcione el cálculo de netWorkingCapital.
*/

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

/*PRUEBAS
Comprueba la ortografía de las dos variables utilizadas en el cálculo de netWorkingCapital, la salida de la consola debe mostrar que "Net working capital is: 2".

No debe haber casos de variables mal escritas en el código.

La variable receivables debe ser declarada y utilizada correctamente en el código.

No debe haber casos de variables mal escritas en el código.

La variable payables debe ser declarada y utilizada correctamente en el código.
*/