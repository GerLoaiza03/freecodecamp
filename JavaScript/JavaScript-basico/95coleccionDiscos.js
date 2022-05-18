/*
Se te da un objeto literal que representa una parte de tu colección de álbumes musicales. Cada álbum tiene un número de id único como clave y varias otras propiedades. No todos los álbumes tienen una información completa.

Empiezas con una función updateRecords la cual toma un objeto literal, records, que contiene el álbum musical de la colección, un id, prop (como artist o tracks), y value. Completa la función usando las reglas siguientes para modificar el objeto pasado a la función.

Tu función siempre debe devolver el objeto de colección de registros completo.
Si prop no es tracks y value no es una cadena vacía, actualiza o establece la propiedad prop del album a value.
Si prop es tracks pero el álbum no tiene una propiedad tracks, crea un arreglo vacío y agrégale value a él.
Si prop es tracks y value no es una cadena vacía, agrega value al final del arreglo de tracks existentes del álbum.
Si value es una cadena vacía, elimina esa propiedad prop del álbum.
Nota: Se usa una copia del objeto recordCollection para las pruebas.
*/

// Configuración
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Cambia solo el código debajo de esta línea
  function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== ""){
      records[id][prop] = value;
      }else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
      }else if (prop === "tracks" && value !== ""){
      records[id][prop].push(value);
      }else if (value === ""){
        delete records[id][prop]
      }
      return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  
  updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")

  console.log(JSON.stringify(recordCollection))
  console.log((recordCollection))
  

/*PRUEBAS
Después updateRecords(recordCollection, 5439, "artist", "ABBA"), artist debe ser la cadena ABBA

Después updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks debe de tener la cadena Take a Chance on Me como el último y único elemento.

Después de updateRecords(recordCollection, 2548, "artist", ""), artist no se debe establecido

Después de updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks debe tener la cadena Addicted to Love como último elemento.

Después updateRecords(recordCollection, 2468, "tracks", "Free"), tracks debe tener la cadena 1999 como el primer elemento.

Después updateRecords(recordCollection, 2548, "tracks", ""), tracks no se debe establecido

Después de updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle debe ser la cadena Riptide
*/