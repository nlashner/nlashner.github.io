import React from 'react'
//import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
  <div className="navbar">
    <div className="left">
    <p>nlashner@gmail.com</p>
    </div>
    <div className="right">
    <p>My Projects</p>
    <p>Experience</p>
    <p>About Me</p>
    </div>
  </div>
  )
}

export default Navbar
