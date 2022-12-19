import React from 'react'

export default function OptionsCalculations() {
    
  
  //Returns the cumulative density function of a normal distribution
  function cdfNormal (x, mean, standardDeviation) {
    const mathjs = require('mathjs')
    return (1 - mathjs.erf((mean - x ) / (Math.sqrt(2) * standardDeviation))) / 2
  }
  

  //Doesn't pay a dividend
  function blackScholesCall(S, K, T, r, sigma) {
    // S: spot price
    // K: strike price
    // T: time to maturity
    // r: interest rate
    // sigma: volatility of underlying asset

    var d1 = (Math.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * Math.sqrt(T))
    var d2 = (Math.log(S / K) + (r - 0.5 * sigma ** 2) * T) / (sigma * Math.sqrt(T))

    var call = (S * cdfNormal(d1, 0, 1) - K * Math.exp(-r * T) * cdfNormal(d2, 0, 1))
    
    return call
  }


  function blackScholesPut() {
    // S: spot price
    // K: strike price
    // T: time to maturity
    // r: interest rate
    // sigma: volatility of underlying asset

  }


  function calculateOptionsProfit(optionsArray, time, price) {
    //optionsArray: Array of all of the individual options in the particular trade
    return 0
  }

  return (
    <div>OptionsCalculations</div>
  )
}
