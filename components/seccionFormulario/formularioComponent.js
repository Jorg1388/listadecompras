import { obtenerLista, guardarLista } from "../../control/miLocalStorange.js";

export function seccionFormulario() {
    
    let contenedor = document.createElement('div');
        contenedor.className = "contenedor-formulario"; 

    const contInputs = document.createElement("div");
        contInputs.className = "contenedor-inputs no-captura";
        contenedor.appendChild(contInputs);

    let divProducto = document.createElement('div');
        divProducto.className = "producto";

    let inputProducto = document.createElement('input');
        inputProducto.className = "producto";
        inputProducto.type = "text";
        inputProducto.placeholder = "Producto";
        contInputs.appendChild(inputProducto);

    let inputDinero = document.createElement('input');
        inputDinero.className = "dinero";
        inputDinero.type = "number";
        inputDinero.placeholder = "Q 00.00";
        contInputs.appendChild(inputDinero);

    let boton = document.createElement('button');
        boton.className = "btn";
        boton.type ="button";
        boton.innerText = "Carrito";
        contInputs.appendChild(boton);

    let lista = document.createElement("ul");
        lista.className = "lista";
        contenedor.appendChild(lista);

    let total = 0;

    boton.addEventListener('click', () => {

        let nombre = inputProducto.value.trim(); 
        let precio = parseFloat(inputDinero.value);

         if (nombre !== "" && !isNaN(precio) && precio > 0) {    

        // Crear item en la lista
        let item = document.createElement('li');
            item.className = "item-producto";
            item.innerText = `${nombre} - Q. ${precio.toFixed(2)}`;
            lista.appendChild(item);

        let eliminar = document.createElement('span');
            eliminar.className = "producto-eliminar";
            eliminar.textContent = " ❌";
            item.appendChild(eliminar);

        //accion eliminar 
            eliminar.addEventListener("click", () => {
                item.remove();

            total -= precio;
            document.querySelector('.titulo1').innerText = `Q ${total.toFixed(2)}`;

            });

        let carritoLocalStorage = obtenerLista() || [];
            carritoLocalStorage.push({ nombre, precio });
            guardarLista(carritoLocalStorage);


            console.log("Producto agregado al Local Storage:", { nombre, precio });

        total += precio;
        document.querySelector('.titulo1').innerText = `Q ${total.toFixed(2)}`;

        // Limpiar inputs
            inputProducto.value = "";
            inputDinero.value = "";
        }
    });

    return contenedor;
}
