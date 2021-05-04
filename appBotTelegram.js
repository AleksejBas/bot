let coin = require('./coin')
// let coin = new ZILCoin();
// t.me/Albi_trading_bot.  - @Albi_trading_test_bot -


const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = ' insert - token ';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// bot.sendMessage(msg.chat.id, "Я Торговый бот!")
let StopTelega = 'In expectation'
module.exports.StopTelega = StopTelega
let InfoTelega = undefined
module.exports.InfoTelega = InfoTelega
let BuyTelega = undefined
module.exports.BuyTelega = BuyTelega
let SellTelega = undefined
module.exports.SellTelega = SellTelega


let data;
    bot.onText(/\/start/, msg =>{
        const { id } = msg.chat
        bot.sendMessage(id, `Привет ${msg.chat.first_name}, я начинаю торговлю на паре ${coin.ETHRUBCoin.TradingСouple}, о ходе ее выполнения я буду тебя информировать.
Вперед зарабатывать деньги!`)
        data = msg.chat.id;
        StopTelega = 'Job'
    })
    bot.onText(/\/stop/, msg =>{
        const { id } = msg.chat
        bot.sendMessage(id, `Я остановил торги!`)
        data = msg.chat.id
        StopTelega = 'Stop'
    })
    bot.onText(/\/pause/, msg =>{
        const { id } = msg.chat
        bot.sendMessage(id, `Я включил паузу!`)
        data = msg.chat.id
        StopTelega = 'Pause'
    })
    bot.onText(/\/play/, msg =>{
        const { id } = msg.chat
        bot.sendMessage(id, `Я отключил паузу!`)
        data = msg.chat.id
        StopTelega = 'Play'
    })
    bot.onText(/\/info/, msg =>{
        const { id } = msg.chat
        // if(StopTelega === 'Job'){
        let data = `${msg.chat.first_name}, отправляю Вам информация о торгах!`
        bot.sendMessage(id, data)
        InfoTelega = 'info'
        // }
        // if(StopTelega === 'Stop'){
        //     let data = `${msg.chat.first_name}, торги остановлены, не могу дать информацию!`
        //     bot.sendMessage(id, data)
        //     InfoTelega = undefined
        //     }
        //     if(StopTelega === undefined){
        //         let data = `${msg.chat.first_name}, торгов еще нет, не могу дать информацию!`
        //         bot.sendMessage(id, data)
        //         InfoTelega = undefined
        //         }
        data = msg.chat.id
        // InfoTelega = 'info'
    })
    bot.onText(/\/buy/, msg =>{
        const { id } = msg.chat
        bot.sendMessage(id, `Я сделал покупку по Вашему требованию ${msg.chat.first_name}!`)
        data = msg.chat.id
        BuyTelega = 'Buy'
    })
    bot.onText(/\/sell/, msg =>{
        const { id } = msg.chat
        bot.sendMessage(id, `Я продал по Вашему ${msg.chat.first_name} требованию!`)
        data = msg.chat.id
        SellTelega = 'Sell'
    })

module.exports.InfoBot = function InfoBot(count){
    bot.sendMessage(data, count)
    InfoTelega = undefined
    BuyTelega = undefined
    SellTelega = undefined
}
module.exports.SetBot = function SetBot(){
    let start = StopTelega;
    StopTelega = undefined;
    return start
}
module.exports.BayBot = function BayBot(){
    return BuyTelega
}
module.exports.SellBot = function SellBot(){
    return SellTelega
}
module.exports.infoBot = function infoBot(){
    return InfoTelega
}
