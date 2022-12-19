import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import {  INSIDER_COLUMNS } from './Columns'


// General transaction codes

// P – Open market or private purchase of securities
// S – Open market or private sale of securities
// V – Transaction voluntarily reported earlier than required
// Rule 16b-3 transaction codes

// A – Grant, award, or other acquisition
// D – Sale (or disposition) back to the issuer of the securities
// F – Payment of exercise price or tax liability by delivering or withholding securities
// I – Discretionary transaction, which is an order to the broker to execute the transaction at the best possible price
// M – Exercise or conversion of derivative security
// Derivative securities codes

// C – Conversion of derivative security (usually options)
// E – Expiration of short derivative position (usually options)
// H – Expiration (or cancellation) of long derivative position with value received (usually options)
// O – Exercise of out-of-the-money derivative securities (usually options)
// X – Exercise of in-the-money or at-the-money derivatives securities (usually options)
// Other sections 16b exempt transactions and small acquisition codes

// G – Bona fide gift form of any clauses
// L – Small acquisition
// W – Acquisition or disposition by will or laws of descent and distribution
// Z – Deposit into or withdrawal from voting trust
// Other transaction codes

// J – Other acquisition or disposition (transaction described in footnotes)
// K – Transaction in equity swap or similar instrument
// U – Disposition due to a tender of shares in a change of control transaction


export const InsiderTable = (tableData) => {
    // console.log(tableData.tableData);


    const columns = useMemo(() => INSIDER_COLUMNS, [])
    const data = useMemo(() => tableData.tableData, [])



    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups,
        footerGroups, 
        rows, 
        prepareRow
    } = useTable({
        columns,
        data,
    }) 

  return (
  <>
    <table {...getTableProps()}>
        
        <thead >
            {
                headerGroups.map(headerGroup => (
                <tr {...headerGroup.getTableBodyProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>                   
                ))
            }
            
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td> 
                                })
                            }
                        </tr>
                    )
                })
            }
            
        </tbody>

    </table>
    </>
  )
}
