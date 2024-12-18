//Aquí intenta poner las funcionalidades del recibo


const $botonProcederPago = document.getElementById("pay-button");

$botonProcederPago.addEventListener("click", () => {
    actualizarRecibo();
    alert("El recibo ha sido generado correctamente.");
});