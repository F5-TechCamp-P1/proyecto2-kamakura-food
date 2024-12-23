import {products} from '../assets/data/data.js';
import {filters} from '../assets/data/data.js';
import * as funcion from './searcher.js';

// DEBE imprimir en pantalla la información de filtros.
function mostrarFiltros(contenedorFiltros, listaFiltros){
    contenedorFiltros.innerHTML = '';
    listaFiltros.forEach(filter => {
        let filtroSection = document.createElement('div');
          filtroSection.innerHTML = `
          <button class="filter">${filter}</button>`;
      contenedorFiltros.appendChild(filtroSection);
    });
}

// DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.
export function mostrarProductos(contenedorProductos, listaProductos) {
    contenedorProductos.innerHTML = '';
    listaProductos.forEach(product => {
        let $productoDiv = document.createElement('div');
            $productoDiv.className = 'product-container';
            $productoDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
                <div class="price-container">
                <h5>Precio: €${product.price.toFixed(2)}</h5>
                    <button class="add-button" data-id="${product.id}">Añadir</button>
                </div>
            `;
        contenedorProductos.appendChild($productoDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {

    let $contenedorFiltros = document.getElementById('filters');
    let $contenedorProductos = document.getElementById('products');
    mostrarFiltros($contenedorFiltros, filters);
    mostrarProductos($contenedorProductos, products);
    $contenedorProductos.addEventListener('click', enviarProductoAlCarrito);

    let botonesFiltros = document.getElementsByClassName('filter');
    botonesFiltros[0].addEventListener('click', funcion.filtrarTodos);
    botonesFiltros[1].addEventListener('click', funcion.filtrarRamen);
    botonesFiltros[2].addEventListener('click', funcion.filtrarSushi);
    botonesFiltros[3].addEventListener('click', funcion.filtrarEntradas);
    botonesFiltros[4].addEventListener('click', funcion.filtrarPostres);

});

// Dar funcionalidad al botón Añadir para que mande los productos al carrito.
function enviarProductoAlCarrito(evento) {
    let $botonPulsado = evento.target;
    if (!$botonPulsado.dataset.id) {
        return;
    }
    let idProductoEvento = parseInt($botonPulsado.dataset.id);

    const eventoCarritoModificado = new CustomEvent("carritoModificado", {
        detail: { productId: idProductoEvento, quantity: 1 },
        bubbles: true,
        cancelable: true,
    });

    document.dispatchEvent(eventoCarritoModificado);
}

//DEBE contener las funcionalidades del carrito de compras.

