//! 1 Menejo de envento en el boton "show Card"
// Pasos
// 1. Seleccionar el holder de la card
// 2. seleccionar quien detona el evento
// 3. agregar un listener al detonador
// 4. insertar html al holder
// 5. Opcional insertar elemento en el card para eliminarla

const btn = document.querySelector("#btn1");
const card_holder = document.querySelector("#card_holder");
var cardOnDisplay = false;

btn.addEventListener( 'click', ()=>{
    console.log("click")
    if (cardOnDisplay == false){
        console.log("muestrate")
        
        card_holder.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="https://img2.rtve.es/i/?w=1600&i=1614352808020.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Meme Card</h5>
      <p class="card-text">Aqui un meme.</p>
      <a href="#" class="btn btn-primary">Ya vi el meme</a>
    </div>
    </div>`;
    return cardOnDisplay=true;
    }
    else{
        console.log("ocultate")
        card_holder.innerHTML = ``;
        return cardOnDisplay=false;
        
    }
});


// !2 Manejo de envento en el input "inserte texto"
// pasos
// 1. Seleccionar el holder de la card
// 2. seleccionar quien detona el evento
// 3. agregar un listener al detonador
// 4. insertar html al holder cuando se detono el evento
// 5. Opcional insertar evento en boton "limpiar campo" para limpiar el input

const textInput = document.querySelector("#text_input");
const clean = document.querySelector("#clean");
const textHolder = document.querySelector("#text_holder");

textInput.addEventListener( 'input', ()=>{
    console.log(textInput.value)
    textHolder.innerHTML = `Este es tu texto: ${textInput.value}`;
})

clean.addEventListener( 'click', ()=>{
    console.log("limpiate");
    textHolder.innerHTML = ``;
    textInput.value="";
});

// ! 3 Mouse Events
// Pasos
// 1. Seleccionar el holder de la card
// 2. seleccionar quien detona el evento
// 3. agregar un listener al detonador
// 4. insertar html al holder cuando se detono el evento
// 5. De alguna forma limpiar el holder despues de algunos segundos. hint -> setTimeout

onmouseenter

const mouseArea = document.querySelector("#mouse_area");
const imgHolder = document.querySelector("#img_holder");

mouseArea.addEventListener( 'click', ()=>{
    console.log("muestra gif");
    imgHolder.innerHTML = `<iframe src="https://giphy.com/embed/eIyLWKRBIuKOKdKMjL" width="480" height="370">`;
    setTimeout(()=>{
        imgHolder.innerHTML = ``;;
    }, 2000);

});
mouseArea.addEventListener( 'click', ()=>{
    console.log("oculta gif despues de 2 segundos");
    setTimeout(()=>{
        imgHolder.innerHTML = ``;;
    }, 2000);

});