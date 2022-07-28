

    // ? Instanciamos nuestro objeto
    const xRe = new XMLHttpRequest()
    let posts = []
    // ? Definir un callback en nuestro evento onload 
        xRe.onload = (data) => {
            console.log(data)
            if (data.target.readyState === 4)   {
                if (
                    data.target.status >= 200 ||
                    data.target.status <= 399 
                    ){
                    // console.log(data.target.responseText)
                    let result = JSON.parse(data.target.responseText)
                    console.log(result)
                    posts = result
                  
                }
                else if (data.target.status === 400)    {
                    console.log('sucedio un error')
                }
            }
        } 
        

    //? Abrir y setear nuestra peticion 
    //? request.open(<Metodo htto>, <Direccion objetivo>)

    xRe.open("GET", "https://dummyjson.com/posts", false)
    xRe.send()





    let tableBody = document.querySelector("#table_body")

    let tableInfo = posts.posts.reduce((ac,cv, i)=>{
    cv = `
    <div class="card m-3" style="width: 18rem;">
          <img src="https://picsum.photos/200/300?random=${posts.posts[i].userId}" class="img-thumbnail" alt="...">
          <div class="link-dev d-flex flex-row px-5">
              <
              <div class="profile-name">
                  <a href="https://dev.to/ben" class="name-profile fw-bold">Author: ${posts.posts[i].userId}</a>
                  <span class="for">for</span>
                  <a href="https://dev.to/devteam" class="team-dev">${posts.posts[i].userId}s Team</a>
              </div>
          </div>
          <div class="card-title text-styles">
              <h1>${posts.posts[i].title}</h1>
              <a href="https://dev.to/t/git" class="git-tag ">${posts.posts[i].tags}</a>
          </div>
          <div class="card-text">
          ${posts.posts[i].body}
          </div>
          
                <div class="twitter-dev">
                  <a href="https://dev.to/thepracticaldev">
                      @thepracticaldev</a>
                </div>
                <div class="twitter-logo">
                  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--ir1kO05j--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/twitter-f95605061196010f91e64806688390eb1a4dbc9e913682e043eb8b1e06ca484f.svg" alt="Twitter-log">
                </div>
                <div class="twitter-actions">
                  <a href="https://tiwitter.com/intent/twet?in reply to=762709515133485056">
                      <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--fFnoeFxk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/twitter-reply-action-238fe0a37991706a6880ed13941c3efd6b371e4aefe288fe8e0db85250708bc4.svg" alt="coment">
                  </a>
                  <a href="https://twitter.com/intent/retweet?tweet_id=762709515133485056">
                      <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--k6dcrOn8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/twitter-retweet-action-632c83532a4e7de573c5c08dbb090ee18b348b13e2793175fea914827bc42046.svg" alt="">
                  </a>
                  <a href="https://twitter.com/intent/like?tweet_id=762709515133485056">
                      <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--SRQc9lOp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/twitter-like-action-1ea89f4b87c7d37465b0eb78d51fcb7fe6c03a089805d7ea014ba71365be5171.svg" alt="">
                  </a>
                </div>
              </div>
            </div>
         
      </div>`
    
    return ac+cv
    },"");
    
    tableBody.innerHTML = tableInfo
    
    const CreateUser = (user)=>{
        const httRequest = new XMLHttpRequest()

        httRequest.onload = (e) =>{
            console.log(e.target.responseText)
        }
        httRequest.open ("POST","https://luiserdz-database-default-rtdb.firebaseio.com/post.json", false)

        let userJson = JSON.stringify(user)
        
        httRequest.send(userJson)   
    }






//? Con esto se crean 10 post en mi DB
// for (let index = 1; index < 11; index++) {
//     const postToCreate = {
//     titulo: `Este es mi post numero ${index}` ,
//     Body: "yo soy en contenido del post y puedo tener muchos caracteres" ,
//     Date: `${index}/27/22`
//     }
//     CreateUser(postToCreate)
    
// }