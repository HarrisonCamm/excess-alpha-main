import React, { useState } from 'react'
import { Button, TableBody } from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';
import optionData from './OptionData.json';
import './OptionsTable.css';
import { Link, Stack, Table, TableCell, TableHead, TableRow } from '@mui/material';
// import { Option } from './Option';
import moment from 'moment';



export default function OptionContractSelection({contract, getTotalCost}) {

    const calls = optionData.data.optionChain.result[0].options[0].calls
    const puts = optionData.data.optionChain.result[0].options[0].puts
    const unixExpirationDates = optionData.data.optionChain.result[0].expirationDates
    const expirationDates = unixExpirationDates.map(date => moment.unix(date))
    console.log(expirationDates)
    const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
    const optionColumn = zip(calls, puts)



    const [show, setShow] = useState(false);
    // const [price, setPrice] = useState([])
    // const [age, setAge] = React.useState('');

    //https://www.learnbestcoding.com/post/72/call-parent-function-from-child-component-react

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const handleChange = (event) => {
    //   setAge(event.target.value);
    // };


    // useEffect(() => {
    //   getTotalCost();
    // }, [price])


    function handleChange(bidAskPrice, strike) {
      console.log(bidAskPrice)
      contract.currentPrice = bidAskPrice
      contract.strike=strike

      getTotalCost();
    }

    function handleSetDate(date) {
      console.log(date)
      contract.expiry = date
    }


  return (
    
    <div className='left'>
      <Stack padding={2}>

            <label>{`${contract.tradeSide} ${contract.type}`}</label>
            <Button variant="primary" onClick={handleShow}>
              Select Option
            </Button>

            <br/>
            <br/>
            <label>Price Per Contract : {contract.currentPrice} x 100</label>
            <label>Expiration Date : {contract.expiry?.format('DD-MM-YYYY')}</label>
            <br/>

            <label>Amount of Contracts/Shares: </label>
            <input type="text" />


            {/* <select>
              <option>{value.tradeSide}</option>
            </select> */}
    </Stack>

    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Choose Option Contract</Modal.Title>
            
            </Modal.Header>

            <Modal.Body>
            {
              expirationDates.map(date=>
                <Link underline='none' onClick={()=> handleSetDate(date)}>{date.format('DD-MM-YYYY')} </Link>

              )
            }
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell  colSpan="2">Calls</TableCell>
                    <TableCell  colSpan="1">Strike</TableCell>
                    <TableCell  colSpan="2">Puts</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Bid</TableCell>
                    <TableCell>Ask</TableCell>
                    <TableCell>Strike</TableCell>
                    <TableCell>Bid</TableCell>
                    <TableCell>Ask</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {optionColumn.map(pair =>  
                    <TableRow>
                      <TableCell><button class="link" onClick={()=> handleChange(pair[0].bid, pair[0].strike)}>{pair[0].bid}</button></TableCell>
                      <TableCell><button class="link" onClick={()=> handleChange(pair[0].ask, pair[0].strike)}>{pair[0].ask}</button></TableCell>
                      <TableCell>{pair[0].strike}</TableCell>
                      <TableCell><button class="link" onClick={()=> handleChange(pair[1].bid, pair[0].strike)}>{pair[1].bid}</button></TableCell>
                      <TableCell><button class="link" onClick={()=> handleChange(pair[1].ask, pair[0].strike)}>{pair[1].ask}</button></TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
            Close
        </Button>
        </Modal.Footer>
    </Modal>


    </div>



  )
}
