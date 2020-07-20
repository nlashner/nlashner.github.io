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
      I love the constant energy of New York City and spend most of my time outside of work taking advantage of all the city has to offer. On a typical (pre-covid) weekend you can find me at oyster happy hour at the Wayland, eating dim sum at Nom Wah Tea Parlor, or on the dance floor at Mister Sundays.
      </div>
      </div>

      <div className='spotify-iframe'>
      <iframe src="https://open.spotify.com/embed/playlist/6i1qp1b9E0c0BDGNaryPIs" width="300" height="470" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>

    </div>
  )
}

export default AboutMe
