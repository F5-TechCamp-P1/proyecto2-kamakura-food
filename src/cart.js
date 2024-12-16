// DEBE contener las funcionalidades del carrito de compras.
import { products } from "../assets/data/data.js";

let $botonCarrito = document.getElementById('cart');
let $contenedorCarrito = document.getElementById('cart-container');


function conmutarCarrito (){
      if ($contenedorCarrito.style.display === "none" || $contenedorCarrito.style.display === "" ) {
      $contenedorCarrito.style.display = "block"
     } else {
      $contenedorCarrito.style.display = "none";
     }
}

$botonCarrito.addEventListener('click', conmutarCarrito);

// Añade pedidos de productos al carrito de compras.

function rellenarPlantillaProductoEnCarrito(producto){
      let $contenedorProductosEnCarrito = document.getElementById("cart-products");
   //Revisar desde aqui /////
      let $nuevoProductoEnCarrito = document.createElement("div");
      $nuevoProductoEnCarrito.className = "cart-container";
      $contenedorCarrito.style.display = "block"

      $nuevoProductoEnCarrito.innerHTML = `
            <button class="close-button"><img src="./assets/img/close.svg" alt="close"></button>
            <div class="text-container">
                  <h3>${producto.name}</h3>
                  <h5>${producto.price.toFixed(2)} €</h5>
            </div>
            <div class="quantity-container" id="quantity">
                  <button>+</button>
                  <p class="quantity">1</p>
                  <button>-</button>
            </div>`;

      $contenedorProductosEnCarrito.appendChild($nuevoProductoEnCarrito);
}

function buscarProductoPorId(id) {
      for (let i = 0; i < products.length; i++) {
            let productoActual = products[i];

            if (productoActual.id === id) {
                  return productoActual;
            }
      }

      return {
            name: 'El producto no existe',
            price: 0,
      }
}

function manejadorDeEventoProductoAnadido(evento) {
      let idProductoEvento = evento.detail.productId;
      let producto = buscarProductoPorId(idProductoEvento);

      rellenarPlantillaProductoEnCarrito(producto);
}

document.addEventListener('productoAnadido', manejadorDeEventoProductoAnadido);

