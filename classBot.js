let Coin = require('./coin');
let GlobalName = require('./GlobalList');

module.exports = class BotExpert{
    constructor(data){
        this.LandMark = undefined;
        this.LandMarkFlag = 0;
        this.PurchaseMark = undefined;
        this.PurchaseFlag = 0;
    }

    PurchaseBot(){
        // if(this.PurchaseFlag == 0){
        //   this.PurchaseMark = GlobalName.ListBot.CurPrice;
        //   this.PurchaseFlag = 1;
        // }
        // if(this.PurchaseFlag == 1){
        //   if((this.PurchaseMark/1.007).toFixed(GlobalName.ListBot.CourseNumberSigns) > GlobalName.ListBot.CurPrice){
        //     this.PurchaseFlag = 2;
        //   }
        // }
        if(this.LandMarkFlag == 0){
        this.LandMark = (GlobalName.ListBot.CurPrice*1.04).toFixed(GlobalName.ListBot.CourseNumberSigns);
        this.LandMarkFlag = 1;
        }
        console.log(this.LandMark);
        console.log(this.LandMarkFlag);
        console.log(this.PurchaseMark);
        console.log(this.PurchaseFlag);
        // console.log(GlobalName.ListBot.GlobalName.ListBot.CurPrice);
        // console.log((GlobalName.ListBot.CurPrice*1.007).toFixed(GlobalName.ListBot.CourseNumberSigns));
        // if(this.PurchaseFlag == 2){
          if(GlobalName.ListBot.CurPrice < this.LandMark && this.LandMarkFlag == 1){
              console.log("Я вошел");
              if((GlobalName.ListBot.CurPrice*1.007).toFixed(GlobalName.ListBot.CourseNumberSigns) < this.LandMark){
                  this.LandMark = (parseFloat(GlobalName.ListBot.CurPrice*1.004) + parseFloat(GlobalName.ListBot.RateLand)).toFixed(GlobalName.ListBot.CourseNumberSigns);
                  console.log(`Изменил курс: ${this.LandMark}`);
              }
              if(GlobalName.ListBot.CurPrice*1.0035 >= this.LandMark){
                  this.LandMarkFlag = 0;
                  this.PurchaseFlag = 0;
                  this.LandMark = undefined;
                  this.PurchaseMark = undefined;
                  console.log(`Сработало условие покупки ${GlobalName.ListBot.CurPrice}`);
                  return 'BuyMarketPlace';
              }
          }
        // }
        if(GlobalName.ListBot.CurPrice > this.LandMark && this.LandMarkFlag == 1){
            this.LandMarkFlag = 0;
            this.LandMark = undefined;
            console.log(`Сработало условие покупки превышение ${GlobalName.ListBot.CurPrice}`);
            return 'BuyMarketPlace';
        }
        // Блок продажи по Stop-Loss, в случае достижения FallData*1.006, при условии покупке по markerFall
        if(GlobalName.ListBot.FallData != undefined){
            if(GlobalName.ListBot.markerFall != 0 && GlobalName.ListBot.CurPrice >= (GlobalName.ListBot.FallData*1.014).toFixed(GlobalName.ListBot.CourseNumberSigns)){
                GlobalName.ListBot.LandSalesset = (GlobalName.ListBot.CurPrice/1.00395).toFixed(GlobalName.ListBot.CourseNumberSigns);
                return 'SellOrderPlace';
            }
        }
    };

    SalesBot(){
        if(GlobalName.ListBot.markerFall == 0){
            if(GlobalName.ListBot.markerStopLossBot == 0){
                if(GlobalName.ListBot.CurPrice >= (GlobalName.ListBot.LandSales*1.014).toFixed(GlobalName.ListBot.CourseNumberSigns)){
                    GlobalName.ListBot.LandSalesset = (GlobalName.ListBot.CurPrice/1.00395).toFixed(GlobalName.ListBot.CourseNumberSigns);
                    console.log(`Условие выставления StopLoss "${GlobalName.ListBot.markerStopLossBot}" сработало`);
                    return 'SellOrderPlace';
                }
            }
            if(GlobalName.ListBot.markerStopLossBot != 0){
                if(GlobalName.ListBot.CurPrice >= (GlobalName.ListBot.LandSales*1.014).toFixed(GlobalName.ListBot.CourseNumberSigns)){
                    GlobalName.ListBot.LandSalesset = (GlobalName.ListBot.CurPrice/1.00395).toFixed(GlobalName.ListBot.CourseNumberSigns);
                    console.log(`Условие перевыставления StopLoss "${GlobalName.ListBot.markerStopLossBot}" сработало`)
                    return 'CancelOrderPlace';
                }
            }
        }
        //-------------------------------//
        if(GlobalName.ListBot.markerFall != 0){
            if(GlobalName.ListBot.CurPrice >= (GlobalName.ListBot.FallData*1.014).toFixed(GlobalName.ListBot.CourseNumberSigns) && GlobalName.ListBot.markerStopLossBot === 0){
                GlobalName.ListBot.LandSalesset = (GlobalName.ListBot.CurPrice/1.00395).toFixed(GlobalName.ListBot.CourseNumberSigns);
                console.log(`Условие выставления StopLoss Fall "${GlobalName.ListBot.markerStopLossBot}" сработало`);
                return 'SellOrderPlace';
            }
            if(GlobalName.ListBot.CurPrice >= (GlobalName.ListBot.LandSales*1.014).toFixed(GlobalName.ListBot.CourseNumberSigns) && GlobalName.ListBot.markerStopLossBot !== 0){
                GlobalName.ListBot.LandSalesset = (GlobalName.ListBot.CurPrice/1.00395).toFixed(GlobalName.ListBot.CourseNumberSigns);
                console.log(`Условие перевыставления StopLoss Fall "${GlobalName.ListBot.markerStopLossBot}" сработало`)
                return 'CancelOrderPlace';
            }
        }
        // Fall блок покупки при падении курса
        if(GlobalName.ListBot.CurPrice <= GlobalName.ListBot.PurchasePrice/1.03 && GlobalName.ListBot.markerFall === 0){
            console.log('Курс упал на 3%');
            return 'FallBuy';
        }
        if(GlobalName.ListBot.CurPrice <= GlobalName.ListBot.PurchasePrice/1.05 && GlobalName.ListBot.markerFall === 1){
            console.log('Курс упал на 5%');
            return 'FallBuy';
        }
        if(GlobalName.ListBot.CurPrice <= GlobalName.ListBot.PurchasePrice/1.07 && GlobalName.ListBot.markerFall >= 2){
            console.log('Курс упал на 7%');
            return 'FallBuy';
        }
    };

}
