function toggleSubcategoria(categoria) {
    const productosPerros = document.getElementById('productos-perros');
    const productosGatos = document.getElementById('productos-gatos');

    // Oculta ambos
    productosPerros.style.display = 'none';
    productosGatos.style.display = 'none';

    // Muestra
    if (categoria === 'perros') {
        productosPerros.style.display = 'flex';
    } else if (categoria === 'gatos') {
        productosGatos.style.display = 'flex';
    }
}

function toggleServicio(tipoServicio) {
    const servicioPerros = document.getElementById('servicio-perros');
    const servicioGatos = document.getElementById('servicio-gatos');

    // Oculta ambos
    servicioPerros.style.display = 'none';
    servicioGatos.style.display = 'none';

    // Muestra el servicio correspondiente
    if (tipoServicio === 'perros') {
        servicioPerros.style.display = 'block';
    } else if (tipoServicio === 'gatos') {
        servicioGatos.style.display = 'block';
    }
}

