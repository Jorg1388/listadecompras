import { obtenerLista, guardarLista } from "../../control/miLocalStorange.js";

export function seccionFormulario() {
    
    let formulario = document.createElement('form');
    formulario.className = "formulario";

    let inputProducto = document.createElement('input');
        inputProducto.className = "producto";
        inputProducto.type = "text";
        inputProducto.placeholder = "Producto";
        formulario.appendChild(inputProducto);

    let inputDinero = document.createElement('input');
        inputDinero.className = "dinero";
        inputDinero.type = "number";
        inputDinero.placeholder = "Q 00.00";
        formulario.appendChild(inputDinero);

    let boton = document.createElement('button');
        boton.className = "btn";
        boton.innerText = "Carrito";
        formulario.appendChild(boton);

    let lista = document.createElement("ul");
        lista.className = "lista";
        formulario.appendChild(lista);

    boton.addEventListener('click', (e) => {
        e.preventDefault();

        let nombre = inputProducto.value.trim(); 
        let precio = parseFloat(inputDinero.value);

        if (nombre !== "" && !isNaN(precio) && precio > 0) {    

            // Crear item en la lista
        let item = document.createElement('li');
            item.className = "item-producto";
            item.innerText = `${nombre} - Q. ${precio.toFixed(2)}`;
            lista.appendChild(item);

        let carritoLocalStorage = obtenerLista() || [];
            carritoLocalStorage.push({ nombre, precio });
            guardarLista(carritoLocalStorage);

            console.log("Producto agregado al Local Storage:", { nombre, precio });

            // Limpiar inputs
            inputProducto.value = "";
            inputDinero.value = "";
        } else {
            alert("Debes ingresar un producto válido con precio.");
        }
    });

    return formulario;
}
