import React, { useEffect, useState, useMemo } from 'react'
import moment from 'moment';
import optionData from '../OptionData.json'
import { useTable } from 'react-table'
import { CALLCOLUMNS } from '../Columns'
import { e } from 'mathjs';
import { optionStratagies } from '../OptionStrategyColumns';
import './OptionsTable.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OptionContractSelection from '../OptionContractSelection';




export default function OptionsTable() {

  // const [data, setData] = useState([])

  const optionChainData = optionData.data.optionChain.result[0].options[0].calls
  const data = useMemo(() => optionChainData, [])

  const [selectOption, setSelectOption] = useState([
  ])

  const [selectedContract, setSelectedContract] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function updateStratagy() {
    console.log((document.getElementById( "optionStratagy" ).value))
  }



  // const makeAPICall = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8080/cors', {mode:'cors'});
  //     const data = await response.json();
  //     console.log({ data })
  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  // }

  //Play around with some of the other means of fetching

  // const url = `https://cors-anywhere.herokuapp.com/https://mboum.com/api/v1/op/option/?symbol=AAPL&apikey=hZTFGDB3IryMndBtAGqOOSEKyhug661ZRLAf5t5XpOnXV0ah6fwrOYKrr9be`
  //   function apiGet() {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       setData(json);
  //     });
  // }


  

  //Gets Expiration dates and converts them from Epoch format to Readable format
  function getExprirationDates() {
    const unixExpirationDates = optionData.data.optionChain.result[0].expirationDates
    const expirationDates = unixExpirationDates.map(date => moment.unix(date).format('DD-MM-YYYY') )
    return expirationDates
  }



 

  //let exp = moment().day(15)
  //let optionsArray = (generateOptionsArray(100, 20, 30, exp, 30))
  // console.log(optionsArray)




    // useEffect(() => {
    //   setData(getExprirationDates());
    // }, [])

    const calls = optionData.data.optionChain.result[0].options[0].calls
    const puts = optionData.data.optionChain.result[0].options[0].puts

    const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);

    const optionColumn = zip(calls, puts)

    console.log(selectOption)


    


    

  return (
    //`https://cloud.iexapis.com/stable/ref-data/options/symbols/spy/20291218?token=pk_32709008a280417589929978895c3530`
    <div>
      <h1>Options Profit Calculator</h1>
      <br/>
      <label>Select Option Stratagy</label>
      {/* () => setSelectOption(optionStratagies[document.getElementById( "optionStratagy" ).value].instructions) */}
      {/* () => setSelectOption(document.getElementById( "optionStratagy" ).value) */}
      <select name="Options Stratagys" id="optionStratagy" onChange={() => setSelectOption(JSON.parse(document.getElementById( "optionStratagy" ).value))}> 
        {
        optionStratagies.map((value) => {
            return <option value={JSON.stringify(value)}  >{value.name}</option>
          })
          }
          
      </select>
      <br/>
      <br/>
      {/* <p>{selectedOption}</p> */}

      <h4>{selectOption.name}</h4>
      <p>{selectOption.information}</p>

      {
        
        selectOption.instructions?.map((value) => {
          
          return <OptionContractSelection value={value} />
        })
      }





      {
        selectOption.instructions?.map((value) => {
      
          // <h2>test</h2>
          // <h2>{value.tradeSide} {value.trade}</h2>
          <select name="Trade Side" id={value.id} >
            <option value={value.tradeSide}>{value.tradeSide}</option> 
          </select>
          
        }) 
      }


      <p>Expiration Date</p>
      <select name="Expriration Dates" id="expiration" > 
      {/* onChange={} */}
      {
         getExprirationDates().map((value) => {
          //  {console.log(value)}
          return <option value={value}>{value}</option>
        })
      }
      </select>

      <br/>
      <br/>
      <p>Total Cost Basis: {}</p>

      <Button>Calculate Profit</Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose Option Contract</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table>
  <thead>
    <tr>
      <th colSpan="2">Calls</th>
      <th colSpan="1">Strike</th>
      <th colSpan="2">Puts</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Bid</td>
      <td>Ask</td>
      <td>Strike</td>
      <td>Bid</td>
      <td>Ask</td>
    </tr>

    {optionColumn.map(pair =>  
      <tr>
      <td><button class="link" onClick={() => setSelectedContract(pair[0].bid)}>{pair[0].bid}</button></td>
      <td><button class="link" onClick={() => setSelectedContract(pair[0].ask)}>{pair[0].ask}</button></td>
      <td>{pair[0].strike}</td>
      <td><button class="link" onClick={() => setSelectedContract(pair[1].bid)}>{pair[1].bid}</button></td>
      <td><button class="link" onClick={() => setSelectedContract(pair[1].ask)}>{pair[1].ask}</button></td>
      </tr>)}
      
   
  </tbody>
    
  <tfoot>
    
  </tfoot>

</table>



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
