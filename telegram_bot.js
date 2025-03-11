
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
  // First send text message
  return sendTelegramMessage(botToken, chatId, message)
    .then(response => {
      if (response.ok) {
        console.log("Payment text notification sent successfully");
        // If we have an image URL from a file upload
        if (imageUrl && imageUrl.startsWith('data:image')) {
          console.log("Image data received, will send as separate message");
          // At this point, we would ideally send the image directly, but Telegram
          // requires a file upload rather than a Data URL. We inform the user
          // that payment was received.
          const followupMsg = "💳 *Payment image received*\n\nThe customer has uploaded proof of payment.";
          return sendTelegramMessage(botToken, chatId, followupMsg);
        }
        return response;
      }
      return response;
    });
}

// Export functions for use in main script
window.TelegramBot = {
  sendTelegramMessage,
  formatOrderForTelegram,
  sendPaymentProofMessage
};
