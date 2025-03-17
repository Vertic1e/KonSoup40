// Function to show in-app notification
function showNotification(message) {
  // Create notification element if it doesn't exist
  let notification = document.getElementById('app-notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'app-notification';
    document.body.appendChild(notification);
  }

  // Set message and show notification
  notification.textContent = message;
  notification.classList.add('show');

  // Hide notification after 3 seconds
  setTimeout(function() {
    notification.classList.remove('show');
  }, 3000);
}

// Exchange rate constant (1 USD to Cambodian Riel)
const EXCHANGE_RATE = 4000; // 1 USD = 4100 Riel (adjust as needed)

// Menu data structure - you can add more items easily
const menuData = {
  set: [
    {
      id: 'set1',
      name: 'ឈុតស៊ុប(តូច)',
      description: 'Soup Set',
      longDescription: 'Choice of base, 3 Vegetable, Fried Bean Curd, Lean Meat, 2 Noodle, 2 Egg, Mushroom',
      price: 13.75,
      image: 'attached_assets/Set image/Soup set2.jpg',
      options: [
        { name: 'Original', price: 13.75 },
        { name: 'Fresh Fish Ball', price: 13.75 },
        { name: 'Ox Brain', price: 14.75 },
        { name: 'Vessels', price: 14.75 }
      ]
    },
    {
      id: 'set2',
      name: 'ឈុតស៊ុប(ធំ)',
      description: 'Family Set',
      longDescription: 'Choice of base, Fresh Fish Ball, Shrimp, Squid, Mixed Meat Ball, 5 Vegetable, Fried Bean Curd, Lean Meat, Pork, Okra, Baby Corn,  2 Noodle, 2 Egg, Mushroom',
      price: 50.00,
      image: 'https://via.placeholder.com/300?text=Couple+Set',
      options: [
        { name: 'Original', price: 50.00 },
        { name: 'Fresh Fish Ball', price: 50.00 },
        { name: 'Ox Brain', price: 55.00 },
        { name: 'Vessels', price: 55.00 }
      ]
    },
    {
      id: 'set3',
      name: 'ឈុតសាច់អាំង',
      description: 'BBQ Set',
      longDescription: 'Choice of base, Okra, Baby Corn, Mushroom, Water Mimosa, Mix Vegetable',
      price: 9.75,
      image: 'attached_assets/BBQ set.png',
      options: [
        { name: 'Original', price: 9.75 },
        { name: 'Pork', price: 9.75 },
        { name: 'Flank', price: 10.75 },
        { name: 'Special Cut', price: 10.75 }
      ]
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
      image: 'attached_assets/សាច់ភ្លៅ.JPG'
    },
    {
      id: 'soup6',
      name: 'សាច់ផ្អែម',
      description: 'Brisket Beef',
      price: 3.00,
      image: 'attached_assets/សាច់ផ្អែម.JPG'
    },
    {
      id: 'soup7',
      name: 'សាច់ស្រួយ',
      description: 'Flank Beef',
      price: 3.00,
      image: 'attached_assets/សាច់ស្រួយ.JPG'
    },
    {
      id: 'soup8',
      name: 'ប្រហិតត្រី',
      description: 'Fresh Fish Ball',
      price: 2.5,
      image: 'attached_assets/IMG_8339.JPG'
    },
    {
      id: 'soup9',
      name: 'ខួរគោ',
      description: 'Ox Brain',
      price: 5.00,
      image: 'attached_assets/ខួរ.JPG'
    },
    {
      id: 'soup10',
      name: '100ស្រទាប់',
      description: 'Vessels',
      price: 5.00,
      image: 'attached_assets/១០០ ស្រទាប់.JPG'
    },
    {
      id: 'soup11',
      name: 'កន្សេាមដោះ',
      description: 'Ox Udder',
      price: 5.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup12',
      name: 'សាច់បាង',
      description: 'Bang Meat',
      price: 3.75,
      image: 'attached_assets/សាច់បាង.JPG'
    },
    {
      id: 'soup13',
      name: 'បេះដូង',
      description: 'Ox Heart',
      price: 3.75,
      image: 'attached_assets/បេះដូង.JPG'
    },
    {
      id: 'soup14',
      name: 'អណ្តាត',
      description: 'Ox Tongue',
      price: 3.75,
      image: 'attached_assets/អណ្តាត.JPG'
    },
    {
      id: 'soup15',
      name: 'សរសៃ',
      description: 'Ox Foot Gelatin',
      price: 3.75,
      image: 'attached_assets/សសៃ.JPG'
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
      image: 'attached_assets/ពោះ.JPG'
    },
    {
      id: 'soup18',
      name: 'ប្រហិតសាច់គោ',
      description: 'Beef Ball',
      price: 3.75,
      image: 'attached_assets/ប្រហិតសាច់គោ.JPG'
    },
    {
      id: 'soup19',
      name: 'បង្គា',
      description: 'Prawn',
      price: 6.00,
      image: 'attached_assets/បង្គា.JPG'
    },
    {
      id: 'soup20',
      name: 'មឹក',
      description: 'Squid',
      price: 6.00,
      image: 'attached_assets/មឹក.JPG'
    },
    {
      id: 'soup21',
      name: 'ក្រលៀន',
      description: 'Kidney',
      price: 6.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup22',
      name: 'មីទឹក',
      description: 'Hokkein Noodle',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup23',
      name: 'មីលឿង',
      description: 'Egg Noodle',
      price: 0.625,
      image: 'attached_assets/IMG_8336.JPG'
    },
    {
      id: 'soup24',
      name: 'មីខៀវ',
      description: 'Green Noodle',
      price: 0.625,
      image: 'attached_assets/IMG_8334.JPG'
    },
    {
      id: 'soup25',
      name: 'មី MAMA',
      description: 'MAMA Noodle',
      price: 0.375,
      image: 'attached_assets/IMG_8333.JPG'
    },
    {
      id: 'soup26',
      name: 'គុយទាវ',
      description: 'Rice Noodle',
      price: 0.625,
      image: 'attached_assets/IMG_8355.JPG'
    },
    {
      id: 'soup27',
      name: 'មីសួ',
      description: 'Rice Vermicelli',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup28',
      name: 'ពងមាន់',
      description: 'Egg',
      price: 0.25,
      image: 'attached_assets/IMG_8340.JPG'
    },
    {
      id: 'soup29',
      name: 'ផ្សិតម្ជុល',
      description: 'Needle Mushroom',
      price: 0.625,
      image: 'attached_assets/IMG_8304.JPG'
    },
    {
      id: 'soup30',
      name: 'ផ្សិតភ្លៅមាន់',
      description: 'Chicken Leg Mushroom',
      price: 0.625,
      image: 'attached_assets/IMG_8299.JPG'
    },
    {
      id: 'soup31',
      name: 'ស្ពៃតឿ',
      description: 'Bok Choy',
      price: 0.625,
      image: 'attached_assets/IMG_8316.JPG'
    },
    {
      id: 'soup32',
      name: 'ត្រកួន',
      description: 'Water Spinach',
      price: 0.625,
      image: 'attached_assets/IMG_8318.JPG'
    },
    {
      id: 'soup33',
      name: 'តាំងអោ',
      description: 'Green Chrysanthemum',
      price: 0.625,
      image: 'attached_assets/IMG_8330.JPG'
    },
    {
      id: 'soup34',
      name: 'ស្ពៃចង្កឺៈ',
      description: 'Collard Greens and Herbs',
      price: 0.625,
      image: 'attached_assets/IMG_8332.JPG'
    },
    {
      id: 'soup35',
      name: 'ផ្ទី',
      description: 'Spinach',
      price: 0.625,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'soup36',
      name: 'ស្ពៃបូកគោ',
      description: 'Baby Napa Cabbage',
      price: 0.625,
      image: 'attached_assets/IMG_8323.JPG'
    },
    {
      id: 'soup37',
      name: 'ពោត',
      description: 'Corn',
      price: 0.625,
      image: 'attached_assets/IMG_8301.JPG'
    },
    {
      id: 'soup38',
      name: 'ស្នៀតពោត',
      description: 'Baby Corn',
      price: 1.00,
      image: 'attached_assets/IMG_8314.JPG'
    },
    {
      id: 'soup39',
      name: 'ពោតបារាំង',
      description: 'Okra',
      price: 0.625,
      image: 'attached_assets/IMG_8309.JPG'
    },
    {
      id: 'soup40',
      name: 'ត្រាវ',
      description: 'Taro',
      price: 1.00,
      image: 'attached_assets/IMG_8312.JPG'
    },
    {
      id: 'soup41',
      name: 'ពពុៈសណ្តែក',
      description: 'Dried Bean Curd',
      price: 1.00,
      image: 'attached_assets/IMG_8307.JPG'
    },
    {
      id: 'soup42',
      name: 'ផ្កាថ្ម',
      description: 'Snow Fungus',
      price: 1.00,
      image: 'attached_assets/IMG_8335.JPG'
    },
    {
      id: 'soup43',
      name: 'ប្រហិតត្រីចៀន',
      description: 'Fried Fish Ball',
      price: 1.00,
      image: 'attached_assets/IMG_8311.JPG'
    },
    {
      id: 'soup45',
      name: 'ប្រហិតក្តាម',
      description: 'Crab Fish Ball',
      price: 1.00,
      image: 'attached_assets/IMG_8297.JPG'
    },
    {
      id: 'soup46',
      name: 'ប្រហិតតៅហ៊ូ',
      description: 'Tofu Ball',
      price: 1.00,
      image: 'attached_assets/IMG_8303.JPG'
    },
    {
      id: 'soup47',
      name: 'ហតដក',
      description: 'Hot dog',
      price: 1.00,
      image: 'attached_assets/IMG_8337.JPG'
    },
    {
      id: 'soup48',
      name: 'ប្រហិតនំប់់ាវ',
      description: 'Pork Filled Ball',
      price: 1.00,
      image: 'attached_assets/IMG_8306.JPG'
    },
    {
      id: 'soup49',
      name: 'ប្រហិតស្នូលក្តាម',
      description: 'Crab x Fish Ball',
      price: 1.00,
      image: 'attached_assets/IMG_8313.JPG'
    },
    {
      id: 'soup50',
      name: 'ប្រហិតត្រី',
      description: 'Fish Ball',
      price: 1.00,
      image: 'attached_assets/IMG_8300.JPG'
    },
  ],
  bbq: [
    {
      id: 'bbq1',
      name: 'សាច់ផ្អែម',
      description: 'Brisket Beef',
      price: 6.00,
      image: 'attached_assets/សាច់ផ្អែមភ្នំភ្លើង.JPG'
    },
    {
      id: 'bbq2',
      name: 'សាច់ស្រួយ',
      description: 'Flank Beef',
      price: 7.00,
      image: 'attached_assets/សាច់ស្រួយភ្នំភ្លើង.JPG'
    },
    {
      id: 'bbq3',
      name: 'សាច់ជ្រូក',
      description: 'Prok',
      price: 6.00,
      image: 'attached_assets/សាច់ជ្រូកបីជាន់ភ្នំភ្លើង.JPG'
    },
    {
      id: 'bbq4',
      name: 'មឹក',
      description: 'Squid',
      price: 6.00,
      image: 'attached_assets/មឹក.JPG'
    },
    {
      id: 'bbq5',
      name: 'បង្គា',
      description: 'Prawn',
      price: 6.00,
      image: 'attached_assets/បង្គា.JPG'
    },
    {
      id: 'bbq15',
      name: 'ក្រលៀន',
      description: 'Kidney',
      price: 6.00,
      image: 'https://via.placeholder.com/300?text=Clam+Chowder'
    },
    {
      id: 'bbq6',
      name: 'ពងមាន់',
      description: 'Egg',
      price: 0.25,
      image: 'attached_assets/IMG_8340.JPG'
    },
    {
      id: 'bbq7',
      name: 'ផ្សិតម្ជុល',
      description: 'Needle Mushroom',
      price: 0.625,
      image: 'attached_assets/IMG_8304.JPG'
    },
    {
      id: 'bbq8',
      name: 'ផ្សិតភ្លៅមាន់',
      description: 'Chicken Leg Mushroom',
      price: 0.625,
      image: 'attached_assets/IMG_8299.JPG'
    },
    {
      id: 'bbq9',
      name: 'ត្រកួន',
      description: 'Water Spinach',
      price: 0.625,
      image: 'attached_assets/IMG_8318.JPG'
    },
    {
      id: 'bbq10',
      name: 'ស្ពៃបូកគោ',
      description: 'Baby Napa Cabbage',
      price: 0.625,
      image: 'attached_assets/IMG_8323.JPG'
    },
    {
      id: 'bbq14',
      name: 'កាញឆែត',
      description: 'Water Mimosa',
      price: 1.00,
      image: 'attached_assets/IMG_8377.JPG'
    },
    {
      id: 'bbq11',
      name: 'ស្នៀតពោត',
      description: 'Baby Corn',
      price: 1.00,
      image: 'attached_assets/IMG_8314.JPG'
    },
    {
      id: 'bbq12',
      name: 'ពោតបារាំង',
      description: 'Okra',
      price: 0.625,
      image: 'attached_assets/IMG_8309.JPG'
    },
    {
      id: 'bbq13', 
      name: 'ហតដក',
      description: 'Hot dog',
      price: 1.00,
      image: 'attached_assets/IMG_8337.JPG'
    }  
  ],
  drink: [
    {
      id: 'drink1',
      name: 'Coke',
      description: 'Soft Drink',
      price: 0.75,
      image: 'attached_assets/Coke.jpg'
    },
    {
      id: 'drink2',
      name: 'Lemon Iced Tea',
      description: 'Soft Drink',
      price: 1.25,
      image: 'attached_assets/Chinese Leomon Tea.jpg'
    },
    {
      id: 'drink3',
      name: 'Mixed Fruit Tea',
      description: 'Soft Drink',
      price: 1.25,
      image: 'attached_assets/Chinese mix fruit.jpg'
    },
    {
      id: 'drink4',
      name: 'Vigor',
      description: 'Soft Drink',
      price: 1.00,
      image: 'attached_assets/Vigor.jpg'
    },
    {
      id: 'drink5',
      name: 'Sprite',
      description: 'Soft Drink',
      price: 0.75,
      image: 'attached_assets/Sprite.jpg'
    },
    {
      id: 'drink6',
      name: 'Vital',
      description: 'Soft Drink',
      price: 0.375,
      image: 'attached_assets/Vital.jpg'
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
  // Initialize order history count
  updateOrderHistoryCount();

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

  // Order history button
  document.getElementById('order-history-btn').addEventListener('click', showOrderHistory);

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

  // Payment upload button
  document.getElementById('trigger-upload-btn').addEventListener('click', function() {
    document.getElementById('payment-proof').click();
  });

  // Payment proof upload handling
  document.getElementById('payment-proof').addEventListener('change', handlePaymentUpload);

  // Done button after payment
  document.getElementById('payment-done-btn').addEventListener('click', function() {
    document.getElementById('invoice-modal').classList.add('hidden');
    // Reset cart and UI
    cart = [];
    updateCartUI();

    // Show in-app notification
    showNotification("Thank you for your order! We'll process it right away.");
  });



  // Always show the Done button next to Print Invoice
  document.getElementById('payment-done-btn').style.display = 'inline-block';

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
  // Settings button has been removed as requested
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

    // Use a static placeholder for items without an image or with placeholder URLs
    const imageSrc = (item.image && !item.image.includes('placeholder.com')) 
      ? item.image 
      : `attached_assets/logo.jpg`;

    menuItemEl.innerHTML = `
      <img src="${imageSrc}" alt="${item.name}" class="item-image" loading="lazy" width="300" height="200">
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

function showItemOptions(item) {
  const modal = document.getElementById('item-options-modal');
  const title = document.getElementById('item-options-title');
  const description = document.getElementById('item-options-description');
  const optionsContainer = document.getElementById('item-options-container');
  const addButton = document.getElementById('add-with-options-btn');

  title.textContent = item.name;
  description.textContent = item.longDescription || item.description;
  optionsContainer.innerHTML = '';

  if (item.options) {
    item.options.forEach((option, index) => {
      const optionId = `${item.id}_opt${index}`; // Create unique option ID
      const optionRow = document.createElement('div');
      optionRow.className = 'option-row';
      optionRow.innerHTML = `
        <input type="radio" name="item-option" value="${optionId}" ${index === 0 ? 'checked' : ''}>
        <span>${option.name}</span>
        <span class="option-price">$${option.price.toFixed(2)} / ៛${Math.round(option.price * EXCHANGE_RATE).toLocaleString()}</span>
      `;
      optionsContainer.appendChild(optionRow);
    });
  }

  addButton.onclick = () => {
    const selectedOption = document.querySelector('input[name="item-option"]:checked');
    const optionId = selectedOption ? selectedOption.value : `${item.id}_opt0`;
    const optionIndex = parseInt(optionId.split('_opt')[1]);
    const selectedPrice = item.options ? item.options[optionIndex].price : item.price;
    const selectedName = item.options ? `${item.name} (${item.options[optionIndex].name})` : item.name;

    const cartItem = {
      ...item,
      id: optionId, // Use the unique option ID
      name: selectedName,
      price: selectedPrice
    };

    // Add to cart
    const existingItem = cart.find(i => i.id === optionId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...cartItem, quantity: 1 });
    }

    updateCartUI();
    modal.classList.add('hidden');

    // Show notification
    showNotification(`${selectedName} has been added to cart`);
  };

  modal.classList.remove('hidden');
}

function addToCart(itemId) {
  const item = findItemById(itemId);
  if (!item) return;

  if (item.options && currentCategory === 'set') {
    showItemOptions(item);
    return;
  }

  // Check if item is already in cart
  const existingItem = cart.find(cartItem => cartItem.id === itemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  // Show notification
  showNotification(`${item.name} has been added to cart`);

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

  // Set delivery as default option
  document.getElementById('delivery-option').checked = true;
  toggleDeliveryAddressFields(true);

  // Initialize map if it hasn't been done yet
  if (!map) {
    initMap();
  }
}

function initMap() {
  try {
    // Default location (Phnom Penh coordinates)
    const defaultLocation = { lat: 11.562108, lng: 104.888535 };

    // Initialize the map with default location
    map = L.map('map').setView([defaultLocation.lat, defaultLocation.lng], 15);

    // Add the OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Show loading indicator
    const mapElement = document.getElementById('map');
    const locationLoadingDiv = document.createElement('div');
    locationLoadingDiv.id = 'location-loading';
    locationLoadingDiv.innerHTML = '<p style="text-align:center;padding:10px;background:rgba(255,255,255,0.8);position:absolute;z-index:1000;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:5px;">Detecting your location...</p>';
    mapElement.appendChild(locationLoadingDiv);

    // Try to get user's location for the map with additional options for mobile
    if (navigator.geolocation) {
      // Options for better mobile support
      const options = {
        enableHighAccuracy: true, // Use GPS if available (especially important for mobile)
        timeout: 20000,          // Wait up to 10 seconds
        maximumAge: 0            // Don't use cached position
      };

      const locationSuccess = (position) => {
        // Remove loading indicator
        const loadingElement = document.getElementById('location-loading');
        if (loadingElement) loadingElement.remove();

        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        // Update form values
        document.getElementById('customer-lat').value = pos.lat;
        document.getElementById('customer-lng').value = pos.lng;

        // Center map on user location
        map.setView([pos.lat, pos.lng], 15);

        // Add marker for user location
        if (userMarker) {
          userMarker.setLatLng([pos.lat, pos.lng]);
        } else {
          userMarker = L.marker([pos.lat, pos.lng], {
            title: 'Your Location'
          }).addTo(map);
        }

        // Add circle to show accuracy
        const accuracyCircle = L.circle([pos.lat, pos.lng], {
          radius: position.coords.accuracy,
          color: '#4285F4',
          fillColor: '#4285F4',
          fillOpacity: 0.2
        }).addTo(map);

        // Show success message
        const successMsg = document.createElement('div');
        successMsg.innerHTML = '<p style="color:green;font-size:12px;margin-top:5px;">✓ Your location was successfully detected</p>';
        document.querySelector('#map').insertAdjacentElement('afterend', successMsg);
      };

      const locationError = (error) => {
        // Remove loading indicator
        const loadingElement = document.getElementById('location-loading');
        if (loadingElement) loadingElement.remove();

        console.error('Error getting location: ', error);

        // Set a fallback location if geolocation fails
        document.getElementById('customer-lat').value = defaultLocation.lat;
        document.getElementById('customer-lng').value = defaultLocation.lng;

        // Add marker for the default location
        if (!userMarker) {
          userMarker = L.marker([defaultLocation.lat, defaultLocation.lng], {
            title: 'Default Location'
          }).addTo(map);
        } else {
          userMarker.setLatLng([defaultLocation.lat, defaultLocation.lng]);
        }

        // More helpful error message based on the error code
        let errorMsg = 'Unable to get your location. Using a default location instead.';

        if (error.code === 1) {
          errorMsg = 'Location access was denied. Please enable location permissions in your browser settings and try again.';
        } else if (error.code === 2) {
          errorMsg = 'Your location could not be determined. Please check your device GPS or try again later.';
        } else if (error.code === 3) {
          errorMsg = 'Location request timed out. Please try again.';
        }

        // Inform the user with a more visible message
        const errorElement = document.createElement('div');
        errorElement.innerHTML = `<p style="color:#e74c3c;font-size:12px;margin-top:5px;padding:5px;border:1px solid #e74c3c;border-radius:3px;background:#fff4f4;">${errorMsg}</p>`;
        document.querySelector('#map').insertAdjacentElement('afterend', errorElement);
      };

      // Try to get location with the enhanced options
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError, options);

    } else {
      // Geolocation not supported by browser
      const loadingElement = document.getElementById('location-loading');
      if (loadingElement) loadingElement.remove();

      const noSupportMsg = document.createElement('div');
      noSupportMsg.innerHTML = '<p style="color:red;font-size:12px;padding:5px;background:#fff4f4;border:1px solid red;border-radius:3px;">Geolocation is not supported by your browser. Please enter your address manually.</p>';
      document.querySelector('#map').insertAdjacentElement('afterend', noSupportMsg);

      // Set default coordinates
      document.getElementById('customer-lat').value = defaultLocation.lat;
      document.getElementById('customer-lng').value = defaultLocation.lng;

      // Add marker for default location
      userMarker = L.marker([defaultLocation.lat, defaultLocation.lng], {
        title: 'Default Location'
      }).addTo(map);
    }

    // Add click event to the map to update marker position
    map.on('click', function(e) {
      const clickedPos = e.latlng;

      // Update form values
      document.getElementById('customer-lat').value = clickedPos.lat;
      document.getElementById('customer-lng').value = clickedPos.lng;

      // Update marker position
      if (userMarker) {
        userMarker.setLatLng(clickedPos);
      } else {
        userMarker = L.marker(clickedPos).addTo(map);
      }
    });

  } catch (error) {
    console.error('Map initialization error:', error);
    document.getElementById('map').innerHTML = `
      <div style="background-color:#f8f9fa; padding:15px; border-radius:5px; text-align:center;">
        <p style="color:#dc3545; margin-bottom:10px;">Map unavailable</p>
        <p style="font-size:12px; color:#6c757d;">The app will continue to function without the map.</p>
      </div>`;

    // Set default coordinates so the order can still be placed
    document.getElementById('customer-lat').value = defaultLocation.lat;
    document.getElementById('customer-lng').value = defaultLocation.lng;
  }
}

// Function to toggle delivery address fields based on selected option
function toggleOrderTypeFields(type) {
  const addressFields = document.getElementById('delivery-address-fields');
  const pickupTimeField = document.getElementById('pickup-time-field');
  const addressInput = document.getElementById('customer-address');
  const pickupTimeInput = document.getElementById('pickup-time');

  if (type === 'delivery') {
    addressFields.style.display = 'block';
    pickupTimeField.style.display = 'none';
    addressInput.required = true;
    pickupTimeInput.required = false;
  } else {
    addressFields.style.display = 'none';
    pickupTimeField.style.display = 'block';
    addressInput.required = false;
    pickupTimeInput.required = true;
  }
}

function handleOrderSubmission(e) {
  e.preventDefault();

  // Get form data
  const name = document.getElementById('customer-name').value;
  const phone = document.getElementById('customer-phone').value;
  const orderType = document.querySelector('input[name="order-type"]:checked').value;

  // Set address based on order type
  let address = '';
  let lat = '';
  let lng = '';

  if (orderType === 'delivery') {
    address = document.getElementById('customer-address').value;
    lat = document.getElementById('customer-lat').value;
    lng = document.getElementById('customer-lng').value;
  } else {
    const pickupTime = document.getElementById('pickup-time').value;
    address = `Pickup at restaurant (Time: ${pickupTime})`;
  }

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
    customer: { name, phone, address, lat, lng },
    items: cart,
    total,
    notes,
    orderType: document.querySelector('input[name="order-type"]:checked').value
  };

  // Store order data in localStorage for later use with payment proof
  localStorage.setItem('currentOrder', JSON.stringify(orderData));

  // Save order to order history
  saveOrderToHistory(orderData);

  // Generate invoice
  generateInvoice(orderData);


  // Hide checkout modal and show invoice
  document.getElementById('checkout-modal').classList.add('hidden');
  document.getElementById('invoice-modal').classList.remove('hidden');

  // Hide payment section for pickup orders
  if (orderData.orderType === 'pickup') {
    document.querySelector('.payment-info').style.display = 'none';
  } else {
    document.querySelector('.payment-info').style.display = 'block';
  }

  // Always show Done button
  document.getElementById('payment-done-btn').style.display = 'inline-block';

  // Send Telegram notification
  sendTelegramNotification(orderData);
}

// Function to send Telegram notification
function sendTelegramNotification(orderData) {
  // Get saved Telegram settings
  const botToken = '7499570335:AAGPL3nF-d6261tCHJkBHqpjdIOE-J1-F14'; // Replace with your bot token
  const chatId = '552363617'; // Replace with your chat ID

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
      console.log("Telegram notification sent successfully");

      // If this is a delivery order, send the location too
      if (orderData.orderType === 'delivery' && orderData.customer.lat && orderData.customer.lng) {
        window.TelegramBot.sendLocationToTelegram(
          botToken, 
          chatId, 
          orderData.customer.lat, 
          orderData.customer.lng,
          `📍 Delivery location for Order #${orderData.orderNumber}`
        );
      }
    })
    .catch(error => {
      console.error("Error sending Telegram notification:", error);
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

function handlePaymentUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Show preview of uploaded payment proof
  const reader = new FileReader();
  reader.onload = function(e) {
    const previewImg = document.getElementById('preview-image');
    previewImg.src = e.target.result;
    document.getElementById('payment-preview').style.display = 'block';

    // Send payment proof to Telegram
    sendPaymentProofToTelegram(e.target.result);
  };
  reader.readAsDataURL(file);
}

function sendPaymentProofToTelegram(imageDataUrl) {
  // Get saved Telegram settings
  const botToken = '7499570335:AAGPL3nF-d6261tCHJkBHqpjdIOE-J1-F14'; // Hardcoded token for reliability
  const chatId = '552363617'; // Hardcoded chat ID for reliability

  // Check if Telegram is configured
  if (!botToken || !chatId) {
    console.warn('Telegram notification not sent: Bot token or Chat ID not configured');
    return;
  }

  // Get the current order data from localStorage
  const orderData = JSON.parse(localStorage.getItem('currentOrder'));
  if (!orderData) {
    console.error('Order data not found');
    return;
  }

  // Instead of sending the full order again, just send the payment proof image with a simple caption
  const caption = `💳 <b>Payment Proof</b> for Order #${orderData.orderNumber}`;

  // Send just the payment proof image
  window.TelegramBot.sendImageToTelegram(botToken, chatId, imageDataUrl, caption)
    .then(response => {
      console.log("Payment proof sent successfully to Telegram");
    })
    .catch(error => {
      console.error("Error sending payment proof to Telegram:", error);
    });
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

// Order History Functions

// Save order to history in localStorage
function saveOrderToHistory(orderData) {
  // Get existing orders or initialize an empty array
  let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

  // Add the new order to the beginning of the array (most recent first)
  orderHistory.unshift(orderData);

  // Store back in localStorage
  localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

  // Update the order history count badge
  updateOrderHistoryCount();
}

// Show order history modal
function showOrderHistory() {
  const orderHistoryModal = document.getElementById('order-history-modal');
  orderHistoryModal.classList.remove('hidden');

  // Display order history
  displayOrderHistory();
}

// Update order history count badge
function updateOrderHistoryCount() {
  const orderHistoryCountEl = document.getElementById('order-history-count');
  const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

  if (orderHistoryCountEl) {
    orderHistoryCountEl.textContent = orderHistory.length;
    // Show badge only if there are orders
    orderHistoryCountEl.style.display = orderHistory.length > 0 ? 'flex' : 'none';
  }
}

// Display order history in the modal
function displayOrderHistory() {
  const orderHistoryList = document.getElementById('order-history-list');
  const noOrdersMessage = document.getElementById('no-orders-message');

  // Get order history from localStorage
  const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

  // Clear previous content
  orderHistoryList.innerHTML = '';

  // Show message if no orders
  if (orderHistory.length === 0) {
    orderHistoryList.appendChild(noOrdersMessage);
    return;
  }

  // Create an element for each order
  orderHistory.forEach(order => {
    const orderEl = document.createElement('div');
    orderEl.className = 'order-history-item';
    orderEl.dataset.orderNumber = order.orderNumber;

    // Calculate total in riel
    const totalRiel = Math.round(order.total * EXCHANGE_RATE);

    orderEl.innerHTML = `
      <div class="order-history-header">
        <span>Order #${order.orderNumber}</span>
        <span>$${order.total.toFixed(2)} / ៛${totalRiel.toLocaleString()}</span>
      </div>
      <div class="order-history-details">
        <div>${order.orderDate}</div>
        <div>${order.items.length} items</div>
        <div>${order.orderType === 'delivery' ? 'Delivery' : 'Pickup'}</div>
      </div>
    `;

    // Add click event to show invoice
    orderEl.addEventListener('click', () => {
      showInvoiceFromHistory(order);
    });

    orderHistoryList.appendChild(orderEl);
  });
}

// Show invoice from history
function showInvoiceFromHistory(orderData) {
  // Generate invoice with the stored order data
  generateInvoice(orderData);

  // Hide order history modal
  document.getElementById('order-history-modal').classList.add('hidden');

  // Show invoice modal
  document.getElementById('invoice-modal').classList.remove('hidden');

  // Hide payment section for all historical invoices
  document.querySelector('.payment-info').style.display = 'none';

  // Hide the Done button for historical invoices
  document.getElementById('payment-done-btn').style.display = 'none';

  // Add click handler to the close modal X button and print invoice button
  const closeModalBtn = document.querySelector('#invoice-modal .close-modal');
  const printInvoiceBtn = document.getElementById('print-invoice-btn');

  // Store original handlers
  const originalCloseHandler = closeModalBtn.onclick;
  const originalPrintHandler = printInvoiceBtn.onclick;

  // Override close button handler
  closeModalBtn.onclick = function() {
    // Hide invoice modal
    document.getElementById('invoice-modal').classList.add('hidden');

    // Show order history modal again
    document.getElementById('order-history-modal').classList.remove('hidden');

    // Restore original handlers
    closeModalBtn.onclick = originalCloseHandler;
    printInvoiceBtn.onclick = originalPrintHandler;
  };

  // Modify print button to return to history after printing
  printInvoiceBtn.onclick = function() {
    // Print the invoice
    printInvoice();

    // Hide invoice modal
    document.getElementById('invoice-modal').classList.add('hidden');

    // Show order history modal again
    document.getElementById('order-history-modal').classList.remove('hidden');

    // Restore original handlers
    closeModalBtn.onclick = originalCloseHandler;
    printInvoiceBtn.onclick = originalPrintHandler;
  };
}