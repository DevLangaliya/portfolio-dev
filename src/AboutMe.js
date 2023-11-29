import React from "react";
import './AboutMe.css';

export default function AboutMe() {
  const randomColor = () => {
    const colors = ["#121212"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const flexboxStyle = {
    display: 'flex',
    backgroundColor: '#F1FAFF',
    borderRadius: '15px',
    height: '100px',
    width: '300px',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px' 
  }

  const textStyle = {
    color: randomColor(),
    fontSize: '15px',
    alignItems: 'center',
    fontFamily: "Sans Serif",
    weight: 'bold'
  }

  return (
    <main className="App-aboutme">
      <div className="header">
        <h1 className="about-me">About Me</h1>
      </div>
      <div className="centerWrap" style={flexboxStyle}>
        <p className="aboutme-width" style={textStyle}>
          My name is Dev Langaliya, and I currently study Statistics and Economics at the University of Illinois Urbana-Champaign.
        </p>
      </div>
      <div className="centerWrap" style={flexboxStyle}>
        <p className="aboutme-width" style={textStyle}>
          I have an interest in building intuitive and user-friendly web applications, such as this website. 
        </p>
      </div>
      <div className="centerWrap" style={flexboxStyle}>
        <p className="aboutme-width" style={textStyle}>
          I am currently working on a project that will allow users to create their own fantasy football league and compete against their friends.
        </p>
      </div>
      <div className="centerWrap" style={flexboxStyle}>
        <p className="aboutme-width" style={textStyle}>
          I am a software engineer with a passion for building web applications.
        </p>
      </div>
    </main>
  );
}