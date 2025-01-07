import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      style={{ fontSize: "10px" }}
    >
      {children}
      {isVisible && (
        <div className="tooltip-text">
          <b>{text}</b>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
