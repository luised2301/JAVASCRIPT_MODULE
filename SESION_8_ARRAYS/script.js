/**Ejercicio 1 
* Realizar una función que reciba como parametro 1 array de numeros
* Y devuelva un array con solo los elementos Pares de ese array
* p.ej.
* -> evenOnly( [1,2,3,4,18] ) -> [2,4,18]
* -> evenOnly( [10, 2, 5] ) -> [10,2]
* -> evenOnly() -> 'Se necesita un array'
*
* Pista / Hint, debemos iterar el array */

let numbers = [1,4,56,7,88,4,3,6,7,3,3,5,7,8,4,6,8,5,7]
let pairedNumbers = []
console.log(`Mi arreglo tiene los siguientes valores: ${numbers}`);

function arrayPair(a,b) {
    for (let index = 0; index < a.length; index++) {
        let element = a[index];
        if ((element%2)==0) {
        b.push(a[index]);
            
        }
    }
}

arrayPair(numbers, pairedNumbers);
console.log(`Los valores pares del arreglo son: ${pairedNumbers}`);

