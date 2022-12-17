console.log('Hola desde Js')

function clicked (event) {
  console.log('click desde la funcion')
  alert('Hola soy un alert')
  console.log(event)
}

// localStorage 
localStorage.setItem('miGato', 'Juan')
let cat = localStorage.getItem('miGato')
console.log(cat)
// localStorage.removeItem('miGato')
// localStorage.clear()

function guardar() {
  let inputValue = document.getElementById('inputText').value
  let nombres = JSON.parse(localStorage.getItem('nombres')) ? JSON.parse(localStorage.getItem('nombres')) : []
  console.log(inputValue)
  nombres.push(inputValue)
  console.log(nombres)
  console.log(JSON.stringify(nombres))
  localStorage.setItem('nombres', JSON.stringify(nombres))
  document.getElementById('inputText').value = ''
  render()
}

function render() {
  let lista = document.getElementById('lista')
  let nombres = JSON.parse(localStorage.getItem('nombres')) ? JSON.parse(localStorage.getItem('nombres')) : [] 
  console.log(nombres)
  lista.innerHTML = ''
  nombres.forEach((element, index) => {
    console.log(index)
    lista.innerHTML += `
      <p> ${element} </p>
      <button onclick="borrar(${index})" >x</button>
    `
  });
}

function borrar(position) {
  let nombres = JSON.parse(localStorage.getItem('nombres')) ? JSON.parse(localStorage.getItem('nombres')) : [] 
  console.log(nombres.splice(position, 1))
  console.log(JSON.stringify(nombres))
  localStorage.setItem('nombres', JSON.stringify(nombres))
  render()
  console.log('borrado')
}

render()



