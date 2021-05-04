
    module.exports = class Global{
        constructor(data){
        // Динамические переменные // 
            this.CurPrice = undefined; // Текущая цена;1
            this.LandMark = undefined; // Ориентир покупки;1
            this.PurchasePrice = data.PurchasePrice; // Цена покупки;
            this.SalesPriceDeviatiion = data.SalesPriceDeviatiion; // Цена Продажи при Deviatiion
            this.LandSales = data.LandSales; // Ориентир продажи;
            this.FallData = data.FallData; // Вычисляемое значение курса безубыточности;1
            this.Profit = data.Profit; // Вычесляемое значение, Доход/Убыток;1
            this.ProfitFiat = data.ProfitFiat; // Вычесляемое значение, Доход/Убыток в доллорах;1
            this.PurseBot = data.PurseBot; // Вычесляет колличество затраченных средств на покупку монет ($);1
            this.CourseDeviation = undefined; // Вычисляемое значение отклонения курса от цены покупки
            this.HighDeviatiion = data.HighDeviatiion; // Вычисляемое значение отклонения курса покупки от максимального значения курса за 24 часа для расчета
            this.HighDeviatiionDisp = undefined; // Вычисляемое значение отклонения курса покупки от максимального значения курса за 24 часа в процентах

            this.HightPrice = undefined; // Максимальное значение за 24 часа;1
            this.LowPrice = undefined; // Минимальное значение за 24 часа;1
            this.Percent = undefined; // Значение текущего курса торговой пары в проценнтах (отрицательное/положительное);1 
            
            this.PurseFiat = undefined; // Кошелек нашего бота, доступные средства для торговли;1
            this.PurseCoin = undefined; // Колличество токинов, доступных для торговли;1

            this.Orders = undefined; // Ордер (покупки/продажи);
            this.OrdersID = undefined; // Значение ID ордера (покупки/продажи);
            this.OrdersBuyMarket = undefined; // Ордер (покупки/продажи);
            this.OrdersBuyMarketID = data.OrdersBuyMarketID; // Значение ID ордера (покупки/продажи);
            this.OrdersBuyMarketFI = data.OrdersBuyMarketFI; // Цена ордера $
            this.OrdersBuyMarketCI = data.OrdersBuyMarketCI; // Колличесво коинов в ордере
            this.OrdersBuyMarketStatus = undefined;
            this.OrdersBuyLimit = undefined; // Ордер (покупки/продажи);
            this.OrdersBuyLimitID = undefined; // Значение ID ордера (покупки/продажи);
            this.OrdersBuyLimitCI = undefined;
            this.OrdersBuyLimitCR = undefined;
            this.OrdersBuyLimitStatus = undefined;
            this.OrdersSellMarket = undefined; // Ордер (покупки/продажи);
            this.OrdersSellMarketID = undefined; // Значение ID ордера (покупки/продажи);
            this.OrdersSellMarketCI = undefined;
            this.OrdersSellMarketFI = undefined;
            this.OrdersSellLimit = undefined; // Ордер (покупки/продажи);
            this.OrdersSellLimitID = undefined; // Значение ID ордера (покупки/продажи);
            this.OrdersSellLimitCI = undefined;
            this.OrdersSellLimitCR = undefined;
            this.OrdersSellLimitStatus = undefined;
            this.OrdersSellStop = undefined; // Ордер (покупки/продажи);
            this.OrdersSellStopID = undefined; // Значение ID ордера (покупки/продажи);
            this.OrdersSellStopCI = undefined; //
            this.OrdersSellStopCR = undefined; //
            this.OrdersSellStopStatus = undefined; // 
            this.OrdersBuyProfit = undefined; // Ордер (покупки/продажи);
            this.OrdersBuyProfitID = undefined; // Значение ID ордера (покупки/продажи);

            this.PointUp = 0; // Определяет отклонение от цены для осуществления быстрой покупки;
            this.ConterUp = 0; // Переменная для подсчета признака роста курса;

        // Статические переменные // Данные переменные требуется внести при создании экземпляра класса!
            this.TradingСouple = data.TradingСouple; // Торговая пара;
            this.Coin = data.Coin; // Выбранная криптовалюта
            this.Fiat = data.Fiat; // Выбранная вторая валюта
            this.PriseRate = data.PriseRate; // Шаг торговли (10$);
            this.CourseNumberSigns = data.CourseNumberSigns; // Колличество знаков после запятой, курса;
            this.FiatNumberSigns = data.FiatNumberSigns;    // Колличество знаков после запятой, фиатной валюты;
            this.CoinNumberSigns = data.CoinNumberSigns;    // Колличество знаков после запятой, койна;
            this.InitialDeposit = data.InitialDeposit; // Стартовый капитал;
            this.PurseFiatBot = data.PurseFiatBot; // Кошелек нашего бота, доступные средства для торговли;1
            this.PurseCoinBot = data.PurseCoinBot; // Колличество токинов, доступных для торговли;1
            this.RateFall = data.RateFall; // Переменная для расчета в BotCount (0.01 ~ 0.000000001);
            this.RateLand = data.RateLand; // Переменная для расчета в Landmark (0.01 ~ 0.000000001);

            this.ApiKey = data.ApiKey; // Апи ключ для доступа на биржу;
            this.ApiSecret = data.ApiSecret; // Секретный код для доступа на биржу;

        // Маркеры //
            this.markerBuy = data.markerBuy;      // Колличество покупок совершенных ботом;
            this.markerSell = data.markerSell;     // Колличество продаж совершенных ботом;
            this.markerStopLossBot = 0; // Колличество выставленных, стоп-лосов; 
            this.markerFall = data.markerFall; // Маркер падения более установленного %, т.е. произведен сброс продажи и совершается перезакупка.
            this.markerPointVariable = 0; // Переменная точки входа, в зависимости от рынка падающий или растущий (1.01, 1.02 %);
            this.markerEntryPoint = 0; // Устанавливается в 1, если был ли осуществлен вход в зону покупки;

        // Векторы //
            this.VectorBot = data.VectorBot; // Принимает параметры: 'InitBot', 'Job', 'Pause', 'Stop' ./
            this.VectorBuy = undefined;
            this.VectorSell = undefined;
            this.VectorStop = undefined;
            this.VectorProfit = undefined;
        }
        get PurseBotget(){
            return this.PurseBot;
        }
        get CourseNumberSignsget(){
            return this.CourseNumberSigns;
        }
        get CoinNumberSignsget(){
            return this.CoinNumberSigns;
        }
        get FiatNumberSignsget(){
            return this.FiatNumberSigns;
        }
        get TradingСoupleget(){
            return this.TradingСouple;
        }
        get OrdersBuyMarketget(){
            return this.OrdersBuyMarket;
        }
        get OrdersBuyMarketIDget(){
            return this.OrdersBuyMarketID;
        }
        get OrdersBuyMarketFIget(){
            return this.OrdersBuyMarketFI;
        }
        get OrdersBuyMarketCIget(){
            return this.OrdersBuyMarketCI;
        }
        get FIBuyMarket(){
            return (this.PurseFiatBot - this.OrdersBuyMarketFI).toFixed(this.FiatNumberSigns);
        }
        get FIStopSell(){
            return (parseFloat(this.OrdersSellStopCR*this.OrdersSellStopCI) + parseFloat(this.PurseFiatBot)).toFixed(this.FiatNumberSigns);
        }
        get CIBuyMarket(){
            return (parseFloat(this.PurseCoinBot) + parseFloat(this.OrdersBuyMarketCI)).toFixed(this.CoinNumberSigns);
        }
        get PurseBotMarket(){
            return (parseFloat(this.PurseBot) + parseFloat(this.OrdersBuyMarketFI)).toFixed(this.FiatNumberSigns);
        }
        get markerBuyMarket(){
            return this.markerBuy++;
        }
        get PurchasePriceMarket(){
            return (this.OrdersBuyMarketFI/this.OrdersBuyMarketCI).toFixed(this.CourseNumberSigns);
        }
        get OrdersBuyMarketStatusget(){
            return this.OrdersBuyMarketStatus;
        }
        get PurseFiatBotget(){
            return this.PurseFiatBot;
        }
        get PurseCoinBotget(){
            return this.PurseCoinBot;
        }
        get FallDataget(){
            return this.FallData;
        }
        get LandSalesget(){
            return this.LandSales;
        }
        get markerStopLossBotget(){
            return this.markerStopLossBot;
        }

        get OrdersSellStopIDget(){
            return this.OrdersSellStopID;
        }
        get OrdersSellStopStatusget(){
            return this.OrdersSellStopStatus;
        }
        get Profitget(){
            return (((this.PurseFiatBot - this.InitialDeposit)/this.PurseFiatBot)*100).toFixed(2);
        }
        get ProfitFiatget(){
            return (this.PurseFiatBot - this.InitialDeposit).toFixed(2);
        }
    //------------------------------------------------//
        set PurseBotset(data){
            this.PurseBot = data;
        }
        set OrdersBuyMarketset(data){
            this.OrdersBuyMarket = data;
        }
        set OrdersBuyMarketStatusset(data){
            this.OrdersBuyMarketStatus = data;
        }
        set PurseFiatBotset(data){
            this.PurseFiatBot = data;
        }
        set PurseCoinBotset(data){
            this.PurseCoinBot = data;
        }
        set OrdersBuyMarketIDset(data){
            this.OrdersBuyMarketID = data;
        }
        set OrdersBuyMarketFIset(data){
            this.OrdersBuyMarketFI = data;
        }
        set OrdersBuyMarketCIset(data){
            this.OrdersBuyMarketCI = data;
        }
        set markerBuyset(data){
            this.markerBuy = data;
        }
        set PurchasePriceset(data){
            this.PurchasePrice = data;
        }
        set FallDataset(data){
            this.FallData = data;
        }
        set LandSalesset(data){
            this.LandSales = data;
        }
        set markerStopLossBotset(data){
            this.markerStopLossBot = data;
        }
        set OrdersSellStopset(data){
            this.OrdersSellStop = data;
        }
        set OrdersSellStopIDset(data){
            this.OrdersSellStopID = data;
        }
        set OrdersSellStopStatusset(data){
            this.OrdersSellStopStatus = data;
        }
        set OrdersSellStopCRset(data){
            this.OrdersSellStopCR = data;
        }
        set OrdersSellStopCIset(data){
            this.OrdersSellStopCI = data;
        }
        set Profitset(data){
            this.Profit = data;
        }
        set ProfitFiatset(data){
            this.ProfitFiat = data;
        }
        set VectorBotset(data){
            this.VectorBot = data;
        }

        markerStopLossBotPlas(){
            this.markerStopLossBot++;
        }
        markerFallPlas(){
            this.markerFall++;
        }
        markerBuyPlus(){
            this.markerBuy++;
        }
        markerSellPlas(){
            this.markerSell++;
        }
        PurseFiatGet(){
            this.PurseFiatBot = (parseFloat(this.OrdersSellStopCR*this.OrdersSellStopCI) + parseFloat(this.PurseFiatBot)).toFixed(this.FiatNumberSigns);
        }
    }