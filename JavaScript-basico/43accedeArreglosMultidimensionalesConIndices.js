/*
Se puede pensar que un arreglo multidimensional es como un arreglo de arreglos. Cuando usas corchetes para acceder a tu arreglo, el primer par de corchetes se refiere a las entradas en el arreglo externo (el primer nivel) y cada par adicional de corchetes se refiere al siguiente nivel de entradas.

Ejemplo

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

arr[3];
arr[3][0];
arr[3][0][1];
arr[3] es [[10, 11, 12], 13, 14], arr[3][0] es [10, 11, 12] y arr[3][0][1] es 11.

Nota: No debe haber ningún espacio entre el nombre del arreglo y los corchetes, ni array [0][0] o array [0] [0] están permitidos. Aunque JavaScript pueda procesar esto correctamente, puedes confundir a otros programadores al leer tu código.

Usa la notación de corchetes para seleccionar un elemento de myArray de tal manera que myData sea igual a 8.
*/

// Ejemplo

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14]
// ];

// arr[3];
// arr[3][0];
// arr[3][0][1];
// arr[3] es [[10, 11, 12], 13, 14], arr[3][0] es [10, 11, 12] y arr[3][0][1] es 11.


//Usa la notación de corchetes para seleccionar un elemento de myArray de tal manera que myData sea igual a 8.
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];


 /*PRUEBAS
  myData debe ser igual a 8.

Debes usar notación de corchetes para leer el valor correcto de myArray.
  */