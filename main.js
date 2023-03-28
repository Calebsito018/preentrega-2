let stockProductos = [
  {id: 1, nombre: "Buzo 1", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1200, img: './img/novedades-7.jpeg'},
  {id: 2, nombre: "Buzo 2", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1100, img: './img/hombre-1.jpg'},
  {id: 3, nombre: "Buzo 3", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1200, img: './img/hombre-2.jpeg'},
  {id: 4, nombre: "Buzo 4", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1400, img: './img/hombre-3.jpg'},
  {id: 5, nombre: "Buzo 5", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1200, img: './img/hombre-3.jpg'},
  {id: 6, nombre: "Buzo 6", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1500, img: './img/hombre-4.jpg'},
  {id: 7, nombre: "Remera 1", tipo: "remera", cantidad: 1, desc: "Una remera que re va con vos", precio: 500, img: './img/hombre-5.jpg'},
  {id: 8, nombre: "Remera 2", tipo: "remera", cantidad: 1, desc: "Una remera que re va con vos", precio: 500, img: './img/hombre-6.jpg'},
  {id: 9, nombre: "Remera 3", tipo: "remera", cantidad: 1, desc: "Una remera que re va con vos", precio: 500, img: './img/hombre-7.jpg'},
  {id: 10, nombre: "Remera 4", tipo: "remera", cantidad: 1, desc: "Una remera que re va con vos", precio: 700, img: './img/hombre-8.jpg'},
  {id: 11, nombre: "Remera 5", tipo: "remera", cantidad: 1,desc: "Una remera que re va con vos", precio: 700, img: './img/hombre-2.jpeg'},
  {id: 12, nombre: "Remera 6", tipo: "remera", cantidad: 1, desc: "Una remera que re va con vos", precio: 700, img: './img/novedades-7.jpeg'},
]

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

botonAbrir.addEventListener('click', ()=>{
  contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
  contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
  contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
  event.stopPropagation()
})

const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')){
      carrito = JSON.parse(localStorage.getItem('carrito'))
      actualizarCarrito()
  }
})

botonVaciar.addEventListener('click', () => {
  carrito.length = 0
  actualizarCarrito()
})

stockProductos.forEach((producto) => {
  const div = document.createElement('div')
  div.classList.add('producto')
  div.innerHTML = `
  <img src=${producto.img} alt= "">
  <h3>${producto.nombre}</h3>
  <p>${producto.desc}</p>
  <p class="precioProducto">Precio:$ ${producto.precio}</p>
  <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
  `
  contenedorProductos.appendChild(div)
  const boton = document.getElementById(`agregar${producto.id}`)
  boton.addEventListener('click', () => {
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Agregado',
          showConfirmButton: false,
          timer: 1000
      })
      agregarAlCarrito(producto.id)
  })
})

const agregarAlCarrito = (prodId) => {
  const existe = carrito.some (prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro
  if (existe){ //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
      const prod = carrito.map (prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
          // map encuentre cual es el q igual al que está agregado, le suma la cantidad
          if (prod.id === prodId){
              prod.cantidad++
          }
      })
  } else { //EN CASO DE QUE NO ESTÉ, AGREGAMOS EL CURSO AL CARRITO
      const item = stockProductos.find((prod) => prod.id === prodId)
      carrito.push(item)
  }
  actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId)
  const indice = carrito.indexOf(item) //Busca el elemento q yo le pase y nos devuelve su indice.
  carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos 
  // un elemento 
  actualizarCarrito()
  console.log(carrito)
}

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = ""
  carrito.forEach((prod) => {
      const div = document.createElement('div')
      div.className = ('productoEnCarrito')
      div.innerHTML = `
      <p>${prod.nombre}</p>
      <p>Precio:$${prod.precio}</p>
      <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
      <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
      `
      contenedorCarrito.appendChild(div)
      localStorage.setItem('carrito', JSON.stringify(carrito))
  })
  contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
  console.log(carrito)
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}
