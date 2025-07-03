import React from 'react';
import ReactDom from 'react-dom/client';
// import {BrowserRouter} from 'react-router-dom';

// import { HashRouter } from 'react-router-dom';

import { MemoryRouter } from 'react-router-dom';
import App from './App';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(

    // Type --->1 BrowserRouter


    // <BrowserRouter>
    // <App/>
    // </BrowserRouter>

    // Type --->2 HashRouter

    // <HashRouter>
    //     <App/>
    // </HashRouter>


    // Type --->3 MemoryRouter
    
    <MemoryRouter>
        <App/>
    </MemoryRouter>

)
