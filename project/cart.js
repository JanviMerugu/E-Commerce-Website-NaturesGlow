// Function to load cart items from local storage
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    displayCart(cart);
}

// Function to display cart items
function displayCart(cart) {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items
    let totalPrice = 0;

    // Display each cart item
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'cart-item';
        listItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            ${item.name} - $${item.price}
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(listItem);
        totalPrice += item.price;
    });

    // Update total price
    document.getElementById('total-price').innerText = `Total: ${totalPrice}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove item
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    displayCart(cart); // Update display

}

// Function to handle checkout
document.getElementById('checkout-button').addEventListener('click', function() {
    window.location.href='paymentpg.html';
});

// Load the cart on page load
loadCart();







// Sample product data for demonstration
const products = [
    {
        id: 1,
        name: "Organic Face Cream",
        image: "path/to/product1.jpg" // Replace with actual image path
    },
    {
        id: 2,
        name: "Natural Lip Balm",
        image: "path/to/product2.jpg" // Replace with actual image path
    },
    {
        id: 3,
        name: "Herbal Shampoo",
        image: "path/to/product3.jpg" // Replace with actual image path
    }
];

// Function to add a product to the cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Get cart from localStorage or initialize as an empty array

    const product = products.find(p => p.id === productId); // Find the product by id
    if (product) {
        cart.push(product); // Add product to cart array
        localStorage.setItem('cart', JSON.stringify(cart)); // Store updated cart in localStorage
        alert('Product added to cart!'); // Show confirmation
    }
}

// Example: Adding event listeners to buttons
document.getElementById('add-to-cart-1').addEventListener('click', function() {
    addToCart(1);
});
document.getElementById('add-to-cart-2').addEventListener('click', function() {
    addToCart(2);
});
document.getElementById('add-to-cart-3').addEventListener('click', function() {
    addToCart(3);
});











