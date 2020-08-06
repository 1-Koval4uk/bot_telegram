const TelegramBot = require('node-telegram-bot-api');
const debug = require('./helpers')
const TOKEN = 'token';

console.log('Bot has been started')
const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        timeUp: {
            timeout: 10
        }
    }
});
bot.onText(/\/start/, msg => {
    const { id } = msg.chat;
    bot.sendMessage(id, `Привет ${msg.from.first_name}`)
});


