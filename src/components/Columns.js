export const INSIDER_COLUMNS = [
    {
        headerName: 'Ticker',
        field: 'symbol',
        width: 75,
        renderCell: (params) => <a href={`/Quote/${params.row.symbol}`}>{params.row.symbol}</a>
    },
    {
        headerName: 'Insider',
        field: 'reportingName',
        width: 170,
    },
    {
        headerName: 'Relationship',
        field: 'typeOfOwner',
        width: 250,

    },
    {
        headerName: 'Date',
        field: 'transactionDate'
    },
    {
        headerName: 'Transaction',
        field: 'transactionType',
        width: 100,
    },
    {
        headerName: 'Price',
        field: 'price',
        numeric:true
    },
    {
        headerName : '#Shares',
        field: 'securitiesTransacted',
    },
    {
        headerName : 'Shares Owned',
        field: 'securitiesOwned'
    },
    {
        headerName : '($) Value',
        field: 'value',
        width: 100
    },
    {
        headerName : 'SEC Filing',
        field: 'filingDate',
        width: 300,
        renderCell: (params) => <a href={params.row.link}>{params.row.filingDate}</a>
    }
]


export const EARNINGSCALANDERCOLUMNS = [
    {
        Header: 'Monday',
        accessor: 'monday'
    },
    {
        Header: 'Tuesday',
        accessor: 'tuesday', 
    },
    {
        Header: 'Wednesday',
        accessor: 'wednesday'
    },
    {
        Header: 'Thursday',
        accessor: 'thursday'
    },
    {
        Header: 'Friday',
        accessor:'friday'
    },
    {
        Header:'Saturday',
        accessor: 'saturday'
    },
    {
        Header: 'Sunday',
        accessor: 'sunday'
    }
]

export const CALLCOLUMNS = [
    {
        Header: 'Bid',
        accessor: 'bid'
    },
    
    {
        Header: 'Ask',
        accessor: 'ask'
    },
    {
        Header: 'Strike',
        accessor: 'strike'
    }

]


// could be used:

// export const INSIDER_COLUMNS = [
//     {
//         headerName: 'Date',
//         field: 'transactionDate'
//     },
//     {
//         headerName: 'Insider',
//         field: 'fullName'
//     },
//     {
//         headerName: 'Relationship',
//         field: 'reportedTitle'

//     },
//     {
//         headerName: 'Transaction',
//         field: 'transactionCode'
//     },
//     {
//         headerName: 'Shares',
//         field: 'tranShares'

//     },
//     {
//         headerName: 'Value',
//         field: 'transactionValue'

//     },
//     {
//         headerName : 'Shares Total',
//         field: 'postShares'
//     }
// ]
