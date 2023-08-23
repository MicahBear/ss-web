import './Header.css'
import Nav from "./Nav"
const Header = ()=>{
    return(
        <header>
        <div className='site-nav'>
            <Nav />
        </div>
          <h1>Steffi Sweets</h1>
          <p>Woman Owned | Community | Family</p>
       </header>
    )
}

export default Header