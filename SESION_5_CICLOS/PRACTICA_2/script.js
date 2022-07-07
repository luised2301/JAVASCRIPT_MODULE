/*Ejercicio 2
Pedir el usuario 1 número entre 1 y 100
sumar todos los números entre el 1 y el numero ingresado
Mandar un alert con el total
Resolver con For, While y do While
Por ejemplo: 5
->  15*/

let suma = 0;

let numA = parseInt(prompt ("Ingresa un numero entre 1 y 100"));

if (numA<=100 && numA>=1){

for (let contador = 1; contador <=numA ; contador++) {

        suma = suma+contador;
        console.log (suma)
}
alert ("La suma de todos los numeros entre el 1 y el " + numA+" es igual a: " + suma);
}
else{
    alert (numA+ " no es un numero valido");


}