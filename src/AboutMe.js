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
                <p>
                  My name is Dev Langaliya. 
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="carousel-item">
              <div className="centerWrap">
                <p>
                  I have an interest in building intuitive and user-friendly web applications, such as this website. 
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="carousel-item">
              <div className="centerWrap">
                <p>
                  I am a software engineer with a passion for building web applications.
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="carousel-item">
              <div className="centerWrap">
                <p>
                  I am a software engineer with a passion for building web applications.
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="carousel-item">
              <div className="centerWrap">
                <p>
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