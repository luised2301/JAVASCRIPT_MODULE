// Dado el siguiente lleva a cabo las las operaciones indicadas

const player = {
 name: "Eduardo",
 score: 88888,
 level: 7,
 lives: 2,
 vitalEnergy: 100,
 isAlive: true,
 damage: 125,
};
 
if (player.isAlive  == true  ){
    console.log("El estatus del jugador es el siguiente");
    console.log (player);
}
 
 
 
// ! 1 Jugador recibe un golpe crítico que le resta 25 puntos de energía vital "vital Energy"
// Realizar código para llevar a cabo las operaciones
console.log(`El jugador ${player.name} ha recibido un golpe critico de ${player.damage} puntos`)

player.vitalEnergy= player.vitalEnergy-player.damage

console.log(`Su nivel de energia ha bajado a ${player.vitalEnergy} `)

 
// ! 2 Si la energía vital del jugador es menor a 0 pasado "isAlive" = false

player.vitalEnergy  <=0 ? player.isAlive=false : player.isAlive=true



// ! 3 Revisamos nuestro jugador
player.isAlive  == false  ?  console.log("El jugador ha muerto!") : console.log ("Sigue vivo!")

 
// ! 4  Si No está vivo pero tienen más vidas entonces -> Puntaje = 0, Vida -1, nivel = 0, energia vital = 100
// Realizar código para llevar a cabo las operaciones

if (player.isAlive  == false && player.lives >=1 ){
    player.score= 0000;
    player.lives = player.lives-1;
    player.vitalEnergy =100;
    player.isAlive= true;
    console.log(`${player.name} ha resucitado, le quedan ${player.lives} vidas`)
       };
       if (player.isAlive  == true  ){
        console.log("El estatus del jugador es el siguiente");
        console.log (player);
    }