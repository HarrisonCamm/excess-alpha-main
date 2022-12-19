import { abs, erf, exp, log, sqrt } from 'mathjs';
import moment from 'moment';

// https://www.codearmo.com/python-tutorial/options-trading-black-scholes-model



// function erf(x) {
//     // save the sign of x
//     var sign = (x >= 0) ? 1 : -1;
//     x = Math.abs(x);
  
//     // constants
//     var a1 =  0.254829592;
//     var a2 = -0.284496736;
//     var a3 =  1.421413741;
//     var a4 = -1.453152027;
//     var a5 =  1.061405429;
//     var p  =  0.3275911;
  
//     // A&S formula 7.1.26
//     var t = 1.0/(1.0 + p*x);
//     var y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
//     return sign * y; // erf(-x) = -erf(x);
//   }



//Returns the cumulative density function of a normal distribution
//should actually be a static method
function cdfNormal(x, mean, standardDeviation) {
    // const mathjs = require('mathjs')
    // return (1 - erf((mean - x ) / (sqrt(2) * standardDeviation))) / 2
    console.log(erf(50))
    return 0.5 * (1 + erf((x - mean) / (Math.sqrt(2 * standardDeviation))));
}




export class Option {
    constructor(currentPrice, strike, expiry, type='call', tradeSide='buy', riskFreeRate) {
        this.currentPrice = currentPrice;
        this.strike = strike;
        this.expiry = expiry;
        this.type = type;
        this.tradeSide = tradeSide;
        this.riskFreeRate = riskFreeRate;
    }


    calculatePriceAtTime(currentTime, currentStockPrice) {
        // var timeUntilMaturity = moment.duration(this.expiry.diff(start)).asDays()
        // S: spot price
        // K: strike price
        // T: time to maturity
        // r: interest rate
        // sigma: volatility of underlying asset


        //cancel 



        





        if(this.expiry != null && currentTime!=null) {

            var S = currentStockPrice
            var K = this.strike
            var T = abs(moment.duration(this.expiry.diff(currentTime)).asYears())
            var sigma = 0.3
            var r = this.riskFreeRate

            var d1 = (log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * sqrt(T))
            var d2 = d1 - sigma * sqrt(T)




            if(this.type === "call") {
                var call = (S * cdfNormal(d1, 0, 1) - K * exp(-r * T) * cdfNormal(d2, 0, 1))
                if(this.tradeSide === "buy") {
                    return S * T
                } else {
                    return 0-call
                }
                
            } 
            else if(this.type === "put") {
                var put = (K * Math.exp(-r * T) * cdfNormal(-d2, 0, 1)) - S * cdfNormal(-d1, 0, 1)
                if(this.tradeSide === "buy") {
                    return put
                } else {
                    return 0-put
                } 
            }

        } else {
            // console.log("I return 0")
            return 0
        }

    }

}

