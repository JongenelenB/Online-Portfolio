import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Experience from './components/Experience'

function App() {


  return (
    <>
      <div className="max-w-[80%] mx-auto ">
        <Header></Header>
        <Experience></Experience>
      </div>

    </>

  )
}

export default App
