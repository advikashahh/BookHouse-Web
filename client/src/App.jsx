import React from 'react'
import Home from './home/Home'
import Coursess from './coursess/Coursess'
import { Route,Routes } from "react-router-dom"
import Signup from './components/Signup'



function App() {
  return ( 
  <>
  <div className='dark:bg-slate-900 texr-white'>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Coursess/>}/>
    <Route path="/signup" element={<Signup/>}/>
  </Routes>
  </div>
  </>
  )
}

export default App
