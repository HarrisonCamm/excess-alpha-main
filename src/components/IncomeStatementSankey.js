import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";

import Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";
import { financialmodelingprep } from "../config/api_keys";
// import { abs } from "mathjs";

HighchartsSankey(Highcharts);



export default function IncomeStatementSankey(ticker) {


    const [data, setData] = useState([])

    const url = `https://financialmodelingprep.com/api/v3/income-statement/${ticker.ticker}?limit=1&apikey=${financialmodelingprep.api_key}`
  
    useEffect(() => {
        let isCancelled = false;
        function apiGet(value) {
            fetch(url)
                .then((response) => response.json())
                .then((json) =>
                    setData(json[0])
                    //console.log(json)
                    )
                    isCancelled = true;
        }
        if(!isCancelled) {
            apiGet();
        }
        return () => {
            isCancelled = true;
            console.log(data)
        }
    }, [])



    //Problem with 

    const options = {
        title: {
          text: ""
        },
        series: [
          // {
          //   keys: ["from", "to", "weight"],
          //   data: [
          //     ["Total Revenue", "Gross Profit", abs(data.grossProfit)],
          //     ["Total Revenue", "Cost of Revenue", abs(data.costOfRevenue)],
          //     ["Gross Profit", "Operating Income", abs(data.operatingIncome)],
          //     ["Gross Profit", "Operating Expenses", abs(data.operatingExpenses)],
          //     ["Operating Income", "Net Income", abs(data.netIncome)],
          //     ["Operating Income", "Income Tax", abs(data.incomeTaxExpense)],
          //     ["Operating Income", "Other", abs(data.totalOtherIncomeExpensesNet)],

          //     ["Operating Expenses", "Depreciation and Amortisation", abs(data.depreciationAndAmortization)],
          //     ["Operating Expenses", "General and Administrative", abs(data.generalAndAdministrativeExpenses)]
          //     ["Operating Expenses", "Research and Development", abs(data.researchAndDevelopmentExpenses)],
          //     ["Operating Expenses", "Selling and Marketing", abs(data.sellingAndMarketingExpenses)]

          //   ],
          //   type: "sankey",
          //   name: "Sankey demo series"
          // }
        ]
      };




  return (
    <div className="App">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        // constructorType="sankyChart"
      />
    </div>
  )
}
