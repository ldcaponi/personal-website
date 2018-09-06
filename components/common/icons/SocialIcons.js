import React from "react";
import "./SocialIcons.scss";

const SocialIcons = props => {
  return (
    <div className="SocialIcons">
      <a
        href="https://www.linkedin.com/in/louis-caponi-339828a5/"
        target="_blank"
      >
        <img src="/static/images/linkedin.png" alt="linkedin" />
      </a>
      <a href="https://www.github.com/ldcaponi" target="_blank">
        <img src="/static/images/github.png" alt="linkedin" />
      </a>
    </div>
  );
};

export default SocialIcons;
