/* Программа для создания библиотеки объектов торговые пары с USDT и их экспорта  */
// Автор: Aleksey Bogatishchev
// Дата: 15.07.2020г.
// Версия: 1.0.0.
// ------------------------------------------------------------ //
    // Класс Coin
        class Coin{
            constructor(data){
                this.CoinName = data.CoinName;  // Вид криптовалюты.
                this.FiatName = data.FiatName;  // Вид фиатной или др. валюты.
                this.TradingСouple = data.TradingСouple;    // Торговая пара.
                this.CoinNumberSigns = data.CoinNumberSigns;    // Колличество знаков после запятой.
                this.FiatNumberSigns = data.FiatNumberSigns;    // Колличество знаков после запятой.
                this.CourseNumberSigns = data.CourseNumberSigns;    // Колличество знаков после запятой.
                this.RateFallSigns = data.RateFallSigns; // Колличество знаков для расчета BotCount.
                this.RateLandSigns = data.RateLandSigns; // Колличество знаков для расчета Landmark.
            }
        }
// ------------------------------------------------------------ //
    // Объект для экспорта ZILCoin
        module.exports.ZILCoin = new Coin({
            CoinName: 'ZIL',
            FiatName: 'USDT',
            TradingСouple: 'ZILUSDT',
            CoinNumberSigns: 1,
            FiatNumberSigns: 5,
            CourseNumberSigns: 5,
            RateFallSigns: 0.00001,
            RateLandSigns: 0.0000001
        });
// ------------------------------------------------------------ //
// Объект для экспорта VITECoin
    module.exports.VITECoin = new Coin({
        CoinName: 'VITE',
        FiatName: 'USDT',
        TradingСouple: 'VITEUSDT',
        CoinNumberSigns: 1,
        FiatNumberSigns: 5,
        CourseNumberSigns: 5,
        RateFallSigns: 0.00001,
        RateLandSigns: 0.0000001
    });
// ------------------------------------------------------------ //
    // Объект для экспорта ATOMCoin
        module.exports.ATOMCoin = new Coin({
            CoinName: 'ATOM',
            FiatName: 'USDT',
            TradingСouple: 'ATOMUSDT',
            CoinNumberSigns: 3,
            FiatNumberSigns: 3,
            CourseNumberSigns: 3,
            RateFallSigns: 0.001,
            RateLandSigns: 0.00001
        });
// ------------------------------------------------------------ //
    // Объект для экспорта ERDCoin
        module.exports.ERDCoin = new Coin({
            CoinName: 'ERD',
            FiatName: 'USDT',
            TradingСouple: 'ERDUSDT',
            CoinNumberSigns: 0,
            FiatNumberSigns: 6,
            CourseNumberSigns: 6,
            RateFallSigns: 0.000001,
            RateLandSigns: 0.00000001
        });
// ------------------------------------------------------------ //
    // Объект для экспорта QTUMCoin
        module.exports.QTUMCoin = new Coin({
            CoinName: 'QTUM',
            FiatName: 'USDT',
            TradingСouple: 'QTUMUSDT',
            CoinNumberSigns: 3,
            FiatNumberSigns: 3,
            CourseNumberSigns: 3,
            RateFallSigns: 0.001,
            RateLandSigns: 0.00001
        });
// ------------------------------------------------------------ //
    // Объект для экспорта SXPCoin
        module.exports.SXPCoin = new Coin({
            CoinName: 'SXP',
            FiatName: 'USDT',
            TradingСouple: 'SXPUSDT',
            CoinNumberSigns: 3,
            FiatNumberSigns: 3,
            CourseNumberSigns: 3,
            RateFallSigns: 0.001,
            RateLandSigns: 0.00001
        });
// ------------------------------------------------------------ //
    // Объект для экспорта EOSCoin
        module.exports.EOSCoin = new Coin({
            CoinName: 'EOS',
            FiatName: 'USDT',
            TradingСouple: 'EOSUSDT',
            CoinNumberSigns: 2,
            FiatNumberSigns: 4,
            CourseNumberSigns: 4,
            RateFallSigns: 0.0001,
            RateLandSigns: 0.000001
        });
// ------------------------------------------------------------ //
    // Объект для экспорта BANDCoin
        module.exports.BANDCoin = new Coin({
            CoinName: 'BAND',
            FiatName: 'USDT',
            TradingСouple: 'BANDUSDT',
            CoinNumberSigns: 2,
            FiatNumberSigns: 4,
            CourseNumberSigns: 4,
            RateFallSigns: 0.0001,
            RateLandSigns: 0.000001
        });
// ------------------------------------------------------------ //
    // Объект для экспорта TOMOCoin
        module.exports.TOMOCoin = new Coin({
            CoinName: 'TOMO',
            FiatName: 'USDT',
            TradingСouple: 'TOMOUSDT',
            CoinNumberSigns: 2,
            FiatNumberSigns: 4,
            CourseNumberSigns: 4,
            RateFallSigns: 0.0001,
            RateLandSigns: 0.000001
        });
// ------------------------------------------------------------ //
    // Объект для экспорта KAVACoin
        module.exports.KAVACoin = new Coin({
            CoinName: 'KAVA',
            FiatName: 'USDT',
            TradingСouple: 'KAVAUSDT',
            CoinNumberSigns: 2,
            FiatNumberSigns: 4,
            CourseNumberSigns: 4,
            RateFallSigns: 0.0001,
            RateLandSigns: 0.000001
        });
// ------------------------------------------------------------ //
    // Объект для экспорта AIONCoin
        module.exports.AIONCoin = new Coin({
            CoinName: 'AION',
            FiatName: 'USDT',
            TradingСouple: 'AIONUSDT',
            CoinNumberSigns: 2,
            FiatNumberSigns: 4,
            CourseNumberSigns: 4,
            RateFallSigns: 0.0001,
            RateLandSigns: 0.000001
        });
// ------------------------------------------------------------ //
    // Объект для экспорта LTCCoin
        module.exports.LTCCoin = new Coin({
            CoinName: 'LTC',
            FiatName: 'USDT',
            TradingСouple: 'LTCUSDT',
            CoinNumberSigns: 5,
            FiatNumberSigns: 2,
            CourseNumberSigns: 2,
            RateFallSigns: 0.01,
            RateLandSigns: 0.0001
        });
// ------------------------------------------------------------ //
    // Объект для экспорта ETHCoin
        module.exports.ETHCoin = new Coin({
            CoinName: 'ETH',
            FiatName: 'USDT',
            TradingСouple: 'ETHUSDT',
            CoinNumberSigns: 5,
            FiatNumberSigns: 2,
            CourseNumberSigns: 2,
            RateFallSigns: 0.01,
            RateLandSigns: 0.0001
        });
// ------------------------------------------------------------ //
    // Объект для экспорта ETHCoin
        module.exports.ETHRUBCoin = new Coin({
            CoinName: 'ETH',
            FiatName: 'RUB',
            TradingСouple: 'ETHRUB',
            CoinNumberSigns: 5,
            FiatNumberSigns: 1,
            CourseNumberSigns: 1,
            RateFallSigns: 0.1,
            RateLandSigns: 0.001
        });
// ------------------------------------------------------------ //
    // Объект для экспорта ETHCoin
    module.exports.BNBRUBCoin = new Coin({
        CoinName: 'BNB',
        FiatName: 'RUB',
        TradingСouple: 'BNBRUB',
        CoinNumberSigns: 2,
        FiatNumberSigns: 2,
        CourseNumberSigns: 2,
        RateFallSigns: 0.01,
        RateLandSigns: 0.0001
    });
// ------------------------------------------------------------ //
    // Объект для экспорта BNBCoin
    module.exports.BNBCoin = new Coin({
        CoinName: 'BNB',
        FiatName: 'USDT',
        TradingСouple: 'BNBUSDT',
        CoinNumberSigns: 3,
        FiatNumberSigns: 4,
        CourseNumberSigns: 4,
        RateFallSigns: 0.0001,
        RateLandSigns: 0.000001
    });
// ------------------------------------------------------------ //
    // Объект для экспорта ICXCoin
    module.exports.ICXCoin = new Coin({
        CoinName: 'ICX',
        FiatName: 'USDT',
        TradingСouple: 'ICXUSDT',
        CoinNumberSigns: 2,
        FiatNumberSigns: 4,
        CourseNumberSigns: 4,
        RateFallSigns: 0.0001,
        RateLandSigns: 0.000001
    });
// ------------------------------------------------------------ //
// Объект для экспорта ATOMCoin
    module.exports.SRMCoin = new Coin({
        CoinName: 'SRM',
        FiatName: 'USDT',
        TradingСouple: 'SRMUSDT',
        CoinNumberSigns: 2,
        FiatNumberSigns: 4,
        CourseNumberSigns: 4,
        RateFallSigns: 0.0001,
        RateLandSigns: 0.000001
    });
// ------------------------------------------------------------ //
// Объект для экспорта CHRCoin
    module.exports.CHRCoin = new Coin({
        CoinName: 'CHR',
        FiatName: 'USDT',
        TradingСouple: 'CHRUSDT',
        CoinNumberSigns: 1,
        FiatNumberSigns: 5,
        CourseNumberSigns: 5,
        RateFallSigns: 0.00001,
        RateLandSigns: 0.0000001
    });
// ------------------------------------------------------------ //
// Объект для экспорта HOTCoin
    module.exports.HOTCoin = new Coin({
        CoinName: 'HOT',
        FiatName: 'USDT',
        TradingСouple: 'HOTUSDT',
        CoinNumberSigns: 0,
        FiatNumberSigns: 7,
        CourseNumberSigns: 7,
        RateFallSigns: 0.0000001,
        RateLandSigns: 0.000000001
    });
// ------------------------------------------------------------ //
// Объект для экспорта BLZCoin
    module.exports.BLZCoin = new Coin({
        CoinName: 'BLZ',
        FiatName: 'USDT',
        TradingСouple: 'BLZUSDT',
        CoinNumberSigns: 1,
        FiatNumberSigns: 5,
        CourseNumberSigns: 5,
        RateFallSigns: 0.00001,
        RateLandSigns: 0.0000001
    });
// ------------------------------------------------------------ //
// Объект для экспорта ATOMCoin
    module.exports.BZRXCoin = new Coin({
        CoinName: 'BZRX',
        FiatName: 'USDT',
        TradingСouple: 'BZRXUSDT',
        CoinNumberSigns: 2,
        FiatNumberSigns: 4,
        CourseNumberSigns: 4,
        RateFallSigns: 0.0001,
        RateLandSigns: 0.000001
    });
// ------------------------------------------------------------ //
    // Объект для экспорта CTKCoin
    module.exports.CTKCoin = new Coin({
        CoinName: 'CTK',
        FiatName: 'USDT',
        TradingСouple: 'CTKUSDT',
        CoinNumberSigns: 2,
        FiatNumberSigns: 4,
        CourseNumberSigns: 4,
        RateFallSigns: 0.0001,
        RateLandSigns: 0.000001
    });
// ------------------------------------------------------------ //
// Объект для экспорта STORJCoin
module.exports.STORJCoin = new Coin({
    CoinName: 'STORJ',
    FiatName: 'USDT',
    TradingСouple: 'STORJUSDT',
    CoinNumberSigns: 2,
    FiatNumberSigns: 4,
    CourseNumberSigns: 4,
    RateFallSigns: 0.0001,
    RateLandSigns: 0.000001
});
// ------------------------------------------------------------ //
// Объект для экспорта WINCoin
    module.exports.WINCoin = new Coin({
        CoinName: 'WIN',
        FiatName: 'USDT',
        TradingСouple: 'WINUSDT',
        CoinNumberSigns: 0,
        FiatNumberSigns: 8,
        CourseNumberSigns: 8,
        RateFallSigns: 0.00000001,
        RateLandSigns: 0.0000000001
    });
// ------------------------------------------------------------ //
// Объект для экспорта DOGECoin
    module.exports.DOGECoin = new Coin({
        CoinName: 'DOGE',
        FiatName: 'USDT',
        TradingСouple: 'DOGEUSDT',
        CoinNumberSigns: 0,
        FiatNumberSigns: 7,
        CourseNumberSigns: 7,
        RateFallSigns: 0.0000001,
        RateLandSigns: 0.000000001
    });
// ------------------------------------------------------------ //
// Объект для экспорта HOTBCoin
    module.exports.HOTBCoin = new Coin({
        CoinName: 'HOT',
        FiatName: 'BUSD',
        TradingСouple: 'HOTBUSD',
        CoinNumberSigns: 1,
        FiatNumberSigns: 5,
        CourseNumberSigns: 5,
        RateFallSigns: 0.00001,
        RateLandSigns: 0.0000001
    });
// ------------------------------------------------------------ //
