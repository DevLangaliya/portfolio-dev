import React from 'react';
import './Projects.css';
import { Fade } from 'react-reveal';

export default function Projects() {
    return (
        <div className="App-projects-container">
            <div className='header' style={{ "background-color":"black", "overflow":"hidden"}}>
                <h1 className='proj'>Projects</h1>
            </div>
            <Fade right>
                <div className="App-project">
                    <h2 className='proj-name'>ShowMe!</h2>
                    <li className='proj-desc'>Collaborated with a team to create a movie recommendation web app, with data being pulled via the TMDB API.</li>
                    <li className='proj-desc'>Utilized the K-Nearest Neighbors algorithm to locate and display movies with similar genres and viewer ratings.</li>
                    <li className='proj-desc'>Implemented Flask in combination with HTML to form a intuitive front-end web page with Python.</li>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </Fade>

            <Fade left>
                <div className="App-project">
                    <h2 className='proj-name'>Plant Classification using Transfer Learning</h2>
                    <li className='proj-desc'>Collaborated with a team to develop an application which classifies plants based on an already provided dataset.</li>
                    <li className='proj-desc'>Utilized transfer learning to set the foundation for our plant classification model.</li>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </Fade>

            <Fade right>
                <div className="App-project">
                    <h2 className='proj-name'>Java Dynasty Simulator</h2>
                    <li className='proj-desc'>American Football simulation game where the user manages an American Football team through a full season.</li>
                    <li className='proj-desc'>Watch games unfold during real time with a play-by-play of each team’s possessions in a new window.</li>
                    <li className='proj-desc'>Used statistical methods to show the cumulative stats for players across all games in a graphical window view.</li>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </Fade>

            {/* <Fade left>
                <div className="App-project">
                    <h2 className='proj-name'>Wheel Of Fortune</h2>
                    <li className='proj-desc'>Recreation of the popular TV show to be played by three players on a web browser.</li>
                    <li className='proj-desc'>Implemented a spinning wheel with various monetary values for the game using CSS.</li>
                    <li className='proj-desc'>Created an easy to follow and dynamic webpage using HTML.</li>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                
            </Fade> */}
        </div>
    );
}
