import React from "react";
import "./ShadowCard.scss";

const ShadowCard = ({ children, className }) => {
  return (
    <div className={`ShadowCard shadow ${className || ""}`}>{children}</div>
  );
};

export default ShadowCard;
