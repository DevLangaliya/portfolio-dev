import React from "react";
import './AboutMe.css';
import Fade from 'react-reveal/Fade';

export default function AboutMe() {
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
                <p style={{"maxWidth": "900px"}}>
                  My name is Dev Langaliya, and I currently study Applied Mathematics and Econoimcs at the University of Illinois Urbana-Champaign.
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="carousel-item">
              <div className="centerWrap">
                <p style={
                  {
                    "maxWidth": "900px"
                    
                  }
                }>
                  I have an interest in building intuitive and user-friendly web applications, such as this website. 
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="carousel-item">
              <div className="centerWrap">
                <p style={{"maxWidth": "900px"}}>
                  I am currently working a web application which allows the user to practice their poker skills with real time board analysis.
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="carousel-item">
              <div className="centerWrap">
                <p style={{"maxWidth": "900px"}}>
                  I am a software engineer with a passion for building web applications.
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="carousel-item">
              <div className="centerWrap">
                <p style={{"maxWidth": "900px"}}>
                  I am a software engineer with a passion for building web applications.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </main>
  );
}