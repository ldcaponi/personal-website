import React from "react";
import Link from "./Link";
import "./LinkList.scss";
import { Link as ScrollLink } from "react-scroll";

const LinkList = ({ links, style }) => {
  return (
    <ul className="LC_link-list" style={{ ...style }}>
      {links.map(i => (
        <li key={i.text}>
          <ScrollLink to={i.scrollTo} smooth>
            <Link>{i.text}</Link>
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
