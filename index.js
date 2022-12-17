console.log('Hola desde Js')


function encabezado() {
  // let encabezado = document.createElement('h1')
  // let texto = document.createTextNode('Soy un encabezado')
  // encabezado.appendChild(texto)
  // encabezado.id = 'encabezado'
  // encabezado.className = 'soy-una-clase'
  // document.querySelector('body').appendChild(encabezado)
  // console.log(document.getElementById('encabezado').classList)
  let contenedor = document.querySelector('body')

  contenedor.innerHTML += `<h1 id="encabezado">Soy un encabezado 2.0</h1>`

}
function parrafo() {
  let parrafo = document.createElement('h1')
  let texto = document.createTextNode('Soy un parrafo')
  parrafo.appendChild(texto)
  parrafo.id = 'parrafo'
  document.querySelector('body').appendChild(parrafo)
  console.log(document.getElementById('parrafo').classList)
}

