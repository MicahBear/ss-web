import './Nav.css'
const Nav = ()=>{
    return(
        <nav className='nav' role='navigation'>
          <ul className="nav--list">
            <li className="nav--list-item"><a href="">About</a></li>
            <li className="nav--list-item"><a href="">Menu</a></li>
            <li className="nav--list-item"><a href="">Contact</a></li>
          </ul>
        </nav>
    )
}

export default Nav