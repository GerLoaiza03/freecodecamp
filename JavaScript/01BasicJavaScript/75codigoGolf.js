/*
En el juego de golf cada hoyo tiene un par que significa el número promedio de strokes (golpes) que se espera que haga un golfista para introducir la pelota en un hoyo para completar la jugada. Dependiendo de qué tan por encima o por debajo del par estén tus strokes, hay un nombre diferente.

Tu función recibirá los argumentos par y strokes. Devuelve la cadena correcta según esta tabla que muestra los golpes en orden de prioridad; superior (más alto) a inferior (más bajo):

Strokes (golpes)	Devuelve
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par y strokes siempre serán numéricos y positivos. Hemos añadido un arreglo de todos los nombres para tu conveniencia.


*/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Cambia solo el código debajo de esta línea
  if (strokes == 1){
    return names[0]
  }else if (strokes <= par -2){
    return names[1]
  }else if (strokes == par -1){
    return names[2]
  }else if (strokes == par){
    return names[3]
  }else if (strokes == par +1){
    return names[4]
  }else if (strokes == par +2){
    return names[5]
  }else{
    return names[6]
  }
  // Cambia solo el código encima de esta línea
}

console.log(golfScore(4, 1));
console.log(golfScore(5, 9));



/*PRUEBAS
golfScore(4, 1) debe devolver la cadena Hole-in-one!

golfScore(4, 2) debe devolver la cadena Eagle

golfScore(5, 2) debe devolver la cadena Eagle

golfScore(4, 3) debe devolver la cadena Birdie

golfScore(4, 4) debe devolver la cadena Par

golfScore(1, 1) debe devolver la cadena Hole-in-one!

golfScore(5, 5) debe devolver la cadena Par

golfScore(4, 5) debe devolver la cadena Bogey

golfScore(4, 6) debe devolver la cadena Double Bogey

golfScore(4, 7) debe devolver la cadena Go Home!

golfScore(5, 9) debe devolver la cadena Go Home!
*/