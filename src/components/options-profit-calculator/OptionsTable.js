import React, { useEffect, useState } from 'react'
import moment from 'moment';
import optionData from './OptionData.json'
// import { useTable } from 'react-table'
// import { CALLCOLUMNS } from '../Columns'
// import { e } from 'mathjs';
import { optionStratagies } from './OptionStrategyColumns';
import './OptionsTable.css';
import Modal from 'react-bootstrap/Modal';
import OptionContractSelection from './OptionContractSelection';
// import InfoAccordian from './InfoAccordian';
import { Button, Container, Stack} from '@mui/material';
import { Typography } from '@material-ui/core';
import { Option } from './Option';
import OptionsProfitGrid from './OptionsProfitGrid';
import { financialmodelingprep } from '../../config/api_keys';





//HAVING PROBLEMS WITH MEMORY






export default function OptionsTable() {

  const [selectOption, setSelectOption] = useState([])
  // const [selectedContract, setSelectedContract] = useState([])
  const [activeContracts, setActiveContracts] = useState([])
  const [gridContracts, setGridContracts] = useState([])
  const [totalCost, setTotalCost] = useState([])
  // const [age, setAge] = React.useState('');
  const [riskFreeRate, setRiskFreeRate] = useState([])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  

  // const optionChainData = optionData.data.optionChain.result[0].options[0].calls
  // const data = useMemo(() => optionChainData, [])
  // const selectRef = useRef();
  
  

  function getPreviousWorkday(){
    let workday = moment();
    let day = workday.day();
    let diff = 1;  // returns yesterday
    if (day === 0 || day === 1){  // is Sunday or Monday
      diff = day + 2;  // returns Friday
    }
    return workday.subtract(diff, 'days').format('YYYY-MM-DD'); //change formatting
  }

  //There will likely be an error if the workday is a public holiday

  



    

    useEffect(() => {
        
        const prevWorkDay = getPreviousWorkday()
        const url = `https://financialmodelingprep.com/api/v4/treasury?from=${prevWorkDay}&to=${prevWorkDay}&apikey=${financialmodelingprep.api_key}`
        function apiGet() {
            fetch(url)
                .then((response) => response.json())
                .then((json) =>
                    setRiskFreeRate(json[0].year10)
                    )
        }
        apiGet();
    }, [])



  //Sums the price of all of the contracts in the selected stratagy
  function getTotalCost() {

    let cost = 0
    for (let index = 0; index < activeContracts.length; index++) {
      const option = activeContracts[index];
      if(option.tradeSide === 'buy') {
        cost += option.currentPrice * 100
      } else {
        cost -= option.currentPrice * 100
      }
    }
    setTotalCost(cost)
  }




  //Whenever the active contracts are changed, set the 
  // useEffect(() => {
  //   getTotalCost()
  // },[activeContracts])


  // function updateStratagy() {
  //   console.log((document.getElementById( "optionStratagy" ).value))
  // }


  //Gets Expiration dates and converts them from Epoch format to Readable format
  // function getExprirationDates() {
  //   const unixExpirationDates = optionData.data.optionChain.result[0].expirationDates
  //   const expirationDates = unixExpirationDates.map(date => moment.unix(date).format('DD-MM-YYYY'))
  //   return expirationDates
  // }

  // useEffect(() => {
  //   setData(getExprirationDates());
  // }, [])

  // const calls = optionData.data.optionChain.result[0].options[0].calls
  // const puts = optionData.data.optionChain.result[0].options[0].puts
  const stockPrice = optionData.data.optionChain.result[0].quote.ask
  // const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
  // const optionColumn = zip(calls, puts)

  //makes 
  const handleChange = () => {
    let contract = structuredClone(JSON.parse(document.getElementById( "optionStratagy" ).value))

    const activeContracts = []
    let option = null
    for (let index = 0; index < contract.instructions.length; index++) {
      let instructions = contract.instructions[index];
      if(instructions.trade === 'stock') {
        option = new Option(null, null, null, '', instructions.tradeSide, stockPrice, riskFreeRate)
        activeContracts.push(option)
      } else {
        option = new Option(null, null, null, instructions.trade, instructions.tradeSide, stockPrice, riskFreeRate)
        activeContracts.push(option)
      }
      setActiveContracts(activeContracts)
      
    }
    contract['price'] = option
    setSelectOption(JSON.parse(document.getElementById( "optionStratagy" ).value))
    // setSelectOption(event.target.value)
    // setSelectOption(JSON.parse(document.getElementById( "optionStratagy" ).value))
    // setAge(event.target.value);
  };



 
  
  // const theme = createTheme();


  
  return (
    <Container maxWidth="lg" sx={{padding : 10, backgroundColor: 'white', justify : "center"}}>
      <Stack spacing={2}>
        <div className='header'>
          <Typography variant='h3' className='left-text'>Options Profit Calculator</Typography>
          <Typography variant='h3' className='left-text'>Options Profit Calculator</Typography>

        </div>

        <div className='left'>
        {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">Select Option Stratagy</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="optionStratagy"
          ref={selectRef}
          onChange={() => setSelectOption(JSON.parse(document.getElementById( "optionStratagy" ).value))}
          label="Age"
        >
          {console.log(selectOption)}
          {
          optionStratagies.map((value) => {
              return <MenuItem  value={JSON.stringify(value)}>{value.name}</MenuItem>
            })
          }
        </Select>
      </FormControl> */}
      </div>
        <div className='text-box'>
        <label>Select Option Stratagy</label>
        <select name="Options Stratagys" id="optionStratagy" onChange={handleChange}> 
        {
          optionStratagies.map((value) => {
              return <option value={JSON.stringify(value)}  >{value.name}</option>
            })
        }
        </select>

        </div>


      <div className='text-box'>
        <Typography variant='h5'>{selectOption.name}</Typography>
        <Typography>{selectOption.information}</Typography>
        <iframe width="560" height="315" src={selectOption.link}
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      </div>
        

        

        <div>
        {/* {
          selectOption.instructions?.map((value) => {
            return <OptionContractSelection value={value} />
          })
        } */}



        {
          activeContracts?.map((contract) => {
            return <OptionContractSelection contract={contract} getTotalCost={getTotalCost} /> //no arrow func is a red flag
          })
        }


        </div>
      
    
      {/* {
        selectOption.instructions?.map((value) => {
          return(<select name="Trade Side" id={value.id} >
            <option value={value.tradeSide}>{value.tradeSide}</option> 
          </select>)
        }) 
      } */}

      <div className='left'>
        {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-standard-label">Expriration Date</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            {
              getExprirationDates().map((value) => {
                return <MenuItem value={value}>{value}</MenuItem>
              })
            }
          </Select>
        </FormControl> */}
     </div>

      <p>Total Cost Basis: ${totalCost}</p>
      <Button onClick={()=> setGridContracts(activeContracts)}>Calculate Profit</Button>

      {
      gridContracts ? <OptionsProfitGrid contracts={gridContracts} stockPrice={stockPrice}/> : null
      }

      {/* <div class='accordian'>
        <InfoAccordian/>
      </div> */}
    </Stack >

    

      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose Option Contract</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
              Close
          </Button>
        </Modal.Footer>
      </Modal>
      
    </Container>
    


  )
}
