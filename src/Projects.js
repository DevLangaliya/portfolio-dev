import React from 'react';
import './Projects.css';
import { Fade } from 'react-reveal';

export default function Projects() {
    return (
        <div className="App-projects-container">
            <Fade right>
                <div className="App-project">
                    <h2>Java Dynasty Simulator</h2>
                    <li>American Football simulation game where the user manages an American Football team through a 17 week season.</li>
                    <li>Watch games unfold during real time with a play-by-play of each team’s possessions in a new window.</li>
                    <li>Used statistical methods to show the cumulative stats for players across all games in a graphical window view.</li>
                </div>
            </Fade>

            <Fade left>
                <div className="App-project">
                    <h2>Project 2</h2>
                    <p>This is the content for project 2.</p>
                </div>
            </Fade>

            <Fade right>
                <div className="App-project">
                    <h2>Project 3</h2>
                    <p>This is the content for project 3.</p>
                </div>
            </Fade>

            <Fade left>
                <div className="App-project">
                    <h2>Project 4</h2>
                    <p>This is the content for project 4.</p>
                </div>
            </Fade>
        </div>
    );
}
