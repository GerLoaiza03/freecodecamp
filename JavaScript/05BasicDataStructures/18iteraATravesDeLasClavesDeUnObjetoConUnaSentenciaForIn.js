/*
A veces es necesario iterar por todas las claves de un objeto. Esto requiere una sintaxis específica en JavaScript llamada sentencia for...in. Para nuestro objeto users, esto podría verse así:

for (let user in users) {
  console.log(user);
}
Esto registrará Alan, Jeff, Sarah, y Ryan, cada valor en su propia línea.

En esta sentencia, definimos una variable user, y como puedes ver, esta variable se restablece durante cada iteración a cada una de las claves del objeto a medida que la sentencia hace un bucle a través del objeto, dando como resultado que el nombre de cada usuario se imprima en la consola.

NOTA: Los objetos no mantienen un orden para las claves almacenadas como lo hacen los arreglos; por lo tanto, la posición de una clave en un objeto, o el orden relativo en el que aparece, es irrelevante cuando se hace referencia o se accede a esa clave.

Hemos definido una función countOnline que acepta un argumento (un objeto usuario). Utiliza una sentencia for...in dentro de esta función para iterar sobre el objeto usuarios (users) pasado a la función y devuelve el número de usuarios cuya propiedad online esté establecida como true. A continuación se muestra un ejemplo de un objeto usuario que podría pasarse a countOnline. Cada usuario tendrá una propiedad online con un valor true o false.

{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
*/

//consejos
/*
Hint 1:
for (let user in obj) {
  if (obj.user.online === true) {
    //code
  }
}
Hint 2
Example 2 demonstrates how using [square-bracket] notation the code will be executed.
for (let user in obj) {
  if (obj[user].online === true) {
    //code
  }
}
*/

//solucion 1
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Cambia solo el código debajo de esta línea
    let count = 0;
    for (let user in usersObj) {
      if(usersObj[user].online === true){
        count ++;
      }
    }
    return count;
    // Cambia solo el código encima de esta línea
  }
  
  console.log(countOnline(users));
  console.log(countOnline({ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }));

/*PRUEBAS
La función countOnline debe utilizar una sentencia for in para iterar por las claves del objeto que se le pasa.

La función countOnline debe devolver 1 cuando se le pasa el objeto { Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }

La función countOnline debe devolver 2 cuando se le pasa el objeto { Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }

La función countOnline debe devolver 0 cuando se le pasa el objeto { Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }
*/