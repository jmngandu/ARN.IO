import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Authenticate from './components/Authenticate'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import { NotFound } from './components/NotFound'
function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="authenticate" element={<Authenticate/>}/>
      <Route path="signup" element={< SignUp/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path='*' element={<NotFound/>}/>
   
    </Routes>
   
    </>
  )
}

export default App
