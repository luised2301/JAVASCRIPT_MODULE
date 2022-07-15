// Un log donde veamos la suma total de notas
// Opcional - Un log donde veamos el promedio de las notas a dos decimales
// Hint, use toFixed() method
// https://www.programiz.com/javascript/library/number/tofixed

const grades = {
 first_test: 7.5,
 second_test: 10,
 third_test: 6.2,
 four_test: 7.5,
 fife_test: 10.3,
 six_test: 6.1,
};

let sum=0;
let i=0;


console.log(`Estos son los resultados de mis examentes:`);

console.log(grades);

for (x in grades) {

    sum = sum+grades[x] ;
    i++

   
}


console.log(`Esta es la suma de mis calificaciones: ${sum}`);

let promedio = sum/i



console.log(`Este es mi promedio: ${promedio.toFixed(2)}`);



