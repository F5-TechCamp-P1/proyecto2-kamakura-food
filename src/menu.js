//DEBE imprimir en pantalla la información de filtros.



//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.
import {products} from '../assets/data/data.js'
import {filters} from '../assets/data/data.js'
//console.log(products);

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
     
//

let contenedorProductos = document.getElementById('products'); //Acceso al contenedor de products del Html


function mostrarProductos(listaProductos) { // Funcion para mostrar productos
        contenedorProductos.innerHTML = '';
        listaProductos.forEach(product => { //Sirve para recorrer cada elemento del array
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

/*document.addEventListener('DOMContentLoaded', () => {
   // mostrarProductos(products); // Mostrar todos los productos
});*/

let botonesFiltros = document.getElementsByClassName('filter');

function filtrarRamen() { 
    let productosFiltrados = products.filter(product => product.category === "ramen"); 
    mostrarProductos(productosFiltrados); 
};

function filtrarSushi() { 
    let productosFiltrados = products.filter(product => product.category === "sushi"); 
    mostrarProductos(productosFiltrados); 
};

function filtrarEntradas() { 
    let productosFiltrados = products.filter(product => product.category === "entradas"); 
    mostrarProductos(productosFiltrados); 
};

function filtrarPostres() { 
    let productosFiltrados = products.filter(product => product.category === "postres"); 
    mostrarProductos(productosFiltrados); 
};

function filtrarTodos () {
    let productosFiltrados = products;
    mostrarProductos(productosFiltrados);
};

botonesFiltros[0].addEventListener('click', filtrarTodos);
botonesFiltros[1].addEventListener('click', filtrarRamen);
botonesFiltros[2].addEventListener('click', filtrarSushi);
botonesFiltros[3].addEventListener('click', filtrarEntradas);
botonesFiltros[4].addEventListener('click', filtrarPostres);