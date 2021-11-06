import React from "react";
import Header from "./Header";

interface HeaderContentProps {
  handleClick: (button: string) => void;
}

function HeaderContent(props: HeaderContentProps) {
  const buttons = ["intro", "work", "about", "contact"];
  return (
    <React.Fragment>
      <Header />
      <div className="nav-buttons" style={{ position: "relative" }}>
        <span
          id="verticle-line-bottom"
          style={{
            backgroundColor: "white",
            height: "calc(3.5rem + 1px)",
            width: "1px",
            position: "absolute",
            left: "50%",
            top: "calc(-1 * (3.5rem + 1px))",
          }}
        ></span>

        {buttons.map((button: string) => (
          <button key={button} onClick={() => props.handleClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </React.Fragment>
  );
}

export default HeaderContent;
