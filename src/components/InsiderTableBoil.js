import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { INSIDER_COLUMNS } from './Columns'
// import './table.css'

export function InsiderTableBoil(tableData) {
    const columns = useMemo(() => INSIDER_COLUMNS, [])
    const data = useMemo(() => tableData.tableData, [])

    const {
        getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow
    } = useTable({
        columns,
        data
    })

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
                {/* <tfoot>
                    {footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map(column => (
                               // <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                            ))}
                        </tr>
                    ))}
                </tfoot> */}
            </table>
        </>
    )
}