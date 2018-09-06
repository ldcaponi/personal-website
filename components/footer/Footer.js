import React from "react";
import { animateScroll } from "react-scroll";
import SocialIcons from "../common/icons/SocialIcons";
import "./Footer.scss";

const Footer = props => {
  return (
    <div className="Footer">
      <div className="icons-container">
        <SocialIcons />
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
