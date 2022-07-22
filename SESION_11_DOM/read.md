La DOM es una representacion grafica logica del archivo.

////// ! Seleccionar elementos 
// ? Seleccionar por id 
// let test = document.getElementById('titulo');

// ? Seleccionar por tag -> Multiples coincidencias
// let test = document.getElementsByTagName('h1')

// ? Seleccionar por clase  -> Multiples coincidencias
// let test = document.getElementsByClassName('claseTest')

// ! Seleccion por query id, clase  y tag -> Unica Coincidencia

// ? Seleccionar por id 
// let test = document.querySelector('#titulo') 

// ? Seleccionar por clase 
// let test = document.querySelector('.claseTest') 


// ? Seleccion por tag 
// let test = document.querySelector('h1') 

// ! Seleccionar multiples conincidencias por query
// let test2 = document.querySelectorAll('h1')

// * -------------------------------------
// ? 1 Seleccionar el elemento 

let parrafo = document.getElementById('parrafo')
console.log(parrafo)

// ! Setear atributo
    // setAttribute(<nombre attributo>,<valor>)
    parrafo.setAttribute('hidden', true)

// ! Obtener  atributos
    // getAttribute(<nombre atributo>)
    console.log(parrafo.getAttribute('id'))

// ! Comprobar la existencia de atributos
    // hasAtrribute(<nombre atributo>)
    console.log(parrafo.hasAttribute('hidden'))

// ! Eliminar atributos
    // removeAttribute(<nombre del atributo>)
    parrafo.removeAttribute('hidden')


se crea y pobla una tabla desde javascript


    <table>
        <thead>
            <th>

            </th>
        </thead>
        <tbody>
            <tr>
                <td>
                    
                </td>
            </tr>
        </tbody>
    </table>