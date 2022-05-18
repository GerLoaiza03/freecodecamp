/*
Otro uso de la notación de corchetes en objetos es acceder a una propiedad que está almacenada como el valor de una variable. Esto puede ser muy útil para iterar a través de las propiedades de un objeto o para acceder a una tabla de búsqueda.

Aquí hay un ejemplo del uso de una variable para acceder a una propiedad:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
La cadena Doberman se mostrará en la consola.

Otra forma de usar este concepto es cuando el nombre de la propiedad se recoge dinámicamente durante la ejecución del programa, de la siguiente manera:

const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);
someProp tendrá una cadena con un valor propName y la cadena John se mostrará en la consola.

Ten en cuenta que no usamos comillas alrededor del nombre de la variable cuando la usamos para acceder a la propiedad porque utilizamos el valor de la variable, no el nombre.

Establece la variable playerNumber a 16. Luego, usa la variable para buscar el nombre del jugador y asignarlo a player.
*/

// const dogs = {
//     Fido: "Mutt",
//     Hunter: "Doberman",
//     Snoopie: "Beagle"
//   };
  
//   const myDog = "Hunter";
//   const myBreed = dogs[myDog];
//   console.log(myBreed);

//   const someObj = {
//     propName: "John"
//   };
  
//   function propPrefix(str) {
//     const s = "prop";
//     return s + str;
//   }
  
//   const someProp = propPrefix("Name");
//   console.log(someObj[someProp]);


  // Configuración
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Cambia solo el código debajo de esta línea
  const playerNumber = 16;  // Cambia esta línea
  const player = testObj[playerNumber];   // Cambia esta línea
  
  console.log(player)




/*PRUEBAS
playerNumber debe ser un número

La variable player debe ser una cadena

El valor de player debe ser la cadena Montana

Debes usar la notación de corchete para acceder a testObj

No debes asignar el valor de Montana a la variable player directamente.

Debes usar la variable playerNumber en tu notación de corchete
*/