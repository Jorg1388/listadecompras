import { loadHtmlSectionDownload } from "../sectionDownload/download.js";

export function header(){

    let header = document.createElement('header');
    header.className = "header";

    let text = document.createElement('text');
    text.className = "titulo";
    text.innerText = "Lista de Compras";

    let div = document.createElement('div');
    div.className = "div-logo";
    div.innerHTML = "⬇️"
    div.id = "btnDownload";

    div.addEventListener('click', () => {
        loadHtmlSectionDownload('.todo');
    })
    
    header.appendChild(text);
    header.appendChild(div);
    
    return header;
}
