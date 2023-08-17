import Header from './components/Header'
import Footer from './components/Footer'
import WelcomeContent from './components/WelcomeContent'
import './App.css'

function App() {
 

  return (
    <>
     <div className="header--parent">
      <Header />
     </div> 
     <div id="site-content">
      <WelcomeContent />
     </div>
     <div className="footer--parent">
      <Footer />
     </div>
    </>
  )
}

export default App
