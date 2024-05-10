const express = require('express')
const app = express()
const TelegramBot = require('node-telegram-bot-api');

app.use(express.json());

app.listen(3000, () => console.log('up'))

const bot = new TelegramBot(`6767664046:AAHkSfcrDSwYB80SxT-U_7FHV48mK6pycKU`, { polling: true });

//TEST PING PONG
app.get('/', async (req, res) => res.send('ok'))


//ENDPOINT FOR RELIC
app.post("/new-relic-alert", async (req, res) => {

    const alertMessage = req.body;

    const chatId = '-4212280450';


    try {
        await bot.sendMessage(chatId, JSON.stringify(alertMessage));
        res.status(200)
    } catch (error) {
        console.log(error.message);
        res.status(500)
    }


    return res.status(200).send('sent')
});



