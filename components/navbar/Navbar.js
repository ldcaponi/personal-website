import React from "react";
import LinkList from "../link/LinkList";
import { homepageLinks } from "../../config";
import "./Navbar.scss";

const Navbar = props => {
  return (
    <nav className="Navbar">
      <LinkList links={homepageLinks} style={{ float: "right" }} />
    </nav>
  );
};

export default Navbar;
