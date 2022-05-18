/*
En el juego de casino Blackjack el jugador puede sacarle ventaja a la casa llevando un registro del numero relativo de cartas altas y bajas que quedan en la baraja. Esto es llamado conteo de cartas.

Tener más cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuerdo a la siguiente tabla. Cuando el conteo es positivo, el jugador debería apostar alto. Cuando el conteo da 0 o negativo, el jugador debería apostar bajo.

Cambios del conteo	Cartas
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
Escribirás una función para contar cartas. Recibirá un parámetro card (carta) que puede ser un número o una cadena y aumentar o reducir la variable global count (conteo) de acuerdo al valor de la carta (observa la tabla). La función devolverá una cadena con el conteo actual y la cadena Bet (Apuesta) si el conteo es positivo, o Hold (Espera) si el conteo es cero o negativo. El conteo actual y la decisión del jugador (Bet o Hold) deben estar separados por un solo espacio.

Resultados de ejemplo: -3 Hold o 5 Bet

Sugerencia
NO reinicies count a 0 cuando el valor sea 7, 8 o 9. NO devuelvas un arreglo.
NO incluyas comillas (individuales o dobles) en el resultado.
*/

//1ra Opcion
let count = 0;

function cc(card) {
  // Only change code below this line
var regex = /[JQKA]/;
if (card > 1 && card < 7){
  count++;
}else if(card === 10|| regex.test(card)){
  count--;
}

// if(count > 0) return console.log(`${count} Bet`);
// return console.log(`${count} Hold`);
  
  
  if (count > 0) return count + " Bet";
  return count + " Hold";
}
cc(2); cc(3); cc(7); cc('K'); cc('A');

//2da opcion
// let count = 0;

// function cc(card) {
//   // Only change code below this line
// switch(card){
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//     count ++;
//     break;
//   case 10:
//   case "J":
//   case "Q":
//   case "K":
//   case "A":
//   count --;
//     break;
// }
// if (count > 0){
//   return count + " Bet"
// }else {
//   return count + " Hold"
// }

//   return "Change Me";
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');




/*PRUEBAS
La secuencia de cartas 2, 3, 4, 5, 6 debe devolver la cadena 5 Bet

La secuencia de cartas 7, 8, 9 debe devolver la cadena 0 Hold

La secuencia de cartas 10, J, Q, K, A debe devolver la cadena -5 Hold

La secuencia de cartas 3, 7, Q, 8, A debe devolver la cadena -1 Hold

La secuencia de cartas 2, J, 9, 2, 7 debe devolver la cadena 1 Bet

La secuencia de cartas 2, 2, 10 debe devolver la cadena 1 Bet

La secuencia de cartas 3, 2, A, 10, K debe devolver la cadena -1 Hold
*/