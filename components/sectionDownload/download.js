function loadHtmlSectionDownload( selector = 'body') {
    const contenido = document.querySelector(selector);
    
        html2canvas(contenido, {
            ignoreElements: (element) => element.classList.contains("no-captura")
        }).then(canvas => {

            const link = document.createElement('a');
            link.download = 'miProyecto.png';
            link.href = canvas.toDataURL();
            link.click();
        })
}

export { loadHtmlSectionDownload }
