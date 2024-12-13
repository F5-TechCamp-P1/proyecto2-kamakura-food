//DEBE contener las funcionalidades del carrito de compras.
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

import {products} from "../assets/data/data.js";
import {productoDiv, contenedorProductos} from "../src/menu.js";

let botonAnadir = document.getElementsByClassName('add-button');
let productoEnCarrito = document.getElementsByClassName('text-container');
let platoAnadido = productoEnCarrito[0].getElementsByTagName('h3');
let precioAnadido = productoEnCarrito[0].getElementsByTagName('h5');

contenedorProductos.forEach(productoDiv => {
    function anadirAlCarrito () {
    platoAnadido[0].textContent = ;
    precioAnadido[0].textContent = ;
};

});

botonAnadir[0].addEventListener('click', anadirAlCarrito);
