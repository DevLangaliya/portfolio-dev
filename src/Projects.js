import React from 'react';
import './Projects.css';
import { Fade } from 'react-reveal';

export default function Projects() {
    return (
        <div className="App-projects-container">
            <Fade right>
                <div className="App-project">
                    <h2>Project 1</h2>
                    <p>This is the content for project 1.</p>
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
