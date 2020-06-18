import React from 'react'
//import {Link} from 'react-router-dom'
import logo from '../../img/Logo_Black.png'
import './navbar.css'

const Navbar = () => {
  return (
  <div className="navbar">

    <div className="left">
    <img src={logo} className='nav-logo' alt='logo'></img>
    <a
      href={'mailto:nlashner@gmail.com'}
      className='nav-link'
      >nlashner@gmail.com</a>
    </div>

    <div className="right">
    <a href='#projects' className='right-item nav-link'>My Projects</a>
    <a href='#experience' className='right-item nav-link'>Experience</a>
    <a  href='#aboutMe' className='right-item nav-link'>About Me</a>
    </div>
  </div>
  )
}

export default Navbar
