function genIsbn() {
  return parseInt(Math.random() * 10000000000000)
}
const carrito = []

const stockLibros = [
  { isbn: genIsbn(), titulo: "libro 1", tipo: "libro", cantidad: 1, desc: "Desc", precio: 1200, autor: "autor ", img: './img/stock/Attack_on_Titan_Lost_Girls_(novel).jpg' },
  { isbn: genIsbn(), titulo: "libro 2", tipo: "libro", cantidad: 1, desc: "Desc", precio: 1100, autor: "autor ", img: './img/stock/Back_When_You_Called_Us_Devils_Volume_13.jpg' },
  { isbn: genIsbn(), titulo: "libro 3", tipo: "libro", cantidad: 1, desc: "Desc", precio: 1200, autor: "autor ", img: './img/stock/Cardcaptor_Sakura_Clear_Card_Volume_11.jpg' },
  { isbn: genIsbn(), titulo: "libro 4", tipo: "libro", cantidad: 1, desc: "Desc", precio: 1400, autor: "autor ", img: './img/stock/DAYS_Volume_29.jpg' },
  { isbn: genIsbn(), titulo: "libro 5", tipo: "libro", cantidad: 1, desc: "Desc", precio: 1200, autor: "autor ", img: './img/stock/Hagakure.jpg' },
  { isbn: genIsbn(), titulo: "libro 6", tipo: "libro", cantidad: 1, desc: "Desc", precio: 1500, autor: "autor ", img: './img/stock/Harem_Marriage_Volume_17.jpg' },
  { isbn: genIsbn(), titulo: "libro 7", tipo: "libro", cantidad: 1, desc: "Desc", precio: 500, autor: "autor ", img: './img/stock/Koigakubo-kun_Stole_My_First_Time_Volume_1.jpg' },
  { isbn: genIsbn(), titulo: "libro 8", tipo: "libro", cantidad: 1, desc: "Desc", precio: 500, autor: "autor ", img: './img/stock/Musashi.jpg' },
  { isbn: genIsbn(), titulo: "libro 9", tipo: "libro", cantidad: 1, desc: "Desc", precio: 500, autor: "autor ", img: './img/stock/Nighttime_for_Just_Us_Two_Volume_2.jpg' },
  { isbn: genIsbn(), titulo: "libro 10", tipo: "libro", cantidad: 1, desc: "Desc", precio: 700, autor: "autor ", img: './img/stock/OTOMO_A_Global_Tribute_to_the_Mind_Behind_Akira.jpg' },
  { isbn: genIsbn(), titulo: "libro 11", tipo: "libro", cantidad: 1, desc: "Desc", precio: 700, autor: "autor ", img: './img/stock/Seraph_of_the_End_Guren_Ichinose_Resurrection_at_Nineteen_Volume_1.jpg' },
  { isbn: genIsbn(), titulo: "libro 12", tipo: "libro", cantidad: 1, desc: "Desc", precio: 700, autor: "autor ", img: './img/stock/Taiko.jpg' },
  { isbn: genIsbn(), titulo: "libro 13", tipo: "libro", cantidad: 1, desc: "Desc", precio: 900, autor: "autor ", img: './img/stock/The_Blade_of_the_Courtesans.jpg' },
  { isbn: genIsbn(), titulo: "libro 14", tipo: "libro", cantidad: 1, desc: "Desc", precio: 1400, autor: "autor ", img: './img/stock/The_Seven_Deadly_Sins_Seven-Colored_Recollections.jpg' },
  { isbn: genIsbn(), titulo: "libro 15", tipo: "libro", cantidad: 1, desc: "Desc", precio: 7000, autor: "autor ", img: './img/stock/Your_Lie_in_April_A_Six-Person_Etude.jpg' },
  { isbn: genIsbn(), titulo: "libro 16", tipo: "libro", cantidad: 1, desc: "Desc", precio: 777, autor: "autor ", img: './img/stock/Ring.jpg' },
  { isbn: genIsbn(), titulo: "libro 17", tipo: "libro", cantidad: 1, desc: "Desc", precio: 234, autor: "autor ", img: './img/stock/Shield_of_Straw.jpg' },
  { isbn: genIsbn(), titulo: "libro 18", tipo: "libro", cantidad: 1, desc: "Desc", precio: 155600, autor: "autor ", img: './img/stock/The_Eternal_Zero.jpg' },
  { isbn: genIsbn(), titulo: "libro 19", tipo: "libro", cantidad: 1, desc: "Desc", precio: 1600, autor: "autor ", img: './img/stock/Lala_Pipo.jpg' },
  { isbn: genIsbn(), titulo: "libro 20", tipo: "libro", cantidad: 1, desc: "Desc", precio: 3200, autor: "autor ", img: './img/stock/Lala_Pipo.jpg' },
  { isbn: genIsbn(), titulo: "libro 21", tipo: "libro", cantidad: 1, desc: "Desc", precio: 2300, autor: "autor ", img: './img/stock/DAYS_Volume_29.jpg' },
  { isbn: genIsbn(), titulo: "libro 22", tipo: "libro", cantidad: 1, desc: "Desc", precio: 5600, autor: "autor ", img: './img/stock/Cardcaptor_Sakura_Clear_Card_Volume_11.jpg' },
  { isbn: genIsbn(), titulo: "libro 23", tipo: "libro", cantidad: 1, desc: "Desc", precio: 1700, autor: "autor ", img: './img/stock/Back_When_You_Called_Us_Devils_Volume_13.jpg' },
  { isbn: genIsbn(), titulo: "libro 24", tipo: "libro", cantidad: 1, desc: "Desc", precio: 800, autor: "autor ", img: './img/stock/Hagakure.jpg' },
]

const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const confirmVaciarCarrito = document.getElementsById('confirm-vaciar-carrito');

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')


