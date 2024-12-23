import { describe, it, beforeAll, expect} from "vitest";
import {JSDOM} from "jsdom";
import fs from "fs";
import path from "path";
import { mostrarProductos } from "../src/menu";

describe("testing DOM", () => {
    test("Testing 'inicio' is the first link on the navbar", async () => {
        const dom =  await JSDOM.fromFile("index.html", {
            url: 'http://localhost/'
          });
        const nav = dom.window.document.querySelector(".nav-link");
        expect(nav.innerHTML).toBe("Inicio");
    })
})

describe("Prueba la función mostrarProductos ", () => {

    beforeAll(() => {
        const htmlPath = path.resolve(__dirname, "../index.html");
        const html = fs.readFileSync(htmlPath, "utf-8");
        document.body.innerHTML = html;
    })

    it("Debería crear tantos DIVS como productos se le pasen a la función", () => {
         
    const products = [
        {
            id: 0,
            name: 'Miso Ramen',
            description: 'A elegir pasta entre tallarines caseras, fideo de arroz, o udon. A elegir principal entre pollo rebozado o pollo teriyaki.',
            price: 9.50,
            category: "ramen"
        },
        {
            id: 1,
            name: 'Mochi',
            description: 'Dos piezas de pastel japonés hecho de mochigome, un pequeño grano de arroz glutinoso, de chocolate, matcha, mango o limón.',
            price: 2.50,
            category: "postres"
        }
    ];
    
    const productosContainer = document.querySelector('#products')
    mostrarProductos(productosContainer, products);

    console.log(productosContainer.querySelectorAll(".product-container"));
    expect(productosContainer.querySelectorAll(".product-container").length).toBe(products.length);

    })

});
