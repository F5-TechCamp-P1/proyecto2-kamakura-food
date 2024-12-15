
import {products} from '../assets/data/data.js'
import {filters} from '../assets/data/data.js'

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

function enviarProductoAlCarrito(evento) {
    let $botonPulsado = evento.target;
    if (!$botonPulsado.dataset.id) {
        return;
    }
    let idProductoEvento = parseInt($botonPulsado.dataset.id);

    const eventoProductoAnadido = new CustomEvent("productoAnadido", {
        detail: { productId: idProductoEvento },
        bubbles: true,
        cancelable: true,
    });

    document.dispatchEvent(eventoProductoAnadido);
}

let contenedorFiltros = document.getElementById('filters');

function mostrarFiltros(listaFiltros){
      contenedorFiltros.innerHTML = '';// Quita el elemto filtro vacio
      listaFiltros.forEach(filter => { //Sirve para recorrer cada elemento de filters
          let filtroSection = document.createElement('div');// Crea un boton
          filtroSection.innerHTML = `
          <button class="filter">${filter}</button>`; 
      contenedorFiltros.appendChild(filtroSection);
      });
      }

      mostrarFiltros(filters);


