import './App.css'

function App() {
 

  return (
    <>
     <header>
      <div className='site-logo'>
        <div itemProp='name'>
          <a itemprop='url' href="https://steffisweets.com" role='link'>
            <img itemprop='logo' src='' alt='Steffi Sweets' />
          </a>
        </div>
      </div>
      <div className='site-nav'>
        <nav className='nav' role='navigation'>
          <ul>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <nav className="mobile-nav" role='navigation'>
          <ul className='mobile-nav--list'>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
     </header>
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
    </>
  )
}

export default App
