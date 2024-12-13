//DEBE imprimir en pantalla la información de filtros.


import {filters} from '../assets/data/data.js'


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

      
//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.git pull origin dev
