import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'

function App() {


  return (
    <>
      <Header></Header>
      <AboutMe></AboutMe>
      <Experience></Experience>
    </>

  )
}

export default App
