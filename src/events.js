// Intenta separar los eventos en este archivo.

// EVENTO que abre y cierra el carrito
import { conmutarCarrito } from "./cart.js";

let $botonCarrito = document.getElementById('cart');

$botonCarrito.addEventListener('click', conmutarCarrito);

//
