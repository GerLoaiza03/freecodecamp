/*
Ahora podemos agregar, modificar y eliminar claves de los objetos. Pero, ¿y si sólo queremos saber si un objeto tiene una propiedad específica? JavaScript nos proporciona dos maneras diferentes de hacerlo. Uno utiliza el método hasOwnProperty() y el otro utiliza la palabra clave in. Si tenemos un objeto users con una propiedad de Alan, podríamos comprobar su presencia de cualquiera de las siguientes maneras:

users.hasOwnProperty('Alan');
'Alan' in users;
Ambos devuelven true.

Termina de escribir la función para que devuelva true si el objeto pasado contiene los cuatro nombres, Alan, Jeff, Sarah and Ryan y devuelva false en caso contrario.
*/
//solucion 1 freeCodeCamp
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Cambia solo el código debajo de esta línea
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name => userObj.hasOwnProperty(name)
    );
    // Cambia solo el código encima de esta línea
  }
  
  console.log(isEveryoneHere(users));

//solucion 2 freeCodeCamp
// let users = {
//     Alan: {
//       age: 27,
//       online: true
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: true
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
  
//   function isEveryoneHere(userObj) {
//     if (
//       userObj.hasOwnProperty("Alan") &&
//       userObj.hasOwnProperty("Jeff") &&
//       userObj.hasOwnProperty("Sarah") &&
//       userObj.hasOwnProperty("Ryan")
//     ) {
//       return true;
//     }
//     return false;
//   }

/*PRUEBAS
No se debe acceder directamente al objeto users

El objeto users sólo debe contener las claves Alan, Jeff, Sarah y Ryan

La función isEveryoneHere debe devolver true si Alan, Jeff, Sarah y Ryan son propiedades del objeto que se le pasa.

La función isEveryoneHere debe devolver false si Alan no es una propiedad del objeto que se le pasa.

La función isEveryoneHere debe devolver false si Jeff no es una propiedad del objeto que se le pasa.

La función isEveryoneHere debe devolver false si Sarah no es una propiedad del objeto que se le pasa.

La función isEveryoneHere debe devolver false si Ryan no es una propiedad del objeto que se le pasa.
*/