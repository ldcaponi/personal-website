import React from "react";
import Link from "next/link";
import "./Breadcrumb.scss";

const Breadcrumb = ({ items }) => {
  return (
    <div className="Breadcrumb">
      {items.map((i, index) => (
        <div key={i.text} className="Breadcrumb_item">
          {!i.active && (
            <Link href={i.href}>
              <a>{i.text}</a>
            </Link>
          )}
          {i.active && <span>{i.text}</span>}
          {index !== items.length - 1 && (
            <span className="Breadcrumb_spacer">/</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
