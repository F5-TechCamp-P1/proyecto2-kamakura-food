//Aquí intenta poner las funcionalidades del recibo
//recoger los datos del carrito en el recibo
let $contenedorRecibo = document.getElementById('receipt-container'); 

function recogerInfoParaRecibo() { 
      $contenedorRecibo.innerHTML = ""; 
      let productosEnCarrito = document.querySelectorAll('.cart-container'); 
      productosEnCarrito.forEach(producto => { 
            let nombre = producto.querySelector('h3').textContent; 
            let cantidad = producto.querySelector('.quantity').textContent; 
            let subtotal = producto.querySelector('h5').textContent; 
            
            let $productoRecibo = document.createElement('div'); 
            $productoRecibo.className = 'receipt-product'; 
            $productoRecibo.innerHTML = ` <h3>${nombre}</h3> 
                                          <div class="receipt-price"> 
                                                <p>Cantidad: ${cantidad}</p> 
                                                <h5>Subtotal: ${subtotal}</h5> 
                                          </div>`; 
            $contenedorRecibo.appendChild($productoRecibo); });

    let totalEnCarrito = document.getElementById('cart-total').textContent;
    let $totalRecibo = document.createElement('h3')
    $totalRecibo.id = 'receipt-total';
    $totalRecibo.innerHTML = `<p>${totalEnCarrito}</p>`;    
    $contenedorRecibo.appendChild($totalRecibo);
};

document.getElementById("cart-products").addEventListener("click", (evento) => { if (evento.target.closest(".close-button") || evento.target.textContent === "+" || evento.target.textContent === "-") { recogerInfoParaRecibo(); } });

//mostrar recibo (funciona, pero hay que comentar la funcion anterior)
let $botonVerRecibo = document.getElementById('proceedPay-button');

function conmutarRecibo(){
    if ($contenedorRecibo.style.display === "none" || $contenedorRecibo.style.display === "" ) {
        $contenedorRecibo.style.display = "block"
       } else {
        $contenedorRecibo.style.display = "none";
       }
}

$botonVerRecibo.addEventListener('click', conmutarRecibo);

export {recogerInfoParaRecibo};

