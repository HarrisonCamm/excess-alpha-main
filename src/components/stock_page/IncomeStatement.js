import { Typography } from '@material-ui/core';
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { color } from 'highcharts';
import React, { useEffect, useState } from 'react'
import { financialmodelingprep } from '../../config/api_keys';



export default function IncomeStatement(ticker) {

    //https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js

    // function createData(name, calories, fat, carbs, protein) {
    //     return { name, calories, fat, carbs, protein };
    //   }


    // const rows = [
    //     'Period End Date',
    //     'Period Length',
    //     'Total Revenue',
    //     'Cost of Revenue',
    //     'Gross Profit',
    //     'Selling, General and Administrative',
    //     'Research and Development',
    //     'Operating Expense',
    //     'Operating Income',
    //     'Interest Income',
    //     'Other Income Net',
    //     'Net Income Before Taxes',
    //     'Provision for Income Taxes',
    //     'Net Income',
    //     'Diluted Average Shares'
    //   ];




    const [data, setData] = useState([])

    function percChange(a, b) {
        let percent;
        if(b !== 0) {
            if(a !== 0) {
                percent = (b - a) / a * 100;
            } else {
                percent = b * 100;
            }
        } else {
            percent = - a * 100;            
        }       
        return Math.round(percent * 100) / 100
        ;
    }

    useEffect(() => {
        const url = `https://financialmodelingprep.com/api/v3/income-statement/${ticker.ticker}?limit=2&apikey=${financialmodelingprep.api_key}`
        function apiGet(value) {
            fetch(url)
                .then((response) => response.json())
                .then((json) =>
                    setData(json)
                    //console.log(json)
                    )
    }   
        apiGet();
        return () => {
            setData({});
        }

    }, [ticker.ticker])


    // const revenue = data.filter((x)=> {return x} )



    function abbrNum(number, decPlaces) {
        // 2 decimal places => 100, 3 => 1000, etc
        decPlaces = Math.pow(10,decPlaces);
    
        // Enumerate number abbreviations
        var abbrev = [ "k", "m", "b", "t" ];
    
        // Go through the array backwards, so we do the largest first
        for (var i=abbrev.length-1; i>=0; i--) {
    
            // Convert array index to "1000", "1000000", etc
            var size = Math.pow(10,(i+1)*3);
    
            // If the number is bigger or equal do the abbreviation
            if(size <= number) {
                 // Here, we multiply by decPlaces, round, and then divide by decPlaces.
                 // This gives us nice rounding to a particular decimal place.
                 number = Math.round(number*decPlaces/size)/decPlaces;
    
                 // Handle special case where we round up to the next abbreviation
                 if((number === 1000) && (i < abbrev.length - 1)) {
                     number = 1;
                     i++;
                 }
    
                 // Add the letter for the abbreviation
                 number += abbrev[i];
    
                 // We are done... stop
                 break;
            }
        }
    
        return number;
    }



  return (
    <div>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead component="th" scope="row">
                <TableHead component="th" scope="row">Period End Date</TableHead>
                {data?.map(item => <TableCell scope="col">{abbrNum(item.date, 2)}</TableCell>)}
                <TableCell scope="col">Y/Y change</TableCell> 
            </TableHead>
            {/* <TableRow>
                <TableCell component="th" scope="row">Period </TableCell>
                {data.map(item => <TableCell scope="col">{abbrNum(item.period, 2)}</TableCell>)} 
            </TableRow> */}
            <TableRow>
                <TableCell component="th" scope="row">Total Revenue</TableCell>
                {data?.map(item => <TableCell scope="col">{abbrNum(item.revenue, 2)}</TableCell>)}
                {/* {
                    percChange(data[0].revenue, data[1].revenue) > 0?
                    <TableCell scope="col"><Typography sx={{color: "#22AB94"}}>{percChange(data[0].revenue, data[1].revenue)}%</Typography></TableCell>:
                    <TableCell scope="col"><Typography sx={{color: "#F23645"}}>{percChange(data[0].revenue, data[1].revenue)}%</Typography></TableCell>
                } */}
                
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">Cost of Revenue</TableCell>
                {data?.map(item => <TableCell scope="col">{abbrNum(item.costOfRevenue, 2)}</TableCell>)}
                {
                    percChange(data[0].costOfRevenue, data[1].costOfRevenue) > 0?
                    <TableCell scope="col"><Typography sx={{color: "#22AB94"}}>{percChange(data[0].costOfRevenue, data[1].costOfRevenue)}%</Typography></TableCell>:
                    <TableCell scope="col"><Typography sx={{color: "#F23645"}}>{percChange(data[0].costOfRevenue, data[1].costOfRevenue)}%</Typography></TableCell>
                }
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">Gross Profit</TableCell>
                {data?.map(item => <TableCell scope="col">{abbrNum(item.grossProfit, 2)}</TableCell>)}
                {
                    percChange(data[0].grossProfit, data[1].grossProfit) > 0?
                    <TableCell scope="col"><Typography sx={{color: "#22AB94"}}>{percChange(data[0].grossProfit, data[1].grossProfit)}%</Typography></TableCell>:
                    <TableCell scope="col"><Typography sx={{color: "#F23645"}}>{percChange(data[0].grossProfit, data[1].grossProfit)}%</Typography></TableCell>
                }
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">Selling, General and Administrative</TableCell>
                {data?.map(item => <TableCell scope="col">{abbrNum(item.sellingGeneralAndAdministrativeExpenses, 2)}</TableCell>)}
                {
                    percChange(data[0].grossProfit, data[1].grossProfit) > 0?
                    <TableCell scope="col"><Typography sx={{color: "#22AB94"}}>{percChange(data[0].grossProfit, data[1].grossProfit)}%</Typography></TableCell>:
                    <TableCell scope="col"><Typography sx={{color: "#F23645"}}>{percChange(data[0].grossProfit, data[1].grossProfit)}%</Typography></TableCell>
                }
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">Research and Development</TableCell>
                {data?.map(item => <TableCell scope="col">{abbrNum(item.researchAndDevelopmentExpenses, 2)}</TableCell>)}
                {
                    percChange(data[0].researchAndDevelopmentExpenses, data[1].researchAndDevelopmentExpenses) > 0?
                    <TableCell scope="col"><Typography sx={{color: "#22AB94"}}>{percChange(data[0].researchAndDevelopmentExpenses, data[1].researchAndDevelopmentExpenses)}%</Typography></TableCell>:
                    <TableCell scope="col"><Typography sx={{color: "#F23645"}}>{percChange(data[0].researchAndDevelopmentExpenses, data[1].researchAndDevelopmentExpenses)}%</Typography></TableCell>
                }
            </TableRow>
            {/* <TableRow>
                <TableCell scope="row">Unusual Expense/Income</TableCell>
                {data.map(item => <TableCell scope="col">{item.researchAndDevelopmentExpenses}</TableCell>)}
            </TableRow> */}
            <TableRow>
                <TableCell component="th" scope="row">Operating Expense</TableCell>
                {data?.map(item => <TableCell scope="col">{abbrNum(item.operatingExpenses, 2)}</TableCell>)}
                {
                    percChange(data[0].operatingExpenses, data[1].operatingExpenses) > 0?
                    <TableCell scope="col"><Typography sx={{color: "#22AB94"}}>{percChange(data[0].operatingExpenses, data[1].operatingExpenses)}%</Typography></TableCell>:
                    <TableCell scope="col"><Typography sx={{color: "#F23645"}}>{percChange(data[0].operatingExpenses, data[1].operatingExpenses)}%</Typography></TableCell>
                }
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">Operating Income</TableCell>
                {data.map(item => <TableCell scope="col">{abbrNum(item.operatingIncome, 2)}</TableCell>)}
                {
                    percChange(data[0].operatingExpenses, data[1].operatingExpenses) > 0?
                    <TableCell scope="col"><Typography sx={{color: "#22AB94"}}>{percChange(data[0].operatingExpenses, data[1].operatingExpenses)}%</Typography></TableCell>:
                    <TableCell scope="col"><Typography sx={{color: "#F23645"}}>{percChange(data[0].operatingExpenses, data[1].operatingExpenses)}%</Typography></TableCell>
                }

            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">Interest Income</TableCell>
                {data.map(item => <TableCell scope="col">{abbrNum(item.interestIncome, 2)}</TableCell>)}
                {
                    percChange(data[0].interestIncome, data[1].interestIncome) > 0?
                    <TableCell scope="col"><Typography sx={{color: "#22AB94"}}>{percChange(data[0].interestIncome, data[1].interestIncome)}%</Typography></TableCell>:
                    <TableCell scope="col"><Typography sx={{color: "#F23645"}}>{percChange(data[0].interestIncome, data[1].interestIncome)}%</Typography></TableCell>
                }

            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">Income Net</TableCell>
                {data.map(item => <TableCell scope="col">{abbrNum(item.operatingIncome, 2)}</TableCell>)}
                {
                    percChange(data[0].operatingIncome, data[1].operatingIncome) > 0?
                    <TableCell scope="col"><Typography sx={{color: "#22AB94"}}>{percChange(data[0].operatingIncome, data[1].operatingIncome)}%</Typography></TableCell>:
                    <TableCell scope="col"><Typography sx={{color: "#F23645"}}>{percChange(data[0].operatingIncome, data[1].operatingIncome)}%</Typography></TableCell>
                }
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">Net Income Before Taxes</TableCell>
                {data.map(item => <TableCell scope="col">{abbrNum(item.operatingIncome, 2)}</TableCell>)}
                {
                    percChange(data[0].operatingIncome, data[1].operatingIncome) > 0?
                    <TableCell scope="col"><Typography sx={{color: "#22AB94"}}>{percChange(data[0].operatingIncome, data[1].operatingIncome)}%</Typography></TableCell>:
                    <TableCell scope="col"><Typography sx={{color: "#F23645"}}>{percChange(data[0].operatingIncome, data[1].operatingIncome)}%</Typography></TableCell>
                }
                
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">Provision for Income Taxes</TableCell>
                {data.map(item => <TableCell scope="col">{abbrNum(item.operatingIncome, 2)}</TableCell>)}
                {
                    percChange(data[0].operatingIncome, data[1].operatingIncome) > 0?
                    <TableCell scope="col"><Typography sx={{color: "#22AB94"}}>{percChange(data[0].operatingIncome, data[1].operatingIncome)}%</Typography></TableCell>:
                    <TableCell scope="col"><Typography sx={{color: "#F23645"}}>{percChange(data[0].operatingIncome, data[1].operatingIncome)}%</Typography></TableCell>
                }
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">Net Income</TableCell>
                {data.map(item => <TableCell scope="col">{abbrNum(item.operatingIncome, 2)}</TableCell>)}
                {
                    percChange(data[0].operatingIncome, data[1].operatingIncome) > 0?
                    <TableCell scope="col"><Typography sx={{color: "#22AB94"}}>{percChange(data[0].operatingIncome, data[1].operatingIncome)}%</Typography></TableCell>:
                    <TableCell scope="col"><Typography sx={{color: "#F23645"}}>{percChange(data[0].operatingIncome, data[1].operatingIncome)}%</Typography></TableCell>
                }
                
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">Diluted Average Shares</TableCell>
                {data.map(item => <TableCell scope="col">{item.operatingIncome}</TableCell>)}
            </TableRow>

        </Table>
        </TableContainer>
    </div>
  )
}
