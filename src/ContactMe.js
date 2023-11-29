import React from 'react';

const ContactMe = () => {
    return (
        <div>
            <div className="header" style={{ textAlign: 'center', background: 'linear-gradient(to right, #FFD700, #FF8C00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                <h1 >Contact Me!</h1>
            </div>
            <div style={flexboxStyle}>
                <a href="mailto:devl2@illinois.edu" style={{ fontFamily: 'Helvetica' }}>
                    Click to email me!
                </a>
            </div>
            <div style={flexboxStyle}>
                <a href="https://www.linkedin.com/in/dev-langaliya" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Sans Serif' }}>
                    <img src="./linkedin.png" alt="Dev Langaliya" width="32" />
                </a>
            </div>
            <div style={flexboxStyle}>
                <a href="https://www.github.com/DevLangaliya" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Helvetica' }}>
                    <img src="./github.png" alt="Dev Langaliya" width="32" />
                </a>
            </div>
        </div>
    );
};

const flexboxStyle = {
    display: 'flex',
    backgroundColor: '#F1FAFF',
    borderRadius: '15px',
    height: '100px',
    width: '316px',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px'
}

export default ContactMe;
