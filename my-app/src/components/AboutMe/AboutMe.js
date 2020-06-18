import React from 'react'
import picture from './IMG_0561.png'
import './aboutMe.css'

const AboutMe = () => {
  return (
    <div id='aboutMe' className="aboutMe-conatiner">

      <div className='aboutMe-info'>
      <img src={picture} className="photo" alt="nora-photo"></img>
      <div className="title">About Me</div>
      <div className='aboutMe-info'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
      </div>
      </div>

      <div className='spotify-iframe'>
      <iframe src="https://open.spotify.com/embed/playlist/60c0vcILpnnUCf33lTUe8u" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>

    </div>
  )
}

export default AboutMe
