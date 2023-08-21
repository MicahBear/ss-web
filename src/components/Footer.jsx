import './Footer.css'
const Footer = ()=>{
    return(
        <footer className='welcome--footer'>
            <div className="footer--wrapper">
            <ul className="footer--content">
                <li className="footer--left-info">
                <div className="footer--left-content">
                    <h4 className="footer--left-title">Community First</h4>
                    <p className="footer--left-address">Long Beach, Ca</p>
                    <p className="footer--left-date">Est. 2020</p>
                </div>
                </li>
                <li className="footer--center-imge">
                <div className="footer--center-content">
                    <div className="footer--center-img">
                    <img id="footer--img" src="src/assets/SampaguitaJpegIllustration.jpg" alt="Sampaguita: A native flower of Philippines" />
                    </div>
                </div>
                </li>
                <li className="footer--right-links">
                <div className="footer--right-content">
                    <h4 className="footer--right-title">Stay In The Loop</h4>
                    <a href="mailto:steffisweets@gmail.com" className="footer--right-contact">Contact</a>
                    <div className="footer--right-socialLinks">
                    <ul className="footer--right-list">
                        <li className="footer--right-insta"><a href="" className="footer--right-insta-img"><img src="src/assets/noun-camera-5717053.png" alt="instagram icon" /></a></li>
                        <li className="footer--right-fbook"><a href="" className="footer--right-fbook-img"><img src="src/assets/noun-thumbs-up-648766.png" alt="facebook icon" /></a></li>
                    </ul>
                    </div>
                </div>
                </li>
            </ul>
            </div>
       </footer>
    )
}

export default Footer