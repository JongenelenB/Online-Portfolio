
import './App.css'
import Header from './components/Header'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import LogoCarousel from './components/logoCarousel'

function App() {


  return (
    <>
      <Header></Header>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <LogoCarousel title='Skills' folder='skills' direction='Right' />
    <LogoCarousel title='Tools' folder='tools' direction='Left' />
      <Projects></Projects>
    </>

  )
}

export default App
