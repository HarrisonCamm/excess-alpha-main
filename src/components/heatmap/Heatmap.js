import React, { useEffect, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import './Heatmap.css'

export default function Heatmap() {

    const [tickerInfo, setTickerInfo] = useState([])
    // const [symbolInfo, setSymbolInfo] = useState([])


    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);



    // let isRendered = useRef(false);///HERE
    const url = `https://financialmodelingprep.com/api/v3/sp500_constituent?apikey=99c4d0abf7bbdbb8cde2fe0ae213e823`
    // const targetsUrl = `https://financialmodelingprep.com/api/v4/price-target?symbol=${ticker}&apikey=99c4d0abf7bbdbb8cde2fe0ae213e823`




    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then((response) => {
                if(!response.ok) {
                    throw Error('Could not fetch the data for this resource.');
                }
                return response.json();
            })
            .then((json) => setTickerInfo(json))
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    // setIsPending(false);
                    // setError(err.message);
                }

            })
        })
        
        
        // fetch(targetsUrl)
        //     .then((response) => response.json())
        //     .then((json) =>
        //         setTargets(json)
        //         )
        
        
        // setSymbolInfo(Object.values(tickerInfo)[0])




        // apiGet();

        const allowed = ['symbol']
        console.log(tickerInfo)



        const filtered = Object.keys(tickerInfo)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
            obj[key] = tickerInfo[key];
            return obj;
        }, {});

        console.log(filtered)

        return ()=> {
            setTickerInfo({});
            // setSymbolInfo({});
        }
    }, [tickerInfo, url])


    const rows = [
        'symbol', 'name', 'subSector', 'headQuarter', 'dateFirstAdded', 'cik', 'founded'
    ]



    const zoomElement = document.querySelector(".workspace");
    let zoom = 1;
    const ZOOM_SPEED = 0.1;

    document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
    } else {
        zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
    }
    });

    

    

    




  return (

    // <div class="workspace"><h1>Zoom In</h1></div>

    <TableContainer component={Paper}>

            

            <Table sx={{ minWidth: 650 }} aria-label="simple table">

            <TableHead component="th" scope="row">
                <TableRow>
                    {
                        rows.map((row, i) =>
                            <TableCell scope="col" key={i} >{row}</TableCell>
                        )
                    }
                </TableRow>
            </TableHead>
            
            <TableBody>
                {tickerInfo.map(item => 
                    <TableRow>
                        <TableCell scope="col">{item.symbol}</TableCell>
                        <TableCell scope="col">{item.name}</TableCell>
                        <TableCell scope="col">{item.sector}</TableCell>
                        <TableCell scope="col">{item.subSector}</TableCell>
                        <TableCell scope="col">{item.headQuarter}</TableCell>
                        <TableCell scope="col">{item.dateFirstAdded}</TableCell>
                        <TableCell scope="col">{item.cik}</TableCell>
                        <TableCell scope="col">{item.founded}</TableCell>
                    </TableRow>
                    )}

                {/* {
                    symbolInfo.map(item =>
                        <TableCell scope="col">{item}</TableCell>
                    )
                } */}

            </TableBody>

        </Table>
        </TableContainer>


  )
}
