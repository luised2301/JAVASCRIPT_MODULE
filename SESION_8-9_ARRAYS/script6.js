// Practica
// Dado una arreglo compuesto por arreglos,
// * crea una función que calcule la suma de los arreglos
// *
// * additionMultiArr(  [ [1,2,3] , [1,3,2] , [3,2,1] ] )
// * -> 18



const multiArray = [[ 1,1,1,1,1 ],[ 2,2,2,2,2 ],[ 3,3,3,3,3 ] ];
const sumedArray=[];

let myFunction = (total, value) => total + value;


multiArray.map(cv => {
    sum = cv.reduce(myFunction)
    sumedArray.push(sum)
});

let result =sumedArray.reduce(myFunction);

alert(`Tu conjunto de arreglos es: ${multiArray}`)
alert(`La suma total de sus arreglo es: ${result}`)