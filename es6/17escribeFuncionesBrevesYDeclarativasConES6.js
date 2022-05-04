/*
Al definir funciones dentro de objetos en ES5, tenemos que utilizar la palabra clave function de la siguiente manera:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
Con ES6, puedes eliminar la palabra clave function y los dos puntos al definir funciones en objetos. Aquí hay un ejemplo de esta sintaxis:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
Refactoriza la función setGear dentro del objeto bicycle para que utilice la sintaxis abreviada descrita arriba.
*/

// Cambia solo el código debajo de esta línea
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Cambia solo el código encima de esta línea
  bicycle.setGear(3);
  console.log(bicycle.gear);

/*PRUEBAS
La expresión tradicional "function" no debe ser utilizada.

setGear debe ser una función declarativa.

bicycle.setGear(48) debe cambiar el valor de gear a 48.
*/