import React from "react";
import Link from "./Link";
import "./LinkList.scss";

const LinkList = ({ links, style }) => {
  return (
    <ul className="LC_link-list" style={{ ...style }}>
      {links.map(i => (
        <li>
          <Link>{i.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
