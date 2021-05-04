let binance = require('./appBinance.js');
let Bot = require('./classBot');
let BotPurse = require('./purse');
let Coin = require('./coin');
let GlobalName = require('./GlobalList');
let BotTelegram = require('./appBotTelegram');

let time = 0;
let break_even = 0;

let BotExpert = new Bot();

IntervalStart = setInterval(start, 1000);

    function start(){
        let start = BotTelegram.SetBot();
            console.log(`Мой статус ${start}`);
            if(start == 'Job'){
                Main();
                clearInterval(IntervalStart);
                IntervalStop = setInterval(Stop, 1000);
            }
        }

        function Main(){
            let data = 'Начинаю торговлю';
            BotTelegram.InfoBot(data);
            console.log(data);
            IntervalC = setInterval(CurPrice, 1000);
            IntervalStats = setInterval(Stats, 1000);
            IntervalInfoBot = setInterval(InfoTelegram, 5000);
            IntervalPause = setInterval(Pause, 1000);
            IntervalPlay = setInterval(Play, 1000);
            if(GlobalName.ListBot.VectorBot == 'Buy'){
            setTimeout(MainP, 5000);
            }else{
                setTimeout(MainS, 5000);
            }
        }

        function MainP(){
            let data = 'Начинаю покупку';
            BotTelegram.InfoBot(data);
            console.log(data);
            IntervalP = setInterval(Purchase, 1000);
            IntervalGOMB = setInterval(GettingOrderMarketBuy, 1000);
            IntervalPurse = setInterval(Purse, 1000);
            IntervalCount = setInterval(Count, 1000);
        }
        function MainS(){
            console.log('Начинаю продажу');
            let data = 'Начинаю продажу';
            BotTelegram.InfoBot(data);
            console.log(data);
            IntervalS = setInterval(Sales, 1000);
            IntervalCancel = setInterval(CancelOrderPlace, 1000);
            IntervalPOSL = setInterval(PlaceOprderStopLoss, 1000);
            IntervalGOSS = setInterval(GettingOrderSellStop, 1000);
            IntervalCOSL = setInterval(CheckOprderStopLoss, 1000);
            IntervalPurse = setInterval(Purse, 1000);
            IntervalProfit = setInterval(Profit, 1000);
        }
// ----------------------------------------------------------------------------- //

        function CurPrice(){
            binance.CurrentBotPrice(GlobalName.ListBot.TradingСouple);
        }

        function Purchase(){
            if(GlobalName.ListBot.VectorBot == 'Buy'){
            let data = BotExpert.PurchaseBot();
            if(data == 'BuyMarketPlace'){
                clearInterval(IntervalP);
                GlobalName.ListBot.VectorBotset = 'GettingOrderMarketBuy';
                binance.PlaceBotBuyMarket();
                let boti = 'Я совершил сделку';
                BotTelegram.InfoBot(boti);
                console.log(boti);
            }
            if(data == 'SellOrderPlace'){
                clearInterval(IntervalP);
                clearInterval(IntervalGOMB);
                clearInterval(IntervalPurse);
                clearInterval(IntervalCount);
                binance.PlaceBotStopLimitOrder();
                GlobalName.ListBot.markerStopLossBotPlas();
                GlobalName.ListBot.VectorBotset = 'Sell';
                let boti = 'Курс достиг величины продажи';
                BotTelegram.InfoBot(boti);
                console.log(boti);
                setTimeout(MainS, 3000);
            }
            Break_even();
        }
        }

        function GettingOrderMarketBuy(){
            if(GlobalName.ListBot.VectorBot == 'GettingOrderMarketBuy'){
            console.log('Я в GettingOrderMarketBuy');
                if(GlobalName.ListBot.OrdersBuyMarketID != undefined){
                    console.log(GlobalName.ListBot.OrdersBuyMarketID);
                    binance.GettingOrderStatus(GlobalName.ListBot.OrdersBuyMarketID, 'BuyMarket');
                        if(GlobalName.ListBot.OrdersBuyMarketStatus == 'FILLED'){
                            clearInterval(IntervalGOMB);
                            GlobalName.ListBot.VectorBotset = 'PurseM';
                            console.log('Я внутри GettingOrderMarketBuy');
                        }else{
                            console.log('Ордера еще нет, ждем!');
                        }
                }else{
                    console.log("Ордера нет");
                    time++;
                    if(time == 20){
                        time = 0;
                        clearInterval(IntervalGOMB);
                        clearInterval(IntervalPurse);
                        clearInterval(IntervalCount);
                        GlobalName.ListBot.OrdersBuyMarketIDset = undefined;
                        GlobalName.ListBot.OrdersBuyMarketStatusset = undefined;
                        GlobalName.ListBot.VectorBotset = 'Buy';
                        // setTimeout(MainP, 5000);
                        let par = 'Сделка сорвалась!';
                        BotTelegram.InfoBot(par);
                        console.log(par);
                        IntervalStart = setInterval(start, 1000);
                    }
                }
            }
        }

        function Purse(){
            if(GlobalName.ListBot.VectorBot == 'PurseM'){
                if(GlobalName.ListBot.OrdersBuyMarketCI != undefined){
                    console.log('Я в PurseM');
                    BotPurse.Purse('BuyMarket');
                    GlobalName.ListBot.markerBuyPlus();
                    GlobalName.ListBot.VectorBotset = 'CountM';
                    clearInterval(IntervalPurse);
            }else{
                    console.log('Ордера нет!');
                    clearInterval(IntervalPurse);
                    setTimeout(MainS, 5000);
                }
            }
            if(GlobalName.ListBot.VectorBot == 'PurseS'){
                if(GlobalName.ListBot.OrdersSellStopCI != undefined && GlobalName.ListBot.OrdersSellStopCR != undefined){
                    console.log('Я в PurseS');
                    clearInterval(IntervalPurse);
                    BotPurse.Purse('SellStop');
                    GlobalName.ListBot.VectorBotset = 'Profit';
                }else{
                    console.log('Данные из ордера еще не получены!');
                    time++;
                    if(time == 10){
                    time = 0;
                    GlobalName.ListBot.VectorBotset = 'GettingOrderSellStop';
                    clearInterval(IntervalPurse);
                    IntervalGOSS = setInterval(GettingOrderSellStop, 1000);
                    }
                }
            }
        }

        function Count(){
            if(GlobalName.ListBot.VectorBot == 'CountM'){
                if(GlobalName.ListBot.PurseCoinBot != 0 && GlobalName.ListBot.OrdersBuyMarketID == undefined){
                    console.log('Я в CountM');
                    BotPurse.Count('BuyMarket');
                    clearInterval(IntervalCount);
                    GlobalName.ListBot.VectorBotset = 'Sell';
                    setTimeout(MainS, 5000);
                }
            }
        }

        function Sales(){
            if(GlobalName.ListBot.VectorBot == 'Sell'){
                let data = BotExpert.SalesBot();
                if(data == 'SellOrderPlace'){
                    clearInterval(IntervalS);
                    let boti = 'Выставляю ордер на продажу';
                    BotTelegram.InfoBot(boti);
                    console.log(boti);
                    data = undefined;
                    GlobalName.ListBot.VectorBotset = 'PlaceOprderStopLoss';
                }
                if(data == 'CancelOrderPlace'){
                    clearInterval(IntervalS);
                    let boti = 'Сработала отмена ордера';
                    BotTelegram.InfoBot(boti);
                    console.log(boti);
                    data = undefined;
                    GlobalName.ListBot.VectorBotset = 'CancelOrderPlace';
                }
                if(data == 'FallBuy'){
                    clearInterval(IntervalS);
                    clearInterval(IntervalCancel);
                    clearInterval(IntervalPOSL);
                    clearInterval(IntervalGOSS);
                    clearInterval(IntervalPurse);
                    clearInterval(IntervalProfit);
                    let boti = 'Пошел на перезакуп по Fall';
                    BotTelegram.InfoBot(boti);
                    console.log(boti);
                    data = undefined;
                    GlobalName.ListBot.markerFallPlas();
                    GlobalName.ListBot.VectorBotset = 'Buy';
                    setTimeout(MainP, 5000);
                }
                if(GlobalName.ListBot.OrdersSellStopID != undefined){
                    console.log('Я в отслеживании Stop ордера');
                    binance.GettingOrderStatus(GlobalName.ListBot.OrdersSellStopID, 'StopLimit');
                    if(GlobalName.ListBot.OrdersSellStopStatus == 'FILLED'){
                        clearInterval(IntervalS);
                        clearInterval(IntervalCancel);
                        clearInterval(IntervalPOSL);
                        clearInterval(IntervalCOSL);
                        let boti = 'Ордер на продажу исполнен';
                        BotTelegram.InfoBot(boti);
                        console.log(boti);
                        GlobalName.ListBot.markerSellPlas();
                        GlobalName.ListBot.markerStopLossBotset = 0;
                        data = undefined;
                        GlobalName.ListBot.VectorBotset = 'GettingOrderSellStop';
                    }
                }
            Break_even();
        }
        }

        function CancelOrderPlace(){
            if(GlobalName.ListBot.VectorBot == 'CancelOrderPlace'){
                console.log('Я в CancelOrderPlace');
                clearInterval(IntervalCancel);
                binance.СancelBotOrder(GlobalName.ListBot.OrdersSellStopID);
                GlobalName.ListBot.VectorBotset = 'PlaceOprderStopLoss';
            }
        }

        function PlaceOprderStopLoss(){
            if(GlobalName.ListBot.VectorBot == 'PlaceOprderStopLoss'){
                if(GlobalName.ListBot.OrdersSellStopID == undefined){
                    console.log('Я в PlaceOprderStopLoss');
                    clearInterval(IntervalPOSL);
                    binance.PlaceBotStopLimitOrder();
                    GlobalName.ListBot.VectorBotset = 'CheckOprderStopLoss';
                }else{
                    console.log('Ордер еще не отменен или не выставлен!');
                }
            }
        }

        function CheckOprderStopLoss(){
            if(GlobalName.ListBot.VectorBot == 'CheckOprderStopLoss'){
                if(GlobalName.ListBot.OrdersSellStopID != undefined){
                    console.log('Я в CheckOprderStopLoss');
                    clearInterval(IntervalCOSL);
                    clearInterval(IntervalPOSL);
                    clearInterval(IntervalGOSS);
                    clearInterval(IntervalPurse);
                    clearInterval(IntervalProfit);
                    GlobalName.ListBot.markerStopLossBotPlas();
                    GlobalName.ListBot.VectorBotset = 'Sell';
                    setTimeout(MainS, 3000);
                }else{
                    console.log('Ордер еще не выставлен');
                    time++;
                    if(time == 5){
                        console.log('Пошел на повторное выставление стоп-ордера');
                        time = 0;
                        clearInterval(IntervalCOSL);
                        GlobalName.ListBot.VectorBotset = 'PlaceOprderStopLoss';
                        IntervalGOSS = setInterval(GettingOrderSellStop, 1000);
                    }
                }
            }
        }

        function GettingOrderSellStop(){
            if(GlobalName.ListBot.VectorBot == 'GettingOrderSellStop'){
                if(GlobalName.ListBot.OrdersSellStopID != undefined){
                    console.log('Я в GettingOrderSellStop');
                    clearInterval(IntervalGOSS);
                    binance.GettingBotOrder(GlobalName.ListBot.OrdersSellStopID);
                    GlobalName.ListBot.VectorBotset = 'PurseS';
                }else{
                    console.log('Нет ордера для чтения');
                }
            }
        }

        function Profit(){
            if(GlobalName.ListBot.VectorBot == 'Profit'){
                if(GlobalName.ListBot.PurseBot == 0){
                    console.log('Я в Profit');
                    clearInterval(IntervalProfit);
                    clearInterval(IntervalC);
                    clearInterval(IntervalInfoBot)
                    clearInterval(IntervalStats);
                    clearInterval(IntervalPause);
                    clearInterval(IntervalPlay);
                    BotPurse.Profit();
                    GlobalName.ListBot.VectorBotset = 'Buy';
                    GlobalName.ListBot.OrdersSellStopCIset = undefined;
                    GlobalName.ListBot.OrdersSellStopCRset = undefined;
                    //setTimeout(Main, 5000);
                    let pof = 'Сделку закрыл!';
                    BotTelegram.InfoBot(pof);
                    console.log(pof);
                    IntervalStart = setInterval(start, 1000);
                }else{
                    console.log('Данные из PurseS, не получены!');
                }
            }
        }
        function Stop(){
            let stop = BotTelegram.SetBot();
            if(stop == 'Stop')
            {
                clearInterval(IntervalC);
                clearInterval(IntervalInfoBot)
                clearInterval(IntervalStats);
                clearInterval(IntervalStop);
                clearInterval(IntervalPause);
                clearInterval(IntervalPlay);
                if(GlobalName.ListBot.VectorBot == 'Buy'){
                    clearInterval(IntervalP);
                    clearInterval(IntervalGOMB);
                    clearInterval(IntervalPurse);
                    clearInterval(IntervalCount);
                    let Sp = 'Bot остановлен!';
                    BotTelegram.InfoBot(Sp);
                    console.log(Sp);
                    IntervalStart = setInterval(start, 1000);
                }
                if(GlobalName.ListBot.VectorBot == 'Sell'){
                    clearInterval(IntervalS);
                    clearInterval(IntervalCancel);
                    clearInterval(IntervalCOSL);
                    clearInterval(IntervalPOSL);
                    clearInterval(IntervalGOSS);
                    clearInterval(IntervalPurse);
                    clearInterval(IntervalProfit);
                    let Ss = 'Bot остановлен!';
                    BotTelegram.InfoBot(Ss);
                    console.log(Ss);
                    IntervalStart = setInterval(start, 1000);
                }
            }
        }
        function Pause(){
            let pause = BotTelegram.SetBot();
            if(pause == 'Pause'){
                clearInterval(IntervalPause);
                clearInterval(IntervalC);
            }
        }
        function Play(){
            let play = BotTelegram.SetBot();
            if(play == 'Play'){
                clearInterval(IntervalPlay);
                IntervalC = setInterval(CurPrice, 1000);
            }
        }

        function Break_even(){
          if(GlobalName.ListBot.FallData != undefined){
              if(break_even == 0){
                if(GlobalName.ListBot.CurPrice >= GlobalName.ListBot.FallData){
                  break_even = 1;
                  let break_e = `Мы достигли уровня безубыточности "${GlobalName.ListBot.FallData}"`;
                  BotTelegram.InfoBot(break_e);
                  console.log(break_e);
                }
              }
              if(break_even == 1){
                  if(GlobalName.ListBot.CurPrice < GlobalName.ListBot.FallData/1.01){
                  break_even = 0;
              }
            }
          }
        }

        function Stats(){
            console.log(`
                Это текущий курс: ${GlobalName.ListBot.CurPrice}
                Уровень безубыточности: ${GlobalName.ListBot.FallData},
                ждем: ${(GlobalName.ListBot.LandSales*1.014).toFixed(Coin.ETHRUBCoin.CourseNumberSigns)}
                ждем: ${(GlobalName.ListBot.FallData*1.014).toFixed(Coin.ETHRUBCoin.CourseNumberSigns)}
                Курс покупки: ${GlobalName.ListBot.PurchasePrice}
                Баланс Fiat: ${GlobalName.ListBot.PurseFiatBot}
                Баланс Coin: ${GlobalName.ListBot.PurseCoinBot}
                Колличество вложенных в покупку денег: ${GlobalName.ListBot.PurseBot} $
                Это наша цель покупки: ${GlobalName.ListBot.LandSales} LandSales
                Стоп-лос выставлен: ${GlobalName.ListBot.markerStopLossBot}
                Колличество страховочных покупок по markerFall: ${GlobalName.ListBot.markerFall}
                Колличество сделок Bay: ${GlobalName.ListBot.markerBuy}, Sell = ${GlobalName.ListBot.markerSell}
                Отклонение от курса покупки: ${((GlobalName.ListBot.CurPrice/GlobalName.ListBot.PurchasePrice-1)*100).toFixed(3)} and ${((GlobalName.ListBot.CurPrice/GlobalName.ListBot.FallData-1)*100).toFixed(3)}
                Прибыль/убыток: ${GlobalName.ListBot.Profit} %, или ${GlobalName.ListBot.ProfitFiat} $`);
        }

            // Функция InfoTelegram
            function InfoTelegram(){
                let info = BotTelegram.infoBot();
                if(info === 'info'){
                    let infoData =`
                    Это текущий курс: ${GlobalName.ListBot.CurPrice}
                    Уровень безубыточности: ${GlobalName.ListBot.FallData},
                    ждем: ${(GlobalName.ListBot.LandSales*1.014).toFixed(Coin.ETHRUBCoin.CourseNumberSigns)}
                    ждем: ${(GlobalName.ListBot.FallData*1.014).toFixed(Coin.ETHRUBCoin.CourseNumberSigns)}
                    Курс покупки: ${GlobalName.ListBot.PurchasePrice}
                    Баланс Fiat: ${GlobalName.ListBot.PurseFiatBot}
                    Баланс Coin: ${GlobalName.ListBot.PurseCoinBot}
                    Колличество вложенных в покупку денег: ${GlobalName.ListBot.PurseBot} $
                    Это наша цель покупки: ${GlobalName.ListBot.LandSales} LandSales
                    Стоп-лос выставлен: ${GlobalName.ListBot.markerStopLossBot}
                    Колличество страховочных покупок по markerFall: ${GlobalName.ListBot.markerFall}
                    Колличество сделок Bay: ${GlobalName.ListBot.markerBuy}, Sell = ${GlobalName.ListBot.markerSell}
                    Отклонение от курса покупки: ${((GlobalName.ListBot.CurPrice/GlobalName.ListBot.PurchasePrice-1)*100).toFixed(2)}
                    Прибыль/убыток: ${GlobalName.ListBot.Profit} %, или ${GlobalName.ListBot.ProfitFiat} *`
                    BotTelegram.InfoBot(infoData);
                }
                }
