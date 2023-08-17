import Nav from "./Nav"
const Header = ()=>{
    return(
        <header>
        <div className='site-logo'>
          <div itemProp='name'>
            <a itemprop='url' href="https://steffisweets.com" role='link'>
              <img itemprop='logo' src='' alt='Steffi Sweets' />
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