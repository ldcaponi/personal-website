import React from "react";
import "./Article.scss";

const Article = ({ children }) => {
  return <div className="markdown-body">{children}</div>;
};

export default Article;
