// import React, {useEffect, useState} from 'react';
// import './SearchBar.css';
// import { iex, poly } from '../config/api_keys.js';
// import { restClient } from "@polygon.io/client-js";

import { Autocomplete, TextField } from "@mui/material";



//import CloseIcon from '@mui/icons-material/Close';
// import SearchIcon from '@mui/icons-material/Search';

//turn into class because it needs to store data


// class SearchBar extends React.Component {

//     constructor(){
//         super();
//         this.state = {ticker_data: {}}

//     }

//     async componentDidMount() {
//         const url = 'https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=10&apiKey=QEByDmihoI0T3_p031X4Gz0GJHFzg635';
//         const responce = await fetch(url);
//         const data = await responce.json();
//         this.setState({ticker_data : data});
//         console.log(ticker_data);
//     }

//     const [filteredData, setFilteredData] = useState([]);
//     handleFilter = (event) => {
//         const searchWord = event.target.value;
//         const newFilter = data.filter((value) => {
//             return value.title.toLowerCase().includes(searchWord.toLowerCase()); 
//         });

//         if(searchWord === ""){
//             setFilteredData([]);

//         } else {
//             setFilteredData(newFilter);
//         }
//     }

//     render(){
//         return (
//             <div className='search'>
//                 <div className='searchInputs'>
//                     <input type='text' placeholder={placeholder} onChange={handleFilter}/>
//                     <div className='SearchIcon'>
//                     </div>
//                 </div>
//                 {filteredData.length != 0 && ( 
//                 <div className='dataResult'>
//                     {filteredData.map((value, key) => {
//                         return <a className='dataItem' href={value.link} target='_blank'> <p>{value.title}</p></a>
//                     })}
//                 </div>
//                 )}
//             </div>  
//           )
//     }
    
  
// }

// export default SearchBar



// function SearchBar({placeholder, data}) {

    
//     const [filteredData, setFilteredData] = useState([]);
//     const handleFilter = (event) => {
//         const searchWord = event.target.value;
//         const newFilter = data.filter((value) => {
//             return value.title.toLowerCase().includes(searchWord.toLowerCase()); 
//         });

//         if(searchWord === ""){
//             setFilteredData([]);

//         } else {
//             setFilteredData(newFilter);
//         }
//     }

//     const apiGet = () => {
//         fetch('https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=10&apiKey=QEByDmihoI0T3_p031X4Gz0GJHFzg635')
//         .then((response) => response.json())
//         .then((json) => {
//             console.log(json.results);
//             //setData(json);
//         })
//     }

    


//     useEffect(()=> {
//         apiGet();
//     },[]) 




    
    
//   return (
//     <div className='search'>
//         <div className='searchInputs'>
//             <input type='text' placeholder={placeholder} onChange={handleFilter}/>
//             <div className='SearchIcon'>
//             </div>
//         </div>
//         {filteredData.length != 0 && ( 
//         <div className='dataResult'>
//             {filteredData.map((value, key) => {
//                 return <a className='dataItem' href={value.link} target='_blank'> <p>{value.title}</p></a>
//             })}
//         </div>
//         )} 
//     </div>  
//   )
// }





import React, { useEffect, useState } from 'react';


// import InputBase from '@material-ui/core/InputBase';
// import { SearchOutlined } from '@mui/icons-material';
// import { style } from '@mui/system';
import { financialmodelingprep } from "../config/api_keys";










function SearchBar() {

    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    const url = `https://financialmodelingprep.com/api/v3/search?query=${searchTerm}&limit=10&apikey=${financialmodelingprep.api_key}`

    function apiGet() {
        fetch(url)
            .then((response) => response.json())
            .then((json) =>
                setFilteredData(json)
                )
    }

    useEffect(() => {
        apiGet();
    }, [])
    
    
    



    // const filterOptions = createFilterOptions({
    //     matchFrom: 'any',
    //     limit: 5,
    //   });
    



      const handleTextChange = (event, value) => {
        setSearchTerm(event.target.value);
      };


    return (
        // <Autocomplete
        //     filterOptions={filterOptions}
        //     options={filteredData}
        //     renderOption={(option) => (
        //         <>
        //             <strong>{option.name}</strong> ({option.symbol})
        //         </>
        //     )}
        //     renderInput={(params) => (
        //         <TextField {...params} label="Search by name or symbol" />
        //     )} />


        // <Autocomplete
        // disablePortal
        // id="combo-box-demo"
        // options={filteredData.map((item) => item.)}
        // sx={{ width: 300 }}
        // renderInput={(params) => <TextField onChange={handleSearch} {...params} label="Search" />}
        // />


        <Autocomplete
        options={filteredData}
        getOptionLabel={(option) => option.symbol + ' - ' + option.name}
        onInputChange={handleTextChange}
        renderInput={(params) => (
          <TextField {...params} label="Search by symbol or name" variant="outlined" />
        )}
      />




    );
}


export default SearchBar









