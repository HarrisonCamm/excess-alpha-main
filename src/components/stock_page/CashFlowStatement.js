import React, { useEffect, useState } from 'react'

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
    {
        Header: 'Non-Cash Items',
        accessor: 'otherNonCashItems'
    },
    {
        Header: 'Changes in Working Capital',
        accessor: 'changeInWorkingCapital'
    },
    {
        Header: 'Cash from Operating Activities',
        accessor: 'netCashProvidedByOperatingActivities'
    },
    {
        Header: 'Capital Expenditures',
        accessor: 'capitalExpenditure'
    },
    {
        Header: 'Other Investing Cash Flow Items',
        accessor: 'otherInvestingActivites'
    },
    {
        Header: 'Cash from Investing Activities',
        accessor: 'netCashUsedForInvestingActivites'
    },
    {
        Header: 'Financing Cash Flow Items',//?
        accessor: 'netCashUsedProvidedByFinancingActivities'
    },
    {
        Header: 'Total Cash Dividends Paid',
        accessor: 'dividendsPaid'
    },
    {
        Header: 'Issuance (Retirement) of Stock',
        accessor: 'commonStockIssued'
    },
    {
        Header: 'Issuance (Retirement) of Debt',
        accessor: 'debtRepayment'
    },
    {
        Header: 'Cash from Financing Activities',
        accessor: 'shortTermInvestments'
    },
    {
        Header: 'Foreign Exchange Effects',
        accessor: 'effectOfForexChangesOnCash'
    },
    {
        Header: 'Net Cash - Beginning Balance',
        accessor: 'cashAtBeginningOfPeriod'
    },
    {
        Header: 'Net Cash - Ending Balance',
        accessor: 'cashAtEndOfPeriod'
    },
    {
        Header: 'Net Change in Cash',
        accessor: 'netChangeInCash'
    },
    {
        Header: 'Cash Interest Paid',//??
        accessor: 'shortTermInvestments'
    },
    {
        Header: 'Cash Taxes Paid',///????
        accessor: 'shortTermInvestments'
    },
]


export default function CashFlowStatement(ticker) {

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