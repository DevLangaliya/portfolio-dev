import React from 'react';
import './Projects.css';
import { Fade } from 'react-reveal';

export default function Projects() {
    return (
        <div className="App-projects-container">
            <div className='header'>
                <h1>Projects</h1>
            </div>
            <Fade right>
                <div className="App-project">
                    <h2>ShowMe!</h2>
                    <li>Collaborated with a team to create a movie recommendation web app, with data being pulled via the TMDB API.</li>
                    <li>Utilized the K-Nearest Neighbors algorithm to locate and display movies with similar genres and viewer ratings.</li>
                    <li>Implemented Flask in combination with HTML to form a intuitive front-end web page with Python.</li>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </Fade>

            <Fade left>
                <div className="App-project">
                    <h2>Plant Classification using Transfer Learning</h2>
                    <li>Collaborated with a team to develop an application which classifies plants based on an already provided dataset.</li>
                    <li>Utilized transfer learning to set the foundation for our plant classification model.</li>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </Fade>

            <Fade right>
                <div className="App-project">
                    <h2>Java Dynasty Simulator</h2>
                    <li>American Football simulation game where the user manages an American Football team through a full season.</li>
                    <li>Watch games unfold during real time with a play-by-play of each team’s possessions in a new window.</li>
                    <li>Used statistical methods to show the cumulative stats for players across all games in a graphical window view.</li>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </Fade>

            <Fade left>
                <div className="App-project">
                    <h2>Wheel Of Fortune</h2>
                    <li>Recreation of the popular TV show to be played by three players on a web browser.</li>
                    <li>Implemented a spinning wheel with various monetary values for the game using CSS.</li>
                    <li>Created an easy to follow and dynamic webpage using HTML.</li>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                
            </Fade>
        </div>
    );
}
