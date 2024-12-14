//DEBE imprimir en pantalla la información de filtros.



//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

import {filters, products} from '../assets/data/data.js'




let contenedorProductos = document.getElementById('products'); //Acceso al contenedor de products del Html
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

    function mostrarProductos(listaProductos) { // Funcion para mostrar productos
            contenedorProductos.innerHTML = '';// Quita el elemto producto vacio
                listaProductos.forEach(product => { //Sirve para recorrer cada atributo del producto
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
mostrarProductos(products);
mostrarFiltros(filters);
/*document.addEventListener('DOMContentLoaded', () => {
   // mostrarProductos(products); // Mostrar todos los productos
});*/
