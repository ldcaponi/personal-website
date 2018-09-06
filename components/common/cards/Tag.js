import React from "react";

const Tag = ({ children }) => {
  return (
    <div
      style={{
        padding: "5px 10px",
        backgroundColor: "dodgerblue",
        color: "white",
        display: "inline-block",
        marginRight: 8,
        marginBottom: 8
      }}
    >
      {children}
    </div>
  );
};

export default Tag;
