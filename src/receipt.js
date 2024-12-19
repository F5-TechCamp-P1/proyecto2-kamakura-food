//Aquí intenta poner las funcionalidades del recibo
//recoger los datos del carrito en el recibo
let $contenedorRecibo = document.getElementById('receipt-container');
let $botonVerRecibo = document.getElementById('proceedPay-button');

function recogerInfoParaRecibo(){
    $contenedorRecibo.innerHTML = " ";

    //Sé que acá tengo que hacer un forEach... algo así como: $plantillaProductoEnCarrito.forEach(plantilla => {
    let $productoRecibo = document.createElement('div');
    $productoRecibo.className = 'receipt-product';
    $productoRecibo.className.innerHTML =
                    `<h3>Título</h3>
                    <div class="receipt-price">
                        <p>Cantidad: 1</p>
                        <h5>Subtotal €</h5>
                    </div>`; //No sé cómo recuperar los valores
    $contenedorRecibo.appendChild($productoRecibo);

    let $totalRecibo = document.getElementById('receipt-total');
    $totalRecibo.textContent = //No sé cómo recuperar los valores ;

    //});

};

document.addEventListener('carritoModificado', recogerInfoParaRecibo);

//mostrar recibo

function mostrarRecibo(){
    if ($contenedorRecibo.style.display === "none" || $contenedorRecibo.style.display === "" ) {
        $contenedorRecibo.style.display = "block"
       } else {
        $contenedorRecibo.style.display = "none";
       }
}

$botonVerRecibo.addEventListener('click', mostrarRecibo)
