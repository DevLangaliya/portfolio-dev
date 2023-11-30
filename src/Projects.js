import React, { useState } from 'react';
import './Projects.css';
import ReactCardFlip from 'react-card-flip';

export default function Projects() {
    const flipDivStyle = {
        display: 'flex',
        backgroundColor: '#F1FAFF',
        borderRadius: '15px',
        height: '310px',
        width: '1085px',
        padding: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px' 
    };

    const titleDivStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1FAFF',
        borderRadius: '15px',
        height: '310px',
        width: '1085px',
        padding: '10px',
        marginBottom: '20px',
        fontSize: '20px'
    };

    const [flip1, setFlip1] = useState(false);
    const [flip2, setFlip2] = useState(false);
    const [flip3, setFlip3] = useState(false);

    return (
        <div className="App-projects-container" style={{"width": "1115px"}}>
            <div className='header' style={{ "backgroundColor":"black", "overflow":"hidden"}}>
                <h1 className='proj'>Projects</h1>
            </div>
            
            <ReactCardFlip isFlipped={flip1} flipDirection="vertical">
                <div className="App-project" style={titleDivStyle} onClick={() => setFlip1(!flip1)} onMouseEnter={() => console.log("SHOW TOOLTIP")}>
                    <h2 className='proj-name'>ShowMe!</h2>
                </div>
                <div className="App-project" style={flipDivStyle} onClick={() => setFlip1(!flip1)}>
                    <li className='proj-desc'>Collaborated with a team to create a movie recommendation web app, with data being pulled via the TMDB API.</li>
                    <li className='proj-desc'>Utilized cosine similarity to locate and display movies with similar genres and viewer ratings.</li>
                    <li className='proj-desc'>Implemented Flask in combination with React to form a intuitive front-end web page with Python.</li>
                </div>
            </ReactCardFlip>

            {/* <ReactCardFlip isFlipped={flip2} flipDirection="vertical">
                <div className="App-project" style={titleDivStyle} onClick={() => setFlip2(!flip2)} onMouseEnter={() => console.log("SHOW TOOLTIP")}>
                    <h2 className='proj-name'>Plant Classification using Transfer Learning</h2>
                </div>
                <div className="App-project" style={flipDivStyle} onClick={() => setFlip2(!flip2)}>
                    <li className='proj-desc'>Collaborated with a team to develop an application which classifies plants based on an already provided dataset.</li>
                    <li className='proj-desc'>Utilized transfer learning to set the foundation for our plant classification model.</li>
                </div>
            </ReactCardFlip> */}

            <ReactCardFlip isFlipped={flip3} flipDirection="vertical">
                <div className="App-project" style={titleDivStyle} onClick={() => setFlip3(!flip3)} onMouseEnter={() => console.log("SHOW TOOLTIP")}>
                    <h2 className='proj-name'>Java Dynasty Simulator</h2>
                </div>
                <div className="App-project" style={flipDivStyle} onClick={() => setFlip3(!flip3)}>
                   <li className='proj-desc'>American Football simulation game where the user manages an American Football team through a full season.</li>
                    <li className='proj-desc'>Watch games unfold during real time with a play-by-play of each team’s possessions in a new window.</li>
                    <li className='proj-desc'>Used statistical methods to show the cumulative stats for players across all games in a graphical window view.</li>
                </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip2} flipDirection="vertical">
                <div className="App-project" style={titleDivStyle} onClick={() => setFlip2(!flip2)} onMouseEnter={() => console.log("SHOW TOOLTIP")}>
                    <h2 className='proj-name'>Wheel Of Fortune</h2>
                </div>
                <div className="App-project" style={flipDivStyle} onClick={() => setFlip2(!flip2)}>
                    <li className='proj-desc'>Recreation of the popular TV show to be played by three players on a web browser.</li>
                    <li className='proj-desc'>Implemented a spinning wheel with various monetary values for the game using CSS.</li>
                    <li className='proj-desc'>Created an easy to follow and dynamic webpage using HTML.</li>
                </div>
            </ReactCardFlip>
        </div>
    );
}
