// Ejercicio 3
// * Dado un arreglo con nombres de personas,
// * Función que devuelva un arreglo con los nombres de las personas que empiezan con vocales y además capitalizados
// *
// * onlyNamesVowels( ['jorge','ana','ivan','sergio','oscar' ] )
// * -> ['Ana','Ivan','Oscar']
// *
// * => Se puede resolver con .forEach() o .filter()
// */

const names = ['jorge','ana','ivan','sergio','oscar' ];

const namesLower = names.map(function (cV) { return cV.toLowerCase();});
const finalArray = [];


namesLower.forEach(cV => {
    console.log(cV)
    if (cV[0] != "a" && cV[0] != "e" &&cV[0] != "i" && cV[0] != "o" && cV[0] != "u" ) {
        
    
    finalArray.push( (cV[0]).toUpperCase()+ cV.slice(1,cV.length));
}
});
console.log(`Este era mi arreglo original: ${names}`)
console.log(`Este era mi arreglo Capitalized: ${finalArray}`)