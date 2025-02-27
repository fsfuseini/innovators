
//Shopping Cart Functionality
let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: parseFloat(button.dataset.price),
            quantity: 1
        };

        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push(product);
        }

        updateCart();
    });
});

function updateCart() {
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
      <span>${item.name} (${item.quantity})</span>
      <span>₵${(item.price * item.quantity).toFixed(2)}</span>
      <button onclick="removeFromCart('${item.id}')">Remove</button>
    `;
        cartItems.appendChild(cartItem);

        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}


// Back-to-Top Button Functionality
const backToTopButton = document.getElementById('back-to-top');

// Show the button when the user scrolls down 200px
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
});