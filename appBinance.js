
    let Binance = require('node-binance-api');
    let binance = new Binance();
    let await = require('await');
    let coin = require('./coin');
    let GlobalName = require('./GlobalList');


    binance.options({
    APIKEY: " insert - Apikey ",
    APISECRET: "insert Apisecret ",
    useServerTime: true,
    recvWindow: 60000,
    verbose: true,
    log: log => {
        console.log(log);
    }
    });
    console.log('Выполнена инициализация Binance');

        module.exports.CurrentBotPrice = async function CurrentBotPrice(tradincople){
            let ticker = await binance.prices();
            GlobalName.ListBot.CurPrice = (ticker[tradincople]*1).toFixed(GlobalName.ListBot.CourseNumberSigns);
            return await (ticker[tradincople]*1).toFixed(GlobalName.ListBot.CourseNumberSigns);
            }

    // // Получение баланса фиатной валюты //
    //     module.exports.GettingBotFiatBalance = async function GettingBotFiatBalance(Fiat){
    //         await binance.useServerTime();
    //         binance.balance((error, balances) => {
    //         if ( error ) return console.error(error);
    //         console.info("balance: ", balances[Fiat].available);
    //         return balances[Fiat].available;
    //         });
    //     }

    // Метод покупки MARKET PlaceBotBuyMarket //
        module.exports.PlaceBotBuyMarket = function PlaceBotBuyMarket(){
            let quantity = (GlobalName.ListBot.PriseRate/GlobalName.ListBot.CurPrice).toFixed(GlobalName.ListBot.CoinNumberSigns);
            binance.marketBuy(GlobalName.ListBot.TradingСouple, quantity, (error, response) => {
            console.log(response);
            GlobalName.ListBot.OrdersBuyMarketIDset = response.orderId;
            GlobalName.ListBot.OrdersBuyMarketFIset = response.cummulativeQuoteQty;
            GlobalName.ListBot.OrdersBuyMarketCIset = response.origQty;
            });
        }
    // Метод запроса статуса ордера
        module.exports.GettingOrderStatus = function GettingOrderStatus(OrdersID, type){
            binance.orderStatus(GlobalName.ListBot.TradingСouple, OrdersID, (error, orderStatus, symbol) => {
            console.log(orderStatus.status);
            if(type == 'BuyMarket'){
                console.log("я в BuyMarket GettingOrderStatus");
                GlobalName.ListBot.OrdersBuyMarketStatusset = orderStatus.status;
            }
            if(type == 'StopLimit'){
                GlobalName.ListBot.OrdersSellStopStatusset = orderStatus.status;
            }
            });
        }

    // Метод продажи STOP_LOSS_LIMIT // PlaceBotStopLimitOrder
    module.exports.PlaceBotStopLimitOrder = function PlaceBotStopLimitOrder(){
        let type = "STOP_LOSS_LIMIT";
        let quantity = GlobalName.ListBot.PurseCoinBot;
        let price = GlobalName.ListBot.LandSales;
        let stopPrice = (price*1.0004).toFixed(GlobalName.ListBot.CourseNumberSigns);
        binance.sell(GlobalName.ListBot.TradingСouple, quantity, price, {stopPrice: stopPrice, type: type}, (error, response) => {
        console.log(response);
        console.log(response.orderId);
        GlobalName.ListBot.OrdersSellStopIDset = response.orderId;
        });
    }

    // Метод отмены SellLimit ордера // Не используется
    module.exports.СancelBotOrder = function СancelBotOrder(OrdersID){
        binance.cancel(GlobalName.ListBot.TradingСouple, OrdersID, (error, response, symbol) => {
            console.log(response);
            GlobalName.ListBot.OrdersSellStopCRset = undefined;
            GlobalName.ListBot.OrdersSellStopCIset = undefined;
            GlobalName.ListBot.OrdersSellStopIDset = undefined;
        });
    }

    // Метод запроса ордеров с биржи
    module.exports.GettingBotOrder = function GettingBotOrder(OrdersID){
        binance.orderStatus(GlobalName.ListBot.TradingСouple, OrdersID, (error, orderStatus, symbol) => {
            console.log(orderStatus);
            console.log(orderStatus.price, orderStatus.origQty);
            GlobalName.ListBot.OrdersSellStopCRset = orderStatus.price;
            GlobalName.ListBot.OrdersSellStopCIset = orderStatus.origQty;
            });
    }
