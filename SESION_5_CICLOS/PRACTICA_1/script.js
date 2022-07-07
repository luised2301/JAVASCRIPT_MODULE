/*Ejercicio 2
Escribir un programa de arroje la suma de los múltiplos de 3, 5 o 7 que hay entre 1 y 100
Resolver con For, While y do While*/

let suma = 0;

for (let contador = 1; contador <=100; contador++) {
    if ((contador%3==0) || (contador%5==0) ||(contador%7==0)) {
        console.log ("el numero " + contador + " si es multiplo de 3,5 o 7")
        suma = suma+contador;
        console.log (suma)
    }
    else{
        console.log ("el numero " + contador + " no es multiplo de 3,5 o 7")
    }
}
console.log ("La suma de todos los numeros multiplos de 3, 5 y 7 entre el 1 y el 100 es: " + suma);