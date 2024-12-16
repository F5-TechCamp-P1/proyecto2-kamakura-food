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
      let $plantillaProductoEnCarrito = $contenedorProductosEnCarrito.getElementsByClassName("cart-container")[0];
      let $textContainer = $plantillaProductoEnCarrito.getElementsByClassName("text-container")[0];

      $contenedorCarrito.style.display = "block"

      $plantillaProductoEnCarrito.innerHTML = `
            <button class="close-button"><img src="./assets/img/close.svg" alt="close"></button>
            <div class="text-container">
                  <h3>${producto.name}</h3>
                  <h5>${producto.price.toFixed(2)} €</h5>
            </div>
            <div class="quantity-container" id="quantity">
                  <button>+</button>
                  <p class="quantity">1</p>
                  <button>-</button>
            </div>`
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

//Disminuye la cantidad deproductos en el carrito

let $divDeBotonesDeCantidad = document.getElementById('quantity');//Acceso al div que tiene los botones
let $botonesDeCantidad = $divDeBotonesDeCantidad.getElementsByTagName('button');//Acceso a los botones
let $botonDisminuir = $botonesDeCantidad[1];//Acceso al segundo
let $conteoDeCantidad = $divDeBotonesDeCantidad.getElementsByTagName('p')//Acceso al segundo boton que es el de resta

let cantidad = 1

function disminuir () {
      cantidad--;
      $conteoDeCantidad[0].textContent = cantidad;
};
 //Así tiene que ser la funcion pero para poder probar tdv permitimos los numeros negativos
/* function disminuir () {
      if (cantidad > 0) {
      cantidad--;
      $conteoDeCantidad[0].textContent = cantidad;
};
} */

$botonDisminuir.addEventListener('click', disminuir)
