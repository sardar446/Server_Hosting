import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import Mycomponent from './Mycomponent'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ThunkApiComponent from './Redux-Thunk/ThunkApiComponent'
// import ReduxComponent from './Counter-Redux/ReduxComponent'
// import CrudComponent from './CRUD-REDUX/CrudComponent'
// import CounterComponent from './Redux-Toolkit/CounterComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello React </h1>
      {/* <Mycomponent Name="Sardar Singh" /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mycomponent Name="Sardar"/>}/>
        </Routes>
      </BrowserRouter> */}
      {/* <ReduxComponent /> */}
      {/* <CrudComponent /> */}
      {/* <CounterComponent /> */}
      <ThunkApiComponent />
    </>
  )
}

export default App
