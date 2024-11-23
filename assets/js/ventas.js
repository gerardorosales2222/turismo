let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    alert('Agregado al carrito');
    saveCart();
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1); // Elimina el elemento en la posición 'index'
    updateCart();
    saveCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    const totalElement = document.getElementById('total');
    cartElement.innerHTML = '';
    total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => removeFromCart(index);
        
        li.appendChild(removeButton);
        cartElement.appendChild(li);
        total += item.price;
    });

    totalElement.textContent = total;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    updateCart();
});