// const borrarItem = document.getElementById('borrar-item')

// const prodTodos = document.getElementsByClassName('tipo-libro')
const productosTodos = document.getElementsByClassName("producto")

const prodTipoManga = document.getElementsByClassName('tipo-manga')
const prodTipoLibro = document.getElementsByClassName('tipo-libro')
const prodTipoArtbook = document.getElementsByClassName('tipo-artbook')

const btnTodos = document.querySelector("#btn-todos")
const btnMangas = document.querySelector("#btn-mangas")
const btnLibros = document.querySelector("#btn-libros")
const btnArtbooks = document.querySelector("#btn-artbook")

btnTodos.addEventListener('click', mostrarTodo)
btnMangas.addEventListener('click', mostrarMangas)
btnLibros.addEventListener('click', mostrarLibros)
btnArtbooks.addEventListener('click', mostrarArtbooks)

function mostrarTodo() {
  for (const prod of productosTodos) {
    prod.classList.remove('showProducto');
    prod.classList.remove('hideProducto');
  }

  for (const prod of prodTipoManga) {
    prod.classList.add('showProducto');
  }
}

function mostrarMangas() {
  for (const prod of productosTodos) {
    prod.classList.add('hideProducto');
    prod.classList.remove('showProducto');
  }

  for (const prod of prodTipoManga) {
    prod.classList.add('showProducto');
  }
}

function mostrarLibros() {
  for (const prod of productosTodos) {
    prod.classList.add('hideProducto');
    prod.classList.remove('showProducto');
  }

  for (const prod of prodTipoLibro) {
    prod.classList.add('showProducto');
  }
}

function mostrarArtbooks() {
  for (const prod of productosTodos) {
    prod.classList.add('hideProducto');
    prod.classList.remove('showProducto');
  }

  for (const prod of prodTipoArtbook) {
    prod.classList.add('showProducto');
  }
}

