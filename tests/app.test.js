import { describe, expect, test } from "vitest";
import { JSDOM } from 'jsdom';
import {mostrarProductos} from '../src/menu.js';


describe("testing DOM", () => {
    test("Testing 'inicio' is the first link on the navbar", async () => {
        const dom =  await JSDOM.fromFile("index.html", {
            url: 'http://localhost/'
          });
        const nav = dom.window.document.querySelector(".nav-link");
        expect(nav.innerHTML).toBe("Inicio");
    })
})

