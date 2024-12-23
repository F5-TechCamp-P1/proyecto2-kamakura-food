import {mostrarProductos} from "./menu.js";
import {products} from '../assets/data/data.js';


// DEBE buscar los productos por los filtros.

let contenedorProductos = document.getElementById('products');

export function filtrarRamen() {
    let productosFiltrados = products.filter(product => product.category === "ramen");
    mostrarProductos(contenedorProductos, productosFiltrados);
};

export function filtrarSushi() {
    let productosFiltrados = products.filter(product => product.category === "sushi");
    mostrarProductos(contenedorProductos, productosFiltrados);
};

export function filtrarEntradas() {
    let productosFiltrados = products.filter(product => product.category === "entradas");
    mostrarProductos(contenedorProductos, productosFiltrados);
};

export function filtrarPostres() {
    let productosFiltrados = products.filter(product => product.category === "postres");
    mostrarProductos(contenedorProductos, productosFiltrados);
};

export function filtrarTodos () {
    let productosFiltrados = products;
    mostrarProductos(contenedorProductos, productosFiltrados);
};

