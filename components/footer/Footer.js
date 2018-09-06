import React from "react";
import { animateScroll } from "react-scroll";
import "./Footer.scss";

const Footer = props => {
  return (
    <div className="Footer">
      <div className="icons-container">
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

      <button
        className="button button-small"
        onClick={() => animateScroll.scrollToTop()}
      >
        Back to Top
      </button>
    </div>
  );
};

export default Footer;
