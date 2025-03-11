
// Telegram Bot Integration for Restaurant Order System
function sendTelegramMessage(botToken, chatId, message) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
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
  .then(response => response.json())
  .catch(error => {
    console.error('Error sending Telegram message:', error);
    return { ok: false, error: error.message };
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

// Export functions for use in main script
window.TelegramBot = {
  sendTelegramMessage,
  formatOrderForTelegram
};
