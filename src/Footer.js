import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="App-footer">
      <div className="footerLinks" style={{ textAlign: "center" }}>
        <a href="https://www.github.com/DevLangaliya" target="_blank" rel="noopener noreferrer">
          <img src="./github.png" alt="Dev Langaliya" width="32" />
        </a>
        <a href="https://www.linkedin.com/in/dev-langaliya" target="_blank" rel="noopener noreferrer">
          <img src="./linkedin.png" alt="Dev Langaliya" width="32" />
        </a>
      </div>
    </footer>
  );
}
