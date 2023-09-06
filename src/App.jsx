import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import InfoSection from './components/InfoSection'
import WelcomeContent from './components/WelcomeContent'
import Menu from './components/Menu'
import './App.css'

function App() {
 

  return (
    <div className="App">
     <div className="nav--wrapper">
      <Nav />
     </div> 
     <Hero />
     <div id="site-content">
      <InfoSection />
      <WelcomeContent />
     </div>
     <div id="menu-content">
      <Menu />
     </div>
     <div className="footer--parent">
      <Footer />
     </div>
    </div>
  )
}

export default App
