function loadHtmlSectionDownload( selector = 'body') {
    const contenido = document.querySelector(selector);

    if (!contenido) {
        console.error(`No se encontró el elemento '${selector}'`);
        return;
    }

    
        html2canvas(contenido, {
            ignoreElements: (element) => element.classList.contains("no-captura")
        }).then(canvas => {

            const link = document.createElement('a');
            link.download = 'miProyecto.png';
            link.href = canvas.toDataURL();
            link.click();
        }).catch(err => {
            console.error("Error al generar la captura:", err);
        })
}

export { loadHtmlSectionDownload }
