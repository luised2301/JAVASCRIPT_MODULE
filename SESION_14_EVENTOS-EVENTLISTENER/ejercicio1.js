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
