import './App.css';
import React from 'react';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import ContactMe from './ContactMe.js';

function App() {
  return (
    <div style={{ "display": "flex" }}>
      <div style={{"display":"flex", "flexDirection": "column"}}>
        <div style={flexboxStyle}>
          <AboutMe />
        </div>
        <div style={flexboxStyle3}>
          <ContactMe />
        </div>
      </div>
      <div style={flexboxStyle2}>
        <Projects />
      </div>
    </div>  
  );
}

const flexboxStyle = {
  display: 'flex',
  justifyContent: 'flex-end', // Updated to align the div to the right
  alignItems: 'center',
  backgroundColor: '#121212',
  padding: '15px',
  width: '336px',
  height: '620px'
};

const flexboxStyle2 = {
  display: 'flex',
  justifyContent: 'flex-end', // Updated to align the div to the right
  alignItems: 'center',
  backgroundColor: '#121212',
  padding: '15px',
  width: '1216px',
  height: '1140px'
};

const flexboxStyle3= {
  display: 'flex',
  justifyContent: 'flex-end', // Updated to align the div to the right
  alignItems: 'center',
  backgroundColor: '#121212',
  padding: '15px',
  width: '336px',
  height: '490px'
};

export default App;
