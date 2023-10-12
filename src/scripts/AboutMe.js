import React from "react";
import 'src/styles/AboutMe.css';
import Fade from 'react-reveal/Fade';

export default function AboutMe() {
  return (
    <main className="App-aboutme">
      <Fade>
        <h1>About Me</h1>
      </Fade>
      <div class="slides-container">
        <div class="slides">
          <Fade bottom>
            <div class="carousel-item active">
              <p>
                I am a Mathematics and Econometrics student at the University of Illinois at Urbana-Champaign.
              </p>
            </div>
          </Fade>

          <Fade bottom right>
            <div class="carousel-item ">
              <p>
                I am a software engineer with a passion for building web applications.
              </p>
            </div>
          </Fade>

          <Fade bottom right>
            <div class="carousel-item ">
              <p>
                I am a software engineer with a passion for building web applications.
              </p>
            </div>
          </Fade>

          <Fade bottom right>
            <div class="carousel-item ">
              <p>
                I am a software engineer with a passion for building web applications.
              </p>
            </div>
          </Fade>

          <Fade bottom right>
            <div class="carousel-item ">
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