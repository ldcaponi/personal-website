import React from "react";

const Tag = ({ children, style }) => {
  return (
    <div style={{ display: "inline-block", ...style }}>
      <div
        style={{
          padding: "5px 10px",
          backgroundColor: "dodgerblue",
          color: "white",
          marginRight: 8,
          marginBottom: 8
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Tag;
