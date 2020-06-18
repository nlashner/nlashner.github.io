import React from 'react'
//import {Link} from 'react-router-dom'
import logo from '../../img/Logo_Black.png'
import './navbar.css'

const Navbar = () => {
  return (
  <div className="navbar">

    <div className="left">
    <img src={logo} className='nav-logo' alt='logo'></img>
    <p>nlashner@gmail.com</p>
    </div>

    <div className="right">
    <p className='right-item'>My Projects</p>
    <p className='right-item'>Experience</p>
    <p className='right-item'>About Me</p>
    </div>
  </div>
  )
}

export default Navbar
