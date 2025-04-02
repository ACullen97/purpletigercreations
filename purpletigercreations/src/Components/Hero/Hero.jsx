import React from 'react'
import './Hero.css'
import { Link, ScrollLink } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'></div>
      <h2>Digital Multimedia Creations</h2>
      <br/>
      <p>A blend of cutting-edge design, development, media and audio for your creative projects.</p>
      <br/>
      <Link to='fuel-finder' smooth={true} offset={-100} duration={500}> <button className='btn'>Explore</button></Link>
    </div>
  )
}

export default Hero
