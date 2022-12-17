console.log('Hola desde Js')


let titulo = document.getElementById('titulo')
console.log(titulo)

let subtitulo = document.getElementsByClassName('rojo')

console.log(subtitulo)

console.log(document.getElementsByTagName('h1'))

console.log(document.querySelector('h2'))
console.log(document.querySelectorAll('h2'))


let etiquetaDiv = document.createElement('div')
let texto = document.createTextNode('Elemento creado con Js')

etiquetaDiv.className = 'color-div'; 

document.getElementById('container').appendChild(etiquetaDiv)

etiquetaDiv.appendChild(texto)

// document.getElementById("btn").addEventListener("click", function( event ) {
//   console.log('soy un Click')
//   console.log(event)
//   event.target.innerHTML = 'Clicked!'
// });

function clicked (event) {
  console.log('click desde la funcion')
  alert('Hola soy un alert')
  console.log(event)
}