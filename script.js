
// Menu data structure - you can add more items easily
const menuData = {
  set: [
    {
      id: 'set1',
      name: 'Family Meal Set',
      description: 'Perfect for sharing with family',
      price: 29.99,
      image: 'https://via.placeholder.com/300?text=Family+Set'
    },
    {
      id: 'set2',
      name: 'Couple Dinner Set',
      description: 'Romantic dinner for two',
      price: 19.99,
      image: 'https://via.placeholder.com/300?text=Couple+Set'
    },
    {
      id: 'set3',
      name: 'Lunch Special Set',
      description: 'Weekday lunch special',
      price: 12.99,
      image: 'https://via.placeholder.com/300?text=Lunch+Set'
    },
    {
      id: 'set4',
      name: 'Weekend Brunch Set',
      description: 'Perfect for lazy weekends',
      price: 15.99,
      image: 'https://via.placeholder.com/300?text=Brunch+Set'
    }
  ],
  meat: [
    {
      id: 'meat1',
      name: 'Grilled Steak',
      description: 'Prime beef steak grilled to perfection',
      price: 24.99,
      image: 'https://via.placeholder.com/300?text=Steak'
    },
    {
      id: 'meat2',
      name: 'Roast Chicken',
      description: 'Whole roasted chicken with herbs',
      price: 18.99,
      image: 'https://via.placeholder.com/300?text=Chicken'
    },
    {
      id: 'meat3',
      name: 'BBQ Ribs',
      description: 'Tender pork ribs with BBQ sauce',
      price: 22.99,
      image: 'https://via.placeholder.com/300?text=Ribs'
    },
    {
      id: 'meat4',
      name: 'Lamb Chops',
      description: 'Grilled lamb chops with rosemary',
      price: 26.99,
      image: 'https://via.placeholder.com/300?text=Lamb'
    }
  ],
  vegetable: [
    {
      id: 'veg1',
      name: 'Garden Salad',
      description: 'Fresh mixed greens with vinaigrette',
      price: 9.99,
      image: 'https://via.placeholder.com/300?text=Salad'
    },
    {
      id: 'veg2',
      name: 'Grilled Vegetables',
      description: 'Seasonal vegetables grilled to perfection',
      price: 12.99,
      image: 'https://via.placeholder.com/300?text=Grilled+Veg'
    },
    {
      id: 'veg3',
      name: 'Vegetable Curry',
      description: 'Mixed vegetables in aromatic curry sauce',
      price: 14.99,
      image: 'https://via.placeholder.com/300?text=Veg+Curry'
    },
    {
      id: 'veg4',
      name: 'Mushroom Risotto',
      description: 'Creamy arborio rice with wild mushrooms',
      price: 16.99,
      image: 'https://via.placeholder.com/300?text=Risotto'
    }
  ],
  noodle: [
    {
      id: 'noodle1',
      name: 'Pad Thai',
      description: 'Classic Thai stir-fried noodles',
      price: 13.99,
      image: 'https://via.placeholder.com/300?text=Pad+Thai'
    },
    {
      id: 'noodle2',
      name: 'Ramen',
      description: 'Japanese noodle soup with pork',
      price: 15.99,
      image: 'https://via.placeholder.com/300?text=Ramen'
    },
    {
      id: 'noodle3',
      name: 'Spaghetti Bolognese',
      description: 'Italian pasta with meat sauce',
      price: 14.99,
      image: 'https://via.placeholder.com/300?text=Spaghetti'
    },
    {
      id: 'noodle4',
      name: 'Udon Stir Fry',
      description: 'Thick Japanese noodles with vegetables',
      price: 16.99,
      image: 'https://via.placeholder.com/300?text=Udon'
    }
  ],
  drink: [
    {
      id: 'drink1',
      name: 'Fresh Lemonade',
      description: 'Homemade lemonade with mint',
      price: 4.99,
      image: 'https://via.placeholder.com/300?text=Lemonade'
    },
    {
      id: 'drink2',
      name: 'Iced Tea',
      description: 'Refreshing iced tea with lemon',
      price: 3.99,
      image: 'https://via.placeholder.com/300?text=Iced+Tea'
    },
    {
      id: 'drink3',
      name: 'Fruit Smoothie',
      description: 'Blended seasonal fruits',
      price: 5.99,
      image: 'https://via.placeholder.com/300?text=Smoothie'
    },
    {
      id: 'drink4',
      name: 'Sparkling Water',
      description: 'Carbonated mineral water',
      price: 2.99,
      image: 'https://via.placeholder.com/300?text=Sparkling+Water'
    }
  ],
  soup: [
    {
      id: 'soup1',
      name: 'Chicken Noodle Soup',
      description: 'Classic chicken soup with vegetables and noodles',
      price: 8.99,
      image: 'https://via.placeholder.com/300?text=Chicken+Soup'
    },
    {
      id: 'soup2',
      name: 'Tomato Bisque',
      description: 'Creamy tomato soup with basil',
      price: 7.99,
      image: 'https://via.placeholder.com/300?text=Tomato+Soup'
    },
    {
      id: 'soup3',
      name: 'Miso Soup',
      description: 'Traditional Japanese soup with tofu and seaweed',
      price: 6.99,
      image: 'https://via.placeholder.com/300?text=Miso+Soup'
    },
    {
      id: 'soup4',
      name: 'Clam Chowder',
      description: 'Creamy New England style soup with clams and potatoes',
      price: 9.99,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    }
  ]
};

// State to track cart items
let cart = [];
let currentCategory = 'set';
let map, userMarker;

// DOM elements
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the page
  displayMenuItems(currentCategory);
  setupEventListeners();
  
  // Try to get user's location 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        document.getElementById('customer-lat').value = latitude;
        document.getElementById('customer-lng').value = longitude;
      },
      error => {
        console.error('Error getting location: ', error);
      }
    );
  }
});

function setupEventListeners() {
  // Category buttons
  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.category;
      
      // Update active button
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Display menu items for selected category
      displayMenuItems(currentCategory);
    });
  });
  
  // Cart icon
  document.querySelector('.cart-icon').addEventListener('click', toggleCart);
  document.getElementById('close-cart-btn').addEventListener('click', toggleCart);
  
  // Checkout button
  document.getElementById('checkout-btn').addEventListener('click', showCheckoutModal);
  
  // Close modals
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.modal').classList.add('hidden');
    });
  });
  
  // Form submission
  document.getElementById('checkout-form').addEventListener('submit', handleOrderSubmission);
  
  // Print invoice
  document.getElementById('print-invoice-btn').addEventListener('click', printInvoice);
}

function displayMenuItems(category) {
  const menuContainer = document.getElementById('menu-container');
  menuContainer.innerHTML = '';
  
  menuData[category].forEach(item => {
    const menuItemEl = document.createElement('div');
    menuItemEl.className = 'menu-item';
    menuItemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="item-image">
      <div class="item-details">
        <div class="item-name">${item.name}</div>
        <div class="item-description">${item.description}</div>
        <div class="item-price">$${item.price.toFixed(2)}</div>
        <button class="add-to-cart-btn" data-id="${item.id}">Add to cart</button>
      </div>
    `;
    
    menuContainer.appendChild(menuItemEl);
  });
  
  // Add event listeners to the Add to cart buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const itemId = this.dataset.id;
      addToCart(itemId);
    });
  });
}

function findItemById(id) {
  // Search through all categories
  for (const category in menuData) {
    const item = menuData[category].find(item => item.id === id);
    if (item) return item;
  }
  return null;
}

function addToCart(itemId) {
  const item = findItemById(itemId);
  if (!item) return;
  
  // Check if item is already in cart
  const existingItem = cart.find(cartItem => cartItem.id === itemId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  
  // Update cart UI
  updateCartUI();
}

function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  updateCartUI();
}

function updateItemQuantity(itemId, change) {
  const item = cart.find(item => item.id === itemId);
  if (!item) return;
  
  item.quantity += change;
  
  if (item.quantity <= 0) {
    removeFromCart(itemId);
  } else {
    updateCartUI();
  }
}

function updateCartUI() {
  const cartItemsEl = document.getElementById('cart-items');
  const cartCountEl = document.getElementById('cart-count');
  const totalEl = document.getElementById('total-price');
  
  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountEl.textContent = totalItems;
  
  // Update cart items list
  cartItemsEl.innerHTML = '';
  
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p>Your cart is empty</p>';
  } else {
    cart.forEach(item => {
      const cartItemEl = document.createElement('div');
      cartItemEl.className = 'cart-item';
      cartItemEl.innerHTML = `
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        </div>
        <div class="cart-item-quantity">
          <button class="quantity-btn decrease" data-id="${item.id}">-</button>
          <span class="quantity-number">${item.quantity}</span>
          <button class="quantity-btn increase" data-id="${item.id}">+</button>
          <span class="cart-item-remove" data-id="${item.id}">🗑️</span>
        </div>
      `;
      
      cartItemsEl.appendChild(cartItemEl);
    });
    
    // Add event listeners
    document.querySelectorAll('.quantity-btn.decrease').forEach(btn => {
      btn.addEventListener('click', function() {
        updateItemQuantity(this.dataset.id, -1);
      });
    });
    
    document.querySelectorAll('.quantity-btn.increase').forEach(btn => {
      btn.addEventListener('click', function() {
        updateItemQuantity(this.dataset.id, 1);
      });
    });
    
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', function() {
        removeFromCart(this.dataset.id);
      });
    });
  }
  
  // Calculate total
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Update total element
  totalEl.textContent = `$${total.toFixed(2)}`;
}

function toggleCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  cartSidebar.classList.toggle('hidden');
}

function showCheckoutModal() {
  if (cart.length === 0) {
    alert('Your cart is empty. Please add items before checking out.');
    return;
  }
  
  document.getElementById('checkout-modal').classList.remove('hidden');
  
  // Close cart sidebar on mobile when opening checkout modal
  if (window.innerWidth <= 768) {
    document.getElementById('cart-sidebar').classList.add('hidden');
  }
  
  // Initialize map if it hasn't been done yet
  if (!map) {
    initMap();
  }
}

function initMap() {
  // Default location (can be anywhere, will be updated)
  const defaultLocation = { lat: -34.397, lng: 150.644 };
  
  map = new google.maps.Map(document.getElementById('map'), {
    center: defaultLocation,
    zoom: 15
  });
  
  // Try to get user's location for the map
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        
        // Update form
        document.getElementById('customer-lat').value = pos.lat;
        document.getElementById('customer-lng').value = pos.lng;
        
        // Center map
        map.setCenter(pos);
        
        // Add marker
        userMarker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Your Location'
        });
      },
      () => {
        console.error('Error getting location');
      }
    );
  }
}

function handleOrderSubmission(e) {
  e.preventDefault();
  
  // Get form data
  const name = document.getElementById('customer-name').value;
  const phone = document.getElementById('customer-phone').value;
  const address = document.getElementById('customer-address').value;
  const lat = document.getElementById('customer-lat').value;
  const lng = document.getElementById('customer-lng').value;
  const notes = document.getElementById('order-notes-input').value;
  
  // Generate order number
  const orderNumber = 'ORD-' + Math.floor(Math.random() * 10000);
  const orderDate = new Date().toLocaleString();
  
  // Calculate total
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Generate invoice
  generateInvoice({
    orderNumber,
    orderDate,
    customer: { name, phone, address },
    items: cart,
    total,
    notes
  });
  
  // Hide checkout modal and show invoice
  document.getElementById('checkout-modal').classList.add('hidden');
  document.getElementById('invoice-modal').classList.remove('hidden');
}

function generateInvoice(order) {
  const invoiceDetailsEl = document.getElementById('invoice-details');
  const invoiceItemsEl = document.getElementById('invoice-items');
  const invoiceSummaryEl = document.getElementById('invoice-summary');
  
  // Update invoice details
  invoiceDetailsEl.innerHTML = `
    <h3>Order #${order.orderNumber}</h3>
    <p>Date: ${order.orderDate}</p>
    <p>Customer: ${order.customer.name}</p>
    <p>Phone: ${order.customer.phone}</p>
    <p>Address: ${order.customer.address}</p>
    ${order.notes ? `<p>Notes: ${order.notes}</p>` : ''}
  `;
  
  // Update invoice items
  invoiceItemsEl.innerHTML = '';
  
  order.items.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'invoice-item';
    itemEl.innerHTML = `
      <span>${item.name} × ${item.quantity}</span>
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
    `;
    invoiceItemsEl.appendChild(itemEl);
  });
  
  // Update invoice summary
  invoiceSummaryEl.innerHTML = `
    <div class="invoice-summary-row total">
      <span>Total:</span>
      <span>$${order.total.toFixed(2)}</span>
    </div>
  `;
  
  // Reset cart after order is complete
  cart = [];
  updateCartUI();
}

function printInvoice() {
  const invoiceContent = document.getElementById('invoice-content').innerHTML;
  const printWindow = window.open('', '_blank');
  
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Order Invoice</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        h2 { text-align: center; }
        .invoice-item { display: flex; justify-content: space-between; margin-bottom: 10px; }
        .total { font-weight: bold; }
      </style>
    </head>
    <body>
      ${invoiceContent}
    </body>
    </html>
  `);
  
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();
}

// Function to add new items to the menu
function addMenuItem(category, item) {
  // Ensure the category exists
  if (!menuData[category]) {
    menuData[category] = [];
  }
  
  // Generate a unique ID
  const itemId = `${category}${menuData[category].length + 1}`;
  
  // Add the item with the ID
  menuData[category].push({
    id: itemId,
    ...item
  });
  
  // If the current category is the one being updated, refresh the display
  if (currentCategory === category) {
    displayMenuItems(category);
  }
}
