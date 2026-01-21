const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id,
`👋 Welcome to TapDrop!

🪙 Tap to earn coins
🔁 Send coins to friends
🎁 Big rewards coming

Type /balance to check your coins`
  );
});
