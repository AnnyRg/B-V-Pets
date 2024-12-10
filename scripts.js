function toggleSubcategoria(categoria) {
    const productosPerros = document.getElementById('productos-perros');
    const productosGatos = document.getElementById('productos-gatos');

    // Oculta ambos
    productosPerros.style.display = 'none';
    productosGatos.style.display = 'none';

    // Muestra
    if (categoria === 'productos-perros') {
        productosPerros.style.display = 'block';
    } else if (categoria === 'productos-gatos') {
        productosGatos.style.display = 'block';
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

// Función para añadir productos al carrito
function addToCart(productName, price) {
    const cartList = document.getElementById('carro-lista');
    const cartTotal = document.getElementById('carro-total');

    // Crear elemento de producto en el carrito
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `<p>${productName} - $${price.toFixed(2)}</p>`;

    // Añadir el producto al carrito
    cartList.appendChild(cartItem);

    // Actualizar el total del carrito
    const total = parseFloat(cartTotal.innerText.replace('Total: $', '')) + price;
    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}
