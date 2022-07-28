const requestGetPosts = (url) => {
    const httpRequest = new XMLHttpRequest();
    let result = [];
    httpRequest.onload = (data) => {
        result = JSON.parse(data.target.responseText);
        // console.log(result)
    };

    httpRequest.open("GET", url, false);
    httpRequest.send();
    return result;
};
const infoPost = requestGetPosts("https://luiserdz-database-default-rtdb.firebaseio.com/post.json");
const posts = Object.values(infoPost);
console.log(infoPost);
console.log(posts);
let cardBody = document.querySelector("#post-cards");
let cardInfo = posts.reduce((ac,cv, i)=>{

    ac += `<div class="col">
    <div class="card border-primary text-bg-light">
      <div class="card-body">
        <h5 class="card-title">${cv.titulo}</h5>
        <p class="card-text">${cv.Body}</p>
        <p class="card-text"><small class="text-muted">${cv.Date}</small></p>
      </div>
    </div>
  </div>`
    return ac;
    },"");
cardBody.innerHTML = cardInfo;