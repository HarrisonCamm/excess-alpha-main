import React, { useEffect } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { financialmodelingprep } from '../../config/api_keys';





export default function StockChart(ticker) {

    // const [data, setData] = useState([])

    const url = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=5&apikey=${financialmodelingprep.api_key}`
    function apiGet() {
        fetch(url)
            .then((response) => response.json())
            .then((json) =>
                //setData(json)
                console.log(json.filter(([k]) => k === 'date')
                ))
            
    }

    useEffect(() => {
        apiGet();
    }, [])



    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: `Annual Net Income, Revenue and Operating Expences for ${ticker}`
        },
        xAxis: {
            categories: ['A', 'B', 'C', 'D']
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Total Operating Expence',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Net Income',
            data: [2, -2, -3, 2, 1]
        }, {
            name: 'Total Revenue',
            data: [3, 4, 4, -2, 5]
        }]
    }
    



    
  return (
    <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>   
  )
}
