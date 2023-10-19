import './App.css';
import Header from "./Header.js";
import AboutMe from "./AboutMe.js";
import Projects from "./Projects.js";
import Footer from "./Footer.js";
import React from 'react';

function App() {
  
  return (
    <div id="main-div">
      <Header />     
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
