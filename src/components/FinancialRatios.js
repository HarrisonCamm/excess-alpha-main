import React, { useEffect, useState } from 'react'
import { financialmodelingprep } from '../config/api_keys'

export const COLUMNS = [
    {
        Header: 'Period Length',
        accessor: 'period'
    },
    {
        Header: 'Net Income',
        accessor: 'netIncome'
    },
    {
        Header: 'Depreciation and Amortization',
        accessor: 'depreciationAndAmortization'
    },
    {
        Header: 'Deferred Taxes',
        accessor: 'deferredIncomeTax'
    },
]



export default function BalanceSheet(ticker) {

    //https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js

    const [data, setData] = useState([])
    

    const url = `https://financialmodelingprep.com/api/v3/cash-flow-statement/${ticker.ticker}?limit=5&apikey=${financialmodelingprep.api_key}`
    function apiGet(value) {
        fetch(url)
            .then((response) => response.json())
            .then((json) =>
                setData(json)
                )
    }

    useEffect(() => {
        apiGet();
    }, [])


    const revenue = data.filter((x)=> {return x} )
    console.log(data[0])


    

  return (
    <div>
            <table>
                <tr>
                    <th scope="col">Period End Date</th>
                    {data.map(item => <th scope="col">{item.date}</th>)} 
                </tr>
                


        </table>
    </div>
  )
}