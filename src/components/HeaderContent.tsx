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
      <div className="nav-buttons">
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
