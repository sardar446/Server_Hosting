import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { RouterProvider } from 'react-router-dom'
import Mainrouter from './Mainrouter.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux'
import Store from './Redux-Thunk/Store.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <RouterProvider router={Mainrouter} />
  <Provider store={Store}>
    <App />
  </Provider>
)
