/*Practica 2
Declarar una función que tome uno o más argumentos y haga un retorno,
Pueden llevar a cabo alguno de los ejercicios de la prácticas de la sesión 1 o 2 o 3
Almacenar el retorno en una variable y imprimir un mensaje usando esa variable -> template literals*/

let str = prompt("Ingrese una oración:");

function reverseString (a){
    let strReverse = "";
    for(let i = a.length-1; i >= 0; i--){
        strReverse = strReverse + a[i];
    }
    return a = strReverse;
}

console.log (reverseString(str))