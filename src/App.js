import './App.css';
import Header from "./Header.js";
import AboutMe from "./AboutMe.js";
import Projects from "./Projects.js";
import Footer from "./Footer.js";

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
