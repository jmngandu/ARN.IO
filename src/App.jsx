import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Title from './components/Title'
import heroData from './components/heroData' 
function App() {

  const heroDataset = heroData.map(main=>{
    return(
      <>    
       <Hero
        key={main.id}
        main={main}/>
      </>
    )
  })
  return (
    <>
    <Header/>
    <Title />
    <div className="heroMain">{heroDataset} </div>
    
    </>
  )
}

export default App
