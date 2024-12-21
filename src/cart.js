// DEBE contener las funcionalidades del carrito de compras.
import { products } from "../assets/data/data.js";
import { recogerInfoParaRecibo } from "./receipt.js";

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

function insertarProductoEnCarrito(producto, cantidad){
      let $contenedorProductosEnCarrito = document.getElementById("cart-products");
      let $plantillaProductoEnCarrito = document.createElement('div');
      $plantillaProductoEnCarrito.className = 'cart-container';

      $contenedorCarrito.style.display = "block"

      $plantillaProductoEnCarrito.innerHTML = `
            <button class="close-button"><img src="./assets/img/close.svg" alt="close"></button>
            <div class="text-container" data-id="${producto.id}">
                  <h3>${producto.name}</h3>
                  <h5 data-price="${producto.price}">${producto.price.toFixed(2)} €</h5>
            </div>
            <div class="quantity-container" id="quantity">
                  <button>+</button>
                  <p class="quantity">${cantidad}</p>
                  <button>-</button>
            </div>`
      $contenedorProductosEnCarrito.append($plantillaProductoEnCarrito);
      recogerInfoParaRecibo();
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

function manejadorDeEventoCarritoModificado(evento) {
      let cantidad = evento.detail.quantity;
      let idProductoEvento = evento.detail.productId;
      let producto = buscarProductoPorId(idProductoEvento);
      let $listaProductosCarrito = $contenedorCarrito.querySelectorAll("[data-id]");

      for (let i = 0; i < $listaProductosCarrito.length; i++) {
            let $productoActual = $listaProductosCarrito[i];

            if (idProductoEvento === parseInt($productoActual.dataset.id)) {
                  return;
            }
      }

      insertarProductoEnCarrito(producto, cantidad);
}

document.addEventListener('carritoModificado', manejadorDeEventoCarritoModificado);

// Eliminar Producto añadido del carrito

document.getElementById("cart-products").addEventListener("click", (evento) => {
      if (evento.target.closest(".close-button")) {
          let $productoDiv = evento.target.closest(".cart-container");
          $productoDiv.remove(); // Elimina solo este producto
            }
  });

// Aumentar el precio mostrado en la ficha del carrito, multiplicando el precio original que viene de data por la cantidad que se muestre en el elemento quantity


// Evento delegador para los botones "+" y "-"
document.getElementById("cart-products").addEventListener("click", (evento) => {
      const $boton = evento.target; 
      let $productoDiv = $boton.closest(".cart-container");
      
      let $cantidad = $productoDiv.querySelector(".quantity"); 
      let cantidadActual = parseInt($cantidad.textContent);
      let $precioElemento = $productoDiv.querySelector(".text-container h5");
      let precioOriginal = parseFloat($precioElemento.dataset.price);
    
 
       if ($boton.textContent === "+") {
          cantidadActual++; 
      
       } else if ($boton.textContent === "-"){
           if (cantidadActual >1){
            cantidadActual--;
            
           } else if (cantidadActual===1){
            $productoDiv.remove();
           } 

       }
       $cantidad.textContent = cantidadActual;
       let subtotal = cantidadActual * precioOriginal;
       $precioElemento.textContent = `${subtotal.toFixed(2)} €`;
      })         
      
   
