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
        <div className="content">
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
          <span id="verticle-line-bottom"></span>
        </div>
      </header>
    </>
  );
}

export default Header;
