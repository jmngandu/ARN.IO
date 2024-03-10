import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Title from './components/Title'

function App() {
 

  return (
    <>
    <Header/>
    <Title />
    <Hero 
      title= "plan your reading"
      source="schedule"
      firstDescription="Worried you never stick to reading ?"
      secondDescription="Track your progress efficently"
    />
    </>
  )
}

export default App
