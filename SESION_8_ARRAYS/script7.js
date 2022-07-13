// función con .reduce()
// * Dado un array de numeros, obtener la suma de solo los elementos positivos
// * addAllPositives( [ 1, -4, 12, 0, -3, 29, -150] )
// * -> 42



const multiArray = [1,1,1,1,1,3,4,5,100, -2,-2,-2,-2,-2,-3,-3,-3,-3,-3 ];

let sum = multiArray.reduce((total, cV)=>{ 
    if(cV>=0){
        return total= total+cV
    }
        return total=total
},0);
console.log(sum);