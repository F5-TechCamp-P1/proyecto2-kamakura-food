//DEBE contener las funcionalidades del carrito de compras.
//Codigo para mostrar u ocultar el carrito de compras
let botonCarrito = document.getElementById('cart');
let contenedorCarrito = document.getElementById('cart-container');

function conmutarCarrito (){
      if (contenedorCarrito.style.display ==="none") {
      contenedorCarrito.style.display = "block"
     } else { 
      contenedorCarrito.style.display = "none"
     };
};

botonCarrito.addEventListener('click', conmutarCarrito);

//Codigo para añadir productos (basado en video)

const productoEnCarrito = document.getElementsByClassName('cart-container');
const todosLosProductosDelCarrito = document.getElementById('cart-products');
const contenedorProductos = document.getElementById('products')

let platosAnadidos = [];

contenedorProductos.addEventListener('click', e => {
    if (e.target.classList.contains('add-button')) {
        const productoAlCarrito = e.target.parentElement.parentElement;
        
        const informacionDelPlato = {
        cantidad: 1,
        nombre: productoAlCarrito.querySelector('h3').textContent,
        precio: productoAlCarrito.querySelector('h5').textContent,
        }
        
        platosAnadidos = [...platosAnadidos, informacionDelPlato];

        mostrarHTLM();

    }

});

const mostrarHTLM = () => {
    todosLosProductosDelCarrito.innerHTML = "";

    platosAnadidos.forEach(plato => {
        const nombrePrecioContenedor = document.createElement('div');
        nombrePrecioContenedor.className = 'text-container';

        nombrePrecioContenedor.innerHTML = 
                        `<div class="text-container">
                            <h3>${plato.nombre}</h3>
                            <h5>Precio ${plato.precio}</h5>
                        </div>`
        ;

        const cantidadContenedor = document.createElement('div'); 
        cantidadContenedor.className = 'quantity-container'; 
        cantidadContenedor.id = 'quantity'; 
        cantidadContenedor.innerHTML = 
                        `<button>+</button> 
                        <p class="quantity">${plato.cantidad}</p> 
                        <button>-</button>`
        ; 
        
        const productoEnCarrito = document.createElement('div'); 
        productoEnCarrito.className = 'cart-container'; 
        productoEnCarrito.innerHTML = 
                        `<button class="close-button">
                        <img src="./assets/img/close.svg" alt="close">
                        </button>`
        ; 
        
        productoEnCarrito.appendChild(nombrePrecioContenedor); 
        productoEnCarrito.appendChild(cantidadContenedor); 
        todosLosProductosDelCarrito.appendChild(productoEnCarrito);
    })

}



//Esto es un poco lo que había pensado inicialmente con Mabel pero no funciona
/* 
import {products} from "../assets/data/data.js";
import {productoDiv, contenedorProductos} from "../src/menu.js";

let botonAnadir = document.getElementsByClassName('add-button');
let productoEnCarrito = document.getElementsByClassName('text-container');
let platoAnadido = productoEnCarrito[0].getElementsByTagName('h3');
let precioAnadido = productoEnCarrito[0].getElementsByTagName('h5');

contenedorProductos.forEach(productoDiv => {
    function anadirAlCarrito () {
        for (let opcionPlato of products) {
            platoAnadido[0].textContent= opcionPlato.name;
            precioAnadido[0].textContent = opcionPlato.price;
            }
    };
}); 

botonAnadir[0].addEventListener('click', anadirAlCarrito); */
