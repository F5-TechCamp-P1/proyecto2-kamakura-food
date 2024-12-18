import {products} from '../assets/data/data.js';
import {filters} from '../assets/data/data.js';

// DEBE imprimir en pantalla la información de filtros.

let contenedorFiltros = document.getElementById('filters');

function mostrarFiltros(listaFiltros){
      contenedorFiltros.innerHTML = '';
      listaFiltros.forEach(filter => {
          let filtroSection = document.createElement('div');
          filtroSection.innerHTML = `
          <button class="filter">${filter}</button>`;
      contenedorFiltros.appendChild(filtroSection);
      });
      }

      mostrarFiltros(filters);

// DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

let $contenedorProductos = document.getElementById('products');

function mostrarProductos(listaProductos) {
        $contenedorProductos.innerHTML = '';
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
            $contenedorProductos.appendChild($productoDiv);
    });
}

$contenedorProductos.addEventListener('click', enviarProductoAlCarrito);

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(products);
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
export {mostrarProductos};

// DEBE contener las funcionalidades del carrito de compras.

