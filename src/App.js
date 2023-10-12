import './App.css';
import Header from "./scripts/Header.js";
import AboutMe from "./scripts/AboutMe.js";
import Projects from "./scripts/Projects.js";
import Footer from "./scripts/Footer.js";

function App() {

  return (
    <div id="main-div">
      <div id="main-first-connect">
        <Header />     
        <AboutMe />
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
