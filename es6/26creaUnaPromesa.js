/*
Una promesa en JavaScript es exactamente como suena, se utiliza para hacer una promesa de que harás algo, habitualmente de forma asíncrona. Cuando la tarea se completa, o cumples tu promesa o no la cumples. Promise es una función constructora, así que tu necesitas usar la palabra clave new para crear una. Recibe una función como su argumento, con dos parámetros: resolve y reject. Estos métodos se utilizan para determinar el resultado de la promesa. Su sintaxis se ve así:

const myPromise = new Promise((resolve, reject) => {

});

Crea una nueva promesa llamada makeServerRequest. Pásale una función con parámetros resolve y reject al constructor.
*/

const makeServerRequest = new Promise((resolve, reject) => {

});

/*PRUEBAS
Debes asignar una promesa a una variable declarada con el nombre makeServerRequest.

Tu promesa debe recibir una función con resolve y reject como parámetros.
*/