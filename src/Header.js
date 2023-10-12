import React from "react";
import Fade from 'react-reveal/Fade';
import './Header.css';

export default function Header() {
  return (
    <header className="App-header">
      <Fade bottom>
        <h1 className="title">Dev Langaliya</h1>
      </Fade>
    </header>
  );
}