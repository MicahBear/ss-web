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
     <footer className='welcome--footer'>
      <div className="footer--wrapper">
        <div className="footer--content">
          <section className="footer--left-info">
            <div className="footer--left-content">
              <h4 className="footer--left-title">Community First</h4>
              <p className="footer--left-address">Long Beach, Ca</p>
              <p className="footer--left-date">Est. 2020</p>
            </div>
          </section>
          <section className="footer--center-imge">
            <div className="footer--center-content">
              <div className="footer--center-img">
                <img src="" alt="Sampaguita: A native flower of Philippines" srcset="" />
              </div>
            </div>
          </section>
          <section className="footer--right-links">
            <div className="footer--right-content">
              <h4 className="footer--right-title">Stay In The Loop</h4>
              <a href="mailto:steffisweets@gmail.com" className="footer--right-contact">Contact</a>
              <div className="footer--right-socialLinks">
                <ul>
                  <li className="footer--right-insta"><a href="" className="footer--right-insta-img"><img src="" alt="instagram icon" srcset="" /></a></li>
                  <li className="footer--right-fbook"><a href="" className="footer--right-fbook-img"><img src="" alt="facebook icon" srcset="" /></a></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
     </footer>
    </>
  )
}

export default App
