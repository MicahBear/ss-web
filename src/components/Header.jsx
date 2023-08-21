import Nav from "./Nav"
const Header = ()=>{
    return(
        <header>
        <div className='site-logo'>
          <div >
            <a type='url' href="https://steffisweets.com" role='link'>
              <img type='logo' src='' alt='Steffi Sweets' />
            </a>
          </div>
        </div>
        <div className='site-nav'>
            <Nav />
        </div>
       </header>
    )
}

export default Header