import React from 'react'
import './Navbar.css'
import { Link, ScrollLink } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='container'>
      <h1>Purple Tiger Creations</h1>
      <ul>
        <li><Link to='hero' smooth={true} offset={-100} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-240} duration={500}>About</Link></li>
        <li><Link to='fuel-finder' smooth={true} offset={-250} duration={500}>Projects</Link></li>
        <li><Link to='campus' smooth={true} offset={-250} duration={500}>Music</Link></li>
        <li><Link to='contact' smooth={true} offset={-250} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
