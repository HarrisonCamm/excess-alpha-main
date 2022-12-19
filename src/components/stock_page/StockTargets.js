import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState, useRef, useContext } from 'react'


export default function StockTargets(props) {
    
    console.log(props.targets)

  return (
    <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead component="th" scope="row">
                <TableCell scope="col">Analyst Company</TableCell>
                <TableCell scope="col">Price Target</TableCell>
            </TableHead>

            {
                props.targets.map(object =>
                    <TableRow>
                        <TableCell scope="col">{}</TableCell>
                        <TableCell scope="col">{object.priceTarget}→{object.priceTarget}</TableCell>
                    </TableRow>
                )

            }

        </Table>
        </TableContainer>
  )
}
