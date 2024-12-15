import {mostrarProductos} from "./menu.js";
import {products} from '../assets/data/data.js';

// DEBE buscar los productos por los filtros.

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
