// Ejercicio 1 
// Crea el objeto koder (con al menos 6 propiedades, al menos 1 debe ser otro objeto con 2 o 3 propiedades propias)
// Luego imprimir en consola alguna oración que haga uso de algunas de esas propiedades, accedemos a ellas, incluida la del objeto anidado
// Luego en otro console log, imprime todas las llaves dentro del objeto
// Luego en otra console log, imprime todas los valores dentro del objeto
// En otro console log imprime cuántos elementos tiene el objeto -> hint: utilizamos un contador
 
const koder = {
    nombre: "Eduardo",
    edad: 32,
    carrera: "Ingeniero Mecanico",
    experienciaProfesional: ["CCL", "ESSITY", "SCA"],
    estatura: 165,
    peso: 69,
};
let i = 0;
console.log(`El nombre del koder es ${koder.nombre} es ${koder.carrera} y ha trabajado en ${koder.experienciaProfesional}`)

for (key in koder) {
    console.log(key)
    i++
}
for (x in koder) {
    console.log(koder[x])
}

console.log(`El objeto tiene ${i} elementos `)

