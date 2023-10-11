import React from "react";

export default function Footer() {
  return (
    <footer className="App-footer">
      <div style={{ textAlign: "center" }}>
        <a href="https://www.github.com/DevLangaliya" target="_blank" rel="noopener noreferrer">
          <img src="./github.png" alt="Dev Langaliya" width="32" /> GitHub
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/dev-langaliya" target="_blank" rel="noopener noreferrer">
          <img src="./linkedin.png" alt="Dev Langaliya" width="32" /> LinkedIn
        </a>
      </div>
    </footer>
  );
}
