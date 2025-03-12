
// Telegram Bot Integration for Restaurant Order System
function sendTelegramMessage(botToken, chatId, message) {
  // Validate inputs
  if (!botToken || !botToken.trim()) {
    return Promise.resolve({ ok: false, error: "Bot token is empty" });
  }

  if (!chatId || !chatId.trim()) {
    return Promise.resolve({ ok: false, error: "Chat ID is empty" });
  }

  // Ensure chatId is properly formatted (remove any spaces)
  chatId = chatId.trim();

  // Attempt to convert to number if it's numeric
  if (/^-?\d+$/.test(chatId)) {
    // It's a valid number format (could be positive or negative)
    console.log("Using numeric chat ID format");
  } else {
    console.log("Warning: Chat ID doesn't appear to be in standard numeric format");
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  console.log(`Sending message to chat ID: ${chatId}`);

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML'
    })
  })
  .then(response => {
    console.log("Telegram API response status:", response.status);
    return response.json();
  })
  .then(data => {
    console.log("Telegram API response data:", data);
    return data;
  })
  .catch(error => {
    console.error('Error sending Telegram message:', error);
    return { ok: false, error: error.message || "Network error" };
  });
}

function formatOrderForTelegram(order) {
  const { orderNumber, orderDate, customer, items, total, notes } = order;

  // Format items
  const itemsText = items.map(item => {
    return `• ${item.name} × ${item.quantity} - $${(item.price * item.quantity).toFixed(2)} / ៛${Math.round(item.price * item.quantity * 4000).toLocaleString()}`;
  }).join('\n');

  // Create message
  let message = `🔔 <b>NEW ORDER #${orderNumber}</b>\n\n`;
  message += `📅 <b>Date:</b> ${orderDate}\n\n`;
  message += `👤 <b>Customer Info:</b>\n`;
  message += `Name: ${customer.name}\n`;
  message += `Phone: ${customer.phone}\n`;
  message += `Address: ${customer.address}\n\n`;
  message += `🛒 <b>Order Items:</b>\n${itemsText}\n\n`;
  message += `💰 <b>Total:</b> $${total.toFixed(2)} / ៛${Math.round(total * 4000).toLocaleString()}\n\n`;

  if (notes && notes.trim()) {
    message += `📝 <b>Customer Notes:</b>\n${notes}\n\n`;
  }

  message += `<i>Open the restaurant app to view the full order details</i>`;

  return message;
}

// Function to send payment proof notification
function sendPaymentProofMessage(botToken, chatId, message, imageUrl) {
  // Just send the image without resending the order message
  if (imageUrl && imageUrl.startsWith('data:image')) {
    console.log("Image data received, sending actual image to Telegram");
    return sendImageToTelegram(botToken, chatId, imageUrl, "💳 <b>Payment proof</b>");
  }
  return Promise.resolve({ ok: true });
}

// Function to send an image to Telegram
function sendImageToTelegram(botToken, chatId, imageDataUrl, caption) {
  if (!botToken || !chatId || !imageDataUrl) {
    return Promise.resolve({ ok: false, error: "Missing required parameters" });
  }

  // Convert data URL to blob
  const byteString = atob(imageDataUrl.split(',')[1]);
  const mimeType = imageDataUrl.split(',')[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([ab], { type: mimeType });

  // Create FormData to send the image
  const formData = new FormData();
  formData.append('chat_id', chatId);
  formData.append('photo', blob, 'payment_proof.jpg');

  if (caption) {
    formData.append('caption', caption);
    formData.append('parse_mode', 'HTML');
  }

  const url = `https://api.telegram.org/bot${botToken}/sendPhoto`;

  return fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    console.log("Telegram sendPhoto API response status:", response.status);
    return response.json();
  })
  .then(data => {
    console.log("Telegram sendPhoto API response data:", data);
    return data;
  })
  .catch(error => {
    console.error('Error sending photo to Telegram:', error);
    return { ok: false, error: error.message || "Network error" };
  });
}

// Function to send location to Telegram
function sendLocationToTelegram(botToken, chatId, lat, lng, caption) {
  if (!botToken || !chatId || !lat || !lng) {
    return Promise.resolve({ ok: false, error: "Missing required parameters" });
  }

  const url = `https://api.telegram.org/bot${botToken}/sendLocation`;

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      latitude: lat,
      longitude: lng,
      caption: caption,
      parse_mode: 'HTML'
    })
  })
  .then(response => {
    console.log("Telegram sendLocation API response status:", response.status);
    return response.json();
  })
  .then(data => {
    console.log("Telegram sendLocation API response data:", data);
    return data;
  })
  .catch(error => {
    console.error('Error sending location to Telegram:', error);
    return { ok: false, error: error.message || "Network error" };
  });
}

// Export functions for use in main script
window.TelegramBot = {
  sendTelegramMessage,
  formatOrderForTelegram,
  sendPaymentProofMessage,
  sendImageToTelegram,
  sendLocationToTelegram
};