export const optionStratagies = [
    {
      id : 0,
      name : 'Long Call',
      information : 'Purchasing a call is one of the most basic options trading strategies and is suitable when sentiment is strongly bullish. It can be used as a leveraging tool as an alternative to margin trading.',
      instructions : [
        {
          trade : 'call',
          tradeSide: 'buy'
        }
      ],
      link: 'https://www.youtube.com/embed/KqUBURzGL_k'

    },
    {
      id : 1,
      name : 'Long Put',
      information : 'Purchasing a put option is a strongly bearish strategy and is an excellent way to profit in a downward market. It can be used as a leveraging tool as an alternative to margin trading.',
      instructions : [
        {
          trade : 'put',
          tradeSide: 'buy',
        }
      ],
      link: 'https://www.youtube.com/embed/BiXpn8Lb4oU'
    
    },
    {
      id : 2,
      name : 'Covered Call',
      information : 'The covered call involves writing a call option contract while holding an equivalent number of shares of the underlying stock. It is also commonly referred to as a "buy-write" if the stock and options are purchased at the same time.',
      instructions : [
        {
          trade : 'stock',
          tradeSide: 'buy'
        },
        {
          trade : 'call',
          tradeSide: 'sell'
        },
      ],
      link: 'https://www.youtube.com/embed/Jd0htvJATz4'
    },
    {
      id : 3,
      name : 'Cash Secured Put',
      information : 'Write a put option, putting down enough cash as collateral to cover the purchase of stock at option\'s strike price. Often compared to a Covered Call for its similar risk profile, it can be more profitable depending on put-call skew',
      instructions : [
        {
          trade : 'put',
          tradeSide: 'write'
        }
      ],
      link: 'https://www.youtube.com/embed/Y7jAd_iCxf0'
    },
    {
      id : 4,
      name : 'Naked Call',
      information : 'Writing or selling a call option - or a naked call - often requires additional requirements from your broker because it leaves you open to unlimited exposure as the underlying commodity rises in value.',
      instructions : [
        {
          trade : 'call',
          tradeSide: 'write'
        }
      ],
      link: 'https://www.youtube.com/embed/QO2uSjMEcfo'
    },
    {
      id : 5,
      name : 'Naked Put',
      information : 'Writing or selling a put option - or a naked put - has a limited but immediate return but exposes the trader to a large amount of downside risk. It is suited to a neutral to bullish market.',
      instructions : [
        {
          trade : 'put',
          tradeSide: 'write'
        }
      ],
      link: 'https://www.youtube.com/embed/RO0ezQEWXdM'

    },
    //Spreads
    {
      id : 6,
      name : 'Credit Spread',
      information : 'A credit spread is a two-option strategy that results in an initial credit to the trader. It can be used in both a bullish and bearish market depending on the configuration. ',
      instructions : [
        {
          trade : 'call',
          tradeSide: 'buy'
        },
        {
          trade : 'call',
          tradeSide: 'write'
        }
      ],

    },
    {
      id : 7,
      name : 'Call Spread',
      information : 'A call spread, or vertical spread, is generally used is a moderately volatile market and can be configured to be either bullish or bearish depending on the strike prices chosen:Purchasing a call with a lower strike price than the written call provides a bullish strategy Purchasing a call with a higher strike price than the written call provides a bearish strategy',
      instructions : [
        {
          trade : 'call',
          tradeSide: 'buy'
        },
        {
          trade : 'call',
          tradeSide: 'write'
        }
      ],
      link: 'https://www.youtube.com/embed/2ukCRVAznPI'
    },
    {
      id : 8,
      name : 'Put Spread',
      information : 'A put spread, or vertical spread, can be used in a volatile market to leverage anticipated stock movement, while also providing limited risk.Purchasing a put with a higher strike price than the written put provides a bearish strategy Purchasing a put with a lower strike price than the written put provides a bullish strategy',
      instructions : [
        {
          trade : 'put',
          tradeSide: 'write'
        }
      ],
      link: 'https://www.youtube.com/embed/pToIQgVOLcA'
    },
    {
      id : 9,
      name : 'Calander Spread',
      information : 'A calendar spread involves buying long term call options and writing call options at the same strike price that expire sooner. It is a strongly neutral strategy.',
      instructions : [
        {
          trade : 'call',
          tradeSide: 'buy'
        },
        {
          trade : 'call',
          tradeSide: 'write'
        }
      ],
      link: 'https://www.youtube.com/embed/Q_hPN1cVkAo?start=5'
    },
    //Advanced
    {
      id : 10,
      name : 'Iron Condor',
      information : 'An iron condor is a four-legged strategy that provides a profit plateau between the two inner legs. Maximum risk is limited.',
      instructions : [
        {
          trade : 'put',
          tradeSide: 'buy'
        },
        {
          trade : 'put',
          tradeSide: 'write'
        },
        {
          trade : 'call',
          tradeSide: 'write'
        },
        {
          trade : 'call',
          tradeSide: 'buy'
        }
      ],
      link : 'https://www.youtube.com/embed/brHJI6pTxIQ?start=5'
    },
    { //change
      id : 11,
      name : 'Butterfly', 
      information : 'A butterfly spread provides potentially high returns at a specific strike price (the body, or middle leg of the butterfly). Maximum risk is limited.',
      instructions : [
        {
          trade : 'put',
          tradeSide: 'buy'
        },
      ],
      link: 'https://www.youtube.com/embed/p0f2sHI0XLo'
    },
    {
      id : 12,
      name : 'Collar',
      information : 'A collar is an alternative strategy that provides similar profit outcomes to a call or put spread. It varies in that it also involves holding (or purchasing) the underlying commodity.',
      instructions : [
        {
          trade : 'put',
          tradeSide: 'buy'
        },
        {
          trade : 'call',
          tradeSide: 'write'
        }
      ],
      link: 'https://www.youtube.com/embed/mcYBpTLTGj8'
    },
    { //change
      id : 13,
      name : 'Diagonal Spread', 
      information : 'A diagonal spread involves entering a long and a short position on two options, usually at different strikes price and in different months.',
      instructions : [
        {
          trade : 'put',
          tradeSide: 'buy'
        },
      ],
      link: 'https://www.youtube.com/embed/trAw41USmD4'
    },
    // {
    //   id : 14,
    //   name : 'Double Diagonal',
    //   information : 'A double diagonal spread combines a diagonal put spread and diagonal call spread, meaning buying back-month put and call options and writing a front-month put and call options.',
    //   instructions : [
    //     {
    //       trade : 'put',
    //       tradeSide: 'buy'
    //     },
    //     {
    //       trade : 'put',
    //       tradeSide: 'write'
    //     },
    //     {
    //       trade : 'call',
    //       tradeSide: 'sell'
    //     },
    //     {
    //       trade : 'call',
    //       tradeSide: 'buy'
    //     },
    //   ]
    // },
    {
      id : 15,
      name : 'Straddle',
      information : 'A straddle involves buying a call and put of the same strike price. It is a strategy suited to a volatile market. The maximum risk is at the strike price and profit increases either side, as the price gets further from the chosen strike.',
      instructions : [
        {
          trade : 'put',
          tradeSide: 'buy'
        },
        {
          trade : 'call',
          tradeSide: 'buy'
        },
      ],
      link: 'https://www.youtube.com/embed/FsG0qriSAGo'
    },
    {
      id : 16,
      name : 'Strangle',
      information : 'A strangle involves buying a call and put of different strike prices. It is a strategy suited to a volatile market. The maximum risk is between the two the strike price and profit increases either side, as the price gets further away.',
      instructions : [
        {
          trade : 'put',
          tradeSide: 'buy'
        },
        {
          trade : 'call',
          tradeSide: 'buy'
        },
      ],
      link: 'https://www.youtube.com/embed/PJ8vCKvNgF4'

    },
    {
      id : 17,
      name : 'Covered Strangle',
      information : 'A covered strangle traditionally involves buying stock, selling and a call and put, with the call\'s strike price higher than that of the put\'s. A strategy suited to a rising market.',
      instructions : [
        {
          trade : 'put',
          tradeSide: 'write'
        },
        {
          trade : 'call',
          tradeSide: 'write'
        },
      ],
      link: 'https://www.youtube.com/embed/zqdR4q-N5KQ'
    },
    
  ]