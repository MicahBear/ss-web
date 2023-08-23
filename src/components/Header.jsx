import './Header.css'
import Nav from "./Nav"
const Header = ()=>{
    return(
      <header>
        <div className="header--content">
          <h1 className="header--content-title">Steffi Sweets</h1>
          <p className="header--content-tag">Woman Owned | Community | Family</p>
        </div>
        <div className='site-nav'>
            <Nav />
        </div>
      </header>
    )
}

export default Header