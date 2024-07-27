import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mycomponent from './Mycomponent';
import Navbar from './Navbar'

const Mainrouter = createBrowserRouter([
    // {
    //     path: "/",
    //     element:<><Mycomponent Name="Sardar"/></>
    // },
    {
        path: "/",
        element:<><Navbar/></>
    }
])

export default Mainrouter;