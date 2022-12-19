import React, { useEffect, useState } from 'react'
import Highcharts from "highcharts";
// import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";



export default function StockPriceChart() {

    const [data, setData] = useState()


    const url = 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json'
    function apiGet() {
        fetch(url)
            .then((response) => response.json())
            .then((json) =>
                setData(json)
                )
    }

    useEffect(() => {
        apiGet();
    }, [])



    
    

        const options = {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: ''
            },
            
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'USD to EUR',
                data: data
            }]
    }

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  )
}
