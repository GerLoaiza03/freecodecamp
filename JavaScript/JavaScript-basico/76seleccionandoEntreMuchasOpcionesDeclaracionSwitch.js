/*
Si tienes muchas opciones para elegir, usa una declaración switch. Una sentencia switch prueba un valor y puede tener muchas sentencias case que definen varios valores posibles. Las sentencias se ejecutan desde el primer valor case coincidente hasta que se encuentra un break.

Aquí hay un ejemplo de una declaración switch:

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
Los valores en las sentencias case se prueban con igualdad estricta (===). El break le dice a JavaScript que deje de ejecutar declaraciones. Si se omite break, se ejecutara la siguiente sentencia.

Escribe una declaración switch que pruebe val y establezca answer con las siguientes condiciones:
1 - alpha
2 - beta
3 - gamma
4 - delta
*/

function caseInSwitch(val) {
    let answer = "";
    // Cambia solo el código debajo de esta línea
  switch(val){
    case 1: 
        answer = "alpha";
        break;
      case 2: 
        answer = "beta";
        break;
      case 3: 
        answer = "gamma";
        break;
      case 4: 
        answer = "delta";
        break;
  }
    // Cambia solo el código encima de esta línea
    return answer;
  }
  
  caseInSwitch(1);




/*PRUEBAS
  caseInSwitch(1) debe tener una cadena con valor alpha

caseInSwitch(2) debe tener una cadena con valor beta

caseInSwitch(3) debe tener una cadena con valor gamma

caseInSwitch(4) debe tener una cadena con valor delta

No debes usar ninguna sentencia if o else

Debes tener al menos 3 declaraciones break
  */