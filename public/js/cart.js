
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsContainer = document.getElementById('cart-items');
let total = 0;

cartItemsContainer.innerHTML = '';

cart.forEach(item => {
  const itemPrice = Number(item.price);
  const itemQuantity = Number(item.quantity || 1);
  const itemTotal = itemPrice * itemQuantity;
  total += itemTotal;

  const div = document.createElement('div');
  div.className = 'cart-item';
  div.innerHTML = `
    <h4>${item.name}</h4>
    <p>Price: ₹${itemPrice} x ${itemQuantity} = ₹${itemTotal}</p>
  `;
  cartItemsContainer.appendChild(div);
});

document.getElementById('total').innerText = `Total: ₹${total}`;
