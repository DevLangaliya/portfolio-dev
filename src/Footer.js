import React from "react";

export default function Footer() {
  return (
    <footer className="App-footer">
      <div style={{ textAlign: "center" }}>
        <div>
          <img src="./github.png" alt="Dev Langaliya" />
        </div>
        <a href="https://www.github.com/DevLangaliya" target="_blank" rel="noopener noreferrer">
           GitHub
        </a>
        <a href="https://www.linkedin.com/in/dev-langaliya" target="_blank" rel="noopener noreferrer">
          <img src="./linkedin.png" alt="Dev Langaliya" /> LinkedIn
        </a>
      </div>
    </footer>
  );
}
