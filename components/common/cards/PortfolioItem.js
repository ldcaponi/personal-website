import React from "react";
import "./PortfolioItem.scss";

const PortfolioItem = ({ title, description, tags, onClick }) => {
  return (
    <div className="PortfolioItem" onClick={onClick}>
      <h2>{title}</h2>
      <p>{description}</p>
      {tags.map(i => <div className="tag">{i}</div>)}
    </div>
  );
};

export default PortfolioItem;
