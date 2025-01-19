import React from "react";
import "./CenteredName.css";

function CenteredName({ isNightMode }) {
  return (
    <div className={`typewriter ${isNightMode ? "night" : "day"}`}>
      Ganesh Gupta
    </div>
  );
}

export default CenteredName;
