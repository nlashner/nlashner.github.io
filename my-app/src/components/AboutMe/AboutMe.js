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
      Hi! You made it to the end of my site :) Thanks!! Though I geuninely love work, I’m my happiest self when I’m surrounded by friends and people I love. Fortunately, New York City, is full of opportunities for that. I spend most of my time outside of work catching up with friends, meeting new people, and taking advantage of all the city has to offer.  On a typical weekend you can catch me at Nom Wah Tea Parlor, the Wayland or Mister Sundays.
      </div>
      </div>

      <div className='spotify-iframe'>
      <iframe src="https://open.spotify.com/embed/playlist/6i1qp1b9E0c0BDGNaryPIs" width="300" height="470" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>

    </div>
  )
}

export default AboutMe
