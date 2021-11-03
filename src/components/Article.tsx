import React from "react";
import CloseIcon from "./CloseIcon";
import "../styles/Article.css";

interface ArticleProps {
  title: string;
  display: string;
  children?: React.ReactNode;
}

function Article(props: ArticleProps) {
  return (
    <div className="article" style={{ display: props.display }}>
      <CloseIcon />
      <div className="article-content">
        <h2 className="major">{props.title}</h2>
        <div className="a-content">{props.children}</div>
      </div>
    </div>
  );
}

export default Article;
