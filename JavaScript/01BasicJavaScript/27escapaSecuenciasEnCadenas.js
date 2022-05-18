/*
Las comillas no son los únicos caracteres que pueden ser escapados dentro de una cadena. Hay dos razones para usar caracteres de escape:

Para permitir el uso de caracteres que de otra manera no te sería posible escribir, como un retorno de carro.
Para permitirte representar múltiples comillas en una cadena sin que JavaScript malinterprete lo que quieres decir.
Esto lo aprendimos en el desafío anterior.

Código	Resultado
\'	comilla simple
\"	comilla doble
\\	barra invertida
\n	línea nueva
\r	retorno de carro
\t	tabulación
\b	límite de palabra
\f	fuente de formulario
Ten en cuenta que la barra invertida en sí debe ser escapada para poder mostrarla como una barra invertida.

Asigna las siguientes tres líneas de texto en la variable única myStr usando secuencias de escape.

FirstLine
    \SecondLine
ThirdLine
Necesitarás usar secuencias de escape para insertar correctamente los caracteres especiales. También necesitarás seguir el espaciado tal y como se ve arriba, sin espacios entre secuencias de escape o palabras.

Nota: La sangría para la segunda línea (SecondLine) se consigue con el carácter de escape de tabulación, no con espacios.
*/
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Cambia esta línea



/*PRUEBAS
myStr no debe contener ningún espacio

myStr debe contener las cadenas FirstLine, SecondLine y ThirdLine (recuerda la sensibilidad a mayúsculas y minúsculas)

FirstLine debe ir seguido del carácter de línea nueva \n

myStr debe contener un carácter de tabulación \t seguido de un carácter de línea nueva

SecondLine debe estar precedida por el carácter de barra invertida \

Debe haber un carácter de línea nueva entre SecondLine y ThirdLine

myStr solo debe contener caracteres mostrados en las instrucciones
*/