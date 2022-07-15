// Ejercicio 2.
// Dado un objeto inicial, hacer los siguientes puntos

let koder = {
    name: "Ferdinand",
   languages: ["JavaScript", "Python", "SQL"],
   frameworks: ["django", "node", "flask"],
   isMentor: true,
   level: 3,
   avatar: "https://picsum.photos/200/300"
}
console.log(` ${koder.name} Aprendió Go`); 
// 1. Agregar el lenguaje 'Go' a la lista de lenguajes
koder.languages.push("Go");
console.log(koder.languages)
// 2. Agregar fastApi en frameworks
koder.frameworks.push("fasApi");
console.log(koder.frameworks)
// 3. Cambiar el nivel a 4
koder.level=4;
console.log(koder.level)
// 4. Eliminar la propiedad avatar
delete koder.avatar
console.log(koder)
// 5. Agregar una nueva propiedad de edad y poner el valor de 30
koder.edad=30;
console.log(koder)
// 6. Imprimir en consola todos los lenguajes  y frameworks dominados
console.log(koder.languages)
console.log(koder.frameworks)
// 7. Clonar el objeto en uno nuevo
const newKoder = koder;
// 8. Imprimir en consola el nuevo objeto
console.log(newKoder)

 
