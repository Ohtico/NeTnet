
//cargar tarjeta


import { data } from './data.js';

const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const items = document.getElementById('items');



// document.getElementById para capturar el contenido y queda en la constante

//document.addEventListener escucha y controla los eventos
document.addEventListener('DOMContentLoaded', () => {
    cargarData(data);
})

//creamos una funcion para cargar la data
// data.foreach para recorrer vectores
const cargarData = data => {
    console.log(data);
    data.forEach(heroe => {
        //destruturacion de objeto
        const { id, nombre, image, } = heroe;
        templateCard.querySelector('h5').textContent = nombre;
        templateCard.querySelector('img').setAttribute('src', image);
          

        //clonar el template
        const clone = templateCard.cloneNode(true);

        fragment.appendChild(clone);
    })
    items.appendChild(fragment)
}


/*function getValue(id){
    return data.find(v => v.id == id)
  }
  
  let pelicula = getValue(8)
  let nombre = pelicula.nombre
  let image = pelicula.image
  let sipnosis = pelicula.sipnosis
  alert (nombre + sipnosis)

   
*/