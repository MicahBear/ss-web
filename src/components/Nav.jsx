
const Nav = ()=>{
    return(
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
    )
}

export default Nav