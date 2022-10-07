function genIsbn() {
  return parseInt(Math.random() * 10000000000000)
}
const carrito = []

// const stockLibros = async()=>[
//   await fetch("https://jsonplaceholder.typicode.com/posts"),
//   await respuesta.json()
// ]

const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')


