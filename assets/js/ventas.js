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
        const tr = document.createElement('tr');

        const tdProduct = document.createElement('td');
        tdProduct.classList.add('align'); 
        tdProduct.textContent = item.product;
        tr.appendChild(tdProduct);
      
        const tdPrice = document.createElement('td');
        tdPrice.classList.add('align'); 
        tdPrice.textContent = `$ ${item.price}`;
        tr.appendChild(tdPrice);
      
        const tdButton = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.classList.add('boton');
        removeButton.classList.add('align'); 
        removeButton.onclick = () => removeFromCart(index);
        tdButton.appendChild(removeButton);
        tr.appendChild(tdButton);
      
        cartElement.appendChild(tr);
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