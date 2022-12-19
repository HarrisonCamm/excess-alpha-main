// import { sqrt } from 'mathjs';
import React, { Component } from 'react';
//import { erf } from 'mathjs';

export class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         ticker: '', // Stock Ticker
         stockPrice: '', // Current Price of the stock
         time: '', //Time, in years
         riskFreeRate: '', //Annualised Risk-Free Rate
         volitility: '', // Volitility - The standard deviation of the stocks return
         strikePrice: '', //Strike Price of the Call Option
         timeTillMaturity: '',
         timeStep: '',
         d1: '',
         d2: '',

         topic: 'react'
      }
    }


    // calculateOptionPrice(stockPrice, riskFreeRate, volitility, strikePrice, timeTillMaturity) {

    //     var d1 = (Math.log(stockPrice/strikePrice) + (riskFreeRate + Math.pow(volitility, 2)/2 ) * timeTillMaturity)
    //     / (volitility * Math.sqrt(timeTillMaturity));

    //     var d2 = d1 - volitility * Math.sqrt(timeTillMaturity)



    // }


    // americanPut(T, S, K, r, sigma, q, n) 
    // { 
    //     // T... expiration time
    //     // S... stock price
    //     // K... strike price
    //     // q... dividend yield
    //     // n... height of the binomial tree (time step ?????)
    //     // sigma ... volitility of 
    //     // risk-free rate

    //     var p = Array(n)

    //     var deltaT = T/n;
    //     //var up = Math.exp(sigma * sqrt(deltaT))
    //     p[0] = (up*Math.exp(-q * deltaT) - Math.exp(-r * deltaT)) / (Math.pow(up, 2) - 1);
    //     p[1] = Math.exp(-r * deltaT) - p[0];
    //     //initial values at time T
    //     for (let i = 0; i < n; i++) {
    //         p[i] = K - S *  Math.pow(up * i - 1);
    //         if(p[i] < 0) {
    //             p[i] = 0;
    //         }
    //     }
    //     //move to earlier times
    //     for (let j = (n-1); j > 0; j--) {
    //         for (let i = 0; i < j; i++) {
    //             //binomial value
    //             p[i] = p[0] * p[i+1] + p[1] * p[i];
    //             //exersize value
    //             var exercise = K - S * Math.pow(2*i - j);
    //             if (p[i] < exercise){
    //                 p[i] = exercise;
    //             }
    //         }
    //     }
    //     alert(p[0]);
    //     return p[0];
    // }


    

    

    // cdfNormal (x, mean, standardDeviation) {
    //     return (1 - mathjs.erf((mean - x ) / (Math.sqrt(2) * standardDeviation))) / 2
    // }



    handlerTickerChange = event => {
        this.setState({
            Ticker: event.target.value
        })
    }

    handlePriceChange = event => {
        this.setState({
            Price: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleVolitilityChange = event => {
        this.setState({
            volitility: event.target.value
        })
    }


    handleStrikeChange = event => {
        this.setState({
            strikePrice: event.target.value
        })
    }

    handleTimeStepChange = event => {
        this.setState({
            timeStep: event.target.value
        })
    }


    
    // handleSubmit = event => {

    //     alert(`${this.state.Ticker} ${this.state.Price} ${this.state.topic}`)
    //     event.preventDefault()
    // }

  render() {
    const { Ticker, Price, topic, strikePrice, volitility, timeStep} = this.state

    // var select = document.getElementById("selectNumber");
    // var options = ["1", "2", "3", "4", "5"];

    // for(var i = 0; i < options.length; i++) {
    //     var opt = options[i];
    //     var el = document.createElement("option");
    //     el.textContent = opt;
    //     el.value = opt;
    //     select.appendChild(el);
    // }

    return (<div>
        <form onSubmit={this.americanPut}>
            <div>
                <label>Ticker</label>
                <input 
                type='text' value={Ticker}
                onChange={this.handlerTickerChange}
                />
            </div>
            <div>
                <label>Price</label>
                <input value={Price} 
                onChange={this.handlePriceChange}></input>
            </div>
            
            <div>
                <label>Strike Price</label>
                <input value={strikePrice} 
                onChange={this.handleStrikeChange}></input>
            </div>

            <div>
                <label>Volitility</label>
                <input value={volitility} 
                onChange={this.handleVolitilityChange}></input>
            </div>

            <div>
                <label>Time Step</label>
                <input value={timeStep} 
                onChange={this.handleTimeStepChange}></input>
            </div>

            <div>
                <label>Type</label>
                
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value="Call">Call</option>
                    <option value="Put">Put</option>
                </select>
            </div>

            <button type="submit">Submit</button>

        </form>

    </div>
    )
  }
}

export default Form;