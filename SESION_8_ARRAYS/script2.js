/**
* Ejercicio 2 *Opcional
* Función que reciba como parámetro una array de strings
* y devuelva el primer y último carácter de cada string
* p.ej.
* -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
*
* Pista / Hint, debemos iterar el array */

let strings = ["este","es mi","arreglo" ,"de","strings"]
let endsStrings = []

console.log(`Mi arreglo tiene los siguientes valores: ${strings}`);

function endsArray(a,b) {
    for (let index = 0; index < a.length; index++) {
        let element = a[index];
        let stringLengt = element.length;
        let elementend = stringLengt-1
        b.push( a[index].charAt(0) + a[index].charAt(elementend))    
        }
    }


endsArray(strings, endsStrings);
console.log(`Estas son las letras de los extremos: ${endsStrings}`);
