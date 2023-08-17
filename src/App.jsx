import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
 

  return (
    <>
     <div className="header--wrapper">
      <Header />
     </div> 
     <div id="site-content">
      <section className='welcome--section'>
        <div className="welcome--left-title">
          <h1>Who we are</h1>
          <h1>Our mission</h1>
        </div>
        <div className="welcome--right-info">
          <div className="welcome--right-who">
            <div className="welcome--right-who-wrapper">
              <p className='welcome--right-who-info'>Woman-Owned</p>
            </div>
          </div>
          <div className='welcome--right-blocker'></div>
          <div className="welcome--right-mission">
            <div className="welcome--right-mission-wrapper">
              <p className="welcome--right-mission-info">Cultured inspired treats</p>
            </div>
          </div>
        </div>
      </section>
     </div>
     <Footer />
    </>
  )
}

export default App
