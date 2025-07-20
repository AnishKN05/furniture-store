
fetch('/products')
  .then(res => res.json())
  .then(products => {
    const list = document.getElementById('product-list');
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>₹${product.price}</p>
        <button onclick='addToCart("${product.name}", "${product.description}", ${product.price})'>Add to Cart</button>
      `;
      list.appendChild(div);
    });
  })
  .catch(err => console.error('Error loading products:', err));

// Add to Cart Function
function addToCart(name, description, price, quantity = 1) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingProduct = cart.find(item => item.name === name);

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({ name, description, price, quantity });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} x${quantity} added to cart.`);
}
