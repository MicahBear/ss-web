import './WelcomeContent.css'
const WelcomeContent = () =>{
    return(
        <section className='welcome--section'>
        <div className="welcome--left-title">
          <h1>Who we are</h1>
          <h1>Our mission</h1>
        </div>
        <div className="welcome--right-info">
          <div className="welcome--right-who">
            <div className="welcome--right-who-wrapper">
              <p className='welcome--right-who-info'>Family run business based in Long Beach, Ca. We specialize in naturally leavened desserts or Kakanins (Filipino desserts made of rice and coconut milk.)</p>
            </div>
          </div>
          <div className='welcome--right-blocker'></div>
          <div className="welcome--right-mission">
            <div className="welcome--right-mission-wrapper">
              <p className="welcome--right-mission-info">Community is everything, and with the guidance of my ancestors I try to incorporate and embrace the tranditional flavors and foods from my culture.</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default WelcomeContent