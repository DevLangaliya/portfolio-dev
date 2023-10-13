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
            <div className="carousel-item ">
              <p>
                I study Applied Mathematics and Econometrics student at the University of Illinois at Urbana-Champaign.
              </p>
            </div>
          </Fade>

          <Fade right>
            <div className="carousel-item ">
              <p>
                I am currently learning React.js.
              </p>
            </div>
          </Fade>

          <Fade right>
            <div className="carousel-item ">
              <p>
                I am a software engineer with a passion for building web applications.
              </p>
            </div>
          </Fade>

          <Fade right>
            <div className="carousel-item ">
              <p>
                I am a software engineer with a passion for building web applications.
              </p>
            </div>
          </Fade>

          <Fade right>
            <div className="carousel-item ">
              <p>
                I am a software engineer with a passion for building web applications.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </main>
  );
}