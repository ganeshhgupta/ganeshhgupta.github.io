import React from "react";
import "./CenteredName.css";

function CenteredName({ nightMode, isSmallScreen }) {
  return (
    <div
      className={`typewriter ${nightMode ? "night" : "day"} ${
        isSmallScreen ? "small-screen" : ""
      }`}
    >
      Ganesh Gupta
    </div>
  );
}

export default CenteredName;
