import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
