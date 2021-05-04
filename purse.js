let GlobalName = require('./GlobalList');

    module.exports.Purse = function Purse(tape){
        if(tape == 'BuyMarket'){
            console.log('Я в Purse BuyMarket');
        let FI = GlobalName.ListBot.FIBuyMarket;
        GlobalName.ListBot.PurseFiatBotset = FI;
        let CI = GlobalName.ListBot.CIBuyMarket;
        GlobalName.ListBot.PurseCoinBotset = CI;
        let PBM = GlobalName.ListBot.PurseBotMarket;
        GlobalName.ListBot.PurseBotset = PBM;
        let BUY = GlobalName.ListBot.markerBuyMarket;
        GlobalName.ListBot.markerBuyset = BUY;
        let PPM = GlobalName.ListBot.PurchasePriceMarket;
        GlobalName.ListBot.PurchasePriceset = PPM;
        GlobalName.ListBot.FallDataset = PPM;
        GlobalName.ListBot.LandSalesset = PPM;
        GlobalName.ListBot.OrdersBuyMarketIDset = undefined;
        GlobalName.ListBot.OrdersBuyMarketStatusset = undefined;
        GlobalName.ListBot.OrdersSellStopCIset = undefined;
        GlobalName.ListBot.OrdersSellStopCRset = undefined;
        }
        if(tape == 'SellStop'){
            console.log('Я в Purse SellStop');
            GlobalName.ListBot.markerFall = 0;
            let FIS = GlobalName.ListBot.FIStopSell;
            GlobalName.ListBot.PurseFiatBotset = FIS;
            GlobalName.ListBot.PurseCoinBotset = 0;
            GlobalName.ListBot.PurseBotset = 0;
            GlobalName.ListBot.PurchasePriceset = undefined;
            GlobalName.ListBot.FallDataset = undefined;
            GlobalName.ListBot.LandSalesset = undefined;
            GlobalName.ListBot.OrdersSellStopIDset = undefined;
            GlobalName.ListBot.OrdersSellStopStatusset = undefined;
            GlobalName.ListBot.OrdersBuyMarketIDset = undefined;
            GlobalName.ListBot.OrdersBuyMarketStatusset = undefined;
            GlobalName.ListBot.OrdersBuyMarketCIset = undefined;
            GlobalName.ListBot.OrdersBuyMarketFIset = undefined;
        }

    }

    module.exports.Count = function Count(data){
        if(data == 'BuyMarket'){
            console.log('Я в Count BuyMarket');
        while((GlobalName.ListBot.FallData*GlobalName.ListBot.PurseCoinBot).toFixed(GlobalName.ListBot.FiatNumberSigns) < GlobalName.ListBot.PurseBot){
            GlobalName.ListBot.FallDataset = (parseFloat(GlobalName.ListBot.FallData) + parseFloat(GlobalName.ListBot.RateFall)).toFixed(GlobalName.ListBot.FiatNumberSigns);
        }
        }
    }

    module.exports.Profit = function Profit(){
        console.log('Я в Profit');
        let P = GlobalName.ListBot.Profitget;
        GlobalName.ListBot.Profitset = P;
        let PF = GlobalName.ListBot.ProfitFiatget;
        GlobalName.ListBot.ProfitFiatset = PF;
    }