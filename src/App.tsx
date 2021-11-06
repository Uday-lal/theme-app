import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "./components/Navbar";
import Article from "./components/Article";
import HeaderContent from "./components/HeaderContent";
import "./styles/App.css";

function App() {
  const [backgroundAnimation, setbackgroundAnimation] = useState({});
  const [footerAnimation, setFooterAnimation] = useState({});
  const [articleAnimation, setArticleAnimation] = useState({});
  const [currentArticle, setCurrentArticle] = useState("");

  const handleClick = (name: string) => {
    const bg = document.getElementById("bg-img");
    const articles = document.getElementById("articles");
    const article = document.getElementById(name);
    if (bg && articles && article) {
      bg.id = "bg-img-open";
      articles.style.display = "flex";
      setbackgroundAnimation({
        opacity: 0,
        scale: 0.95,
        transitionEnd: { display: "none" },
      });
      setFooterAnimation({
        opacity: 0,
        scale: 0.95,
        y: 8,
        transitionEnd: { display: "none" },
      });
      article.style.display = "block";
      setArticleAnimation({ opacity: 1, y: 0 });
      setCurrentArticle(name);
    }
  };

  const reset = () => {
    const bg = document.getElementById("bg-img-open");
    const articles = document.getElementById("articles");
    const article = document.getElementById(currentArticle);
    if (bg && articles && article) {
      setArticleAnimation({
        y: 30,
        opacity: 0,
      });
      setTimeout(() => {
        bg.id = "bg-img";
        setbackgroundAnimation({
          opacity: 1,
          scale: 1,
          transitionEnd: { display: "flex" },
        });
        setFooterAnimation({
          opacity: 1,
          scale: 1,
          y: 1,
          transitionEnd: { display: "block" },
        });
        articles.style.display = "none";
        article.style.display = "none";
      }, 500);
    }
  };

  return (
    <React.Fragment>
      <div className="App">
        <NavBar />
        <motion.div
          transition={{ duration: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          id="visible-content"
        >
          <motion.div
            transition={{ duration: 0.3 }}
            animate={backgroundAnimation}
            className="header-section"
          >
            <HeaderContent handleClick={handleClick} />
          </motion.div>
          <div className="footer-section">
            <motion.footer
              transition={{ duration: 0.3 }}
              animate={footerAnimation}
            >
              &#169; GATSBY STARTER - DIMENSION. DESIGN:
              <a href="#" className="hover-link">
                HTML5 UP
              </a>
              . BUILT WITH:
              <a href="#" className="hover-link">
                GATSBY.JS
              </a>
            </motion.footer>
          </div>
        </motion.div>
        <div id="articles" style={{ display: "none" }}>
          <Article title="intro" animate={articleAnimation} onClose={reset}>
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
          <Article title="work" animate={articleAnimation} onClose={reset}>
            <img src="./assets/pic01.jpg" alt="overlay" />
            <p>
              Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
              at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
              urna nisi, fringila lorem et vehicula lacinia quam. Integer
              sollicitudin mauris nec lorem luctus ultrices.
            </p>
            <p>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
              Pellentesque condimentum sem. In efficitur ligula tate urna.
              Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
              Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
              tempus.
            </p>
          </Article>
          <Article title="about" animate={articleAnimation} onClose={reset}>
            <img src="./assets/pic01.jpg" alt="overlay" />
            <p>
              Lorem ipsum dolor sit amet, consectetur et adipiscing elit.
              Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac.
              Aliquam erat volutpat. Praesent urna nisi, fringila lorem et
              vehicula lacinia quam. Integer sollicitudin mauris nec lorem
              luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum
              primis in faucibus. Cras viverra ligula sit amet ex mollis mattis
              lorem ipsum dolor sit amet.
            </p>
          </Article>
          <Article title="contact" animate={articleAnimation} onClose={reset}>
            <form>
              <div className="name-email">
                <div className="input-sec">
                  <label htmlFor="name">Name</label>
                  <br />
                  <input type="text" id="name" className="input" />
                </div>
                <div className="input-sec">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input type="email" id="email" className="input" />
                </div>
              </div>
              <div className="input-sec">
                <label htmlFor="message">Message</label>
                <div className="message-input">
                  <textarea
                    className="input"
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                  ></textarea>
                </div>
              </div>
              <div className="input-sec">
                <button className="input-button focus">
                  <b>send message</b>
                </button>
                <button className="input-button">
                  <b>reset </b>
                </button>
              </div>
            </form>
          </Article>
        </div>
        <motion.div
          id="bg-img"
          transition={{ duration: 1 }}
          initial={{ filter: "brightness(0%)" }}
          animate={{ filter: "brightness(50%)" }}
          style={{
            backgroundImage: `url("./assets/bg.jpg")`,
            filter: "brightness(50%)",
          }}
        ></motion.div>
      </div>
    </React.Fragment>
  );
}

export default App;
