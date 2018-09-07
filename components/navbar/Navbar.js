import React from "react";
import LinkList from "../link/LinkList";
import { homepageLinks } from "../../config";
import CircleLogo from "../common/icons/CircleLogo";
import "./Navbar.scss";

const Navbar = props => {
  return (
    <nav className="Navbar">
      <div className="center-vertically DIB pl15">
        <CircleLogo>LC</CircleLogo>
      </div>
      <LinkList links={homepageLinks} style={{ float: "right" }} />
    </nav>
  );
};

export default Navbar;
