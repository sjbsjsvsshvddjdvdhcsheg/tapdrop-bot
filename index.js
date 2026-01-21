const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const app = express();
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Mini app running');
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id,
`👋 Welcome to TapDrop!

🪙 Tap to earn coins
🔁 Send coins to friends
🎁 Big rewards coming`,
{
  reply_markup: {
    inline_keyboard: [[
      {
        text: "▶️ PLAY",
        web_app: { url: "https://YOUR_RAILWAY_URL.up.railway.app" }
      }
    ]]
  }
});
