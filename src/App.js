import React from 'react';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import ContactMe from './ContactMe.js';
import Skills from './Skills.js';

function App() {
  return (
    <div style={{ "display": "flex", "flexDirection": "column" }}>
      <div style={{ "display": "flex", "flexDirection": "row" }}>
        <div style={{"display":"flex", "flexDirection": "column"}}>
          <div style={aboutMeBox}>
            <AboutMe />
          </div>
          <div style={SkillsBox}>
            <Skills />
          </div>
        </div>
        <div style={ProjectsBox}>
          <Projects />
        </div>
      </div>
      
      <div style={ContactMeBox}>
        <ContactMe />
      </div>
    </div>  
  );
}

const aboutMeBox = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '#121212',
  padding: '15px',
  width: '336px',
  height: '480px'
};

const ProjectsBox = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '#121212',
  padding: '15px',
  width: '1216px',
  height: '1160px'
};

const SkillsBox= {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '#121212',
  padding: '15px',
  width: '336px',
  height: '650px'
};

const ContactMeBox= {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#121212',
  padding: '15px',
  width: SkillsBox.width + ProjectsBox.width,
  height: '150px'
};


export default App;
