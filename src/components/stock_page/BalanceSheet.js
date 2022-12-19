import React, { useEffect, useState } from 'react'
import { financialmodelingprep } from '../../config/api_keys'

export const COLUMNS = [
    {
        Header: 'Cash and Equivalents',
        accessor: 'cashAndCashEquivalents'
    },
    {
        Header: 'Short Term Investments',
        accessor: 'shortTermInvestments'
    },
    {
        Header: 'Cash and Short Term Investments',
        accessor: 'cashAndCashEquivalents'
    },
    {
        Header: 'Accounts Receivable - Trade, Net',
        accessor: 'fullName'
    },
    {
        Header: 'Total Receivables, Net',
        accessor: 'netReceivables'
    },
    {
        Header: 'Total Inventory',
        accessor: 'inventory'
    },
    {
        Header: 'Total Current Assets',
        accessor: 'totalCurrentAssets'
    },
    {
        Header: 'Property, Plant And Equipment - Gross',
        accessor: 'fullName'
    },
    {
        Header: 'Property, Plant And Equipment - Net',
        accessor: 'propertyPlantEquipmentNet'
    },
    {
        Header: 'Goodwill, Net',
        accessor: 'goodwill'
    },
    {
        Header: 'Intangibles, Net',
        accessor: 'fullName'
    },
    {
        Header: 'Long Term Investments',
        accessor: 'longTermInvestments'
    },
    {
        Header: 'Other Long Term Assets',
        accessor: 'otherNonCurrentAssets'
    },
    {
        Header: 'Total Assets',
        accessor: 'totalAssets'
    },
    {
        Header: 'Accounts Payable',
        accessor: 'accountPayables'
    },
    {
        Header: 'Accrued Expenses',//???
        accessor: 'fullName'
    },
    {
        Header: 'Current Port. of LT Debt/Capital Leases', //?????
        accessor: 'fullName'
    },
    {
        Header: 'Other Current liabilities',
        accessor: 'otherCurrentLiabilities'
    },
    {
        Header: 'Long Term Debt',
        accessor: 'longTermDebt'
    },
    {
        Header: 'Capital Lease Obligations',
        accessor: 'capitalLeaseObligations'
    },
    {
        Header: 'Total Long Term Debt',
        accessor: 'longTermDebt'
    },
    {
        Header: 'Total Debt',
        accessor: 'totalDebt'
    },
    {
        Header: 'Other Liabilities',//??
        accessor: 'otherLiabilities'
    },
    {
        Header: 'Total Liabilities',
        accessor: 'totalLiabilities'
    },
    {
        Header: 'Common Stock',
        accessor: 'commonStock'
    },
    {
        Header: 'Additional Paid-In Capital', // ???
        accessor: 'fullName'
    },
    {
        Header: 'Retained Earnings',
        accessor: 'retainedEarnings'
    },
    {
        Header: 'Unrealized Gain (Loss)',//????
        accessor: 'fullName'
    },
    {
        Header: 'Other Long Term Assets',
        accessor: 'otherNonCurrentAssets'
    },
    {
        Header: 'Other Equity',//???
        accessor: 'fullName'
    },
    {
        Header: 'Total Equity',
        accessor: 'totalEquity'
    },
    {
        Header: 'Total Liabilities and Equity',
        accessor: 'totalLiabilitiesAndTotalEquity'
    },
    {
        Header: 'Total Common Shares Outstanding',//?
        accessor: 'fullName'
    },
    {
        Header: 'Full-Time Employees',//?
        accessor: 'fullName'
    },
    {
        Header: 'Number of Common Shareholders',
        accessor: 'fullName'
    },


]



export default function BalanceSheet(ticker) {

    //https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js

    const [data, setData] = useState([])

    const url = `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${ticker.ticker}?limit=5&apikey=${financialmodelingprep.api_key}`
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
                <tr>
                    <th scope="row">Cash and Equivalents</th>
                    {data.map(item => <td scope="col">{item.period}</td>)} 
                </tr>
                <tr>
                    <th scope="row">Period Length</th>
                    {data.map(item => <td scope="col">{item.period}</td>)} 
                </tr>
                <tr>
                    <th scope="row">Period Length</th>
                    {data.map(item => <td scope="col">{item.period}</td>)} 
                </tr>
                <tr>
                    <th scope="row">Period Length</th>
                    {data.map(item => <td scope="col">{item.period}</td>)} 
                </tr>
        </table>
    </div>
  )
}