// Declarar (y probar) una funcion que dado un string, nos filte los usaurios contenido en un array
// Buscar las coincidencias en los campos -> "name" "username" "email" 
// ! Paso a paso para su uso 
    // ? Instanciamos nuestro objeto
    const xRe = new XMLHttpRequest()
    // console.log(xRe)
    let users = [];
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
                users = result;
            }
            else if (data.target.status === 400)    {
                console.log('sucedio un error')
            }
        }
    } 
    console.log(users)
    //? Abrir y setear nuestra peticion 
    //? request.open(<Metodo htto>, <Direccion objetivo>)

    xRe.open("GET", "https://dummyjson.com/users", false)
    // console.log(xRe)

    //? Enviar nuestra peticion 
    xRe.send()





const filterUSers = (str) => {
  let strF = str.toLowerCase()
  let usuariosFiltrados = users.users.filter((user)=> {

      if(
          user.firstName.toLocaleLowerCase().match(strF) ||
          user.username.toLocaleLowerCase().match(strF) ||
          user.email.toLocaleLowerCase().match(strF)
          ) {
          return user
      }

  })

  return usuariosFiltrados
}

// ? Se hace la construccion de la tabla en HTML con la info del Array original//

let tableBody = document.querySelector("#table_body")

let tableInfo = users.users.reduce((ac,cv, i)=>{
cv = `
<tr>
<th scope="row">${users.users[i].id}</th>
<td>${users.users[i].firstName}</td>
<td>${users.users[i].username}</td>
<td>${users.users[i].email}</td>
</tr>`
console.log(ac)
return ac+cv
},"");

tableBody.innerHTML = tableInfo



//! Parte 2 
/* Escuchar algun evento en el input y llamar a la funcion de filtrado cuando se detone el evento en el boton "buscar" 
con el valor del mismo y hacerle console.log() */

// ? Tomando elemento input
let input = document.querySelector('.input_text')

// ? Tomando elemento boton "buscar"
let findInput = document.querySelector('#find_input')


// ? Agregando evento "input" al boton para ejecutar el filtrado cuando se detono el mismo
findInput.addEventListener('input', () =>{
  let strToFilter = input.value
  console.log(strToFilter)


    // ? Ejecutando el filtrado
   let result = filterUSers(strToFilter)



    // ? Imprimiendo el resultado en consola 
   console.log(result)


    // ? Con esta funcion se reconstruye la tabla con el filtrado de texto   
   let tableInfofiltered = result.reduce((ac,cv, i)=>{
    cv = `
    <tr>
    <th scope="row">${result[i].id}</th>
    <td>${result[i].firstName}</td>
    <td>${result[i].username}</td>
    <td>${result[i].email}</td>
    </tr>`
    console.log(ac)
    return ac+cv
    },"");
    tableBody.innerHTML = tableInfofiltered
})

