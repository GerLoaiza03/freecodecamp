/*
A veces, es posible que desees almacenar datos en una estructura de datos flexible. Un objeto de JavaScript es una forma de manejar datos flexibles. Permiten combinaciones arbitrarias de cadenas, números, booleanos, arreglos, funciones, y objetos.

Este es un ejemplo de una estructura de datos compleja:

const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
Esto es una arreglo que contiene un objeto en su interior. El objeto tiene varias piezas de metadatos sobre un álbum. También tiene un arreglo anidado de formats. Si desea añadir más registros de álbumes, puede hacerlo añadiendo registros a la parte superior del arreglo. Los objetos almacenan datos en una propiedad, con formato clave-valor. En el ejemplo anterior, "artist": "Daft Punk" es una propiedad que tiene como clave artist y su valor es Daft Punk. JavaScript Object Notation o JSON es un formato de intercambio de datos relacionado utilizado para almacenar información.

{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
Nota: Deberás colocar una coma después de cada objeto en el arreglo, a menos que sea el último objeto.

Añade un nuevo álbum al arreglo myMusic. Añade las cadenas artist y title, el número release_year, y un arreglo de cadenas formats.
*/

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Germán",
      "title": "Fonso",
      "release_year": 2022,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];





/*PRUEBAS
myMusic debe ser un arreglo

myMusic debe tener al menos dos elementos

Los elementos en el arreglo myMusic deben ser objetos

Tu objeto en myMusic debe tener al menos 4 propiedades

Tu objeto en myMusic debe contener la propiedad artist que es una cadena

Tu objeto en myMusic debe contener la propiedad title que es una cadena

Tu objeto en myMusic debe contener la propiedad release_year que es un número

Tu objeto en myMusic debe contener una propiedad de formats que es un arreglo

formats debe ser un arreglo de cadenas con al menos dos elementos
*/