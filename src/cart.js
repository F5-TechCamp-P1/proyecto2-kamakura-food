// DEBE contener las funcionalidades del carrito de compras.
import { products } from "../assets/data/data.js";

let botonCarrito = document.getElementById('cart');
let contenedorCarrito = document.getElementById('cart-container');

function conmutarCarrito (){
      if (contenedorCarrito.style.display === "none" || contenedorCarrito.style.display === "" ) {
      contenedorCarrito.style.display = "block"
     } else {
      contenedorCarrito.style.display = "none";
     }
}

botonCarrito.addEventListener('click', conmutarCarrito);

// Añade pedidos de productos al carrito de compras.

function rellenarPlantillaProductoEnCarrito(producto){
      let $contenedorProductosEnCarrito = document.getElementById("cart-products");
      let $plantillaProductoEnCarrito = $contenedorProductosEnCarrito.getElementsByClassName("cart-container")[0];
      let $textContainer = $plantillaProductoEnCarrito.getElementsByClassName("text-container")[0];
      let $nombreProducto = $textContainer.getElementsByTagName("h3")[0];
      let $precioProducto = $textContainer.getElementsByTagName("h5")[0];

      $nombreProducto.innerText = producto.name;
      $precioProducto.innerText = producto.price.toFixed(2) + ' €';
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




//Eliminar Producto añadido del carrito 

document.getElementById("cart-products").addEventListener("click", (evento) => {
      if (evento.target.closest(".close-button")) {
          let $productoDiv = evento.target.closest(".cart-container");
          $productoDiv.remove(); // Elimina solo este producto
            }
  }); 