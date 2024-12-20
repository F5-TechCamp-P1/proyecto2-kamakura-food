import {mostrarProductos} from "./menu.js";
import {products} from '../assets/data/data.js';

// DEBE buscar los productos por los filtros.

let botonesFiltros = document.getElementsByClassName('filter');
let $contenedorProductos = document.getElementById('products');

function filtrarRamen() {
    let productosFiltrados = products.filter(product => product.category === "ramen");
    mostrarProductos(productosFiltrados, $contenedorProductos);
};

function filtrarSushi() {
    let productosFiltrados = products.filter(product => product.category === "sushi");
    mostrarProductos(productosFiltrados, $contenedorProductos);
};

function filtrarEntradas() {
    let productosFiltrados = products.filter(product => product.category === "entradas");
    mostrarProductos(productosFiltrados, $contenedorProductos);
};

function filtrarPostres() {
    let productosFiltrados = products.filter(product => product.category === "postres");
    mostrarProductos(productosFiltrados, $contenedorProductos);
};

function filtrarTodos () {
    let productosFiltrados = products;
    mostrarProductos(productosFiltrados, $contenedorProductos);
};

botonesFiltros[0].addEventListener('click', filtrarTodos);
botonesFiltros[1].addEventListener('click', filtrarRamen);
botonesFiltros[2].addEventListener('click', filtrarSushi);
botonesFiltros[3].addEventListener('click', filtrarEntradas);
botonesFiltros[4].addEventListener('click', filtrarPostres);
