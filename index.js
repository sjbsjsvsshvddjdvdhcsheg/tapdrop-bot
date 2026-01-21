const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error('BOT_TOKEN is missing');
}

const bot = new TelegramBot(token, { polling: true });

const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Mini app running on port ' + PORT);
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `👋 Welcome to TapDrop!

🪙 Tap to earn coins
🔁 Send coins to friends
🎁 Big rewards coming`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '▶️ PLAY',
              web_app: {
                url: process.env.RAILWAY_STATIC_URL
              }
            }
          ]
        ]
      }
    }
  );
});
