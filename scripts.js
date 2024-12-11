function toggleSubcategoria(categoria) {
    const serviciosPerros = document.getElementById('servicios-perros');
    const serviciosGatos = document.getElementById('servicios-gatos');

    // Oculta ambos
    serviciosPerros.style.display = 'none';
    serviciosGatos.style.display = 'none';

    // Muestra la categoría seleccionada
    if (categoria === 'servicios-perros') {
        serviciosPerros.style.display = 'flex';
    } else if (categoria === 'servicios-gatos') {
        serviciosGatos.style.display = 'flex';
    }
}

function addToCart(productName, price, memberPrice) {
    const cartList = document.getElementById('carro-lista');
    const cartTotal = document.getElementById('carro-total');

    // Crear elemento de producto en el carrito
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `<p>${productName} - $${price.toFixed(2)} ($${memberPrice.toFixed(2)} LAIKA Member)</p>`;

    // Añadir el producto al carrito
    cartList.appendChild(cartItem);

    // Actualizar el total del carrito
    const total = parseFloat(cartTotal.innerText.replace('Total: $', '')) + price;
    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}