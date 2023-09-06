import './Nav.css'
const Nav = ()=>{
    return(
        <nav className='nav' role='navigation'>
          <ul className="nav--list">
            <li className="nav--list-item"><a href="">about</a></li>
            <li className="nav--list-item"><a href="#menu">menu</a></li>
            <li className="nav--list-item"><a href="">contact</a></li>
          </ul>
   
          <div className="nav--title-content">
           <h1 className="nav--title">Steffi Sweets</h1>
           </div>
           <i className="fa-solid fa-bars pl-3 "></i>
        </nav>
    )
}

export default Nav