import React from "react";
import './AboutMe.css';
import Fade from 'react-reveal/Fade';

export default function AboutMe() {
  const randomColor = () => {
    const colors = ["red", "blue", "green", "orange", "purple", "pink"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <main className="App-aboutme">
      <Fade bottom>
        <h1 className="about-me">About Me</h1>
      </Fade>
      <div className="slides-container">
        <div className="slides">
          <Fade bottom>
            <div className="carousel-item">
              <div className="centerWrap">
                <p className="aboutme-width" style={{ color: randomColor() }}>
                  My name is Dev Langaliya, and I currently study Statistics and Economics at the University of Illinois Urbana-Champaign.
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="carousel-item">
              <div className="centerWrap">
                <p className="aboutme-width" style={{ color: randomColor() }}>
                  I have an interest in building intuitive and user-friendly web applications, such as this website. 
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="carousel-item">
              <div className="centerWrap">
                <p className="aboutme-width" style={{ color: randomColor() }}>
                  I am currently working on a project that will allow users to create their own fantasy football league and compete against their friends.
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="carousel-item">
              <div className="centerWrap">
                <p className="aboutme-width" style={{ color: randomColor() }}>
                  I am a software engineer with a passion for building web applications.
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="carousel-item">
              <header>
                <text>
                  More Links:
                </text>
              </header>
              <br></br>
              <div className="centerWrap" style={{ textAlign: "center" }}>
                <a href="https://www.github.com/DevLangaliya" target="_blank" rel="noopener noreferrer">
                  <img src="./github.png" alt="Dev Langaliya" width="32" />
                </a>
                <a href="https://www.linkedin.com/in/dev-langaliya" target="_blank" rel="noopener noreferrer">
                  <img src="./linkedin.png" alt="Dev Langaliya" width="32" />
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </main>
  );
}