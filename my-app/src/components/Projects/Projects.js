
import React from 'react'
import './projects.css'
import logo from '../Navbar/Logo_Black.png'

const Projects = () => {
  return (
    <div>
      <div className='projects'>
      <div className='projects-title'>My Projects</div>
      <div className='projects-container'>

        <div className='project'>
          <img src={logo} className='project-image' alt='project-picture'></img>
          <div className='project-info'>
            <div className='project-title'>title</div>
            <div className='project-desc'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor .</div>
            <a className='link'>link</a>
            <a className='link'>link</a>
          </div>
        </div>

        <div className='project'>
          <div className='project-info'>
            <div className='project-title'>title</div>
            <div className='project-desc'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor .</div>
            <a className='link'>link</a>
            <a className='link'>link</a>
          </div>
          <img src={logo} className='project-image' alt='project-picture'></img>
        </div>

        <div className='project'>
        <img src={logo} className='project-image' alt='project-picture'></img>
          <div className='project-info'>
            <div className='project-title'>title</div>
            <div className='project-desc'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor .</div>
            <a className='link'>link</a>
            <a className='link'>link</a>
          </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Projects
