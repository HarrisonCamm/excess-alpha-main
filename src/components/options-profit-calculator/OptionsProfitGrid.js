import React, {useState, useEffect, useCallback} from 'react'
import moment from 'moment'
// import { Button } from '@mui/material'
// Import Highcharts
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";
import { round } from 'mathjs';

HighchartsHeatmap(Highcharts);

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


// function FormRow(item) {
//   return (
//     <React.Fragment>
//       {
//         item?.optionPriceValues?.map((value)=>
//           <Grid item xs={1}>
//             <Item>{value.date}</Item>
//           </Grid>
//         )
//       }
//     </React.Fragment>
//   );
// }





export default function OptionsProfitGrid(props) {

  const [gridData, setGridData] = useState([])

  const upperPriceBound = props.stockPrice * 1.5
  const lowerPriceBound = props.stockPrice - props.stockPrice * 0.5


  function getLatestExpiry() {
    let latest = moment()
    props.contracts.forEach((contract)=>{
      if(contract.expiry?.isAfter(latest)) {
        latest = contract.expiry
      }
    })
    return latest
  }

  const latest = getLatestExpiry()
  // const timeTillExpiry = moment.duration(moment().diff(latest))
  // const daysTillExpiry = Math.floor(Math.abs(timeTillExpiry.asDays()))

  

  // const dateValues = getDateAxisValues(latest,30);
  // const dateValuesAsText = getDateAxisValuesAsText(latest,30);
  // const priceValues = getPriceAxisValues(upperPriceBound, lowerPriceBound, 30);


  const [dateValuesAsText, setDateValuesAsText] = useState(0)
  const [priceValues, setPriceValues] = useState(0)



  useEffect(() => {
    setDateValuesAsText(getDateAxisValuesAsText(latest,30));
    setPriceValues(getPriceAxisValues(upperPriceBound, lowerPriceBound, 30));

  },[generateOptionsArray, upperPriceBound, lowerPriceBound, latest])



  
  


  //Generates an array of dates for the date/price options grid starting from the current day
  function getDateAxisValues(expiry, tickCount) {
    const MAX_TICK = 30
    let dates = []
    const start = moment()
    const range = moment.duration(expiry.diff(start)).asDays()
    if(range <= MAX_TICK) {
      for (let i = 1; i < range; i++) {
        const element = moment().day(i)
        dates.push(element)
      }
    } 
    else {
      const roundTickRange = Math.round(range/tickCount);
      console.log(tickCount)
      const newLower = roundTickRange * Math.ceil(1/roundTickRange);
      const newUpper = roundTickRange * Math.ceil(1 + (range/roundTickRange));
      let tick = newLower
      while(tick <= newUpper) {
          tick += roundTickRange
          dates.push(
            moment().day(tick))
      }
    }
    return dates;
  }




  function getDateAxisValuesAsText(expiry, tickCount) {
    const MAX_TICK = 30
    let dates = []
    const start = moment()
    const range = moment.duration(expiry.diff(start)).asDays()
    console.log(range)
    if(range <= MAX_TICK) {
      for (let i = 1; i < range; i++) {
        const element = moment().day(i)
        dates.push(element.format('DD-MM-YYYY'))
      }
    } 
    else {
      const roundTickRange = Math.round(range/tickCount);
      console.log(tickCount)
      const newLower = roundTickRange * Math.ceil(1/roundTickRange);
      const newUpper = roundTickRange * Math.ceil(1 + (range/roundTickRange));
      let tick = newLower
      while(tick <= newUpper) {
          tick += roundTickRange
          dates.push(
            moment().day(tick).format('DD-MM-YYYY'))
      }
    }
    return dates;
  }




  //returns the sum 
  const getOptionSum = useCallback((time, price) => {
    let sum = 0
    props.contracts.forEach((contract)=> {
      sum += contract.calculatePriceAtTime(time, price)
    })
    return sum
  }, [props.contracts])


  //Returns an array of prices for the date/price options grid starting from the current day.
  function getPriceAxisValues(upper, lower, tickCount) {
    let prices = []
    const range = upper - lower
    const roundTickRange = Math.round(range/tickCount)
    const newLower = roundTickRange * Math.ceil(lower/roundTickRange)
    const newUpper = roundTickRange * Math.ceil(1 + (upper/roundTickRange))
    let tick = newLower
    while(tick <= newUpper) {
        tick += roundTickRange
        prices.push(tick)
    }
    return prices;
  }



  const generateOptionsArray = useCallback((upperPrice, lowerPrice, priceTickCount, contractExpriry, dateTickCount) => {
    // const PriceValues = getPriceAxisValues(upperPrice, lowerPrice, priceTickCount);
    // const DateValues = getDateAxisValues(contractExpriry,dateTickCount);
    // // let optionsArray = []

    // PriceValues.forEach(priceToPush => {
    //   let optionPriceAtDifferentDates = []
    //   DateValues.forEach(dateToPush => {
    //     optionPriceAtDifferentDates.push({
    //       date: dateToPush.format('DD-MM-YYYY'),
    //       optionPrice: getOptionSum(dateToPush, priceToPush)
    //     })

    //   })
    //   optionsArray.push({
    //     price: priceToPush,
    //     optionPriceValues: optionPriceAtDifferentDates
    //   })
    // })


    

    // const [PriceValues, setPriceValues] = useState(0);
    // const [DateValues, setDatePrices] = useState(0);

    const PriceValues = getPriceAxisValues(upperPrice, lowerPrice, priceTickCount);
    const DateValues = getDateAxisValues(contractExpriry,dateTickCount);







    let optionsArray=[] 
    for (let x = 0; x < DateValues.length; x++) {
      for (let y = 0; y < PriceValues.length; y++) {
        optionsArray.push([x, y, round(getOptionSum(DateValues[x], PriceValues[y]) * 100)/100 ])
      }
    }
    console.log(optionsArray)
    return optionsArray
  }, [getOptionSum])


  function handleClick() {
    var optionsArray = generateOptionsArray(upperPriceBound, lowerPriceBound, 30, latest, 15)
    setGridData(optionsArray)
    // console.log(optionsArray)
  }



  // useEffect(() => {
  //   var optionsArray = generateOptionsArray(upperPriceBound, lowerPriceBound, 30, latest, 15)
  //   setGridData(optionsArray)
  //   // console.log(optionsArray)
  // })




  function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

// const options= {

//     chart: {
//         type: 'heatmap',
//         marginTop: 40,
//         marginBottom: 80,
//         plotBorderWidth: 1
//     },


//     title: {
//         text: 'Option Profit Grid for AAPL'
//     },

//     xAxis: {
//         categories: dateValuesAsText,
//         labels: {
//           rotation: 90
//       }
//     },

//     yAxis: {
//         categories: priceValues,
//         title: null,
//         reversed: true
//     },

//     accessibility: {
//         point: {
//             descriptionFormatter: function (point) {
//                 var ix = point.index + 1,
//                     xName = getPointCategoryName(point, 'x'),
//                     yName = getPointCategoryName(point, 'y'),
//                     val = point.value;
//                 return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
//             }
//         }
//     },

//     // colorAxis: {
//     //     min: 0,
//     //     minColor: '#FFFFFF',
//     //     maxColor: Highcharts.getOptions().colors[0]
//     // },

//     colorAxis: {
//       stops: [
//           [0.0, '#ff0000'],
//           [0.5, '#ffffff'],
//           [1, '#00ff00'],
//       ]
//   },

//     legend: {
//         align: 'right',
//         layout: 'vertical',
//         margin: 0,
//         verticalAlign: 'top',
//         y: 25,
//         symbolHeight: 280
//     },

//     tooltip: {
//         formatter: function () {
//             return '<b>' + getPointCategoryName(this.point, 'x') + '</b> sold <br><b>' +
//                 this.point.value + '</b> items on <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
//         }
//     },

//     series: [{
//         name: 'Sales per employee',
//         borderWidth: 1,
//         // data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
//         data: gridData,
//         dataLabels: {
//             enabled: true,
//             color: '#000000'
//         }
//     }],

//     responsive: {
//         rules: [{
//             condition: {
//                 maxWidth: 500
//             },
//             chartOptions: {
//                 yAxis: {
//                     labels: {
//                         formatter: function () {
//                             return this.value.charAt(0);
//                         }
//                     }
//                 }
//             }
//         }]
//     }

// }




const otherOptions = {


  chart: {
      type: 'heatmap',
      marginTop: 40,
      marginBottom: 80,
      plotBorderWidth: 1
  },


  title: {
      text: 'Option Profit Grid'
  },

  xAxis: {
      categories: dateValuesAsText
  },

  yAxis: {
      categories: priceValues,
      title: null,
      reversed: true
  },

  accessibility: {
      point: {
          descriptionFormatter: function (point) {
              var ix = point.index + 1,
                  xName = getPointCategoryName(point, 'x'),
                  yName = getPointCategoryName(point, 'y'),
                  val = point.value;
              return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
          }
      }
  },

  colorAxis: {
      min: 0,
      minColor: '#FFFFFF',
      maxColor: Highcharts.getOptions().colors[0]
  },

  legend: {
      align: 'right',
      layout: 'vertical',
      margin: 0,
      verticalAlign: 'top',
      y: 25,
      symbolHeight: 280
  },

  tooltip: {
      formatter: function () {
          return '<b>' + getPointCategoryName(this.point, 'x') + '</b> sold <br><b>' +
              this.point.value + '</b> items on <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
      }
  },

  series: [{
      name: 'Sales per employee',
      borderWidth: 1,
      data: gridData,
      dataLabels: {
          enabled: true,
          color: '#000000'
      }
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              yAxis: {
                  labels: {
                      formatter: function () {
                          return this.value.charAt(0);
                      }
                  }
              }
          }
      }]
  }

}



  return (
    <>


    {/* <Button onClick={()=>handleClick()}>Calculate Profit</Button> */}

    <HighchartsReact highcharts={Highcharts} options={otherOptions} />


    
    
    </>
  )
}
                                                                                                                                                       