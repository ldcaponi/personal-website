import React from "react";

const CircleLogo = ({ children }) => {
  return (
    <div
      style={{
        fontSize: 20,
        height: 50,
        width: 50,
        display: "inline-block",
        backgroundColor: "white",
        borderRadius: "50%",
        color: "dodgerblue",
        position: "relative"
      }}
    >
      <div className="center-children">{children}</div>
    </div>
  );
};

export default CircleLogo;
