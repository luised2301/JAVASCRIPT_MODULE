// Ejercicio 2 
// * Dado el siguiente arreglo de ciudades
// *   ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']
// * Generar una función que capitalize cada elemento del array
// * => Se puede resolver con .forEach() o .map()

const cityArray = ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA'];

const cityLower = cityArray.map(function (cV) { return cV.toLowerCase();});
const finalArray = [];


cityLower.forEach(cV => {
    console.log(cV)
    finalArray.push( (cV[0]).toUpperCase()+ cV.slice(1,cV.length));

});
console.log(`Este era mi arreglo original: ${cityArray}`)
console.log(`Este era mi arreglo Capitalized: ${finalArray}`)