// DEBE imprimir en pantalla la información de filtros.

// DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

import {products} from '../assets/data/data.js'
import {filters} from '../assets/data/data.js'

let $contenedorProductos = document.getElementById('products'); 

// Crea y añade un div dinamico al contenedor principal para mostrar todos los productos disponibles.

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

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(products); 
});
