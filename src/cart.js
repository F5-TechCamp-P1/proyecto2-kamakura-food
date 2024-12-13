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