function recuperoCarrito() {

    if (miCarrito = JSON.parse(localStorage.getItem("carrito"))) {
        miCarrito.forEach(prod => {
            carrito.push(prod)
            actualizarCarrito()
        });
    }
}

function cargarProductos() {
    stockLibros.forEach((producto) => {

        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.titulo}</h3>
    <p>${producto.desc}</p>
    <p>Autor: ${producto.autor}</p>
    <p class="precio-producto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.isbn}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
        contenedorProductos.appendChild(div)
        const boton = document.getElementById(`agregar${producto.isbn}`)

        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.isbn)
        })
    })
}

botonVaciar.addEventListener("click", () => {
    carrito.length = 0
    actualizarCarrito()
    localStorage.removeItem("carrito");
})

cargarProductos()

const agregarAlCarrito = (prodId) => {

    const existe = carrito.some(prod => prod.isbn === prodId)
    if (existe) {
        const prod = carrito.map(prod => {
            // prod.isbn === prodId && prod.cantidad++
            if (prod.isbn === prodId) {
                prod.cantidad++
            }
        })
    } else {
        const item = stockLibros.find((prod) => prod.isbn === prodId)
        carrito.push(item)
    }

    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    debugger
    const item = carrito.find((prod) => prod.isbn === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement("div")
        div.className = ("productoEnCarrito")
        div.innerHTML = `
        <p>${prod.titulo}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.isbn})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem("carrito", JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)

}

recuperoCarrito()