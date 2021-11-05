import React from "react";
import CloseIcon from "./CloseIcon";
import { motion } from "framer-motion";
import "../styles/Article.css";

interface ArticleProps {
  title: string;
  onClose: () => void;
  animate: any;
  children?: React.ReactNode;
}

function Article(props: ArticleProps) {
  return (
    <React.Fragment>
      <motion.div
        className="article"
        id={props.title}
        style={{ display: "none" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        initial={{ opacity: 0, y: 30 }}
        animate={props.animate}
      >
        <CloseIcon onClick={props.onClose} />
        <div className="article-content">
          <h2 className="major">{props.title}</h2>
          <div className="a-content">{props.children}</div>
        </div>
      </motion.div>
    </React.Fragment>
  );
}

export default Article;
