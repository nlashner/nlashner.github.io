
import React from 'react'
import './projects.css'
import logo from '../../img/Logo_Black.png'
import diagonElley from '../../img/diagonElley.png'
import chefRemy from '../../img/chefRemy.png'
import queueExt from '../../img/queueApp.png'

const Projects = () => {
  return (
    <div>
      <div id='projects'>
      <div className='projects-title'>My Projects</div>
      <div className='projects-container'>

        <div className='project'>
          <img src={queueExt} className='queue-image project-image-mobile' alt='project-picture' ></img>
          <div className='project-info'>
            <div className='project-title'>Queue</div>
            <div className='project-desc'>Queue is a Google Chrome extension and a web application that allows users to save music tracks from all different sites to listen to it later.</div>
            <a href='https://github.com/nlashner/queueapp' target='_blank' className='link'>Github</a>
            {/* <a className='link'>Website</a> */}
          </div>
        </div>

        <div className='project'>
        <img src={chefRemy} className='project-image-mobile' alt='project-picture'></img>
          <div className='project-info'>
            <div className='project-title'>Chef Remy</div>
            <div className='project-desc'>Chef Remy is a website and an Alexa skill that allows users to manage their kitchen inventory, and get recipes based on items they have in stock.</div>
            <a  href='https://github.com/GHP-Warpaint/remi' target='_blank' className='link'>Github</a>
            <a href='https://chef-remy.herokuapp.com/' target='_blank' className='link'>Website</a>
          </div>
          <img src={chefRemy} className='project-image  ' alt='project-picture'></img>
        </div>

        <div className='project'>
        <img src={diagonElley} className='project-image project-image-mobile' alt='project-picture'></img>
          <div className='project-info'>
            <div className='project-title'>Diagon E-lley</div>
            <div className='project-desc'>Diagon E-lley is an e-commerce site that allows Hogwarts students to get supplies that they might need for the upcoming school year.</div>
            <a href='https://github.com/Rosalina-and-luma/grace-shopper' target='_blank' className='link'>Github</a>
            <a href='https://diagon-e-lley.herokuapp.com/' target='_blank' className='link'>Website</a>
          </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Projects
