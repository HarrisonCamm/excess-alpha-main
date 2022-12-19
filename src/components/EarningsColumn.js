import React, { useEffect, useState } from 'react'
import { iex, poly } from '../config/api_keys.js';
import { restClient } from "@polygon.io/client-js";

export default function EarningsColumn() {
    const [data, setData] = useState([])

    //const url = `${poly.base_url}/tickers?active=true&sort=ticker&order=asc&limit=10&apiKey=${poly.}`
    const url = `https://api.polygon.io/v3/reference/tickers/AAPL?apiKey=QEByDmihoI0T3_p031X4Gz0GJHFzg635`
    const apiGet = () => {
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setData(json.results);
        });
    };
    

    useEffect(() => {
        apiGet();

    }, [])
  
    return (
    <div>
        My API <br/>

        <button onClick={apiGet}>Fetch API</button>
        <br/>
        {/* {JSON.stringify(data, null, 2)} */}

        <div>
            <ul>
                <li>{data.name}</li>
                <li>{data.description}</li>
                <li>{data.sic_description}</li>
                <li>{data.sic_description}</li>
                
            </ul>
        </div>

    </div>)
}
