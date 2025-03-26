import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='container'>
      <h1>Purple Tiger Creations</h1>
      <ul>
        <li>Home</li>
        <li>Music</li>
        <li>Media</li>
        <li>Design</li>
        <li>Projects</li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact</Link></li>
        <li><button className='btn'>Contact</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
