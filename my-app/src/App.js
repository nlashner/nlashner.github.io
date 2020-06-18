import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'
import Experience from './components/Experince/Experience'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div>
      <div className='app-container'>
      <Navbar />
      <Intro />
      <Projects />
      <Experience />
      <AboutMe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
