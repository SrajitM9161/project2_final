import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Page from './Components/page'
import './App.css'
const App = () => {
  return (
    <div className='data'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/room/:roomId' element={<Page/>}/>
      </Routes>
    </div>
  )
}

export default App
