
// Exchange rate constant (1 USD to Cambodian Riel)
const EXCHANGE_RATE = 4000; // 1 USD = 4100 Riel (adjust as needed)

// Menu data structure - you can add more items easily
const menuData = {
  set: [
    {
      id: 'set1',
      name: 'ឈុតស៊ុប(តូច)',
      description: 'Soup Set',
      price: 13.75,
      image: 'attached_assets/Set image/Soup set2.jpg'
    },
    {
      id: 'set2',
      name: 'ឈុតស៊ុប(ធំ)',
      description: 'Family Set',
      price: 50.00,
      image: 'https://via.placeholder.com/300?text=Couple+Set'
    },
    {
      id: 'set3',
      name: 'ឈុតសាច់អាំង',
      description: 'BBQ Set',
      price: 9.75,
      image: 'attached_assets/Set image/BBQ set.png'
    }
  ],
  soup: [
    {
      id: 'soup1',
      name: 'ស៊ុបគោ',
      description: 'Ox Soup',
      price: 6.00,
      image: 'https://via.placeholder.com/300?text=Chicken+Soup'
    },
    {
      id: 'soup2',
      name: 'ស៊ុបប្រហិតត្រី',
      description: 'Fish Ball Soup',
      price: 6.00,
      image: 'https://via.placeholder.com/300?text=Tomato+Soup'
    },
    {
      id: 'soup3',
      name: 'ស៊ុបខួរ',
      description: 'Ox Brain Soup',
      price: 7.00,
      image: 'https://via.placeholder.com/300?text=Miso+Soup'
    },
    {
      id: 'soup4',
      name: 'ស៊ុប100ស្រទាប់',
      description: 'Vessels Soup',
      price: 7.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup5',
      name: 'សាច់ភ្លៅ',
      description: 'Lean Beef',
      price: 2.5,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup5',
      name: 'សាច់ផ្អែម',
      description: 'Brisket Beef',
      price: 3.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup6',
      name: 'សាច់ស្រួយ',
      description: 'Flank Beef',
      price: 3.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup7',
      name: 'ប្រហិតត្រី',
      description: 'Fresh Fish Ball',
      price: 2.5,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup8',
      name: 'ខួរគោ',
      description: 'Ox Brain',
      price: 5.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup9',
      name: '100ស្រទាប់',
      description: 'Vessels',
      price: 5.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup10',
      name: 'កន្សេាមដោះ',
      description: 'Ox Udder',
      price: 5.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup11',
      name: 'សាច់បាង',
      description: 'Bang Meat',
      price: 3.75,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup12',
      name: 'បេះដូង',
      description: 'Ox Heart',
      price: 3.75,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup13',
      name: 'អណ្តាត',
      description: 'Ox Tongue',
      price: 3.75,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup14',
      name: 'សរសៃ',
      description: 'Ox Foot Gelatin',
      price: 3.75,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup16',
      name: 'លំពែង',
      description: 'Ox Spleen',
      price: 3.75,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup17',
      name: 'ពោះ',
      description: 'Ox Stomach',
      price: 3.75,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup21',
      name: 'ប្រហិតសាច់គោ',
      description: 'Beef Ball',
      price: 3.75,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup18',
      name: 'បង្គា',
      description: 'Prawn',
      price: 6.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup19',
      name: 'មឹក',
      description: 'Squid',
      price: 6.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup20',
      name: 'ក្រលៀន',
      description: 'Kidney',
      price: 6.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup21',
      name: 'មីទឹក',
      description: 'Hokkein Noodle',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup22',
      name: 'មីលឿង',
      description: 'Egg Noodle',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup23',
      name: 'មីខៀវ',
      description: 'Green Noodle',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup24',
      name: 'មី MAMA',
      description: 'MAMA Noodle',
      price: 0.375,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup25',
      name: 'គុយទាវ',
      description: 'Rice Noodle',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup26',
      name: 'មីសួ',
      description: 'Rice Vermicelli',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup27',
      name: 'ពងមាន់',
      description: 'Egg',
      price: 0.25,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup28',
      name: 'ផ្សិតម្ជុល',
      description: 'Needle Mushroom',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup29',
      name: 'ផ្សិតភ្លៅមាន់',
      description: 'Chicken Leg Mushroom',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup30',
      name: 'ស្ពៃតឿ',
      description: 'Bok Choy',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup31',
      name: 'ត្រកួន',
      description: 'Water Spinach',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup32',
      name: 'តាំងអោ',
      description: 'Green Chrysanthemum',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup33',
      name: 'ស្ពៃចង្កឺៈ',
      description: 'Collard Greens and Herbs',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup15',
      name: 'ផ្ទី',
      description: 'Spinach',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup34',
      name: 'ស្ពៃបូកគោ',
      description: 'Baby Napa Cabbage',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup35',
      name: 'ពោត',
      description: 'Corn',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup36',
      name: 'ស្នៀតពោត',
      description: 'Baby Corn',
      price: 1.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup37',
      name: 'ពោតបារាំង',
      description: 'Okra',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup38',
      name: 'ត្រាវ',
      description: 'Taro',
      price: 1.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup39',
      name: 'ពពុៈសណ្តែក',
      description: 'Dried Bean Curd',
      price: 1.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup40',
      name: 'ផ្កាថ្ម',
      description: 'Snow Fungus',
      price: 1.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup41',
      name: 'ប្រហិតត្រីចៀន',
      description: 'Fried Fish Ball',
      price: 1.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup42',
      name: 'ប្រហិតក្តាម',
      description: 'Crab Fish Ball',
      price: 1.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup43',
      name: 'ប្រហិតតៅហ៊ូ',
      description: 'Tofu Ball',
      price: 1.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
  ],
  bbq: [
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
    },
    {
      id: 'drink3',
      name: 'Fruit Smoothie',
      description: 'Blended seasonal fruits',
      price: 5.99,
      image: 'https://via.placeholder.com/300?text=Smoothie'
    },
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
  
  // Settings form
  document.getElementById('settings-form').addEventListener('submit', function(e) {
    e.preventDefault();
    saveTelegramSettings();
  });
  
  // Test Telegram button
  document.getElementById('test-telegram-btn').addEventListener('click', testTelegramNotification);
  
  // Load saved Telegram settings
  loadTelegramSettings();
  
  // Add settings button to header
  addSettingsButton();
}

function addSettingsButton() {
  const header = document.querySelector('header');
  const settingsButton = document.createElement('div');
  settingsButton.className = 'settings-icon';
  settingsButton.innerHTML = '<i class="fas fa-cog"></i>';
  settingsButton.addEventListener('click', showSettingsModal);
  header.appendChild(settingsButton);
}

function showSettingsModal() {
  document.getElementById('settings-modal').classList.remove('hidden');
}

function saveTelegramSettings() {
  const botToken = document.getElementById('telegram-bot-token').value;
  const chatId = document.getElementById('telegram-chat-id').value;
  
  localStorage.setItem('telegram_bot_token', botToken);
  localStorage.setItem('telegram_chat_id', chatId);
  
  alert('Settings saved successfully!');
}

function loadTelegramSettings() {
  const botToken = localStorage.getItem('telegram_bot_token') || '';
  const chatId = localStorage.getItem('telegram_chat_id') || '';
  
  document.getElementById('telegram-bot-token').value = botToken;
  document.getElementById('telegram-chat-id').value = chatId;
}

function testTelegramNotification() {
  const botToken = document.getElementById('telegram-bot-token').value;
  const chatId = document.getElementById('telegram-chat-id').value;
  
  if (!botToken || !chatId) {
    alert('Please enter both Telegram Bot Token and Chat ID before testing');
    return;
  }
  
  // Show testing indicator
  const testButton = document.getElementById('test-telegram-btn');
  const originalText = testButton.textContent;
  testButton.textContent = "Testing...";
  testButton.disabled = true;
  
  const testMessage = '🔔 <b>TEST NOTIFICATION</b>\n\nThis is a test message from your Restaurant Order System. If you can see this, your Telegram notifications are working correctly!';
  
  window.TelegramBot.sendTelegramMessage(botToken, chatId, testMessage)
    .then(response => {
      testButton.textContent = originalText;
      testButton.disabled = false;
      
      if (response.ok) {
        alert('Test notification sent successfully! Check your Telegram.');
      } else {
        let errorMessage = 'Failed to send test notification. ';
        
        if (response.description) {
          errorMessage += response.description;
        } else if (response.error) {
          errorMessage += response.error;
        } else {
          errorMessage += 'Please check your token and chat ID.';
        }
        
        alert(errorMessage);
        console.error('Telegram test failed:', response);
      }
    });
}

function displayMenuItems(category) {
  const menuContainer = document.getElementById('menu-container');
  menuContainer.innerHTML = '';
  
  menuData[category].forEach(item => {
    const menuItemEl = document.createElement('div');
    menuItemEl.className = 'menu-item';
    // Calculate price in riel
    const rielPrice = Math.round(item.price * EXCHANGE_RATE);
    
    menuItemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="item-image">
      <div class="item-details">
        <div class="item-name">${item.name}</div>
        <div class="item-description">${item.description}</div>
        <div class="item-price">$${item.price.toFixed(2)} / ៛${rielPrice.toLocaleString()}</div>
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
      // Calculate price in riel
      const rielPrice = Math.round(item.price * EXCHANGE_RATE);
      
      cartItemEl.innerHTML = `
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)} / ៛${rielPrice.toLocaleString()}</div>
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
  
  // Calculate total in riel
  const totalRiel = Math.round(total * EXCHANGE_RATE);
  
  // Update total element with both currencies
  totalEl.innerHTML = `$${total.toFixed(2)} / ៛${totalRiel.toLocaleString()}`;
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
  
  // Create order object
  const orderData = {
    orderNumber,
    orderDate,
    customer: { name, phone, address },
    items: cart,
    total,
    notes
  };
  
  // Generate invoice
  generateInvoice(orderData);
  
  // Send Telegram notification
  sendTelegramNotification(orderData);
  
  // Hide checkout modal and show invoice
  document.getElementById('checkout-modal').classList.add('hidden');
  document.getElementById('invoice-modal').classList.remove('hidden');
}

// Function to send Telegram notification
function sendTelegramNotification(orderData) {
  // Get saved Telegram settings
  const botToken = localStorage.getItem('telegram_bot_token');
  const chatId = localStorage.getItem('telegram_chat_id');
  
  // Check if Telegram is configured
  if (!botToken || !chatId) {
    console.warn('Telegram notification not sent: Bot token or Chat ID not configured');
    return;
  }
  
  // Format the order data for Telegram
  const message = window.TelegramBot.formatOrderForTelegram(orderData);
  
  // Send the message to Telegram
  window.TelegramBot.sendTelegramMessage(botToken, chatId, message)
    .then(response => {
      if (response.ok) {
        console.log('Telegram notification sent successfully');
      } else {
        console.error('Failed to send Telegram notification:', response);
      }
    });
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
    const itemTotalUSD = item.price * item.quantity;
    const itemTotalRiel = Math.round(itemTotalUSD * EXCHANGE_RATE);
    
    itemEl.innerHTML = `
      <span>${item.name} × ${item.quantity}</span>
      <span>$${itemTotalUSD.toFixed(2)} / ៛${itemTotalRiel.toLocaleString()}</span>
    `;
    invoiceItemsEl.appendChild(itemEl);
  });
  
  // Calculate total in riel
  const totalRiel = Math.round(order.total * EXCHANGE_RATE);
  
  // Update invoice summary
  invoiceSummaryEl.innerHTML = `
    <div class="invoice-summary-row total">
      <span>Total:</span>
      <span>$${order.total.toFixed(2)} / ៛${totalRiel.toLocaleString()}</span>
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
        .currency-note { text-align: center; margin-top: 20px; font-style: italic; }
      </style>
    </head>
    <body>
      ${invoiceContent}
    <div class="currency-note">Exchange rate: $1 USD = ៛${EXCHANGE_RATE} Riel</div>
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
