import React from 'react'
import logo from '../../img/Logo_KO.png'
import github from '../../img/GithubB.png'
import twitter from '../../img/TwitterB.png'
import angelist from '../../img/AngelistB.png'
import linkedin from '../../img/LinkedInB.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div>
      <img src={logo} alt='logo' className='logo-footer'></img>
      </div>
      <div>
        <a href='https://twitter.com/nlashner' target='_blank'>
          <img src={twitter} alt='logo' className='social-icon'/>
        </a>
        <a href='https://www.linkedin.com/in/noralashner/' target='_blank'>
          <img src={linkedin} alt='logo' className='social-icon'></img>
        </a>
        <a href='https://github.com/nlashner' target='_blank'>
          <img src={github} alt='logo' className='social-icon'></img>
        </a>
        <a href='https://angel.co/u/nora-lashner-1' target='_blank'>
          <img src={angelist} alt='logo' className='social-icon'></img>
        </a>
      </div>
      <div className='footer-email'>nlashner@gmail.com</div>
    </div>
  )
}

export default Footer
