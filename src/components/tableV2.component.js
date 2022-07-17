import React, { useState } from 'react';
// import { render } from 'react-dom';f
import { AgGridReact } from 'ag-grid-react';
import list from '../data/userInfo.json';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = () => {
    console.log(list)
   const [rowData] = useState([
    { "column": 1, "name": "Reddit", "url": "https://old.reddit.com/" },
    { "column": 1, "name": "eMail", "url": "https://gmail.com/" },
    { "column": 1, "name": "Netflix", "url": "https://netflix.com/" },
    { "column": 1, "name": "Xfinity", "url": "https://tv.xfinity.com/" },
    { "column": 1, "name": "Hulu", "url": "https://Hulu.com/" },
   ]);
   
   const [columnDefs] = useState([
       { field: 'column' },
       { field: 'name' },
       { field: 'url' }
   ])

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
   );
};

// render(<App />, document.getElementById('root'));
export default Table;