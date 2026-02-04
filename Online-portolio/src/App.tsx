
import './App.css'
import Header from './components/Header'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import LogoCarousel from './components/logoCarousel'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {


const sections = [
  { id: 'Home', component: <Header /> },
  { id: 'About Me', component: <AboutMe /> },
  { id: 'Experience', component: <Experience /> },
  { id: 'Skills', component: (
      <>
        <LogoCarousel title='Skills' folder='skills' direction='Right' />
        <LogoCarousel title='Tools' folder='tools' direction='Left' />
      </>
    ) 
  },
  { id: 'Projects', component: <Projects /> },
  { id: 'Contact', component: <Footer /> },
];

return (
  <>
    <Navbar />
    {sections.map(({ id, component }) => (
      <section key={id} id={id}>
        {component}
      </section>
    ))}
  </>
);

}

export default App
