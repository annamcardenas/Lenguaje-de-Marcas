function cambiaImagen() {
    // Obtener el valor seleccionado del <select>
    const selector = document.getElementById("selectorImagen");
    const imagenSeleccionada = selector.value;

    // Cambiar la imagen mostrada
    document.getElementById("miImagen").src = imagenSeleccionada;
}

function cambiarEstilo(nombreEstilo) {
    // Cambiar la clase del body para aplicar el estilo correspondiente
    document.body.className = nombreEstilo;
}