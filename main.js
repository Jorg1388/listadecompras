import { header } from "./components/header/headerComponent.js";
import { seccion1 } from "./components/seccion1/seccion1Component.js";
import { seccionFormulario } from "./components/seccionFormulario/formularioComponent.js";
import { obtenerLista, guardarLista } from "./control/miLocalStorange.js";

function seccion(){

    let seccion = document.createElement('section');


    let listaProductos = obtenerLista();

    //LocalStorange

    if (!listaProductos.length === 0) {
        listaProductos = [];
        guardarLista(listaProductos);
    } 
    console.log(listaProductos);

    //header
    seccion.appendChild(header());

    //seccion1
    seccion.appendChild(seccion1());
    
    //seccionFormulario
    seccion.appendChild(seccionFormulario());

    return seccion;
}
document.body.appendChild(seccion());