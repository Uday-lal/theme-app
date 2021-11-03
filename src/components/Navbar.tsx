import React from "react";
import "../styles/NavBar.css";

interface Link {
  title: string;
  url: string;
  isFocus: boolean;
}

function NavBar() {
  const links: Link[] = [
    { title: "Theme Info", url: "/", isFocus: false },
    {
      title: "Github",
      url: "https://github.com/codebushi/gatsby-starter-dimension",
      isFocus: false,
    },
    {
      title: "Create Site",
      url: "https://app.stackbit.com/create?theme=https://github.com/codebushi/gatsby-starter-dimension&ssg=gatsby&ref=jst&utm_source=jamstackthemes&utm_medium=referral&utm_campaign=custom_themes&utm_content=demo",
      isFocus: true,
    },
  ];

  return (
    <React.Fragment>
      <nav>
        <span className="nav-title">
          <a href="https://jamstackthemes.dev/">Jamstack theme</a>
        </span>
        <span className="nav-heading">
          <h1>Gatsby Starter Dimension</h1>
          <a href="https://jamstackthemes.dev/ssg/gatsby/">
            <img
              src="./assets/gatsby-icon.png"
              alt="gatsby-icon"
              width={20}
              height={20}
            />
          </a>
        </span>
        <span className="buttons">
          {links.map((link: Link) =>
            link.isFocus ? (
              <a
                href={link.url}
                key={links.indexOf(link)}
                className="focused"
                target="_blank"
              >
                {link.title}
              </a>
            ) : (
              <a href={link.url} key={links.indexOf(link)} target="_blank">
                {link.title}
              </a>
            )
          )}
        </span>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
