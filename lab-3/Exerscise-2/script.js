const products = [
    {id:1,name:'Laptop',price:999.99,category:'electronics'},
    {id:2,name:'Smartphone',price:699.99,category:'electronics'},
    {id:3,name:'Book - JavaScript',price:29.99,category:'books'},
    {id:4,name:'T-Shirt',price:19.99,category:'clothing'},
    {id:5,name:'Jeans',price:59.99,category:'clothing'},
    {id:6,name:'Headphones',price:149.99,category:'electronics'}
];

let cart = [];
let couponDiscount = 0;
let couponCode = '';

const productListEl = document.getElementById('productList');
const cartItemsEl = document.getElementById('cartItems');
const subtotalEl = document.getElementById('subtotal');
const discountEl = document.getElementById('discount');
const totalEl = document.getElementById('total');
const couponMsgEl = document.getElementById('couponCode');

function renderProducts() {
    productListEl.innerHTML = '';
    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <div class="product-name">${product.name}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div>Category: ${product.category}</div>
            <button onclick="addToCart(${product.id})" style="margin-top:10px;padding:8px 16px;background:#28a745;color:white;border:none;border-radius:4px;cursor:pointer">Add to Cart</button>
        `;
        productListEl.appendChild(div);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({...product, quantity: 1});
    }
    
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}

function updateQuantity(productId, quantity) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = parseInt(quantity) || 0;
        if (cartItem.quantity === 0) {
            removeFromCart(productId);
        } else {
            renderCart();
        }
    }
}

function renderCart() {
    cartItemsEl.innerHTML = '';
    
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <div>
                    <strong>${item.name}</strong><br>
                    <small>$${item.price.toFixed(2)} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}</small><br>
                    <small>Category: ${item.category}</small>
                </div>
                <div class="qty-controls">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" value="${item.quantity}" min="0" onchange="updateQuantity(${item.id}, this.value)" style="width:50px;">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    <button onclick="removeFromCart(${item.id})" style="background:#dc3545;margin-left:10px;">Remove</button>
                </div>
            </div>
        `;
        cartItemsEl.appendChild(div);
    });
    
    updateTotals();
}

function calculateDiscounts() {
    let discount = 0;
    const subtotal = calculateSubtotal();
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        
        if (item.quantity >= 5) {
            discount += itemTotal * 0.15; // Bulk discount 15%
        } else if (item.quantity >= 3) {
            discount += itemTotal * 0.10; // Bulk discount 10%
        }
        
        if (item.category === 'books') {
            discount += itemTotal * 0.05; // Books category 5%
        }
        if (item.category === 'electronics' && item.quantity >= 2) {
            discount += itemTotal * 0.08; // Electronics bulk 8%
        }
    });
    
    const hour = new Date().getHours();
    if (hour >= 9 && hour <= 17) {
        discount += subtotal * 0.03; // Business hours 3%
    }
    
    return Math.min(discount + couponDiscount, subtotal * 0.4); // Max 40% discount
}

function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updateTotals() {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscounts();
    const total = subtotal - discount;
    
    subtotalEl.textContent = subtotal.toFixed(2);
    discountEl.textContent = discount.toFixed(2);
    totalEl.textContent = total.toFixed(2);
}

function validateCoupon(code) {
    code = code.toUpperCase().trim();
    switch(code) {
        case 'SAVE10': return 0.10;
        case 'SAVE20': return 0.20;
        case 'WELCOME': return 0.15;
        case 'STUDENT': return 0.12;
        default: return 0;
    }
}

function applyCoupon() {
    const code = couponInput.value;
    const discountRate = validateCoupon(code);
    
    if (discountRate > 0) {
        couponCode = code;
        couponDiscount = calculateSubtotal() * discountRate;
        couponMsgEl.textContent = `✓ ${code} applied!`;
        couponMsgEl.className = 'coupon-msg success';
    } else {
        couponMsgEl.textContent = 'Invalid coupon';
        couponMsgEl.className = 'coupon-msg error';
        couponDiscount = 0;
    }
    
    renderCart();
}

function clearCart() {
    cart = [];
    couponDiscount = 0;
    couponCode = '';
    couponInput.value = '';
    couponMsgEl.textContent = '';
    renderCart();
}

// Initialize
renderProducts();
renderCart();
