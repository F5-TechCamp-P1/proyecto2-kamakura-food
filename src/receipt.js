//Aquí intenta poner las funcionalidades del recibo

let precioTotal = document.getElementById("cart-total");
export function actualizarPrecioTotal(precio) {
    precioTotal.innerHTML = `Total: ${precio.toFixed(2)} €`;
}