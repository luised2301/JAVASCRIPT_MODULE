/*Función que pida al usuario los grados Centigrados en su localidad
Convertirlos a grados fahrenheit
Retornar el valor y ese valor usarlo para
Arrojar un alert con el resultado
-> convertTemp(25) -> La temperatura es de 77 ºF
-> convertTemp() -> 'Faltan datos'
*/

const temp = parseInt(prompt ("Escribe la temperatura de tu localidad en grados Centigrados: "));

if (temp== NaN) {
    alert("Faltan Datos");    
}

else
function convToFarenheit(a) {
     
    return (a*(9/5))+32;   
}
let tempFar= convToFarenheit (temp);

alert(tempFar);
