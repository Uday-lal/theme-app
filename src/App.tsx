import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Article from "./components/Article";
import "./styles/App.css";

function App() {
  const buttons = ["intro", "work", "about", "contact"];
  const [introDisplay, setIntroDisplay] = useState("none");
  const [workDisplay, setWorkDisplay] = useState("none");
  const [aboutDislay, setAboutDisplay] = useState("none");
  const [contactDisplay, setContactDisplay] = useState("none");
  const [backgroundAnimation, setBackgroundAnimation] = useState(false);

  const handleClick = (name: string) => {
    console.log(name);
    setBackgroundAnimation(true);
  };

  return (
    <React.Fragment>
      <div className="App">
        <div id="visible-content">
          <NavBar />
          <div className="header-section">
            <Header />
            <div className="nav-buttons">
              {buttons.map((button: string) => (
                <button key={button} onClick={() => handleClick(button)}>
                  {button}
                </button>
              ))}
            </div>
          </div>
          <div className="footer-section">
            <footer>
              &#169; GATSBY STARTER - DIMENSION. DESIGN:
              <a href="#" className="hover-link">
                HTML5 UP
              </a>
              . BUILT WITH:
              <a href="#" className="hover-link">
                GATSBY.JS
              </a>
            </footer>
          </div>
        </div>
        <div id="articles">
          <Article title="intro" display={introDisplay}>
            <img src="./assets/pic01.jpg" alt="overlay" />
            <p>
              Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
              aliquam facilisis ante interdum congue. Integer mollis, nisl amet
              convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
              magna finibus nisi nec lacinia. Nam maximus erat id euismod
              egestas. By the way, check out my awesome work.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Etiam
              tristique libero eu nibh porttitor fermentum. Nullam venenatis
              erat id vehicula viverra. Nunc ultrices eros ut ultricies
              condimentum. Mauris risus lacus, blandit sit amet venenatis non,
              bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at,
              euismod in lectus. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. In non lorem sit
              amet elit placerat maximus. Pellentesque aliquam maximus risus,
              vel sed vehicula.
            </p>
          </Article>
        </div>
        {backgroundAnimation ? (
          <motion.div
            id="bg-img"
            animate={{ scale: 0.8 }}
            style={{
              backgroundImage: `url("./assets/bg.jpg")`,
              filter: "brightness(50%)",
            }}
          ></motion.div>
        ) : (
          <div
            id="bg-img"
            style={{
              backgroundImage: `url("./assets/bg.jpg")`,
              filter: "brightness(50%)",
            }}
          ></div>
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
