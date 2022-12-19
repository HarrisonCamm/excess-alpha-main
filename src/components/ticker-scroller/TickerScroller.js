import React, { useEffect } from 'react'
import './TickerScroller.css'
import $ from 'jquery';


// {
//     "symbols": [
//       {
//         "title": "S&P 500",
//         "proName": "INDEX:SPX"
//       },
//       {
//         "title": "Nasdaq 100",
//         "proName": "INDEX:IUXX"
//       },
//       {
//         "title": "EUR/USD",
//         "proName": "FX_IDC:EURUSD"
//       },
//       {
//         "title": "BTC/USD",
//         "proName": "BITFINEX:BTCUSD"
//       },
//       {
//         "title": "ETH/USD",
//         "proName": "BITFINEX:ETHUSD"
//       },
//       {
//         "description": "Apple",
//         "proName": "NASDAQ:AAPL"
//       },
//       {
//         "description": "Berkshire",
//         "proName": "NYSE:BRK.A"
//       },
//       {
//         "description": "Microsoft",
//         "proName": "NASDAQ:MSFT"
//       },
//       {
//         "description": "Google",
//         "proName": "NASDAQ:GOOG"
//       },
//       {
//         "description": "Tesla",
//         "proName": "NASDAQ:TSLA"
//       },
//       {
//         "description": "Amazon",
//         "proName": "NASDAQ:AMZN"
//       },
//       {
//         "description": "AUD/USD",
//         "proName": "OANDA:AUDUSD"
//       },
//       {
//         "description": "Sony",
//         "proName": "NYSE:SNE"
//       },
//       {
//         "description": "BHP",
//         "proName": "BHP"
//       },
//       {
//         "description": "Telstra",
//         "proName": "TLS"
//       }
//     ],
//     "locale": "en"
//   }






export default function TickerScroller() {

    // $( document ).ready(function() {
    //     $( ".tradingview-widget-container iframe" ).clone().appendTo( ".tradingview-widget-container__widget" );
    //   });


    //   useEffect(() => {
    //     const script = document.createElement('script');
      
    //     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    //     script.async = true;
    //     script.innerHTML = JSON.stringify( {
    //         "symbols": [
    //           {
    //             "proName": "FOREXCOM:SPXUSD",
    //             "title": "S&P 500"
    //           },
    //           {
    //             "proName": "FOREXCOM:NSXUSD",
    //             "title": "US 100"
    //           },
    //           {
    //             "proName": "FX_IDC:EURUSD",
    //             "title": "EUR/USD"
    //           },
    //           {
    //             "proName": "BITSTAMP:BTCUSD",
    //             "title": "Bitcoin"
    //           },
              
    //         ]
    //         })
      
    //     document.body.appendChild(script);
      
    //     return () => {
    //       document.body.removeChild(script);
    //     }
    //   }, []);
      
  return (
    <>
        {/* <div class="ticker-container">
        <div class="ticker-canvas">
        <div class="tradingview-widget-container">
        <div class="tradingview-widget-container__widget"></div>
        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js">

 
        </script>
        </div>
        </div>
        </div> */}

{/* <div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/" rel="noopener" target="_blank"><span class="blue-text">Markets</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>

  </script>
</div> */}

    </>
    
  )
}



// {
//     "symbols": [
//       {
//         "proName": "FOREXCOM:SPXUSD",
//         "title": "S&P 500"
//       },
//       {
//         "proName": "FOREXCOM:NSXUSD",
//         "title": "US 100"
//       },
//       {
//         "proName": "FX_IDC:EURUSD",
//         "title": "EUR/USD"
//       },
//       {
//         "proName": "BITSTAMP:BTCUSD",
//         "title": "Bitcoin"
//       },
//       {
//         "proName": "BITSTAMP:ETHUSD",
//         "title": "Ethereum"
//       }
//     ],
//     "showSymbolLogo": true,
//     "colorTheme": "light",
//     "isTransparent": false,
//     "displayMode": "adaptive",
//     "locale": "en"
//   }