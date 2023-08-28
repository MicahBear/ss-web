import Header from './components/Header'
import Footer from './components/Footer'
import WelcomeContent from './components/WelcomeContent'
import Menu from './components/Menu'
import './App.css'

function App() {
 

  return (
    <>
     <div className="header--parent">
      <Header />
     </div> 
     <div className="image--break">
     <div className="image--parent">
            <div className="image--link-parent">
                <a href="http://">
                    <img src="../src/assets/ubeBeignets.webp" alt="" />
                </a>
            </div>
        </div>
     </div>
     <div id="site-content">
      <WelcomeContent />
     </div>
     <div className="image--break">
     <div className="image--parent">
            <div className="image--link-parent">
                <a href="http://">
                    <img src="../src/assets/ubeBiko.webp" alt="" />
                </a>
            </div>
        </div>
     </div>
     <div id="menu-content">
      <Menu />
     </div>
     <div className="footer--parent">
      <Footer />
     </div>
    </>
  )
}

export default App
