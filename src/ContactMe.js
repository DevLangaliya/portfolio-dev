import React from 'react';
import { Fade } from 'react-reveal';
import emptyIMG from './logos/empty.png';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'left', marginLeft:'83px' }}>
            <div className="contact">
                <h1 >Contact Me!</h1>
            </div>
            <img src={emptyIMG} alt="empty" width="100" />
            <Fade left>
                <div style={flexboxStyle}>
                    <a href="mailto:devl2@illinois.edu" style={{ fontFamily: 'Helvetica' }}>
                        Click to email me!
                    </a>
                </div>
            </Fade>
            <img src={emptyIMG} alt="empty" width="57.5" />
            <Fade left>
                <div style={flexboxStyle}>
                    <a href="https://www.linkedin.com/in/dev-langaliya" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Sans Serif' }}>
                        <img src="./linkedin.png" alt="Dev Langaliya" width="32" />
                    </a>
                </div>
            </Fade>
            <img src={emptyIMG} alt="empty" width="57.5" />
            <Fade left>
                <div style={flexboxStyle}>
                    <a href="https://www.github.com/DevLangaliya" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Helvetica' }}>
                        <img src="./github.png" alt="Dev Langaliya" width="32" />
                    </a>
                </div>
            </Fade>
            
        </div>
    );
};

const flexboxStyle = {
    display: 'flex',
    backgroundColor: '#F1FAFF',
    borderRadius: '15px',
    height: '100px',
    width: '310px',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
}

const headerStyle = {
    textAlign: 'center',
    
};

export default ContactMe;
