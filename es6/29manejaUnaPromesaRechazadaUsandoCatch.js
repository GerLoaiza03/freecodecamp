/*
catch es el método utilizado cuando tu promesa ha sido rechazada. Se ejecuta inmediatamente, después de que se llama al método reject de una promesa. A continuación la sintaxis:

myPromise.catch(error => {

});
error es el argumento pasado al método reject.

Añade el método catch a tu promesa. Usa error como el parámetro de tu función callback e imprime error en la consola.
*/

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer es establecido a false para representar una respuesta no satisfactoria del servidor
    let responseFromServer = false;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.catch(error => {
    console.log(error);
  });

/*PRUEBAS
Debes llamar al método catch en la promesa.

El método catch, debe tener una función callback con error como parámetro.

Debes imprimir error en la consola.
*/