function toggleSubcategoria(categoria) {
    const productosPerros = document.getElementById('productos-perros');
    const productosGatos = document.getElementById('productos-gatos');

    // Oculta ambos
    productosPerros.style.display = 'none';
    productosGatos.style.display = 'none';

    // Muestra
    if (categoria === 'productos-perros') {
        productosPerros.style.display = 'flex';
    } else if (categoria === 'productos-gatos') {
        productosGatos.style.display = 'flex';
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
