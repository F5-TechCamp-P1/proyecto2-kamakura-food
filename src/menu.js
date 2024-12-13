//DEBE imprimir en pantalla la información de filtros.



//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.
import {products} from '../assets/data/data.js'
import {filters} from '../assets/data/data.js'
//console.log(products);

let contenedorProductos = document.getElementById('products'); //Acceso al contenedor de products del Html


function mostrarProductos(ListaProductos) {  // Funcion para mostrar productos
    ListaProductos.forEach(product => { //Sirve para recorrer cada elemento del array
        let productoDiv = document.createElement('div');// Crea el contenedor de cada prodcuto para que se muestre
        productoDiv.className = 'product-container';//className asigna el estilo ya asiganado para que se vea como en el video

        // Este es el contenedor para mostrar los productos de manera dinamica, van en template literal `
        // Define el contenido HTML del div, insertando dinámicamente los datos del producto 
        productoDiv.innerHTML = ` 
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price-container">
                <h5>Precio: €${product.price.toFixed(2)}</h5>
                <button class="add-button" data-id="${product.id}">Añadir</button>
            </div>
        `;
        contenedorProductos.appendChild(productoDiv); //Añade el div qdinamico que creamos  al contenedor principal
    });
}

// Mostrar los productos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(products); // Mostrar todos los productos
});
