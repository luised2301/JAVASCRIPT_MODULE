/**
* Ejercicio 2 *Opcional
* Función que reciba como parámetro una array de strings
* y devuelva el primer y último carácter de cada string
* p.ej.
* -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
*
* Pista / Hint, debemos iterar el array */

let strings = ["este","es mi","arreglo" ,"de","strings", "prueba","prueba de nuevo"]
let endsStrings = []

console.log(`Mi arreglo tiene los siguientes valores: ${strings}`);

function endsArray(a,b) {
    for (let i = 0; i < a.length; i++) {
        let element = a[i];
        b.push( a[i].charAt(0) + a[i].charAt(element.length-1))    
        }
    }


endsArray(strings, endsStrings);
console.log(`Estas son las letras de los extremos: ${endsStrings}`);
