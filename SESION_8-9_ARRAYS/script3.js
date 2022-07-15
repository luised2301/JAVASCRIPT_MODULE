// Ejercicio 1 
// * Función que reciba una palabra
// * Retorna la palabra invertida
// * La reversa del string lo haremos usando métodos de array
// *  hint :  a un string no podemos aplicarle métodos array pero hay métodos de string que nos devuelve un array
// *
// * reverseStr('hola mundo')
// * -> 'odnum aloh'

const word = prompt ("Entrega una palabra o frase para transformarla: ");
const myArray = []


function toArrayChar(a,b) {
    for (let i = 0; i < a.length; i++) {
        b.push(a[i]);
        }
    }


toArrayChar(word,myArray);
myArray.reverse();
alert(myArray);

myArray.forEach(cV => {
    console.log(cV)
});