import React from "react";
import './AboutMe.css';
import Fade from 'react-reveal/Fade';
import logo from './white-logo.svg';

export default function AboutMe() {
  return (
    <main className="App-aboutme">
      <Fade bottom>
        <h1>About Me</h1>
      </Fade>
      <div className="slides-container">
        <div className="slides">
          <Fade bottom>
            <div className="carousel-item active">
              <p>
                I am a Mathematics and Econometrics student at the University of Illinois at Urbana-Champaign.
              </p>
            </div>
          </Fade>

          <Fade bottom right>
            <div className="carousel-item ">
              <p>
                I am a software engineer with a passion for building web applications.
              </p>
            </div>
          </Fade>

          <Fade bottom right>
            <div className="carousel-item ">
              <p>
                I am a software engineer with a passion for building web applications.
              </p>
            </div>
          </Fade>

          <Fade bottom right>
            <div className="carousel-item ">
              <p>
                I am a software engineer with a passion for building web applications.
              </p>
            </div>
          </Fade>

          <Fade bottom right>
            <div className="carousel-item ">
              <p>
                I am a software engineer with a passion for building web applications.
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <img src={logo} alt="Dev Langaliya" width="300" className="image"/>
    </main>
  );
}