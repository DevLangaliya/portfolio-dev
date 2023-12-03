import React, { useState } from 'react';
import './Projects.css';
import ReactCardFlip from 'react-card-flip';
import javaIMG from './logos/java.png';
import pythonIMG from './logos/python.png';
import flaskIMG from './logos/flask.png';
import htmlIMG from './logos/html.png';
import cssIMG from './logos/css.png';
import javascriptIMG from './logos/javascript.png';
import scikitIMG from './logos/scikit.png';
import pandasIMG from './logos/pandas.png';
import javaFXIMG from './logos/javafx.png';
import emptyIMG from './logos/empty.png';

export default function Projects() {
    const flipDivStyle = {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#F1FAFF',
        borderRadius: '15px',
        height: '310px',
        width: '1085px',
        padding: '10px',
        marginBottom: '20px',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const titleDivStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
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

    const doFlip1 = () => {
        setFlip1(!flip1);
    };

    const doFlip2 = () => {
        setFlip2(!flip2);
    };

    const doFlip3 = () => {
        setFlip3(!flip3);
    };

    return (
        <div className="App-projects-container" style={{ width: '1115px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1 className="project" style={{ fontSize: '50px', color: '#f0f0f0' }}>
                    My Projects
                </h1>
            </div>

            <ReactCardFlip isFlipped={flip1} flipDirection="vertical">
                <div className="App-project" style={titleDivStyle} onClick={doFlip1}>
                    <h2 className="proj-name">ShowMe!</h2>
                    <br />
                    <br />
                    <br />
                    <img src={emptyIMG} alt="empty" width="50" height="50" />
                    <img src={pythonIMG} alt="Python" width="50" height="50" />
                    <img src={flaskIMG} alt="Flask" width="50" height="50" />
                    <img src={scikitIMG} alt="scikit" width="92.7272" height="50" />
                    <img src={pandasIMG} alt="pandas" width="123.67" height="50" />
                    <img src={cssIMG} alt="css" width="50" height="50" />
                    <img src={htmlIMG} alt="html" width="50" height="50" />
                </div>
                <div className="App-project">
                    <div style={flipDivStyle} onClick={doFlip1}>
                        <li className="proj-desc">Collaborated with a team to create a movie recommendation web app, with data being pulled via the TMDB API.</li>
                        <li className="proj-desc">Utilized cosine similarity to locate and display movies with similar genres and viewer ratings.</li>
                        <li className="proj-desc">Implemented Flask in combination with React to form an intuitive front-end web page with Python.</li>
                    </div>
                </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip3} flipDirection="vertical">
                <div className="App-project" style={titleDivStyle} onClick={doFlip3}>
                    <h2 className="proj-name">Java Dynasty Simulator</h2>
                    <br />
                    <br />
                    <br />
                    <img src={emptyIMG} alt="empty" width="50" height="50" />
                    <img src={javaIMG} alt="java" width="80" height="50" />
                    <img src={javaFXIMG} alt="javafx" width="120" height="50" />
                </div>
                <div className="App-project" style={flipDivStyle} onClick={doFlip3}>
                    <li className="proj-desc">American Football simulation game where the user manages an American Football team through a full season.</li>
                    <li className="proj-desc">Watch games unfold during real time with a play-by-play of each team’s possessions in a new window.</li>
                    <li className="proj-desc">Used statistical methods to show the cumulative stats for players across all games in a graphical window view.</li>
                </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip2} flipDirection="vertical">
                <div className="App-project" style={titleDivStyle} onClick={doFlip2}>
                    <h2 className="proj-name">Wheel Of Fortune</h2>
                    <br />
                    <br />
                    <br />
                    <img src={emptyIMG} alt="empty" width="50" height="50" />
                    <img src={javascriptIMG} alt="java" width="50" height="50" />
                    <img src={htmlIMG} alt="html" width="50" height="50" />
                    <img src={cssIMG} alt="css" width="50" height="50" />
                </div>
                <div className="App-project" style={flipDivStyle} onClick={doFlip2}>
                    <li className="proj-desc">Recreation of the popular TV show to be played by three players on a web browser.</li>
                    <li className="proj-desc">Implemented a spinning wheel with various monetary values for the game using CSS.</li>
                    <li className="proj-desc">Created an easy to follow and dynamic webpage using HTML.</li>
                </div>
            </ReactCardFlip>
        </div>
    );
}
