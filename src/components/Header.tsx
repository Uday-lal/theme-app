import React from "react";
import "../styles/Header.css";
import { motion } from "framer-motion";

function Header() {
  return (
    <>
      <header>
        <span className="diamond">
          <img src="./assets/diamond.svg" alt="diamond-imgs" />
          <span id="varticle-line"></span>
        </span>
        <div id="header-content" className="content">
          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ padding: "0rem", y: 30, display: "none" }}
            animate={{ padding: "3rem 2rem", y: 0, display: "flex" }}
            className="inner"
          >
            <h2>Dimension</h2>
            <p>
              A fully responsive site template designed by
              <a href="#" className="hover-link">
                HTML5 UP
              </a>
              and released
              <br />
              for free under the
              <a href="#" className="hover-link">
                Creative Commons
              </a>
              license.
            </p>
          </motion.div>
        </div>
      </header>
    </>
  );
}

export default Header;
