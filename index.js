// require('newrelic');

const express = require('express')
const app = express()
const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config()
app.use(express.json());

const port = process.env.PORT || 3000

app.listen(port, () => console.log('up'))

const bot = new TelegramBot(`${process.env.BOT_TOKEN}`, { polling: true });

//TEST PING PONG
app.get('/', async (req, res) => res.send('ok'))


//ENDPOINT FOR RELIC
app.post("/new-relic-alert", async (req, res) => {

    const alertMessage = req.body;

    const chatId = `${process.env.CHAT_ID}`;


    try {
        await bot.sendMessage(chatId, JSON.stringify(alertMessage));
        res.status(200)
    } catch (error) {
        console.log(error.message);
        res.status(500)
    }


    return res.status(200).send('sent')
});



