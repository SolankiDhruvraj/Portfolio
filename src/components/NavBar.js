import { React, useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import '../styles/NavBar.css';
const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    }
    else {
      setColor(false);
    }
  }
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <h1>Portfolio</h1>
      <ul className={click ? ('navmenu active') : ('navmenu')}>
        <li><Link to="/" className='navMenuLinks'>Home</Link></li>
        <li><Link to="/project" className='navMenuLinks'>Projects</Link></li>
        {/* <li><Link to="/about" className='navMenuLinks'>About</Link></li> */}
        <li><Link to="/contact" className='navMenuLinks'>Contact</Link></li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {console.log(click)}
        {click ? (<FaTimes size={20} style={{ color: 'rgb(9, 14, 77)' }} />) : (<FaBars size={20} style={{ color: 'rgb(9, 14, 77)' }} />)}

      </div>
    </div>
  )
}

export default NavBar