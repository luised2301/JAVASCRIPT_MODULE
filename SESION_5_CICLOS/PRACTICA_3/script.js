/*Ejercicio 3
pedir una oracion al usuario
Contar las letras "a", "e" y espacios,
Resolver con For, While y do While
Por ejemplo 'hola kodErs'
 ->  A -> 1
 ->  E -> 1
 ->  Espacios -> 1*/


let userFrase = prompt("introduce un enunciado");
let aCount = 0;
let eCount = 0;
let spaceCount = 0;
let userFraseLower = userFrase.toLowerCase();
let index = 0;
console.log(userFraseLower)

for (index; index < userFrase.length; index++){
    if(userFraseLower[index]=== "a"){
        aCount++
    }
    else if(userFraseLower[index]=== "e"){
        eCount++
    }
    else{
        if(userFraseLower[index]=== " "){
            spaceCount++
        }
    }
}

console.log(`La letra A se repite ${aCount} veces`)
console.log(`La letra E se repite ${eCount} veces`)
console.log(`El espacio se repite ${spaceCount} veces`)